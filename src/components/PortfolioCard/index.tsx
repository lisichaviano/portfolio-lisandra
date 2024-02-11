import Image from "next/image";
import Link from "../Link";

export type Image = {
  url: string;
  alt: string;
};

interface PortfolioCardProps {
  image: Image;
  title: string;
  description: string | JSX.Element;
  linkToProject: string;
}

const PortfolioCard = ({
  image,
  title,
  description,
  linkToProject,
}: PortfolioCardProps) => {
  return (
    <div className="group flex flex-col max-w-[400px] shadow-md transition-transform duration-200 hover:scale-105">
      <Link key={linkToProject} href={linkToProject}>
        <div className="overflow-hidden">
          <img
            src={image.url}
            alt={image.alt}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex-1 bg-gray-50 p-4 pb-8">
          <div className="text-lg group-hover:text-firebrick">{title}</div>
          <div className="mt-6 text-sm text-black line-clamp-3 text-ellipsis leading-5">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
