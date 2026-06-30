// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import React from "react";
import { EXPERIENCES, IExperience, MENULINKS } from "../../constants";
import { IDesktop } from "pages";

const TimelineSection = (_props: IDesktop) => {
  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm">EXPERIENCE</p>
      <h1 className="section-heading mt-2">Work Experience</h1>
      <h2 className="text-2xl md:max-w-2xl w-full mt-2">
        Professional experience based on my LinkedIn profile.
      </h2>
    </div>
  );

  const renderTechStack = (techStack: string[]): React.ReactNode => (
    <div className="flex flex-wrap gap-2 mt-5">
      {techStack.map((techName) => (
        <span
          key={techName}
          className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-100 border border-gray-700"
        >
          {techName}
        </span>
      ))}
    </div>
  );

  const renderExperience = (
    experience: IExperience,
    index: number
  ): React.ReactNode => (
    <li
      key={`${experience.company}-${experience.startDate}`}
      className={`relative pl-8 pb-12 ${
        index === EXPERIENCES.length - 1 ? "pb-0" : ""
      }`}
    >
      {index !== EXPERIENCES.length - 1 && (
        <span className="absolute left-2 top-4 h-full w-px bg-gray-700"></span>
      )}
      <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-gray-400 bg-gray-900"></span>

      <article className="max-w-3xl">
        <h3 className="text-2xl sm:text-3xl font-medium">
          {experience.title}
        </h3>
        <p className="text-xl text-gray-100 mt-2">
          {experience.company} - {experience.employmentType}
        </p>
        <p className="text-base sm:text-lg text-gray-400 mt-1">
          {experience.startDate} - {experience.endDate} - {experience.duration}
        </p>
        <p className="text-base sm:text-lg text-gray-400">
          {experience.location} - {experience.workType}
        </p>

        <ul className="mt-5 space-y-2 text-base sm:text-lg text-gray-200 leading-relaxed">
          {experience.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {renderTechStack(experience.techStack)}
      </article>
    </li>
  );

  return (
    <section
      className="w-full relative select-none min-h-screen section-container py-8 flex flex-col justify-center"
      id={MENULINKS[3].ref}
    >
      {renderSectionTitle()}
      <ol className="experience-list mt-16">
        {EXPERIENCES.map(renderExperience)}
      </ol>
    </section>
  );
};

export default TimelineSection;
