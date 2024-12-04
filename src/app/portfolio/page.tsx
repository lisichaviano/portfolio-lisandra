import PortfolioCard, { Image } from "../../components/PortfolioCard";

type Project = {
  title: string;
  description: string | JSX.Element;
  images: Image[];
  link: string;
  date?: string;
  role?: string;
  location?: string;
  linkToWebsite?: string;
  projectType?: string;
  path: string;
};

export const projects: Project[] = [
  {
    path: "la-venduta",
    title: "La Venduta",
    date: "Sep 2023",
    role: "Co-founder and Fullstack Engineer",
    location: "The Netherlands",
    linkToWebsite: "https://lavenduta.com/",
    projectType: "Webshop",
    description: (
      <>
        A collaborative project that consists in a web application to send phone
        recharges and buy internet plans for Cuban users. The application
        manages fulfillment, payment processes, accounts and the details and
        status of each recharge. It has customer support and a widget for user
        reviews and blog. As a Lead Fullstack Developer, I took care of the
        design system and the integration of services such as chat support,
        email marketing solution and the supabase based back-end. <br />
        Technologies: React, Next.js, Supabase and Tailwind.
      </>
    ),
    link: "/portfolio/la-venduta",
    images: [
      {
        url: "/images/v6.png",
        alt: "La Venduta 1",
      },
      {
        url: "/images/v1.png",
        alt: "La Venduta 2",
      },
      {
        url: "/images/v2.png",
        alt: "La Venduta 3",
      },
      {
        url: "/images/v3.png",
        alt: "La Venduta 4",
      },
      {
        url: "/images/v4.png",
        alt: "La Venduta 5",
      },
    ],
  },
  // {
  //   path: "beauty-salon",
  //   title: "Lisandra Salon",
  //   date: "January 2024",
  //   role: "Lead Frontend Developer",
  //   location: "The Netherlands",
  //   linkToWebsite: "https://demo-beauty.lisichaviano.dev/",
  //   projectType: "Demo Business website",
  //   description: (
  //     <>
  //       A demo project to showcase a business website that would help businesses
  //       to boost their presence and identity in the market. It has a booking
  //       system for beauty salons, in which users can book appointments, see the
  //       services offered, the prices, the location of the salon, and the reviews
  //       of other customers. It is a responsive website that adapts to all
  //       devices. The content is managed through a CMS.
  //       <br />
  //       As a Lead Frontend Developer, I took care of the integration and design
  //       system, user experience, usability and the cleanliness of the website.
  //       <br />
  //     </>
  //   ),
  //   link: "/portfolio/beauty-salon",
  //   images: [
  //     {
  //       url: "/images/beauty.png",
  //       alt: "Beauty Salon 1",
  //     },
  //     {
  //       url: "/images/beauty2.png",
  //       alt: "Beauty Salon 2",
  //     },
  //     {
  //       url: "/images/beauty3.png",
  //       alt: "Beauty Salon 3",
  //     },
  //     {
  //       url: "/images/beauty4.png",
  //       alt: "Beauty Salon 4",
  //     },
  //   ],
  // },
  {
    path: "foryouandyourcustomers",
    title: "foryouandyourcustomers website",
    date: "Nov 2022",
    role: "Frontend Developer",
    location: "The Netherlands",
    linkToWebsite: "https://foryouandyourcustomers.com/",
    projectType: "Company's Website",
    description: (
      <>
        This project consists in the development of the foryouandyourcustomers
        company's website . It is a content website that shows all the services
        offered by the business, their employees, the locations of all its
        offices, as well as its contacts, the events to which users can
        subscribe to. It allows the post of articles written by people from the
        company, vacancies, among others.
        <br />
        The content of the website is managed by a CMS (DatoCMS), the site pages
        were built through the Gatsby static page generator. Technologies such
        as React and Tailwind were used.
      </>
    ),
    link: "/portfolio/foryouandyourcustomers",
    images: [
      {
        url: "/images/f1.png",
        alt: "foryouandyourcustomers 1",
      },
      {
        url: "/images/f2.png",
        alt: "foryouandyourcustomers 2",
      },
      {
        url: "/images/f3.png",
        alt: "foryouandyourcustomers 3",
      },
      {
        url: "/images/f5.png",
        alt: "foryouandyourcustomers 4",
      },
    ],
  },
  {
    path: "swissvolley",
    title: "SwissVolley",
    date: "Jul 2023",
    role: "Lead Frontend Developer",
    location: "The Netherlands",
    projectType: "Component Library",
    description: (
      <>
        This project was about developing a component library from the figma
        design system, created by the SwissVolley team with the purpose of using
        those components later in the new web application for keeping track of
        results and statistics about volleyball matches in Switzerland.
        <br />
        The components were implemented by using React, Tailwind and Storybook
        to document the library. With this, is possible to render each
        implemented component in isolation representing different scenarios or
        "stories" that demonstrate important use cases without interference from
        app business logic and context.
      </>
    ),
    link: "/portfolio/swissvolley",
    images: [
      {
        url: "/images/sss7.jpg",
        alt: "SwissVolley 1",
      },
      {
        url: "/images/s1.png",
        alt: "SwissVolley 2",
      },
      {
        url: "/images/s2.png",
        alt: "SwissVolley 3",
      },
      {
        url: "/images/s5.png",
        alt: "SwissVolley 4",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="responsive-width flex flex-col items-center justify-center">
      <div className="flex gap-2 md:gap-3 items-center">
        <div className="bg-firebrick w-3 h-3 md:w-5 md:h-5 overflow-hidden" />
        <p className="font-syne text-xl md:text-4xl">MY PORTFOLIO</p>
      </div>
      <p className="text-lg flex items-center justify-center text-center my-0 w-max-[560px]">
        Welcome to my portfolio. Here you will find a selection of my
        highlighted projects. Explore them to get to know more about what I do.
      </p>

      <div className="flex items-center justify-around gap-x-6 gap-y-10 flex-wrap mt-20">
        {projects.map((project) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.images[0]}
            linkToProject={project.link}
          />
        ))}
      </div>
    </div>
  );
}
