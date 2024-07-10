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
            Hi, I&#39;m Vanessa Giannoni, a passionate full-stack developer with a focus on
            front-end development. I specialize in creating accessible, inclusive, and scalable
            projects. As a true team player with strong communication skills, I thrive in
            collaborative environments. I share my knowledge through my blog and have mentored a
            team of girls for Technovation Girls Florianópolis 2024. As a speaker, I enjoy inspiring
            other women by sharing my early career experiences.
            <br />
            <br />
            When I&#39;m not coding, you&#39;ll probably find me studying Go/Baduk (an Asian board
            game), solving puzzles, watching movies and series, or simply enjoying a good cup of
            coffee or chimarrão with my family.
          </Text>
          <br />
          <Text fw={600}>Let&#39;s build something great together!</Text>
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
