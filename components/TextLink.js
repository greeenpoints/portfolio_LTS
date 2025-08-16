export default function TextLink(props) {
  return (
    <>
      <a
        className="cursor-pointer border-dotted hover:bg-yellow-300/10 px-[2px] hover:text-yellow-300 pt-[2px] dotted-underline"
        target={props.sameTab ? '' : '_blank'}
        rel="noreferrer"
        href={props.link}
      >
        {props.children}
      </a>
      {/* Only render superscript when not explicitly disabled */}
      {props.noSup !== true && (
        <sup
          className={`${
            props.super ? 'font-mono' : 'font-sans'
          } leading-[0] text-[10px] font-light text-yellow-300`}
        >
          {props.super ? props.super : '↗'}
        </sup>
      )}
    </>
  );
}
