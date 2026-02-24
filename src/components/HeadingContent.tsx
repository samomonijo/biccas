type HeadingContentProps = {
  fontSize: string,
  textColor: string,
  alignCenter: boolean,
  content: string
}

const HeadingContent = ({ fontSize, textColor, alignCenter, content }: HeadingContentProps) => {
  return (
    <p className={`
          max-w-[70%] justify-self-center md:max-w-[55%] md:justify-self-start whitespace-pre-line
          ${(alignCenter && "text-center justify-self-center px-[10%]")}
          ${(textColor === "white") ? "text-gray-300" : "text-gray-700 font-semibold"} 
          ${(fontSize === "small" ? "text-xs leading-[1.7] min-[1500px]:text-sm" : "text-base min-[1500px]:text-lg")}
        `}>
      {content}
    </p>
  );
};

export default HeadingContent;