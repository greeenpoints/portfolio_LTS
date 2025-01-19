import React from 'react';
import { motion} from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import LinkCard from '../components/projects/LinkCard';

export default function Cursor() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isImage={true} content="/project-covers/cursor-long.jpg" />
        <ProjectTitle role="AI INTERFACES">Cursor AI</ProjectTitle>
        <ProjectBody col={2}>
          {`Cursor is a collaborative AI code editor backed by Open AI.
          Natural language interfaces are often too flexible which makes it tricky for users to leverage the AI effectively, leading to suboptimal outcomes.
           During my contract,
          I designed tools to help users grasp what AI can do and make sense of it in its relevant context. 
          If you are interested in learning more, please reach out.`}
        </ProjectBody>
        <ProjectDetails
          role={['Product designer']}
          collaborators={['Michael Truell']}
          duration="2 months"
          tools={['Figma']}
        />
        <LinkCard col={1} link="https://www.cursor.so/">
          Cursor Website
        </LinkCard>
      </GridContainer>
    </motion.main>
  );
}
