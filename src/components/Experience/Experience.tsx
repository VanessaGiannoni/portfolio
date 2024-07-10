'use client';

import { Spoiler, Timeline } from '@mantine/core';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import classes from './experience.module.css';
import TimeLineItem from './subcomponents/TimeLineItem';
import Company from './subcomponents/Company';

export default function Experience() {
  const timeLineItems = [
    {
      id: 0,
      title: 'Trupanion',
      jobTitle: 'Mid Software Engineer',
      period: 'Aug 21, 2023 - Mar 31, 2024',
      src: '/trupanion-logo.png',
      altText: 'Trupanion logo',
      description:
        'The project consisted of three different management platforms, a registration and sales website for pet life insurance, and the Back-end For Front-end (BFF) project. My work went far beyond development, as I worked on all sides, I needed flexibility, adaptation, and much communication to be able to carry out the different tasks. In addition to working at all ends, I helped fellow developers at all levels and project managers to be able to deliver a product within accessibility standards (AA) and with maximum quality and scalability.',
      stack:
        'TypeScript; Next.js; Jest; Node.js; Zod; Stripe; CSS-in-JS; Mantine; Git; Azure; Contentful; Tech detailing; Architecture; Server-side rendering (SSR); Client-side rendering (CSR)',
    },
    {
      id: 1,
      title: 'GSK - Target The Future',
      jobTitle: 'Jr. Software Engineer',
      period: 'Jun 2023 - Aug 2023',
      src: '/GSK-logo.png',
      altText: 'GSK logo',
      description:
        "This time, the client needed to update some pages on a website that was developed in 2021. Some text and style changes were added. As the project had already been through a few developers, I added documentation to explain some of the processes carried out, and linked the Jira tasks that requested the changes, making it easier for future developers to find what they needed, as well as implementing a versioning system with the team's DevOps and releases that hadn't been implemented previously.",
      stack: 'Nuxt.js; Scss; Static Site Generation (SSG); Git; GitHub',
    },
    {
      id: 2,
      title: 'ArcTouch - Zoho People Migration',
      jobTitle: 'Jr. Software Engineer',
      period: 'Nov 1, 2023 - May 31, 2023',
      src: '/zoho-people-logo.png',
      altText: 'Zoho people logo',
      description:
        "In my first internal project within the company, I was able to explore new horizons and had the freedom to choose the technology that best suited the situation. What started as a small migration that would use Zoho People's HR management system API, ended up becoming something bigger. The idea was to migrate the spreadsheet system to the new platform, so I needed to be side by side with the client to understand their pain and be able to adapt a Python script so that they could download and upload the information on the requested platform, in addition, I took the opportunity to add some tests using PyTest and thus increase the code quality.",
      stack: 'Python3; PyTest; Pandas; Google Sheets API; Git; GitHub',
    },
    {
      id: 3,
      title: 'HP - HP One',
      jobTitle: 'Jr. Software Engineer',
      period: 'Mar 2022 - Oct 30, 2023',
      src: '/hp-logo.png',
      altText: 'HP logo',
      description:
        "During my time at HP, I had the opportunity to work in two different teams. The first team focused on creating a micro-frontend (MFE) orchestrator so HP's development team could add new MFE projects in different technologies alongside legacy projects. In this team, I focused on documenting and mapping the project for new developers who would use the tool. In the second team, I focused on developing a platform for controlling the plans users would access when they subscribed to the HP One service. This team focused on developing micro-frontends in ReactJS and TypeScript.",
      stack:
        'TypeScript; React.js; Jest; CSS-in-JS; Scss; Webpacks; Micro Front Ends (MFE); Documentation; Git; GitHub',
    },
    {
      id: 4,
      title: "McCormick's - Super Bowl Bonecoin",
      jobTitle: 'Jr. Software Engineer',
      period: 'Nov 16, 2021 - Feb 15, 2022',
      src: '/mccormick-logo.png',
      altText: "McCormick's logo",
      description:
        'The aim of this project was to go live during the Super Bowl in the United States and Canada. The main idea was that users could take photos of chicken wing bones and turn them into coins, and at the end of the competition whoever had the most coins could exchange them for a prize. This project was developed as a web app for cell phone and tablet browsers only. The technologies used for development were ReactJS and Typescript',
      stack: 'TypeScript; React.js; CSS-in-JS; Scss; WebApp; Git; GitHub',
    },
    {
      id: 5,
      title: 'GSK - Target The Future',
      jobTitle: 'Jr. Software Engineer',
      period: 'Oct 2021 - Nov 2021',
      src: '/GSK-logo.png',
      altText: "GSK's logo",
      description:
        'The project consisted of a static website developed in VUE with only one form to receive user registrations. The target the future website provides information on multiple myeloma and encourages patients to share their stories in order to promote scientific research into this rare cancer.',
      stack: 'JavaScript; Nuxt.js; Scss; Git; GitHub; Static-Site Generation (SSG)',
    },
  ];

  const showLabel = (
    <span className={classes.spoilerLabelWrapper}>
      Show more <FaChevronCircleDown />
    </span>
  );

  const hideLabel = (
    <span className={classes.spoilerLabelWrapper}>
      Hide <FaChevronCircleUp />
    </span>
  );

  return (
    <SectionContainer id="experience">
      <SectionTitle title="Experience" />
      <Company
        company="ArcTouch"
        jobTitle="Software Engineer"
        period="Sep 6, 2021 to May 14, 2024"
        description="During my time at ArcTouch, I worked on several projects as a Frontend Engineer. I was an active collaborator, utilizing my idle time to provide value for the company. This included giving talks about accessibility, mentoring interns, and writing technical articles for the company blog. Below, you can find a brief overview of my experiences at the company."
      />
      <br />
      <Spoiler hideLabel={hideLabel} showLabel={showLabel} maxHeight={170} classNames={classes}>
        <Timeline
          bulletSize={48}
          lineWidth={2}
          autoContrast
          classNames={classes}
          active={1}
          mb={25}
        >
          {timeLineItems.map((item) => (
            <TimeLineItem
              title={item.title}
              jobTitle={item.jobTitle}
              period={item.period}
              src={item.src}
              altText={item.altText}
              description={item.description}
              stack={item.stack}
              key={item.id}
            />
          ))}
        </Timeline>
      </Spoiler>

      <Company
        company="L&M Sistemas"
        jobTitle="Jr. Software Engineer"
        period="Jun 2021 - Aug 2021"
        description={
          "I had the opportunity to participate in the creation of the company's web development sector, where I worked on some projects in which I developed the front end in ReactJS, aiming for accessibility, responsiveness, and simplicity. Connecting to APIs developed by the company in Delphi Seattle and Postgres database."
        }
        stack="Skills: React.js; JavaScript; React bootstrap; Figma; UX/UI; TortoiseSVN"
      />
      <Company
        company="Ninsaúde"
        jobTitle="Intern"
        period="May 2020 - May 2021"
        description="I worked mainly in the backend area, resolving small bugs and applying improvements to the system, using PHP as a language for creating APIs and jQuery as a technology to connect APIs via Ajax, always taking care of the performance and security of the code. I monitor and participate in projects both solo and with the development team, using agile methodologies such as Kanban and XP, and using tools such as Jira to control and delegate tasks."
        stack="Skills: PHP 7+; JavaScript; jQuery; CSS3; HTML5; Bootstrap; Git; Bitbucket; RestAPI; MySQL;"
      />
      <Company
        company="Góes & Nicoladelli Advogados Associados"
        jobTitle="Developer"
        period="Nov 2018 - Oct 2019"
        description="I was responsible for developing the internal web system of the headquarters of Góes & Nicoladelli Advogados Associados in Criciúma/SC. Mainly focusing on backend infrastructure and software design.The internally developed platform used PHP 5.6 and the Laravel framework, however they were migrating to more current versions. A MySQL database approach was used. From a small but constantly growing structure focused on helping and streamlining the company's work. Our team employed agile methodologies according to our needs"
        stack="Skills: PHP 5+; JavaScript; jQuery; CSS3; HTML5; Bootstrap; Laravel 5.2; RestAPI; MySQL;"
      />
    </SectionContainer>
  );
}
