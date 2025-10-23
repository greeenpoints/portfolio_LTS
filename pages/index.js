import ProjectCard from '../components/home/ProjectCard';
import React, { useEffect, useState } from 'react';
import TextLink from '../components/TextLink';
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
import ERSSCover from '../public/project-covers/erssprojectcard.png';
import NHAICover from '../public/project-covers/nhaiprojectcard.png';
import DarkpattCover from '../public/project-covers/darkpattprojectcard.png';
import TechniquesCover from '../public/project-covers/techniquesprojectcard.png';
import VRImage from '../public/project-covers/vrprojectcard.png';
import DatavisCover from '../public/project-covers/datavisprojectcard.png';

import Plane from '../public/project-covers/plane.jpg';

const gapValue = 'gap-6';

export default function Home() {
  return (
    <main>
      <GridContainer>
        {/* ABOUT SECTION */}
  <section className="mt-6 mb-2 grid-layout">
          <div className="flex flex-col col-start-1 col-end-13 gap-3 md:col-end-7">
            <p
              className={`col-start-1 col-end-13 mb-4 text-zinc-300 body font-normal z-1000 md:col-start-1 md:col-span-5 md:mb-0`}
            >
              I’m Abhishek (he/him), and I design Art and Experiences. I thrive at the
              intersection of Art and AI, working with interactive media, spatial
              storytelling, and user-centred solutions. Currently, I’m pursuing
              Interaction Design at{' '}
              <TextLink link="https://www.idc.iitb.ac.in/">IDC, IIT Bombay</TextLink>
              {', '}with a background in Architecture. My passion lies in blending Art and
              GenAI, exploring the fine line between functionality and imagination.
              If you’d like to chat about Art, GenAI, or chai, I’d love to{' '}
              <TextLink link="mailto:abhishekbenny98@gmail.com">connect</TextLink>.
            </p>
          </div>
          <div className="grid grid-cols-6 col-start-1 col-end-13 gap-3 md:col-start-7">
          </div>
        </section> 
        {/* Section label for projects */}
  <section className="grid-layout mt-0 mb-1">
          <p className="col-start-1 col-end-13 text-yellow-300 uppercase body md:col-start-1 md:col-span-5">Key Projects</p>
        </section>
        {/* Breaker line after About matching navbar */}
        <section className="grid-layout mt-1 mb-4">
          <div className="col-start-1 col-end-13 h-px bg-white/10" />
        </section>
        <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-4 grid-gap">






          {/* COLUMN 1 */}
          <div className={`${gapValue} flex flex-col`}>
            {/* ERSS at the top of column 1 */}
            <ProjectCard
              title="ERSS - 112"
              description="Fellowship Project"
              link="/erss"
              content={ERSSCover}
            />
            {/* Design Sys in Column 1 */}
            <ProjectCard
              title="Design Sys"
              description="Design systems"
              link="/dessys"
              isVideo
              content={'/project-covers/dessys.mp4'}
            />
            {/* Existing first column card(s) */}
            {/** HIDDEN: BookWorm Pavilion */}
            {/*
            <ProjectCard
              title="BookWorm Pavilion"
              description="Nudes Studio"
              link="/skiff"
              content={Skiff}
            />
            */}
          </div>

          {/* COLUMN 2 */}
          <div className={`flex flex-col ${gapValue}`}>
            {/* NHAI at top of Column 2 */}
            <ProjectCard
              title="NHAI"
              description="Industry Collaboration Project"
              link="/nhai"
              content={NHAICover}
            />
            {/* VR moved to Column 2 (below NHAI) */}
            <ProjectCard
              title="VR"
              description="Experiential explorations"
              link="/vr"
              content={VRImage}
            />
             {/** HIDDEN: Data is the new ART */}
             {/*
             <ProjectCard
               title="Data is the new ART"
               link="/data"
               description="Wanna do research in this"
               locked
               content={Plane}
             />
             */}
            {/*
            <ProjectCard
              title="Collector Profile"
              description="Azuki"
              link="/azuki/#collector"
              content={CollectorStatus}
            /> */}
            {/*
            <ProjectCard
              title="LIGHT ENGINE"
              description="Industrial Design"
              link="/lightengines"
              content={Experiments}
            />
            */}
          </div>

          {/* COLUMN 3 */}
          <div className={`${gapValue} flex flex-col`}>
            {/* Techniques and Datavis in Column 3 */}
            <ProjectCard
              title="Interaction Techniques "
              description= "Methods "
              link="/techniques"
              content={TechniquesCover}
            />
            <ProjectCard
              title="DATA VISUALIZATION"
              description=" India "
              link="/data"
              content={DatavisCover}
            />
            {/** HIDDEN: Velammal Project */}
            {/**
            <ProjectCard
              title="Velammal Project"
              description="Architectural Modularity"
              link="/aiga"
              content={AIGA}
            />
            */}
          </div>

          {/* COLUMN 4 */}
          <div className={`flex flex-col ${gapValue}`}>
            {/* Dark patterns in Column 4 */}
            <ProjectCard
              title="DARK PATTERNS"
              description="Quantitative Analysis"
              link="/darkpatt"
              content={DarkpattCover}
            />
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
            {/** HIDDEN: City of 2140 : New York */}
            {/**
            <ProjectCard
              title="City of 2140 : New York"
              description="Architectural Thesis Project"
              link="/city"
              isVideo
              content={'/project-covers/thinkspace.mp4'}
            />
            */}
            {/*
            <ProjectCard
              title="Metalink Labs"
              description="Design systems"
              link="/metalink"
              content={Metalink}
            ></ProjectCard>
            */}
          </div>

          {/* COLUMN 5 (new) */}
          <div className={`${gapValue} flex flex-col`}>
            {/** HIDDEN: Neydhal */}
            {/**
            <ProjectCard
              title="Neydhal"
              description="Exhibition along with KMB 2023"
              link="/apple"
              isVideo
              content={'/project-covers/apple.mp4'}
            />
            */}
            {/* Column 5 intentionally left empty for now */}
          </div>
        </div>
      </GridContainer>
    </main>
  );
}

function WorkExperience(props) {
  return (
    <>
      <h1 className="col-span-2 col-start-1 col-end-3 text-white body">
        {props.title}
        <br />
        {props.date}
      </h1>
      <p className="col-span-4 col-start-3 text-white body">{props.children}</p>
    </>
  );
}
