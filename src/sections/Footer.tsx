import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex items-center w-full max-md:flex-col">
          <div className="small-compact flex flex-1">
            <p className="opacity-70">
              Copyright, Cezary Klauza {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Privicy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
              Terms of use
            </p>
          </div>
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, title, icon, url }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;