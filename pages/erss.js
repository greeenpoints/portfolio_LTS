import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GridContainer from '../components/GridContainer';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function ERSS() {
  return (
    <motion.main className="min-h-[70vh] pt-6 md:pt-8">
      <GridContainer className="gap-y-12">
        <ProjectTitle role="Academic / Research Project">ERSS</ProjectTitle>
        <div className="col-span-full md:col-span-9 md:col-start-4 space-y-0">
          <div className="space-y-0">
            <Image
              src="/work/erss/erss1.svg"
              alt="Emergency Response Support System interface concept"
              width={1280}
              height={720}
              className="block w-full h-auto"
              priority
            />
            <Image
              src="/work/erss/erss2.svg"
              alt="Emergency Response Support System journey visualization"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss3.svg"
              alt="Emergency Response Support System interface detail 3"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss4.svg"
              alt="Emergency Response Support System interface detail 4"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss5.svg"
              alt="Emergency Response Support System interface detail 5"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss6.svg"
              alt="Emergency Response Support System interface detail 6"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss7.svg"
              alt="Emergency Response Support System interface detail 7"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss8.svg"
              alt="Emergency Response Support System interface detail 8"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss9.svg"
              alt="Emergency Response Support System interface detail 9"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss10.svg"
              alt="Emergency Response Support System interface detail 10"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss11.svg"
              alt="Emergency Response Support System interface detail 11"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss12.svg"
              alt="Emergency Response Support System interface detail 12"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss13.svg"
              alt="Emergency Response Support System interface detail 13"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss14.svg"
              alt="Emergency Response Support System interface detail 14"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss15.svg"
              alt="Emergency Response Support System interface detail 15"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss16.svg"
              alt="Emergency Response Support System interface detail 16"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
            <Image
              src="/work/erss/erss17.svg"
              alt="Emergency Response Support System interface detail 17"
              width={1280}
              height={720}
              className="block w-full h-auto"
            />
          </div>
        </div>
      </GridContainer>
    </motion.main>
  );
}
