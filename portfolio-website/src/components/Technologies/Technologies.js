import React from 'react';
import { DiFirebase, DiReact, DiMysql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of IT Technologies:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JS & React.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python & Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Knowledge of <br />
            Git & SQL 
          </ListParagraph>
        </ListContainer>        
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
