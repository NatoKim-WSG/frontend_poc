"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    if (!isLoggingOut) return;
    const timeout = setTimeout(() => {
      router.push("/apply#existing");
    }, 1400);
    return () => clearTimeout(timeout);
  }, [isLoggingOut, router]);

  return (
    <>
      <div className="bg-[#0B1F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <i className="fas fa-landmark"></i>
            <span className="font-medium">Republic of the Philippines</span>
            <i className="fas fa-scale-balanced ml-2"></i>
            <span>Department of Justice</span>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="tel:+6285259406" className="hover:text-yellow-400 flex items-center gap-2 transition-colors">
              <i className="fas fa-phone"></i>
              (02) 8525-9406
            </a>
            <a href="mailto:info@nbi.gov.ph" className="hover:text-yellow-400 flex items-center gap-2 transition-colors">
              <i className="fas fa-envelope"></i>
              info@nbi.gov.ph
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image src="/nbilogo_nobg.png" alt="NBI Logo" fill className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl md:text-2xl text-[#003B7A] tracking-wide">
                  NATIONAL BUREAU OF INVESTIGATION
                </h1>
                <p className="text-red-600 text-sm font-semibold">CLEARANCE PROCESSING SYSTEM</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Notifications"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#0B2C5A] hover:border-[#0B2C5A] transition-colors"
              >
                <i className="fas fa-bell"></i>
              </button>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0B2C5A] text-white flex items-center justify-center font-semibold">
                    CJ
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800 leading-tight">CHRISTIAN JOSE</p>
                    <p className="text-xs text-gray-500 leading-tight">xtianjose02@gmail.com</p>
                  </div>
                  <i className={`fas fa-chevron-${showMenu ? "up" : "down"} text-gray-500`}></i>
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="px-4 py-3">
                      <p className="text-sm font-semibold text-gray-800">CHRISTIAN JOSE</p>
                      <p className="text-xs text-gray-500">xtianjose02@gmail.com</p>
                    </div>
                    <div className="border-t border-gray-100">
                      <button
                        type="button"
                        onClick={() => {
                          setIsLoggingOut(true);
                          closeMenu();
                        }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-semibold text-left"
                      >
                        <i className="fas fa-right-from-bracket"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {isLoggingOut && (
        <div className="fixed bottom-6 right-6 bg-white border border-gray-200 shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 text-sm text-gray-700 z-50">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <div>
            <p className="font-semibold text-gray-900">Logging out...</p>
            <p className="text-gray-500">Redirecting to Existing User login</p>
          </div>
        </div>
      )}
    </>
  );
}
