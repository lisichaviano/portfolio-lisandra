interface CardProps {
  date: string;
  company: string;
  role: string;
  place: string;
  description: string | JSX.Element;
}

const Card = ({ date, company, role, place, description }: CardProps) => {
  return (
    <div className="flex lg:flex-row gap-4 bg-white shadow-2xl font-questrial px-10 py-20">
      <div className="flex flex-col gap-2 w-2/3">
        <span className="text-2xl font-bold">{date}</span>
        <span className="text-xl">{role}</span>
        <span className="text-sm">{company}</span>
        <span className="text-base mt-2">{place}</span>
      </div>
      <div className="flex flex-col gap-2 w-3/4">
        <span className="text-lg leading-[26px]">{description}</span>
      </div>
    </div>
  );
};

export default Card;
