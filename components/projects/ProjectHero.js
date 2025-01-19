
import React from 'react';
import Media from '../Media';

export default function ProjectHero(props) {
  return (
    <Media
      className="select-none relative overflow-hidden my-2 md:my-8 h-[60vw] md:h-[49vw] object-cover w-full grid col-span-12 border border test"
      isVideo={props.isVideo}
      src={props.content}
    />
  );
}
