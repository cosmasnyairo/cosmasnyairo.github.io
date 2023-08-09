import { mylinks } from "../data/Data";

const Footer = () => {
  var year = new Date().getFullYear();

  return (
    <footer className="p-8   flex m-auto justify-center items-center  gap-5">
      <p>&copy; {year}</p>
      {mylinks.map((link, index) => (
        <a key={index} href={link.url} target="blank">
          {link.icon}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
