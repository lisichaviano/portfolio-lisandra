interface SkillsCardProps {
  skills: string[];
  languages: string[];
}

const SkillsCard = ({ skills, languages }: SkillsCardProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-2xl font-questrial px-10 py-10">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-syne">Proffessional skills</p>

        <div className="flex flex-wrap gap-y-10">
          {skills.map((skill) => (
            <div className="flex gap-2 w-1/2 flex-wrap">
              <div className="bg-firebrick w-4 h-4 overflow-hidden" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-syne">Languages</p>
        <div className="flex">
          {languages.map((language) => (
            <div className="flex gap-2 w-1/2">
              <div className="bg-firebrick w-4 h-4 overflow-hidden" />
              <span>{language}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;