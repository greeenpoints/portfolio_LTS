import ProjectCard from '../components/home/ProjectCard';
import React, { useEffect, useState } from 'react';
import GridContainer from '../components/GridContainer';
import Skiff from '../public/project-covers/skiff.jpg';
import Compose from '../public/work/skiff/compose-modal.jpg';
import Brain from '../public/project-covers/natural.jpg';
import Azuki from '../public/project-covers/azuki.jpg';
import CollectorStatus from '../public/project-covers/collector-status.jpg';
import Cursor from '../public/project-covers/cursor.jpg';
import AIGA from '../public/project-covers/aiga-square.jpg';
import Metalink from '../public/project-covers/metalink.jpg';
import SkiffIcons from '../public/project-covers/skiffIcons.jpg';
import Experiments from '../public/work/experiments/LE-1.jpg';
import FormatBar from '../public/work/skiff/format-bar.jpg';

import Plane from '../public/project-covers/plane.jpg';

const gapValue = 'gap-6';

export default function Art() {
  return (
    <main>
      <GridContainer>
        {/* Section label for projects */}
        <section className="grid-layout mt-4 mb-1">
          <p className="col-start-1 col-end-13 text-yellow-300 uppercase body md:col-start-1 md:col-span-5">ART Projects</p>
        </section>
        {/* Breaker line after About matching navbar */}
        <section className="grid-layout mt-1 mb-4">
          <div className="col-start-1 col-end-13 h-px bg-white/10" />
        </section>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 relative z-10 col-start-1 col-end-13 grid-gap">

          {/* COLUMN 1 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="BookWorm Pavilion"
              description="Nudes Studio"
              link="/skiff"
              content={Skiff}
            /> {/*
            <ProjectCard
              title="Brain Technologies"
              description="Conversational AI"
              link="/brain"
              content={Brain}
            /> */}
            {/*
             <ProjectCard
              title="Multimodal Search"
              description="Brain Technologies"
              link="/brain"
              isVideo
              content={'/project-covers/brain-nested-query.mp4'}
            />   */}
            <ProjectCard
              title="Neydhal"
              description="Exhibition along with KMB 2023"
              link="/apple"
              isVideo
              content={'/project-covers/apple.mp4'}
            />
          </div>

          {/* COLUMN 2 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Data is the new ART"
              link="/data"
              description="Wanna do research in this"
              locked
              content={Plane}
            /> 
            {/* Any other column 2 cards */}
          </div>

          {/* COLUMN 3 */}
          <div className={`flex flex-col ${gapValue}`}>
            {/*
            <ProjectCard
              title="Pixel Push"
              description="Multiplayer Art"
              link="/pixelpush"
              isVideo
              content={'/project-covers/pixel-push.mp4'}
            />
            
            <ProjectCard
              title="Azuki"
              description="Media Interfaces"
              link="/azuki"
              content={Azuki}
            />
            */}
            <ProjectCard
              title="City of 2140 : New York"
              description="Architectural Thesis Project"
              link="/city"
              isVideo
              content={'/project-covers/thinkspace.mp4'}
            />
            {/*
            <ProjectCard
              title="Metalink Labs"
              description="Design systems"
              link="/metalink"
              content={Metalink}
            ></ProjectCard>
            */}
          </div>

          {/* COLUMN 4 */}
          <div className={`${gapValue} flex flex-col`}>
            <ProjectCard
              title="Velammal Project"
              description="Architectural Modularity"
              link="/aiga"
              content={AIGA}
            />
          </div>
        </div>
      </GridContainer>
    </main>
  );
}