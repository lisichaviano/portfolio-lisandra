"use client";
import React from "react";
import Card from "../../components/Card";
import SkillsCard from "../../components/SkillsCard";

export default function ResumePage() {
  const resume = [
    {
      date: "May 2022 - Present",
      role: "Frontend Engineer",
      company: "foryouandyourcustomers",
      place: "Amsterdam, The Netherlands",
      description: (
        <>
          As a Front-end Developer, I have worked on several projects at
          foryouandyourcustomers like:
          <br />
          <br /> <span className="font-bold"> JOGG:</span> I worked with a team
          to maintain and implement new features for two popular clothing
          e-commerce sites using React, Gatsby, MobX, and Prismic. Good design
          and UX were critical for these fashion-based products, so we were
          always looking for ways to enhance and increase retention. When it was
          needed to improve their SEO, I was able to do so by adding structured
          data for better indexing and creating more effective sitemaps for the
          various regions and languages we support. I have also regularly
          improved page load times through the use of pre-load techniques and
          integrated with external APIs like TrustedShops.
          <br />
          <br />
          <span className="font-bold">foryouandyourcustomers website:</span> I
          was part of the development of the company's site with the objective
          of boosting its accessibility and making visible the company's brand,
          its people and offices location, available jobs, as well as showing
          articles written by employers of the company, events to which users
          can subscribe, etc. All the content of the website is managed by
          DatoCMS and the pages were created using technologies such as Gatsby,
          React and Tailwind.
          <br />
          <br />
          <span className="font-bold">SwissVolley:</span>I was the lead
          developer on this project which consisted of developing all the
          components and the system design for later use in the creation of the
          SwissVolley web application. These components were documented in
          Storybook, which allows you to see and test the different states of a
          component and add important information about them, such as: the
          properties they receive and the behavior of the component in general.
          <br />
          <br />
          <span className="font-bold">Selgros24 PL:</span>
          As part of the colaboration with the Transgourmet development team, I
          was in charge of the frontend of the Selgros24 PL{" "}
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
          and improving our EHR web application called EHR-BodyLogicMD using
          React Js. My tasks included creating new components, integrating with
          the FHIR API and other backend services, fixing UI and UX issues,
          contributing to the design system (BULMD), and participating in
          discussions about new features. In addition, I also worked on backend
          development tasks such as creating new services using .NET Core,
          fixing issues and bugs in backend services, and helping with
          maintenance tasks in the production database using AIDBOX and other
          tools like JupyterLab
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
    "Gatsby",
    "Next Js",
    "Tailwind CSS",
    "CMS (Content Management System)",
    "CSS, SASS",
    "Styled components",
    "Redux",
    "MobX",
    "Java",
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
    <div className="flex flex-col px-40 py-36 justify-center items-center bg-thistle">
      <div className="flex gap-3 items-center">
        <div className="bg-firebrick w-5 h-5 overflow-hidden" />
        <h1 className="font-syne text-4xl">RESUME</h1>
      </div>
      <div className="flex justify-between w-full items-center mb-8">
        <p className="text-3xl font-syne">Experience</p>
        <button
          onClick={onButtonClick}
          className="text-base font-questrial hover:bg-white hover:text-firebrick hover:border-firebrick font-bold text-white bg-firebrick border-2 border-transparent hover:cursor-pointer rounded-full py-2 px-4"
        >
          DOWNLOAD CV
        </button>
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
      <h2 className="text-4xl font-syne mt-28">EDUCATION</h2>
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
