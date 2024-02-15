const ToggleBar = ({ setShowMobileNav }) => {
  return (
    <div className="w-6 h-5 flex flex-col justify-between sm:hidden" onClick={() => setShowMobileNav(true)}>
      <span className="bg-white h-0.5 "></span>
      <span className="bg-white h-0.5 w-5/6 ml-auto"></span>
      <span className="bg-white h-0.5 "></span>
    </div>
  );
};

export default ToggleBar;
