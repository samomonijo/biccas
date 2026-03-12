type HeaderProps = {
  color: string;
  centered: boolean;
  content: string;
}

const Header = ({ color, centered, content }: HeaderProps) => {
  return (
    <h1 className={`text-${color} ${centered ? "text-left md:text-center" : "text-center md:text-left"} text-[170%] font-bold max-w-125 -mt-2`}>
      {content}
    </h1>
  );
}

export default Header;