
// Components
import { ButtonPrimary } from "./Button"

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Projects',
    href: '#work'
  },
  // {
  //   label: 'Reviews',
  //   href: '#reviews'
  // },
  {
    label: 'Education',
    href: '#education'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee'
  },


];
const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Looking for a motivated developer?
            </h2>

            <ButtonPrimary
            label="Let&apos;s connect"
            href="mailto:hugog.salazarl@gmail.com"
            icon="chevron_right"
            classes='reveal-up'
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({label, href}, key) => (
                  <li key={key}>
                    <a
                    href={href}
                    className="block text-sm text-zinc-400 py-1 transtition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({label, href}, key) => (
                  <li key={key}>
                    <a
                    href={href}
                    target="_blank"
                    className="block text-sm text-zinc-400 py-1 transtition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between pt-10  mb-8 ">
          <a
          href="/"
          className="logo reveal-up"
          >
            <img
            src="images/h_logo_text_white.svg"
            width={35}
            height={35}
            alt="Logo"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">Hugo Salazar</span>
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
