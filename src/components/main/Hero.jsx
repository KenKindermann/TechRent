// Images
import devices from "/assets/images/devices.png";

const Hero = () => {
  return (
    <section className="kk-section m-auto flex flex-col min-h-screen mt-10 sm:mt-0 justify-center">
      {/* Banner */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-center">
        <div className="text-center lg:w-1/2 lg:text-start">
          <p className="text-md sm:text-xl">Rent, instead of buying!</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Save big with our</h2>
          <h1 className="text-6xl sm:text-8xl uppercase font-bold bg-gradient-to-b from-white from-0% via-highlight via-55% to-highlight to-70% text-transparent bg-clip-text">
            Summer-Deals!
          </h1>
          <p className="text-slate-300">New deals every week for your perfect summer!</p>
          <p className="text-slate-300">No matter what you need - there is something for everyone here!</p>
        </div>
        <div className="hero-img w-3/4 lg:w-1/2">
          <img src={devices} alt="devices" />
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-32 text-center gap-8 ">
        <p className="p-4 border-t-4 border-highlight border-b-4 flex items-center justify-center">
          Thousand <br />
          happy <br />
          customers <br />
          😍
        </p>
        <p className="p-4 border-t-4 border-white border-b-4 flex items-center justify-center">
          Maximum <br /> safety <br /> 🔒
        </p>
        <p className="p-4 border-t-4 border-highlight border-b-4 flex items-center justify-center">
          Free <br />
          shipping <br />
          📦
        </p>
        <p className="p-4 border-t-4 border-white border-b-4 flex items-center justify-center">
          As long <br />
          as you <br />
          want <br />
          ♾️
        </p>
      </div>
    </section>
  );
};

export default Hero;
