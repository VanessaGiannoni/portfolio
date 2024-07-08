'use client';

import { Container, Group, Image, Text } from '@mantine/core';
import classes from './about.module.css';

export default function About() {
  return (
    <section id="about" className={classes.sectionContainer}>
      <Container>
        <Group justify="space-between" align="flex-start" gap="lg">
          <div className={classes.textContainer}>
            <Text>
              I&#39;m Vanessa Giannoni, a Software Engineer with a passion for communication and
              teamwork. Over the years, I&#39;ve had the pleasure of working on a variety of
              exciting projects for companies like GSK, McCormick, HP, and Trupanion, as well as
              some interesting internal projects. As a full-stack engineer who loves focusing on the
              frontend, I always strive to deliver projects that are accessible and inclusive,
              adhering to WCAG and A11Y standards. <br />

              Writing clean, clear, and scalable code is a priority for me. What I truly enjoy is
              being part of a team. I&#39;m very communicative and believe in maintaining a healthy,
              relaxed atmosphere where everyone feels comfortable sharing their knowledge. Helping
              others grow and succeed is incredibly rewarding, and I love seeing my teammates
              thrive.
              <br /> I also enjoy sharing my knowledge through writing technical posts, sharing my
              development journey, giving talks, and mentoring. In 2024, I had the incredible
              opportunity to mentor a talented team of girls at Technovation Floripa, and it was
              such a fulfilling experience.
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
      </Container>
    </section>
  );
}
