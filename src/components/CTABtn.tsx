const CTABtn = ({ content }: { content: string }) => {
  return (
    <a
      href="#"
      className={`
        bg-[#5ABF99] hover:bg-[#83C4AB] text-white text-xs min-[1500px]:text-base font-normal inline-flex items-center justify-center w-30 h-10 rounded-4xl whitespace-nowrap transition
      `}
    >
      {content}
    </a>
  );
};

export default CTABtn;