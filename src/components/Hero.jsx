// Components
import RotatingText from '../components/HeroTitle';
import { ButtonPrimary, ButtonOutline } from "./Button";
const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.webp"
                width={40}
                height={40}
                alt="Hugo Salazar portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 lg:mb-2 sm:px-2 md:px-3">
          Hi, I&apos;m Hugo
          </h2>


          <RotatingText
            texts={['I am a Full Stack Developer', 'I am a Frontend Developer', 'I am a Suspense Movie Fan']}
            mainClassName="bg-transparent px-2 sm:px-2 md:px-3 bg-cyan-300 text-white text-6xl font-extrabold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg mb-5"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.050}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          />
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/HUGO_GIANPIERRE_SALAZAR_LEIVA_ENG.pdf"
              download="HUGO_GIANPIERRE_SALAZAR_LEIVA_ENG.pdf"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/profile-hs.png"
              width={656}
              height={800}
              alt="Hugo Salazar"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
