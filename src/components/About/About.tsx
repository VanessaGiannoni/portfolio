'use client';

import { Group, Image, Text } from '@mantine/core';
import classes from './about.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionContainer from '../SectionContainer/SectionContainer';

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionTitle title="About" />
      <Group justify="space-between" align="flex-start" gap="lg">
        <div className={classes.textContainer}>
          <Text>
            I&#39;m Vanessa Giannoni, a Software Engineer with a passion for communication and
            teamwork. Over the years, I&#39;ve had the pleasure of working on a variety of exciting
            projects for companies like GSK, McCormick, HP, and Trupanion. As a full-stack engineer
            with strong focus on the frontend, I always strive to deliver projects that are
            accessible and inclusive, adhering to WCAG and A11Y standards.
            <br />
            <br />
            Writing clean, clear, and scalable code is a priority for me. I also enjoy sharing my
            knowledge through writing technical posts, sharing my development journey, giving talks,
            and mentoring. In 2024, I had the incredible opportunity to mentor a talented team of
            girls at Technovation Florianópolis, and it was such a fulfilling experience.
            <br />
            <br />
            When I&#39;m not coding, you&#39;ll probably find me studying Go/Baduk (an Asian board
            game), solving puzzles, watching movies and series, or simply enjoying a good cup of
            coffee or chimarrão with my family.
          </Text>
        </div>
        <div>
          <Image
            radius="md"
            h={300}
            w={300}
            src="/profile-pic.jpeg"
            className={classes.imageFilter}
          />
        </div>
      </Group>
    </SectionContainer>
  );
}
