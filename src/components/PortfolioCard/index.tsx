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
    <div className="group flex flex-col w-[400px] shadow-md transition-transform duration-150 hover:scale-105">
      <Link key={linkToProject} href={linkToProject}>
        <div className="overflow-hidden relative w-[400px] h-[200px]">
          <Image
            src={image.url}
            alt={image.alt}
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="flex-1 bg-gray-50 p-4 pb-8">
          <div className="text-lg group-hover:text-firebrick">{title}</div>
          {/* <div className="text-lg text-gray-700">{jobTitle}</div> */}
          <div className="mt-6 text-sm text-black line-clamp-3 text-ellipsis leading-5">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
