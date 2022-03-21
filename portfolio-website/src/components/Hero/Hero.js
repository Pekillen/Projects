import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Velkommen!<br />
        My name is Piotr.     
      </SectionTitle>
      <SectionText>
      Welcome to my portfolio React Application. I am an aspiring software engineer - I have been hooked up on IT for quite some time now and this portfolio is here to help me showcase my learning progress.  
      </SectionText>
      <Button onClick={() => window.location = "#about"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>    
);

export default Hero;