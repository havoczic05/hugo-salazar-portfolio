const education = [
  {
    title: "Web Development & AI",
    date: "September 2024",
    school: "Le Wagon",
    description:
      "360-hour full-time bootcamp focused on front-end and back-end development using HTML, CSS, Bootstrap, JavaScript, React, PostgreSQL, Git, GitHub, Heroku, Ruby on Rails, Hotwire, Action Cable, and AI. I designed, implemented, and launched a full web application called Petcare, which connects pet owners with sitters.",
    imgSrc: "/images/le_wagon.png",
  },
  {
    title: "Software Engineering",
    date: "Present",
    school: "Universidad Tecnológica del Perú",
    description:
      "Currently in the first year of a comprehensive five-year program, focused on mastering the key processes of software development. Gaining hands-on experience with the full software development lifecycle, including requirements analysis, design, implementation, testing, and deployment.",
    imgSrc: "/images/utp.png",
  },
];
const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Education</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[80ch] reveal-up">
          Highlighting my academic journey, showcasing my commitment to
          continuous learning and technical excellence.
        </p>
        {education.map(({ title, school, description, imgSrc }, key) => (
          <div
            key={key}
            className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 mt-3 reveal-up">
            <h3 className="title-1 mb-2">{title}</h3>
            <div className="flex items-center content-center justify-start gap-2">
              <img src={imgSrc} width={35} height={35} alt="Logo" />
              <h4 className="title-1 text-zinc-400  md:max-w-[75ch]">
                {school}
              </h4>
              {/* <span className="title-2">- {date}</span> */}
            </div>

            <p className="text-zinc-300 mt-2 mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
