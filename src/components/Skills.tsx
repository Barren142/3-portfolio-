import React from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { FileCode, Palette, Terminal, Braces, Smartphone, Sparkles } from 'lucide-react';
import { SkillItem } from '../types';

const getSkillIcon = (iconType: SkillItem['iconType']) => {
  switch (iconType) {
    case 'html':
      return <FileCode className="w-6 h-6 text-[#BFC3C9]" />;
    case 'css':
      return <Palette className="w-6 h-6 text-[#BFC3C9]" />;
    case 'js':
      return <Braces className="w-6 h-6 text-[#BFC3C9]" />;
    case 'python':
      return <Terminal className="w-6 h-6 text-[#BFC3C9]" />;
    case 'responsive':
      return <Smartphone className="w-6 h-6 text-[#BFC3C9]" />;
    case 'ai':
      return <Sparkles className="w-6 h-6 text-[#BFC3C9]" />;
    default:
      return <FileCode className="w-6 h-6 text-[#BFC3C9]" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#18191B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest text-[#BFC3C9] font-medium block mb-2">
            Technical Capabilities
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5]">
              Skills & Proficiencies.
            </h2>
            <p className="text-sm text-[#A6A7AB] max-w-md">
              Core technologies and architectural methodologies applied across web projects and data science studies.
            </p>
          </div>
        </div>

        {/* 6 Premium Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_LIST.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#2B2C30] border border-[#414247] hover:border-[#BFC3C9] rounded-xl p-6 transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#222326] border border-[#414247] flex items-center justify-center">
                    {getSkillIcon(skill.iconType)}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#BFC3C9] font-medium">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-heading text-2xl font-bold text-[#F5F5F5] mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A6A7AB] leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Level Indicator - Unboxed Clean Metadata */}
              <div className="pt-4 border-t border-[#414247] flex items-center justify-between text-xs text-[#A6A7AB]">
                <span>Status</span>
                <span className="text-[#F5F5F5] font-medium tracking-wide">
                  {skill.proficiencyLevel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
