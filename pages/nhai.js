import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GridContainer from '../components/GridContainer';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function NHAI() {
	return (
		<motion.main className="min-h-[70vh] pt-6 md:pt-8">
			<GridContainer className="gap-y-12">
				<ProjectTitle role="Industry Collaboration Project">NHAI</ProjectTitle>
				<div className="col-span-full md:col-span-9 md:col-start-4 space-y-0">
					<div className="space-y-0">
						<Image
							src="/work/nhai/nhai1.svg"
							alt="National Highways Authority of India project overview"
							width={1280}
							height={720}
							className="block w-full h-auto"
							priority
						/>
						<Image
							src="/work/nhai/nhai2.svg"
							alt="National Highways Authority of India design detail"
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
