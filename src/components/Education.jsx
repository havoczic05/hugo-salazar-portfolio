const education = [
  {
    title: "Web Development & AI",
    date: "September 2024",
    school: "Le Wagon",
    description:
      "Intensive 360-hour full-time bootcamp focused on fullstack development using JavaScript, React.js, Next.js, Ruby on Rails, Hotwire, SQL, Git, and AI. I designed, implemented, and launched a complete web application called Petcare, which connects pet owners with caregivers.",
    imgSrc: "/images/le_wagon.webp",
  },
  {
    title: "Software Engineering",
    date: "Present",
    school: "Universidad Tecnológica del Perú",
    description:
      "Five-year program focused on algorithms, data structures, and the complete software development lifecycle. Gaining experience in requirements analysis, efficient design, implementation, and testing, while applying agile methodologies to develop scalable and optimized solutions.",
    imgSrc: "/images/utp.webp",
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
