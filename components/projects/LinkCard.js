import Link from 'next/link';

export default function LinkCard(props) {
  return (
    <Link
      href={props.link}
      className={`${props.col ? `md:col-start-${props.col}` : ''} ${
        props.className || ''
      } select-none caption group text-white/80 bg-white/[.05] col-span-full hover:bg-white/10 hover:text-[#1E4DD9] flex items-center flex-row p-4 rounded-md game-border`}
    >
      <p className="group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-transform">
        <span className="mr-2">↗</span>
        {props.children}
      </p>
    </Link>
  );
}
