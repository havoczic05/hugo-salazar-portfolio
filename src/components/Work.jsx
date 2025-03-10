//Components
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.webp",
    title: "Pet Sitting App",
    tags: ["RoR", "JS", "API", "MVC"],
    projectLink: "https://petcare-285c6b31bf08.herokuapp.com/",
  },
  {
    imgSrc: '/images/project-5.avif',
    title: 'Fashion Designer Landing Page',
    tags: ['JS', 'CSS', 'HTML'],
    projectLink: 'https://rocioleyva.netlify.app/'
  },
  {
    imgSrc: '/images/project-4.webp',
    title: 'Task Manager',
    tags: ['Next.js', 'Shadcn UI', 'Tailwind CSS', 'Typescript', 'Prisma'],
    projectLink: 'https://github.com/havoczic05/task-manager-nextjs'
  },
  {
    imgSrc: "/images/project-2.webp",
    title: "Grid Generator",
    tags: ["HTML", "CSS", "JS"],
    projectLink: "https://havoczic05.github.io/etch-a-sketch-js/",
  },
  {
    imgSrc: "/images/project-3.webp",
    title: "Rock Paper Scissors",
    tags: ["HTML", "CSS", "JS"],
    projectLink: "https://havoczic05.github.io/rock-paper-scissors-js/",
  },
  /* {
    imgSrc: '/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  }, */
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Projects</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[90ch] reveal-up">
          Showcasing user-friendly frontend solutions and interactive web apps with a focus on quality and creativity.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
