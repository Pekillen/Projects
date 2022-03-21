import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Velkommen!<br />
        My name is Peter.     
      </SectionTitle>
      <SectionText>
      Welcome to my portfolio application. I am an aspiring software engineer. Among my interests there are: Music, Languages and Science, but for some time now I am hooked up on IT! 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>    
);

export default Hero;