import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Top bar with government branding - Dark Navy */}
      <div className="bg-[#0B1F3F] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2.5">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <i className="fas fa-landmark"></i>
              <span className="font-medium">Republic of the Philippines</span>
              <i className="fas fa-balance-scale ml-2"></i>
              <span>Department of Justice</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+6285259406" className="hover:text-yellow-400 flex items-center gap-2 transition-colors">
                <i className="fas fa-phone"></i>
                (02) 8525-9406
              </a>
              <a href="mailto:info@nbi.gov.ph" className="hover:text-yellow-400 flex items-center gap-2 transition-colors">
                <i className="fas fa-envelope mt-0.5"></i>
                info@nbi.gov.ph
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with logo */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center gap-4">
              {/* NBI Seal */}
              <div className="w-20 h-20 relative flex-shrink-0">
                <Image
                  src="/nbilogo.jpg"
                  alt="NBI Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl md:text-2xl text-[#003B7A] tracking-wider">
                  NATIONAL BUREAU OF INVESTIGATION
                </h1>
                <p className="text-red-600 text-sm font-semibold">
                  CLEARANCE PROCESSING SYSTEM
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative inline-block">
                Home
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-600"></span>
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/branches" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Branches
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                FAQs
              </Link>
              <Link
                href="/authenticate"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden text-gray-700">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
