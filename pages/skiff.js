import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import ProjectMedia from '../components/projects/ProjectMedia';
import Spacer from '../components/projects/Spacer';
import LinkCard from '../components/projects/LinkCard';

// images
import AppSwitcher from '../public/work/skiff/app-switcher.jpg';
import Mail from '../public/work/skiff/mail.jpg';
import Compose from '../public/work/skiff/compose-modal.jpg';
import Icons from '../public/work/skiff/icons.png';
import MarketingCards from '../public/work/skiff/marketing-cards.png';
import MarketingCards2 from '../public/work/skiff/marketing-cards-2.jpg';
import MarketingLanding from '../public/work/skiff/marketing-landing.jpg';
import AppLogos from '../public/work/skiff/app-logos.jpg';
import Onboarding from '../public/work/skiff/onboarding.jpg';
import MobileMail1 from '../public/work/skiff/mobile-mail-1.png';
import MobileMail2 from '../public/work/skiff/mobile-mail-2.png';

export default function Skiff() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isVideo={false} content="/project-covers/skiff.jpg" />
        <ProjectTitle role="Nudes Studio">BookWorm Pavilion</ProjectTitle>
        <ProjectBody col={2}>
          The BookWorm Pavilion project, under Nudes Studio, Mumbai led by {' '}
          <TextLink link="https://www.instagram.com/nurukarim/?hl=en">
            Ar. Nuru Karim 
          </TextLink>
          {' '}is a library of two simple, modular structures based on wooden ladders that 
          stretch outward to create undulating forms at either side of a central pathway.
          I worked on setting up the pavilion which was built from around 3,600 wooden components.
          These ladders house both shelf and seating areas for storytelling sessions, 
          offering unique views out across the{' '}
          <TextLink link="https://csmvs.in/">
            CSMVS museum
          </TextLink>{' '}
          gardens while providing space 
          for approximately 12,000 books.{' '}
          .
        </ProjectBody>
        <ProjectDetails
          role={['Design Intern']}
          collaborators={[
            'Nuru Karim',
            'Ashish N Ramesh',
            'Hari Sankar',
            'Aman Kachchhi',
          ]}
          duration="2019"
          tools={['Grasshopper', 'Rhino 3D']}
        />
        <LinkCard
          col={1}
          link="https://www.dezeen.com/2019/12/26/wooden-book-worm-nudes-pavilion-architecture-mumbai/"
        >
          BookWorm on Dezeen
        </LinkCard>
        <LinkCard col={2} link="https://www.archdaily.com/965307/bookworm-pavilion-nudes">
          {`BookWorm on ArchDaily`}
        </LinkCard>
        <Spacer />
        <ProjectBody title="Design Process">
          I helped transform Skiff&apos;s visual design language. This involved
          working with{' '}
          <TextLink link="https://www.pentagram.com/work/skiff">
            Pentagram
          </TextLink>{' '}
          on an initial rebrand to evolving it into a usable design system,
          complete iconography set, and visual graphic style.
        </ProjectBody>
        <ProjectMedia src={AppLogos}>
        The “BookWorm” pavilion aims to foster a sense of learning through 
        the creation of an interactive learning space.
        </ProjectMedia>
        <ProjectMedia src={MarketingLanding}>
          Led design for the Skiff marketing site relaunch, a 2.5 month project.
          Visit <TextLink link="https://www.skiff.com">here</TextLink>
        </ProjectMedia>
        <ProjectMedia src={MarketingCards2} />
        <ProjectMedia noShadow pAll src={MarketingCards}>
          20 interactive graphics scattered across the marketing site, each
          individually coded in React
        </ProjectMedia>

        <ProjectMedia id="icons" src={Icons}>
          +200 Hand drawn icons combining angular and soft features
        </ProjectMedia>
        <ProjectMedia pt pl src={AppSwitcher}>
          Global app switcher for navigation between products and workspaces.
        </ProjectMedia>
        <ProjectMedia pAll src={Onboarding} />

        {/* MAIl */}
        <ProjectBody id="mail" title="Output">
        The pavilion was fabricated off-shore and deployed on-site within a week.
        </ProjectBody>
        <ProjectMedia pAll src={Mail} />
        <ProjectMedia pr pb pt src={Compose} />
        <ProjectMedia noShadow pAll src={MobileMail1} />
        <ProjectMedia src={MobileMail2} />
      </GridContainer>
    </motion.main>
  );
}
