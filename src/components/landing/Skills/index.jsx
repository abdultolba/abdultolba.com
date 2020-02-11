import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Abdulrahman and I'm a Full Stack Software Developer!" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
          I'm an ambitious full stack web developer driven by my passion for innovation and creating. As a recent
          graduate from Wayne State University, I am constantly working on projects that{' '}
        </p>
        <h2>Skills</h2>
        <p>
          I have a diverse set of skills, ranging from design to building full client-server applications. I have over 4
          years of experience using HTML, CSS, and Javascript ES6. Over the past year, I have worked with React and
          Anguar for defining application views. I also worked on numerous projects using PHP7, Django, Node.js, ASP.NET
          Core, and Java.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
