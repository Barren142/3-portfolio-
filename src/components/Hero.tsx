import React from 'react';
import { ArrowDown, Mail, Code2, Database, Bot, Cpu } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle / Academic Credential */}
        <div className="mb-4 flex items-center gap-3 text-xs sm:text-sm tracking-widest uppercase font-medium text-[#A6A7AB]">
          <span>{CONTACT_INFO.role}</span>
          <span aria-hidden="true" className="text-[#414247]">/</span>
          <span className="text-[#BFC3C9]">{CONTACT_INFO.specialization}</span>
        </div>

        {/* Hero Grid: Typography on Left, Structural Monograph Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Typographic Column */}
          <div className="lg:col-span-7">
            {/* Name: Cormorant Garamond, Large, Bold & Striking */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F5] leading-none mb-6">
              {CONTACT_INFO.name}
            </h1>

            {/* Headline */}
            <p className="font-heading italic text-2xl sm:text-3xl md:text-4xl text-[#BFC3C9] font-normal leading-tight mb-6 max-w-2xl">
              &ldquo;Turning Curiosity Into Digital Experiences.&rdquo;
            </p>

            {/* Introduction */}
            <p className="font-body text-base sm:text-lg text-[#A6A7AB] leading-relaxed mb-10 max-w-2xl">
              I&apos;m a Computer Science and Data Science student interested in web development, programming, artificial intelligence, and robotics. I enjoy learning new technologies and building practical digital projects.
            </p>

            {/* Two Prominent Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              {/* Primary Button: Silver background with dark-grey text */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#18191B] bg-[#BFC3C9] hover:bg-white rounded-md transition-colors shadow-sm min-h-[48px]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary Button: Dark background with silver border */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#222326] border border-[#BFC3C9] hover:border-white hover:text-white rounded-md transition-colors min-h-[48px]"
              >
                <Mail className="w-4 h-4 text-[#BFC3C9]" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Refined Monograph Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#2B2C30] border border-[#414247] rounded-xl p-6 sm:p-8 space-y-6">
              {/* Card Header */}
              <div className="border-b border-[#414247] pb-5">
                <span className="text-xs uppercase tracking-widest text-[#BFC3C9] font-medium block mb-1">
                  Discipline Profile
                </span>
                <h3 className="font-heading text-2xl font-semibold text-[#F5F5F5]">
                  Foundational Focus
                </h3>
              </div>

              {/* Core Interests Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#222326] border border-[#414247] rounded-lg p-4">
                  <div className="w-8 h-8 rounded bg-[#18191B] border border-[#414247] flex items-center justify-center mb-3 text-[#BFC3C9]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] mb-1">Web Development</div>
                  <div className="text-xs text-[#A6A7AB]">Modern UI & Responsive Systems</div>
                </div>

                <div className="bg-[#222326] border border-[#414247] rounded-lg p-4">
                  <div className="w-8 h-8 rounded bg-[#18191B] border border-[#414247] flex items-center justify-center mb-3 text-[#BFC3C9]">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] mb-1">Data Science</div>
                  <div className="text-xs text-[#A6A7AB]">Python & Analytical Logic</div>
                </div>

                <div className="bg-[#222326] border border-[#414247] rounded-lg p-4">
                  <div className="w-8 h-8 rounded bg-[#18191B] border border-[#414247] flex items-center justify-center mb-3 text-[#BFC3C9]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] mb-1">Artificial Intelligence</div>
                  <div className="text-xs text-[#A6A7AB]">AI-Assisted Workflows</div>
                </div>

                <div className="bg-[#222326] border border-[#414247] rounded-lg p-4">
                  <div className="w-8 h-8 rounded bg-[#18191B] border border-[#414247] flex items-center justify-center mb-3 text-[#BFC3C9]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] mb-1">Robotics</div>
                  <div className="text-xs text-[#A6A7AB]">Hardware & System Concepts</div>
                </div>
              </div>

              {/* Quick Summary Note */}
              <div className="pt-2 border-t border-[#414247] text-xs text-[#A6A7AB] flex items-center justify-between">
                <span>Academic Status</span>
                <span className="text-[#F5F5F5] font-medium">B.Tech Year 1 · Enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
