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
        {/*<section className="my-6 grid-layout">
          <div className="flex flex-col col-start-1 col-end-13 gap-3 md:col-end-5">
            <p className="text-white opacity-40 caption">ABOUT</p>
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
          {/* WORK EXPERIENCE *
          <div className="grid grid-cols-6 col-start-1 col-end-13 gap-3 md:col-start-7">
            <p className="col-start-1 text-white opacity-40 caption">Team</p>
            <p className="col-start-3 text-white opacity-40 caption">
              Description
            </p>
            <WorkExperience
              title="Des.Bin"
              date="2022 - 2024"
              description=""
            >
              Design consulting for Art and Exhibition Design with
              key focus on User Experience and immersive art that prioritize the audience&apos;s journey.
            </WorkExperience>
            <WorkExperience title="Independent Practice">
                Collaborated with  {' '}
              <TextLink super={1} link="https://lalithkala.org/">
                Kerala Lalithakala Akademi
              </TextLink>{' '}
              and govt to design and curate art shows, creating engaging and 
              inclusive spaces for artistic expression
              .
            </WorkExperience>
            <WorkExperience title="Anagram" date="2020">
                As an Design intern at {' '}
              <TextLink link="https://anagramarchitects.com/">
                Anagram
              </TextLink>
              {' '}focused on modular design, exploring adaptable and sustainable systems 
              conducting material research, and conceptualizing modular solutions.
            </WorkExperience>
            <WorkExperience title="Nudes" date="2019 -2020">
              Six months at {' '}
              <TextLink link="https://www.instagram.com/nurukarim/?hl=en">
                Nudes
              </TextLink>{' '}
              working on Parametric Architecture and designing exhibitions where I contributed 
              to blended desoign with experimental methodologies. 
            </WorkExperience>
          </div>
        </section> */}
        <section></section>
        <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 grid-gap">

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
              title="Velammal Project"
              description="Architectural Modularity"
              link="/aiga"
              content={AIGA}
            />
           
          </div>
          {/* COLUMN 2 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Data is the new ART"
              link="/plane"
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
              link="/thinkspace"
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
