import React from 'react';
import { Compass, Lightbulb, Wrench } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#222326] border-y border-[#414247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#BFC3C9] font-medium block mb-2">
            Philosophy & Background
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5]">
            Beyond the Code.
          </h2>
        </div>

        {/* Narrative & Focus Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-[#A6A7AB] font-body text-base sm:text-lg leading-relaxed">
            <p>
              My journey in Computer Science and Data Science is driven by an innate fascination with how software transforms abstract concepts into tangible, real-world utility. As a first-year engineering student, I view technology as both a structured science and an evolving craft where logic meets design.
            </p>
            <p>
              Rather than merely studying theory, my priority is deliberate execution. I spend my time writing code, exploring responsive web architectures, understanding core data structures with Python, and examining how modern AI tooling can streamline development cycles. Every line of code written is an experiment in clarity, efficiency, and user experience.
            </p>
            <p>
              Whether studying algorithmic thinking, constructing client-facing web interfaces, or exploring emerging intersections with robotics and intelligent systems, my focus remains steady: remain curious, build practical projects that serve real needs, and continuously refine my engineering foundation.
            </p>
          </div>

          {/* Core Principles Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#2B2C30] border border-[#414247] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#222326] border border-[#414247] flex items-center justify-center shrink-0 text-[#BFC3C9]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-[#F5F5F5] mb-1">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-[#A6A7AB] leading-normal">
                    Embracing new web standards, programming paradigms, and data science foundations with persistent discipline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2B2C30] border border-[#414247] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#222326] border border-[#414247] flex items-center justify-center shrink-0 text-[#BFC3C9]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-[#F5F5F5] mb-1">
                    Practical Execution
                  </h4>
                  <p className="text-sm text-[#A6A7AB] leading-normal">
                    Translating concepts into deployed, production-ready web platforms with high visual fidelity and robust responsiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2B2C30] border border-[#414247] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#222326] border border-[#414247] flex items-center justify-center shrink-0 text-[#BFC3C9]">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-[#F5F5F5] mb-1">
                    Modern Technological Focus
                  </h4>
                  <p className="text-sm text-[#A6A7AB] leading-normal">
                    Exploring how artificial intelligence assistance and robotics integrate with modern computational engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
