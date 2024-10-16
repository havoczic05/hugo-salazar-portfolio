const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 10
  }
];
const About = () => {
  return (
    <section
    id="about"
    className="section"
    >

      <div className="container">

      <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
        <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
        Hi! I&apos;m Hugo, as a frontend developer, I&apos;m driven by a hunger to learn and a strong foundation in <b>Ruby On Rails, CSS, JavaScript,</b> and modern frameworks like <b>React</b>. If you&apos;re looking for someone who is dependable, eager to learn, and ready to contribute right away, let&apos;s connect. <strong>Let me be the fresh, affordable, and motivated solution to your company challenges.</strong>
        </p>

        <div className="flex flex-wrap items-center gap-4 md:gap-7">
          {
            aboutItems.map(({label,number}, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))
          }

          {/* <img
          src="/images/h_logo_text_white.svg"
          alt="Logo"
          width={30}
          height={30}
          className="ml-auto  md:w-[40px] md:h-[40px]"
          /> */}
        </div>
      </div>

      </div>
    </section>
  )
}

export default About
