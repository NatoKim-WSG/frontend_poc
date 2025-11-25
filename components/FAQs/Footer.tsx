import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3F] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-yellow-400 font-semibold text-base mb-3 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></div>
            </h3>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  About NBI
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  Branch Locator
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold text-base mb-3 relative inline-block">
              Services
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></div>
            </h3>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link href="/faqs#new" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  New NBI Clearance
                </Link>
              </li>
              <li>
                <Link href="/faqs#renewal" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  Renewal
                </Link>
              </li>
              <li>
                <Link href="/faqs#international" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  International Services
                </Link>
              </li>
              <li>
                <Link href="/faqs#fees" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  Payment Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold text-base mb-3 relative inline-block">
              Resources
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></div>
            </h3>
            <ul className="space-y-2 mt-4 text-sm">
              <li>
                <Link href="/faqs#apply" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  How to Apply
                </Link>
              </li>
              <li>
                <Link href="/faqs#ids" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  ID Requirements
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-yellow-400 hover:translate-x-1 transition-all inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold text-base mb-3 relative inline-block">
              Contact Us
              <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></div>
            </h3>
            <ul className="space-y-3 mt-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-yellow-400 mt-1"></i>
                <span className="text-sm">
                  NBI Building, Taft Avenue,
                  <br />
                  Ermita, Manila, Philippines 1000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-yellow-400 mt-1"></i>
                <div className="text-sm">
                  <a href="tel:+6285259406" className="hover:text-yellow-400 transition-colors block">
                    (02) 8525-9406 / (02) 8523-8231
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-yellow-400 mt-1"></i>
                <a href="mailto:info@nbi.gov.ph" className="hover:text-yellow-400 transition-colors text-sm">
                  info@nbi.gov.ph
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-clock text-yellow-400 mt-1"></i>
                <span className="text-sm">Monday-Friday: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>

            <div className="mt-4">
              <div className="flex gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <i className="fab fa-twitter text-sm"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <i className="fab fa-youtube text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-6 border-t border-blue-900">
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 relative">
              <Image src="/nbilogo_nobg.png" alt="NBI Logo" fill className="object-contain" />
            </div>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-xs leading-relaxed font-normal">
            National Bureau of Investigation (NBI) - An attached agency of the Department of Justice (DOJ) responsible
            for handling and solving major and high-profile cases in the Philippines.
          </p>
        </div>

        <div className="text-center pt-4 border-t border-blue-900">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} National Bureau of Investigation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
