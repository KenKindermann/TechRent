const Benefit = ({ benefit }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:min-w-96 gap-8 items-center animate-fade-in even:flex-col sm:even:flex-row-reverse text-center sm:even:text-right sm:odd:text-left p-8 kk-dark-transparent-bg mt-4 md:w-5/6 lg:w-2/3 even:ml-auto odd:mr-auto  ">
      <div className="min-w-36 sm:min-w-48 bg-slate-800">
        <img
          src={benefit.img}
          alt={benefit.header}
          className="h-36 w-36 sm:h-48 sm:w-48 mx-auto shadow-black shadow-lg p-2"
        />
      </div>
      <div className="w-full">
        <h3 className="text-3xl text-highlight">{benefit.header}</h3>
        <p>{benefit.header2}</p>
        <article className="mt-6 text-slate-200">{benefit.description}</article>
      </div>
    </div>
  );
};

export default Benefit;
