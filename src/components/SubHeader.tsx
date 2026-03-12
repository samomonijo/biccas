type SubHeaderProps = {
  content: string;
  centered: boolean;
};

const SubHeader = ({ content, centered }: SubHeaderProps) => {
  return (
    <p className={`text-sm ${centered ? "text-left md:text-center" : "text-center justify-self-center md:text-left"} text-gray-500 max-w-100 md:max-w-150`}>
      {content}
    </p>
  );
};

export default SubHeader;