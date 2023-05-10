import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome!<br />  
        My name is Piotr      
      </SectionTitle>
      <SectionText>
        I am an aspiring programmer with a passion for Web Development. I bring a diverse skillset and an unwavering enthusiasm to every project. Check out my portfolio to see what I can do. Let's discuss how I can contribute to your team!
      </SectionText>
      <Button onClick={() => window.location = "#about"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>      
);

export default Hero;