"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { regions } from "@/components/Branches/RegionList";

type DayStatus = "available" | "unavailable";

export default function Scheduler() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const today = useMemo(() => new Date(2025, 10, 1), []); // November 2025 baseline to match mock
  const monthDate = useMemo(() => {
    const base = new Date(today);
    base.setMonth(base.getMonth() + monthOffset);
    return base;
  }, [today, monthOffset]);

  const availability: Record<string, DayStatus> = {
    "2025-11-25": "available",
  };

  const days = useMemo(() => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startWeekday = firstDay.getDay(); // 0 Sunday
    const totalDays = new Date(year, month + 1, 0).getDate();

    const grid: Array<{ label: number; dateKey: string; status: DayStatus }> = [];
    for (let i = 1; i <= totalDays; i++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      grid.push({
        label: i,
        dateKey,
        status: availability[dateKey] ?? "unavailable",
      });
    }
    return { grid, startWeekday };
  }, [monthDate]);

  const handleSelect = (dateKey: string, status: DayStatus) => {
    if (!selectedBranch || status !== "available") return;
    setSelectedDate(dateKey);
  };

  return (
    <section className="bg-[#F5F7FB] py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6">
          <h2 className="text-2xl font-bold text-[#0B2C5A] mb-2">Schedule Appointment</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Select a date and time slot for your new NBI Clearance appointment.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6 space-y-4">
          <h3 className="text-lg font-bold text-[#0B2C5A]">Select NBI Branch</h3>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              NBI Branch <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2C5A]/30"
              value={selectedBranch}
              onChange={(event) => setSelectedBranch(event.target.value)}
            >
              <option value="">Select NBI Branch</option>
              {regions.flatMap((region) =>
                region.branches.map((branch) => (
                  <option key={`${region.region}-${branch.name}`} value={`${branch.name} (${region.region})`}>
                    {branch.name} — {region.region}
                  </option>
                ))
              )}
            </select>
            <p className="text-xs text-gray-500">You must appear in person at this branch on your scheduled date and time.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl border border-gray-100 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#0B2C5A]">Select Appointment Date</h3>
          </div>

          {!selectedBranch && (
            <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg text-sm">
              <i className="fas fa-exclamation-circle"></i>
              <span>Please select an NBI branch first to view available schedules.</span>
            </div>
          )}

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
              <button
                type="button"
                onClick={() => setMonthOffset((v) => v - 1)}
                className="px-3 py-1 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 transition-colors"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <span>
                {monthDate.toLocaleString("default", { month: "long" })} {monthDate.getFullYear()}
              </span>
              <button
                type="button"
                onClick={() => setMonthOffset((v) => v + 1)}
                className="px-3 py-1 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 transition-colors"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="py-2">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {Array.from({ length: days.startWeekday }).map((_, idx) => (
                <div key={`pad-${idx}`} className="h-12"></div>
              ))}
              {days.grid.map((day) => {
                const isSelected = selectedDate === day.dateKey;
                const isAvailable = day.status === "available";
                return (
                  <button
                    key={day.dateKey}
                    type="button"
                    onClick={() => handleSelect(day.dateKey, day.status)}
                    className={`h-14 rounded-lg border text-sm flex flex-col items-center justify-center transition-colors ${
                      isAvailable
                        ? isSelected
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-green-50 text-green-900 border-green-200 hover:border-green-400"
                        : "bg-red-50 text-red-500 border-red-200 cursor-not-allowed"
                    }`}
                    disabled={!isAvailable || !selectedBranch}
                  >
                    <span className="font-semibold">{day.label}</span>
                    <span className="text-[10px]">{isAvailable ? "Available" : "N/A"}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                Available
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                Not available
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href={selectedBranch && selectedDate ? "/apply#schedule" : "#"}
              className={`px-5 py-3 rounded-lg font-semibold text-white ${
                selectedBranch && selectedDate ? "bg-[#0B2C5A] hover:bg-[#0d2f63]" : "bg-gray-300 cursor-not-allowed"
              } transition-colors`}
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
