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

import Plane from '../public/project-covers/plane.jpg';

const gapValue = 'gap-6';

export default function Home() {
  return (
    <main>
      <GridContainer>
        {/* ABOUT SECTION */}
        <section className="my-6 grid-layout">
          <div className="flex flex-col col-start-1 col-end-13 gap-3 md:col-end-7">
            <p
              className={`col-start-1 col-end-13 mb-4 text-white body z-1000 md:col-start-1 md:col-span-5 md:mb-0`}
            >
              Abhi (He/Him) designs Art and Experiences. He thrives at the intersection of 
              Art and AI, focusing on interactive media, spatial storytelling,
              and user-centred solutions. He is studying Interaction Design
              at{' '}
              <TextLink link="https://www.idc.iitb.ac.in/">
                IDC, IIT Bombay
              </TextLink>{' '}
              & has a background in Architecture with a deep passion for blending Art and GenAI;
              his work explores the fine line between functionality and imagination. 
              If you want to discuss Art, GenAI, or chai, feel free to{' '}
              <TextLink link="mailto:abhishekbenny98@gmail.com">get in touch</TextLink>.
            </p>
          </div>
          <div className="grid grid-cols-6 col-start-1 col-end-13 gap-3 md:col-start-7">
          </div>
        </section> 
        {/* Section label for projects */}
        <section className="grid-layout mt-4 mb-1">
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
              title="ERSS"
              description="Academic Project"
              link="/erss"
              content={Brain}
            />
            {/* Existing first column card(s) */}
            <ProjectCard
              title="BookWorm Pavilion"
              description="Nudes Studio"
              link="/skiff"
              content={Skiff}
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
            <ProjectCard
              title="Neydhal"
              description="Exhibition along with KMB 2023"
              link="/apple"
              isVideo
              content={'/project-covers/apple.mp4'}
            />
            
            
            {/* <ProjectCard
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
