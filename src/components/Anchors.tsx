import dropdowns from "../constants/dropdowns";

type AnchorsProps = { 
  styles: string, 
  setMobileDrawerOpen: (mobileDrawerOpen: boolean) => void 
};

const Anchors = ({ styles, setMobileDrawerOpen }: AnchorsProps) => {
  return (
    <>
      {dropdowns.map((label, i) => (
        <a
          key={i}
          href={`#${label.toLowerCase()}`}
          className={`${styles} ${(i === 0) ? "text-black font-semibold" : "text-gray-400"} whitespace-nowrap`}
          onClick={() => setMobileDrawerOpen(false)}
        >
          <span>{label}</span>
        </a>
      ))}
    </>
  );
};

export default Anchors;