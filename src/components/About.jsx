const softSkills = [
  " Communication",
  "Team Collaboration",
  "Problem Solving",
  "C1 English",
  "Adaptability",
  "Continous Learning",
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
            Hi! I&apos;m <strong>Hugo</strong>, with hands-on experience in building web applications using front-end and backend technologies like{" "}
            <strong> React.js, Next.js, Ruby on Rails,</strong> and{" "}
            <strong>JavaScript</strong>.<br /><br />Equipped with a strong foundation in
            web development concepts and a proven ability to collaborate in multidisciplinary teams.{" "}<br /><br />
            <strong>
            Passionate about contributing to innovative,
            impactful projects in a global, remote-first environment
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
