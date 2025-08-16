import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function NHAI() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/collector-status.jpg" />
        <ProjectTitle role="Project">NHAI</ProjectTitle>
        <ProjectBody col={2}>
          This page is a placeholder for the NHAI project. Content coming soon.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
