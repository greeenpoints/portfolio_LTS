import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';

export default function ERSS() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/Frame 25.png" />
        <ProjectTitle role="Academic / Research Project">ERSS</ProjectTitle>
        <ProjectBody col={2}>
          Emergency Response Support System (ERSS) is a unified emergency helpline and
          incident management platform. This page will document research, information
          architecture, and interface explorations for building a responsive, reliable,
          and accessible system to coordinate police, fire, ambulance, and disaster
          response services across regions.
        </ProjectBody>
        <ProjectDetails
          role={["Research", "Product Design"]}
          collaborators={["—"]}
          duration="—"
        />
      </GridContainer>
    </motion.main>
  );
}
