import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function ERSS() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/metalink.jpg" />
        <ProjectTitle role="Project">ERSS</ProjectTitle>
        <ProjectBody col={2}>
          This page is a placeholder for the ERSS project. Content coming soon.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
