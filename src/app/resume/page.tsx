"use client";
import React from "react";
import Card from "../../components/Card";
import SkillsCard from "../../components/SkillsCard";

export default function ResumePage() {
  const resume = [
    {
      date: "August 2024 - Present",
      role: "Software Engineer",
      company: "T-Mobile Netherlands",
      place: "The Hague, The Netherlands",
      description: (
        <>
          Spearheaded the integration of our React Native component library into
          multiple Next.js applications related to the T-Mobile and Simpel
          webshops, to enable seamless development and reuse of UI components
          across platforms, significantly improving code maintainability and
          developer productivity.
          <br />
          <br />
          Developed, optimized, and maintained the frontend of key platforms,
          including the Login and Payment systems, ensuring smooth and secure
          customer experiences.
          <br />
          <br />
          Designed and implemented E2E testing frameworks that automated the
          testing process for key application functionalities, ensuring thorough
          validation of system behavior under real-world scenarios.
          <br />
          <br />
          Integrated tools such as Jest to enhance test coverage and provide
          continuous feedback on code quality and performance, achieving up to
          80% coverage on critical components.
          <br />
          <br />
          Employee App Maintenance: Took ownership of the ongoing maintenance
          and improvement of the Employee App, which allows employees to access
          exclusive discounts for themselves and their families.
          Responsibilities included:
          <br />
          Bug fixing: Resolved issues to improve app performance and user
          satisfaction.
          <br />
          Feature enhancement: Added new functionalities to keep the app
          relevant and user-friendly.
          <br />
          UI/UX improvements: Updated designs for better usability, aligning
          with T-Mobile’s branding guidelines.
        </>
      ),
    },
    {
      date: "May 2022 - July 2024",
      role: "Frontend Engineer",
      company: "foryouandyourcustomers",
      place: "Amsterdam, The Netherlands",
      description: (
        <>
          As a Front-end Developer, I have worked on several projects at
          foryouandyourcustomers like:
          <br />
          <br /> <span className="font-bold">
            {" "}
            Jeans Centre and Garcia:
          </span>{" "}
          Collaborating closely with a team, I've been involved in maintaining
          and implementing new features for two renowned and high-traffic
          webshops. Our tech stack includes React, Gatsby, MobX, Commercetools,
          and Prismic CMS. Given the paramount importance of design and UX,
          particularly in the fashion industry, I've actively contributed to
          design decisions aimed at enhancing user retention. Additionally, I've
          played a key role in improving SEO performance by incorporating
          structured data for better indexing and crafting efficient sitemaps
          tailored to different regions and languages. Furthermore, I've
          consistently optimized page load times through preload techniques and
          seamlessly integrated external APIs such as TrustedShops.
          <br />
          <br />
          <span className="font-bold">
            foryouandyourcustomers website:
          </span>{" "}
          I've contributed to the development of the company's website, aimed at
          promoting the brand, showcasing its people and office locations,
          listing available job opportunities, and featuring articles written by
          employees. Additionally, the website allows users to subscribe to
          events and other relevant updates. All the content of the website is
          managed by DatoCMS and the pages were created using technologies such
          as Gatsby, React, and Tailwind CSS.
          <br />
          <br />
          <span className="font-bold">SwissVolley:</span> I was the lead
          developer on the creation of their components library and design
          system, which was the base for the SwissVolley web app. The package
          was documented using Storybook, which allows developers and other
          stakeholders to test the component in a playground to demo its
          behavior.
          <br />
          <br />
          <span className="font-bold">Selgros24 PL:</span>
          As part of a collaboration with the development team, I was in charge
          of the front-end development efforts for the Selgros24 PL commerce
          website. Leveraging the "Good store" template from Frontend
          Commercetools, we've customized and adjusted components and ensured
          smooth data integration. We've also utilized The Studio from
          Commercetools for content management and versioning schemas to enhance
          content control. Technologies utilized in this project include
          Next.js, TypeScript, Commercetools Frontend, and Netlify.
          <br />
          <br />
        </>
      ),
    },
    {
      date: "May 2021 - Apr 2022",
      role: "Fullstack Engineer",
      company: "Divine Solutions",
      place: "Havana, Cuba",
      description: (
        <>
          As a member of the development team, I was responsible for building
          and improving our EHR (Electronic Health Record) application used by
          multiple clinics in Florida, United States. Our Front-end relied on
          React with Redux and Redux Saga. We also maintained a design system
          based on Bulma. In addition, I also worked on back-end development
          tasks such as creating new services with Java Spring Boot. We used a
          microservices architecture for connecting our Front-end application
          with a special database called FHIR.
        </>
      ),
    },
    {
      date: "Dec 2020 - Apr 2021",
      role: "Frontend Engineer",
      company: "DATACIMEX",
      place: "Havana, Cuba",
      description: (
        <>
          As a developer on the Tuenvio e-commerce project, I worked on the
          development of the new frontend using React Js. The site included an
          e-commerce platform for customers to browse and purchase products, as
          well as an admin dashboard for managing orders, inventory, and
          customer data. I worked closely with the rest of the development team
          to integrate the frontend with a GraphQL API developed using Django,
          which allowed us to efficiently retrieve and update data from the
          backend. In addition to React, I also utilized a variety of
          technologies and frameworks to build out the frontend, including Redux
          for state management, Bootstrap for styling, and Jest for testing.
        </>
      ),
    },
  ];

  const skills = [
    "React Js",
    "JavaScript",
    "Typescript",
    "Redux",
    "Gatsby",
    "Next Js",
    "Java",
    "Spring Boot",
    "Tailwind CSS",
    "CMS (Content Management System)",
    "CSS, SASS",
    "Styled components",
    "MobX",
    "ELK",
    "Python",
    "GraphQL",
  ];

  const languages = ["English", "Spanish"];

  const onButtonClick = () => {
    fetch("CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Lisandra-Pena-Software-Engineer-CV.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex flex-col responsive-width justify-center bg-thistle">
      <div className="flex flex-wrap">
        <div className="flex gap-2 md:gap-3 items-center">
          <div className="bg-firebrick w-3 h-3 md:w-5 md:h-5 overflow-hidden" />
          <p className="font-syne text-xl md:text-4xl">RESUME</p>
        </div>
        <div className="flex justify-between flex-wrap w-full items-center max-md:mt-8 mb-2 md:mb-8">
          <p className="text-xl md:text-3xl font-syne">Experience</p>
          <button
            onClick={onButtonClick}
            className="text-xs whitespace-nowrap md:text-base font-questrial hover:bg-white hover:text-firebrick hover:border-firebrick font-bold text-white bg-firebrick border-2 border-transparent hover:cursor-pointer rounded-full py-2 px-4"
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {resume.map((job) => (
          <Card
            date={job.date}
            role={job.role}
            company={job.company}
            place={job.place}
            description={job.description}
          />
        ))}
      </div>
      <h2 className="text-xl md:text-4xl font-syne mt-28">EDUCATION</h2>
      <Card
        date="Sep 2016 - Mar 2021"
        role="Software Engineer"
        company="Technological University of Havana José A. Echeverría, CUJAE"
        place="Havana, Cuba"
        description={
          <>
            <li>
              Thesis work: System for detecting users who violate the CUJAE code
              of ethics.
            </li>
            <li>
              Description: Integration of Logstash with MongoDB and Postgres
              databases.
            </li>
            <br />A Python based service for processing and analysis of logs in
            real time using caching techniques and async programming. Shannon's
            entropy measure was used as metric for the likelihood of
            violation.Integration with Elasticsearch and Kibana.
          </>
        }
      />
      <div className="mt-12">
        <SkillsCard skills={skills} languages={languages} />
      </div>
    </div>
  );
}
