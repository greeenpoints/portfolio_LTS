import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GridContainer from '../components/GridContainer';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function Darkpatt() {
  const imagePaths = Array.from({ length: 48 }, (_, index) => `/work/darkpatt/${index + 1}.svg`);

  return (
    <motion.main className="min-h-[70vh] pt-6 md:pt-8">
      <GridContainer className="gap-y-12">
        <ProjectTitle role="Quantitative Analysis">Dark Patterns Research</ProjectTitle>
        <div className="col-span-full md:col-span-9 md:col-start-4 space-y-0">
          <div className="space-y-0">
            {imagePaths.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Dark patterns study frame ${index + 1}`}
                width={1280}
                height={720}
                className="block w-full h-auto"
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </GridContainer>
    </motion.main>
  );
}
