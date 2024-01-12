import Link from "../Link";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  return (
    <footer className="h-40 flex px-6 lg:px-[148px] justify-between items-center mt-auto">
      <div className="flex flex-col items-center gap-2">
        <span>Telephone number</span>
        <span>+31 684 101 962</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>Email</span>
        <Link href="mailto:lisichaviano98@gmail.com">
          <span>lisichaviano98@gmail.com</span>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>Follow me</span>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
