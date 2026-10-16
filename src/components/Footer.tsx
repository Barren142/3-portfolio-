import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18191B] border-t border-[#414247] py-12 text-[#A6A7AB] font-body text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#414247]">
          {/* Wordmark and Academic Specialty */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-heading text-2xl font-bold text-[#F5F5F5]">
              {CONTACT_INFO.name}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-[#414247]">/</span>
            <span className="text-xs uppercase tracking-wider text-[#BFC3C9]">
              B.Tech Computer Science (Data Science)
            </span>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-medium">
            <a href="#about" className="hover:text-[#F5F5F5] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#F5F5F5] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#F5F5F5] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#F5F5F5] transition-colors">
              Contact
            </a>
          </nav>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded border border-[#414247] hover:border-[#BFC3C9] text-[#A6A7AB] hover:text-[#F5F5F5] transition-colors text-xs"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar: Copyright and Integrity Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6A7AB]/80 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.
          </p>
          <p>
            Designed with dark-grey and silver discipline. Focused on practical engineering.
          </p>
        </div>
      </div>
    </footer>
  );
};
