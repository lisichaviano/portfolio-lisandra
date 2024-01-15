import { projects } from "../page";
import { PageProps } from "../../../types";
import Link from "../../../components/Link";
import { notFound } from "next/navigation";
import ChevronRightIcon from "../../../components/icons/ChevronRightIcon";
import ChevronLeftIcon from "../../../components/icons/ChevronLeftIcon";

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectName: project.path,
  }));
}

const ProjectPage = ({ params }: PageProps) => {
  const { projectName } = params;
  const project = projects.find((p) => p.path === projectName);

  if (!project) {
    return notFound();
  }
  const nextProject = projects[projects.indexOf(project) + 1]?.path;

  const prevProject = projects[projects.indexOf(project) - 1]?.path;

  return (
    <div className="flex flex-col responsive-width">
      <div className="flex max-md:flex-col gap-10 items-start">
        <div className="flex flex-col md:w-1/2 gap-y-4 md:gap-y-8">
          {/* Project Title */}
          <div className="flex gap-2 items-center">
            <div className="bg-firebrick w-2 h-2 md:w-4 md:h-4 overflow-hidden" />
            <p className="text-2xl md:text-4xl my-6 font-bold">
              {project?.title}
            </p>
          </div>
          {/* Project Type */}
          <div className="flex flex-col gap-3">
            <span className="text-lg md:text-2xl font-bold font-syne">
              Project Type
            </span>
            <span className="text-md md:text-xl font-questrial">
              {project?.projectType}
            </span>
          </div>

          {/* Project Date */}
          <div className="flex flex-col gap-3">
            <span className="text-lg md:text-2xl font-bold font-syne">
              Date
            </span>
            <span className="text-md md:text-xl font-questrial">
              {project?.date}
            </span>
          </div>

          {/* Project Location */}
          <div className="flex flex-col gap-3">
            <span className="text-lg md:text-2xl font-bold font-syne">
              Location
            </span>
            <span className="text-md md:text-xl font-questrial">
              {project?.location}
            </span>
          </div>

          {/* Project Role */}
          <div className="flex flex-col gap-3">
            <span className="text-lg md:text-2xl font-bold font-syne">
              Role
            </span>
            <span className="text-md md:text-xl font-questrial">
              {project?.role}
            </span>
          </div>

          {/* Project Link */}
          {project?.linkToWebsite && (
            <div className="flex flex-col gap-3">
              <span className="text-lg md:text-2xl font-bold font-syne">
                Link
              </span>
              <Link
                additionalClassNAme="text-md md:text-xl font-questrial"
                href={project.linkToWebsite}
              >
                {project.linkToWebsite}
              </Link>
            </div>
          )}
        </div>
        <div className="flex md:w-1/2">
          <p className="font-questrial my-9 text-md md:text-xl leading-8">
            {project?.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-16 mt-24 justify-center">
        {project?.images.map((image) => (
          <div className="h-[250px] md:h-[400px] shadow-card">
            <img
              src={image.url}
              alt={image.alt}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Next and previous button */}
      <div className="flex justify-between mt-20 md:mt-40">
        <Link
          additionalClassNAme="text-md md:text-xl font-questrial flex items-center"
          href={`/portfolio/${prevProject}`}
          active={!!prevProject}
        >
          <ChevronLeftIcon />
          <span className="md:block hidden">Previous project</span>
        </Link>

        <Link
          additionalClassNAme="text-md md:text-xl font-questrial flex items-center"
          href={`/portfolio/${nextProject}`}
          active={!!nextProject}
        >
          <span className="md:block hidden">Next project</span>
          <ChevronRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
