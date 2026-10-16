import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#18191B]/95 backdrop-blur-md border-b border-[#414247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in Cormorant Garamond) */}
        <a
          href="#top"
          onClick={() => handleLinkClick('#top')}
          className="font-heading text-2xl sm:text-3xl font-semibold tracking-wide text-[#F5F5F5] hover:text-[#BFC3C9] transition-colors whitespace-nowrap shrink-0"
        >
          Snehil Kashyap
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A6A7AB]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#BFC3C9]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (Silver background with dark-grey text) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#18191B] bg-[#BFC3C9] hover:bg-white rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-md text-[#BFC3C9] hover:text-white bg-[#222326] border border-[#414247] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#222326] border-b border-[#414247] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-2 text-base font-medium text-[#A6A7AB] hover:text-[#F5F5F5] hover:bg-[#2B2C30] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#18191B] bg-[#BFC3C9] hover:bg-white rounded-md transition-colors"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
