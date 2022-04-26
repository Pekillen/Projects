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
        I created this website to give you a chance to get to know me a little better. I am a young, energetic, and open-minded person who is looking for opportunities to further develop myself. Discover how well we fit together!
      </SectionText>
      <Button onClick={() => window.location = "#about"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>    
);

export default Hero;