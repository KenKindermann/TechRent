const Badge = () => {
  return (
    <span className="absolute -right-1 -top-1 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-highlight"></span>
    </span>
  );
};

export default Badge;
