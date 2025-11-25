"use client";

import Link from "next/link";
import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";

const inputClasses =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm uppercase placeholder:normal-case focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none";
const emailInputClasses =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder:normal-case focus:border-[#0B2C5A] focus:ring-2 focus:ring-[#0B2C5A]/20 outline-none";

const suffixOptions = ["N/A", "Jr", "Sr", "II", "III", "IV", "V"];
const citizenshipOptions = ["Filipino", "Dual Citizenship", "Others"];
const genderOptions = ["Male", "Female"];
const civilStatusOptions = ["Single", "Married", "Widowed", "Separated", "Divorced"];
const educationOptions = [
  "Elementary Graduate",
  "High School Graduate",
  "Vocational/Technical Course Graduate",
  "College Undergraduate",
  "College Graduate",
  "Post Graduate",
];
const religionOptions = [
  "None/Prefer Not to Say",
  "Aglipayan",
  "Bible Baptist Church",
  "Buddhist",
  "Evangelical",
  "Jehovah's Witness",
  "Iglesia Ni Cristo",
  "Islam",
  "Other Christian Denomination",
  "Protestant",
  "Roman Catholic",
  "Seventh Day Adventist",
  "United Church of Christ",
  "Others",
];

export default function ProfileForm() {
  const [birthDate, setBirthDate] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [otherCitizenship, setOtherCitizenship] = useState("");
  const [religion, setReligion] = useState("");
  const [otherReligion, setOtherReligion] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleBirthDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = event.target.value.replace(/\D/g, "").slice(0, 8);
    const withHyphens =
      digitsOnly.length >= 7
        ? `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(4, 6)}-${digitsOnly.slice(6, 8)}`
        : digitsOnly.length >= 5
          ? `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(4, 6)}`
          : digitsOnly;
    setBirthDate(withHyphens);
  };

  const handleCitizenshipChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCitizenship(value);
    if (value !== "others") setOtherCitizenship("");
  };

  const handleReligionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setReligion(value);
    if (value !== "others") setOtherReligion("");
  };

  const handleMobileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, "");
    const normalized = digits.startsWith("0") ? `9${digits.slice(1)}` : digits;
    setMobileNumber(normalized.slice(0, 10));
  };

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#0B2C5A]">Personal Information</h3>
              <span className="text-sm text-gray-500">Fields marked with * are required</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="Enter your first name" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Middle Name</label>
                <input type="text" className={inputClasses} placeholder="Enter your middle name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="Enter your last name" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Suffix</label>
                <select className={inputClasses} defaultValue="N/A">
                  {suffixOptions.map((suffix) => (
                    <option key={suffix} value={suffix}>
                      {suffix}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Birth Date (YYYY-MM-DD) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  placeholder="YYYY-MM-DD"
                  className={inputClasses}
                  required
                  value={birthDate}
                  onChange={handleBirthDateChange}
                  maxLength={10}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Birth Place <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="City / Municipality" required />
                <p className="text-xs text-gray-500 mt-1">City / Municipality</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Citizenship <span className="text-red-500">*</span>
                </label>
                <select
                  className={inputClasses}
                  value={citizenship}
                  onChange={handleCitizenshipChange}
                  required
                >
                  <option value="" disabled>
                    Select citizenship
                  </option>
                  {citizenshipOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
                {citizenship === "others" && (
                  <input
                    type="text"
                    className={`${inputClasses} mt-3`}
                    placeholder="Please specify citizenship"
                    value={otherCitizenship}
                    onChange={(event) => setOtherCitizenship(event.target.value)}
                    required
                  />
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select className={inputClasses} defaultValue="" required>
                  <option value="" disabled>
                    Select gender
                  </option>
                  {genderOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Civil Status <span className="text-red-500">*</span>
                </label>
                <select className={inputClasses} defaultValue="" required>
                  <option value="" disabled>
                    Select civil status
                  </option>
                  {civilStatusOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
            <h3 className="text-xl font-bold text-[#0B2C5A]">Contact Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input type="email" className={emailInputClasses} placeholder="your@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="px-3 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-sm text-gray-700">
                    +63
                  </span>
                  <input
                    type="tel"
                    className={`${inputClasses} rounded-l-none`}
                    placeholder="9XX XXX XXXX"
                    required
                    value={mobileNumber}
                    inputMode="numeric"
                    onChange={handleMobileChange}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Region <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="Enter your region" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Province <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="Enter your province" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  City / Municipality <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="Enter your city" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Barangay <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="Enter your barangay" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Postal Code <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="0000" required />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="House No., Street" required />
              </div>
              <div className="md:col-span-3">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Landmark (Optional)</label>
                <input type="text" className={inputClasses} placeholder="Nearest landmark" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
            <h3 className="text-xl font-bold text-[#0B2C5A]">Family Background</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">Father&apos;s Information</h4>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Father&apos;s Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className={inputClasses} placeholder="First Name Middle Name Last Name" required />
                  <p className="text-xs text-gray-500 mt-1">First Name Middle Name Last Name</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Father&apos;s Birth Place <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className={inputClasses} placeholder="City / Municipality" required />
                  <p className="text-xs text-gray-500 mt-1">City / Municipality</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">Mother&apos;s Information</h4>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Mother&apos;s Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={inputClasses}
                    placeholder="Use maiden name (surname before marriage)"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Use maiden name (surname before marriage)</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Mother&apos;s Birth Place <span className="text-red-500">*</span>
                  </label>
                  <input type="text" className={inputClasses} placeholder="City / Municipality" required />
                  <p className="text-xs text-gray-500 mt-1">City / Municipality</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
            <h3 className="text-xl font-bold text-[#0B2C5A]">Other Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Educational Attainment <span className="text-red-500">*</span>
                </label>
                <select className={inputClasses} defaultValue="" required>
                  <option value="" disabled>
                    Select education level
                  </option>
                  {educationOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Occupation <span className="text-red-500">*</span>
                </label>
                <input type="text" className={inputClasses} placeholder="Enter your occupation" required />
              </div>
            </div>
            <div className="md:w-1/2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Religion <span className="text-red-500">*</span>
              </label>
              <select
                className={inputClasses}
                value={religion}
                onChange={handleReligionChange}
                required
              >
                <option value="" disabled>
                  Select religion
                </option>
                {religionOptions.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
              {religion === "others" && (
                <input
                  type="text"
                  className={`${inputClasses} mt-3`}
                  placeholder="Please specify religion"
                  value={otherReligion}
                  onChange={(event) => setOtherReligion(event.target.value)}
                  required
                />
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input type="checkbox" className="mt-1 h-4 w-4" required />
                <span>
                  I declare that the information provided is true and correct <span className="text-red-500">*</span>
                </span>
              </label>
              <p className="text-xs text-gray-500 md:ml-7">
                I understand that providing false information is punishable by law and may result in the denial of my NBI
                Clearance application.
              </p>
            </div>
            <Link
              href="/user-profile"
              className="bg-[#0B2C5A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0d2f63] transition-colors inline-flex items-center justify-center gap-2 shadow"
            >
              Save Profile <i className="fas fa-check"></i>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
