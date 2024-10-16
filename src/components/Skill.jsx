// Components
import SkillCard from './SkillCard'



const skillItem = [
  {
    imgSrc: '/images/ruby1.svg',
    label: 'Ruby',
    desc: 'Back-End'
  },
  {
    imgSrc: '/images/rails.svg',
    label: 'Ruby on Rails',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },

  {
    imgSrc: '/images/postgresql.svg',
    label: 'PostgreSQL',
    desc: 'Database'
  }

];
const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
        My Tech Stack
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Technologies I use to create impactful, efficient and user-friendly applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({imgSrc,label,desc}, key) =>
              (
              <SkillCard
              key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes='reveal-up'
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skill
