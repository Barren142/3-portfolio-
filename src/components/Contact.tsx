import React, { useState } from 'react';
import { Mail, Phone, Github, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  const generateMailtoLink = () => {
    const encodedSubject = encodeURIComponent(subject || 'Portfolio Inquiry / Collaboration');
    const encodedBody = encodeURIComponent(
      `Hello Snehil,\n\n${message || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${name || 'Visitor'}`
    );
    return `mailto:${CONTACT_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#18191B] border-t border-[#414247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#BFC3C9] font-medium block mb-2">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-base text-[#A6A7AB] font-body leading-relaxed">
            Whether you have questions about my projects, wish to collaborate on technology, or explore opportunities, my inbox is always open.
          </p>
        </div>

        {/* 3 Prominent Functional Buttons as Specified */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          {/* Primary Button: Email Me */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#18191B] bg-[#BFC3C9] hover:bg-white rounded-md transition-colors min-h-[50px] shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#18191B]" />
            <span>Email Me</span>
          </a>

          {/* Secondary Button: Call Me */}
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#222326] border border-[#BFC3C9] hover:border-white hover:text-white rounded-md transition-colors min-h-[50px]"
          >
            <Phone className="w-4 h-4 text-[#BFC3C9]" />
            <span>Call Me</span>
          </a>

          {/* Secondary Button: Visit GitHub */}
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#222326] border border-[#BFC3C9] hover:border-white hover:text-white rounded-md transition-colors min-h-[50px]"
          >
            <Github className="w-4 h-4 text-[#BFC3C9]" />
            <span>Visit GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#BFC3C9]" />
          </a>
        </div>

        {/* Two-Column Grid: Contact Information & Direct Message Draft */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Contact Details with Copy Actions */}
          <div className="lg:col-span-5 bg-[#2B2C30] border border-[#414247] rounded-xl p-6 sm:p-8 space-y-6">
            <h3 className="font-heading text-2xl font-bold text-[#F5F5F5] pb-4 border-b border-[#414247]">
              Contact Channels
            </h3>

            {/* Email Item */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#BFC3C9] font-medium">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  Email Address
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                  className="flex items-center gap-1 text-[11px] text-[#A6A7AB] hover:text-[#F5F5F5]"
                  title="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-[#BFC3C9]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm sm:text-base font-medium text-[#F5F5F5] hover:text-[#BFC3C9] transition-colors break-all block"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Phone Item */}
            <div className="space-y-1 pt-4 border-t border-[#414247]">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#BFC3C9] font-medium">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Phone Number
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                  className="flex items-center gap-1 text-[11px] text-[#A6A7AB] hover:text-[#F5F5F5]"
                  title="Copy phone number"
                >
                  {copiedItem === 'phone' ? (
                    <>
                      <Check className="w-3 h-3 text-[#BFC3C9]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="text-sm sm:text-base font-medium text-[#F5F5F5] hover:text-[#BFC3C9] transition-colors block"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            {/* GitHub Item */}
            <div className="space-y-1 pt-4 border-t border-[#414247]">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#BFC3C9] font-medium">
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository Profile
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.github, 'github')}
                  className="flex items-center gap-1 text-[11px] text-[#A6A7AB] hover:text-[#F5F5F5]"
                  title="Copy GitHub link"
                >
                  {copiedItem === 'github' ? (
                    <>
                      <Check className="w-3 h-3 text-[#BFC3C9]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-medium text-[#F5F5F5] hover:text-[#BFC3C9] transition-colors break-all block"
              >
                {CONTACT_INFO.github.replace('https://', '')}
              </a>
            </div>

            {/* Academic Credential Note */}
            <div className="pt-4 border-t border-[#414247] text-xs text-[#A6A7AB]">
              <span className="text-[#BFC3C9] font-medium">B.Tech First Year</span> · Computer Science & Data Science
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-[#2B2C30] border border-[#414247] rounded-xl p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#F5F5F5] mb-1">
                Draft a Quick Message
              </h3>
              <p className="text-xs text-[#A6A7AB]">
                Compose your message here to launch directly in your default mail application.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#BFC3C9] font-medium mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Sharma"
                  className="w-full bg-[#18191B] border border-[#414247] rounded-md px-4 py-2.5 text-sm text-[#F5F5F5] placeholder-[#A6A7AB]/60 focus:outline-none focus:border-[#BFC3C9]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-[#BFC3C9] font-medium mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Inquiring about web development / collaboration"
                  className="w-full bg-[#18191B] border border-[#414247] rounded-md px-4 py-2.5 text-sm text-[#F5F5F5] placeholder-[#A6A7AB]/60 focus:outline-none focus:border-[#BFC3C9]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#BFC3C9] font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your note or project inquiry here..."
                  className="w-full bg-[#18191B] border border-[#414247] rounded-md px-4 py-2.5 text-sm text-[#F5F5F5] placeholder-[#A6A7AB]/60 focus:outline-none focus:border-[#BFC3C9] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={generateMailtoLink()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#18191B] bg-[#BFC3C9] hover:bg-white rounded-md transition-colors min-h-[44px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const textToCopy = `To: ${CONTACT_INFO.email}\nSubject: ${subject || 'Inquiry'}\n\n${message}\n- ${name || 'Visitor'}`;
                    handleCopy(textToCopy, 'draft');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#222326] border border-[#414247] hover:border-[#BFC3C9] rounded-md transition-colors min-h-[44px]"
                >
                  {copiedItem === 'draft' ? (
                    <>
                      <Check className="w-4 h-4 text-[#BFC3C9]" />
                      <span>Message Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#BFC3C9]" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
