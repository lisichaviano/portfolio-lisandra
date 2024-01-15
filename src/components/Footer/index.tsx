import Link from "../Link";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-white z-30 border-t border-neutral-300 shadow-sm-inverted max-md:h-28 h-40 flex max-md:flex-col p-6 lg:px-[148px] justify-between md:items-center mt-auto">
      <div className="flex md:flex-col items-center gap-2">
        <span>Telephone number</span>
        <span>+31 684 101 962</span>
      </div>
      <div className="flex md:flex-col items-center gap-2">
        <span>Email</span>
        <Link href="mailto:lisichaviano98@gmail.com">
          <span>lisichaviano98@gmail.com</span>
        </Link>
      </div>
      <div className="flex md:flex-col items-center gap-2">
        <span>Follow me</span>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
