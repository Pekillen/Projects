import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        My name is Piotr Kwiatkowski
      </SectionTitle>
      <SectionText>
        I am aspiring Software Developer  "!imporve"   
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>    
);

export default Hero;