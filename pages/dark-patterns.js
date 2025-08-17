import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function DarkPatterns() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/cursor.jpg" />
        <ProjectTitle role="Case study">Dark patterns</ProjectTitle>
        <ProjectBody col={2}>
          A study on deceptive UI practices and how to redesign them ethically.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
