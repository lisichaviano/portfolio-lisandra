import { Facebook } from "../icons";
import Instagram from "../icons/Instagram";

const SocialMedia = () => {
  return (
    <div className="flex gap-2 items-center">
      <a href="https://www.instagram.com/lisichaviano.dev?igsh=MWZ1bWg5djhmeGoycA%3D%3D&utm_source=qr">
        <Instagram />
      </a>
      <a href="https://www.facebook.com/share/zTnSEMXVLRwyhwsA/?mibextid=sCpJLy">
        <Facebook />
      </a>
      <a href="https://www.linkedin.com/in/lisandra-chaviano/">
        <img className="w-5 h-5 md:w-6 md:h-6" src="image@2x.png" alt="" />
      </a>
      <a className="mt-1" href="https://github.com/lisichaviano">
        <img className="w-4 h-4 md:w-5 md:h-5" src="githubIcon.png" alt="" />
      </a>
    </div>
  );
};

export default SocialMedia;
