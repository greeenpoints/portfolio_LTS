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
          {/* WORK EXPERIENCE */}
          <div className="grid grid-cols-6 col-start-1 col-end-13 gap-3 md:col-start-7">
            <p className="col-start-1 text-white opacity-40 caption">Team</p>
            <p className="col-start-3 text-white opacity-40 caption">
              Description
            </p>
            <WorkExperience
              title="Des.Bin"
              date="2022 - Present"
              description=""
            >
              Building Anime.com and interactive experiences for the Azuki IP.
              Actively building out the design team.
            </WorkExperience>
            <WorkExperience title="Independent Practice">
              Design consulting for emerging AI and productivity companies.
              Notable clients include{' '}
              <TextLink super={1} link="https://cursor.sh/">
                Anysphere (Cursor AI)
              </TextLink>
              ,{' '}
              <TextLink super={2} link="https://natural.ai/#/">
                Brain Technologies (Natural AI)
              </TextLink>
              , and
              <TextLink super={3} link="https://plane.so/">
                Plane
              </TextLink>
              .
            </WorkExperience>
            <WorkExperience title="Anagram" date="2020">
              First full-time design hire. 0→1 design for Email, Editor, Drive,
              Calendar. Scaled Skiff Mail to 1M+ users. Recently{' '}
              <TextLink link="https://anagramarchitects.com/">
                Anagram
              </TextLink>
              .
            </WorkExperience>
            <WorkExperience title="Nudes" date="2019 -2020">
              Six months at Nudes working on Parametric Architecture and designing
              exbitions and products{' '}
              <TextLink link="https://www.instagram.com/nurukarim/?hl=en">
                Nudes
              </TextLink>{' '}
                new behaviors empowered by natural language input.
            </WorkExperience>
          </div>
        </section>
        <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 grid-gap">
          {/* COLUMN 1 */}

          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="BookWorm Pavilion"
              description="Nudes Studio"
              link="/skiff"
              content={Skiff}
            />
            <ProjectCard
              title="Cursor AI"
              description="AI Tooling"
              link="/cursor"
              content={Cursor}
            />

            <ProjectCard
              title="Thinkspace"
              description="Assistive AI Agents"
              link="/thinkspace"
              isVideo
              content={'/project-covers/thinkspace.mp4'}
            />
          </div>
          {/* COLUMN 2 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Multimodal Search"
              description="Brain Technologies"
              link="/brain"
              isVideo
              content={'/project-covers/brain-nested-query.mp4'}
            />
            {/* <ProjectCard
              title="Collector Profile"
              description="Azuki"
              link="/azuki/#collector"
              content={CollectorStatus}
            /> */}
            <ProjectCard
              title="Plane"
              link="/plane"
              description="Productivity"
              content={Plane}
            />
            <ProjectCard
              title="Skiff Pages"
              description="Editor Tool"
              link="/skiff/#editor"
              content={FormatBar}
            />
            <ProjectCard
              title="AIGA Hue"
              description="Data Visualization"
              link="/aiga"
              content={AIGA}
            />
            <ProjectCard
              title="LIGHT ENGINE"
              description="Industrial Design"
              link="/lightengines"
              content={Experiments}
            />
          </div>

          {/* COLUMN 3 */}
          <div className={`flex flex-col ${gapValue}`}>
            <ProjectCard
              title="Apple"
              description="Conversational AI"
              link="/apple"
              isVideo
              content={'/project-covers/apple.mp4'}
            />

            <ProjectCard
              title="Brain Technologies"
              description="Conversational AI"
              link="/brain"
              content={Brain}
            />
            <ProjectCard
              title="Skiff Mail"
              description="Productivity Tooling"
              link="/skiff/#mail"
              content={Compose}
            />
            <ProjectCard
              title="Pixel Push"
              description="Multiplayer Art"
              link="/pixelpush"
              isVideo
              content={'/project-covers/pixel-push.mp4'}
            />

            <ProjectCard
              title="Metalink Labs"
              description="Design systems"
              link="/metalink"
              content={Metalink}
            ></ProjectCard>
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