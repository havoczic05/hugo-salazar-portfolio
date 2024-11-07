const softSkills = [
  " Communication",
  "Team Collaboration",
  "Problem Solving",
  "C2 English proficiency",
  "Adaptability",
  "Continous Learning",
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
            Hi! I&apos;m <strong>Hugo</strong>, a frontend developer with a
            strong foundation in{" "}
            <strong>Ruby on Rails, CSS, JavaScript,</strong> and{" "}
            <strong>React</strong>. I&apos;m dependable and ready to contribute
            immediately.{" "}
            <strong>
              I can be the fresh, motivated solution to your company&apos;s
              needs!
            </strong>
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              <div className="flex flex-wrap items-center gap-2">
                {softSkills.map((label, key) => (
                  <span
                    key={key}
                    className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg hover:bg-zinc-50/10 transition-colors">
                    {label}
                  </span>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
