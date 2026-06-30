// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";

const ProjectTile = ({
  project,
  animationEnabled,
}: {
  project: IProject;
  animationEnabled: boolean;
}) => {
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const {
    name,
    tech,
    image,
    blurImage,
    description,
    gradient: [stop1],
  } = project;

  useEffect(() => {
    VanillaTilt.init(projectCard.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, [projectCard]);

  const formatTechName = (techName: string): string => {
    const techNames: Record<string, string> = {
      css: "CSS",
      html: "HTML",
      javascript: "JavaScript",
      next: "Next.js",
      react: "React.js",
      tailwind: "Tailwind CSS",
      typescript: "TypeScript",
    };

    return techNames[techName] || techName;
  };

  const renderDescription = (description: string): React.ReactNode => (
    <h2
      className="text-lg z-10 tracking-wide font-medium"
      style={{ transform: "translateZ(0.8rem)" }}
    >
      {description}
    </h2>
  );

  const renderTechStack = (techStack: string[]): React.ReactNode => (
    <div
      className="flex flex-wrap gap-2 mt-4 z-10"
      style={{ transform: "translateZ(1rem)" }}
    >
      {techStack.map((techName) => (
        <span
          key={techName}
          className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20"
        >
          {formatTechName(techName)}
        </span>
      ))}
    </div>
  );

  const renderProjectName = (name: string): React.ReactNode => (
    <h1
      className="text-2xl sm:text-3xl z-10 pl-2"
      style={{ transform: "translateZ(3rem)" }}
    >
      {name}
    </h1>
  );

  const renderTopBottomGradient = (gradient: string): React.ReactNode => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-32 z-0"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.2) 70%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-56 z-0"
        style={{
          background: `linear-gradient(0deg, ${gradient} 0%, rgba(0,0,0,.82) 0%, rgba(0,0,0,.52) 55%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
    </>
  );

  const renderProjectImage = (
    image: string,
    blurImage: string | undefined,
    name: string
  ): React.ReactNode => (
    <Image
      placeholder={blurImage ? "blur" : "empty"}
      blurDataURL={blurImage}
      src={image}
      alt={name}
      layout="fill"
      objectFit="cover"
      className={`${styles.ProjectImg} z-0`}
    />
  );

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="link overflow-hidden rounded-3xl snap-start"
      style={{
        maxWidth: animationEnabled
          ? "calc(100vw - 2rem)"
          : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`
          ${styles.ProjectTile}
           rounded-3xl relative p-6 flex-col flex justify-between max-w-full
        `}
        style={{
          background: stop1,
        }}
      >
        {renderProjectImage(image, blurImage, name)}
        {renderTopBottomGradient(stop1)}
        {renderProjectName(name)}
        <div>
          {renderDescription(description)}
          {renderTechStack(tech)}
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
