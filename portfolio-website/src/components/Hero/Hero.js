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
        I am an aspiring programmer with passion for topics of Web Dev and machine learning. I am a young, energetic, and open-minded person who is looking for opportunities to further develop myself. Discover my projects and more about me down below!
      </SectionText>
      <Button onClick={() => window.location = "#about"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>    
);

export default Hero;