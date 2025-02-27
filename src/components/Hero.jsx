import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax min-h-screen">
      <div className='parallax__content absolute top-[120px] sm:top-[16%] lg:top-[24%] w-full px-6 sm:px-8 lg:px-16 mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-12 z-10'>
        <div className="w-full lg:w-1/2">
          <h1 className='font-medium text-white text-[36px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[90px] 2xl:text-[120px] leading-[1.1] mb-4'>
            ENES CEYLAN
          </h1>
          <Position />
        </div>
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end mt-8 sm:mt-16 lg:mt-24">
          <div className='font-bold text-[18px] xs:text-[24px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] leading-[1.3] streaky-glow max-w-[90%] sm:max-w-sm 2xl:max-w-lg text-white'>
            As a Computer Engineer, <br className="hidden sm:block" /> I create innovative solutions for the digital world.
          </div>
        </div>
      </div>

      <div className="parallax__images w-full h-full absolute inset-0 overflow-hidden">
        <img className="parallax__stars w-full h-full object-cover" src="./parallax/1Stars.svg" alt="" />
        <img className="parallax__planets w-full h-full object-cover" src="./parallax/2Planets.svg" alt="" />
        <img className="parallax__mountain1 w-full h-full object-cover" src="./parallax/3Mountain.svg" alt="" />
        <img className="parallax__mountain2 w-full h-full object-cover" src="./parallax/4Mountain.svg" alt="" />
        <img className="parallax__crater w-full h-full object-cover" src="./parallax/5Crater.svg" alt="" />
        <img className="parallax__sun w-full h-full object-cover" src="./parallax/6Sun.svg" alt="" />
      </div>

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
