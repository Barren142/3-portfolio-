import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Globe, Layers, School, Dumbbell, Sparkles, X } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'school-website':
        return <School className="w-5 h-5 text-[#BFC3C9]" />;
      case 'gym-website':
        return <Dumbbell className="w-5 h-5 text-[#BFC3C9]" />;
      case 'beauty-parlour-website':
        return <Sparkles className="w-5 h-5 text-[#BFC3C9]" />;
      default:
        return <Globe className="w-5 h-5 text-[#BFC3C9]" />;
    }
  };

  const getMockupDetails = (id: string) => {
    switch (id) {
      case 'school-website':
        return {
          bannerTitle: 'Academic Excellence & Admissions',
          accentColor: '#BFC3C9',
          items: ['Curriculum', 'Faculty Directory', 'Student Notices', 'Admissions Portal'],
        };
      case 'gym-website':
        return {
          bannerTitle: 'Strength, Conditioning & Fitness Tiers',
          accentColor: '#BFC3C9',
          items: ['Training Plans', 'Timetable Schedule', 'Membership Tiers', 'Trainer Profiles'],
        };
      case 'beauty-parlour-website':
        return {
          bannerTitle: 'Bespoke Beauty, Hair & Wellness Studio',
          accentColor: '#BFC3C9',
          items: ['Treatment Menu', 'Stylist Gallery', 'Pricing Catalog', 'Book Consultation'],
        };
      default:
        return {
          bannerTitle: 'Web Application Experience',
          accentColor: '#BFC3C9',
          items: ['Overview', 'Features', 'Documentation'],
        };
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#222326] border-t border-[#414247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest text-[#BFC3C9] font-medium block mb-2">
            Practical Applications
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5]">
              Featured Projects.
            </h2>
            <p className="text-sm text-[#A6A7AB] max-w-md">
              Deployed, responsive digital platforms crafted for specific domain requirements and clean user experiences.
            </p>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_LIST.map((project) => {
            const mockup = getMockupDetails(project.id);

            return (
              <div
                key={project.id}
                className="bg-[#2B2C30] border border-[#414247] hover:border-[#BFC3C9] rounded-xl overflow-hidden transition-colors duration-150 flex flex-col justify-between"
              >
                {/* Mockup Screen Header (Zero-Broken-Image Policy Fallback Frame) */}
                <div className="bg-[#18191B] border-b border-[#414247] p-4">
                  {/* Browser Window Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#414247]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#414247]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#414247]" />
                    </div>
                    <div className="text-[11px] font-mono text-[#A6A7AB] truncate max-w-[180px] bg-[#222326] px-2 py-0.5 rounded border border-[#414247]">
                      {project.url.replace('https://', '')}
                    </div>
                  </div>

                  {/* Visual Interface Mockup Box */}
                  <div className="bg-[#222326] border border-[#414247] rounded-lg p-5 min-h-[140px] flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getProjectIcon(project.id)}
                        <span className="text-xs font-semibold text-[#F5F5F5]">
                          {project.title}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#BFC3C9] font-medium">
                        Live on Vercel
                      </span>
                    </div>

                    <div className="my-2">
                      <div className="text-sm font-heading font-medium text-[#F5F5F5]">
                        {mockup.bannerTitle}
                      </div>
                    </div>

                    {/* Miniature nav items */}
                    <div className="flex items-center gap-2 text-[10px] text-[#A6A7AB] overflow-hidden">
                      {mockup.items.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="truncate">
                          {item} {idx < 2 && '·'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <div className="text-xs uppercase tracking-widest text-[#BFC3C9] font-medium mb-2">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#A6A7AB] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#A6A7AB]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BFC3C9] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack - Unboxed Text with Separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#A6A7AB] pt-3 border-t border-[#414247] mb-6">
                      <Layers className="w-3.5 h-3.5 text-[#BFC3C9] shrink-0" />
                      {project.techStack.map((tech, idx) => (
                        <React.Fragment key={idx}>
                          <span>{tech}</span>
                          {idx < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-[#414247]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
                    {/* Primary Button: View Project */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#18191B] bg-[#BFC3C9] hover:bg-white rounded-md transition-colors min-h-[44px]"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Overview Modal Trigger */}
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#222326] border border-[#414247] hover:border-[#BFC3C9] rounded-md transition-colors min-h-[44px]"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="bg-[#2B2C30] border border-[#414247] rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#414247] pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BFC3C9] font-medium block">
                  {activeModalProject.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F5]">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded text-[#A6A7AB] hover:text-white hover:bg-[#222326] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#A6A7AB] leading-relaxed">
              {activeModalProject.description}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] block">
                Platform Architecture
              </span>
              <ul className="space-y-2">
                {activeModalProject.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#A6A7AB]">
                    <CheckCircle2 className="w-4 h-4 text-[#BFC3C9] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#414247] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={activeModalProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#18191B] bg-[#BFC3C9] hover:bg-white rounded-md transition-colors"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-3 text-xs font-medium text-[#A6A7AB] hover:text-[#F5F5F5] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
