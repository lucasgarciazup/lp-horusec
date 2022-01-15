import React, { useState } from 'react';
import { Tab, Container } from 'react-bootstrap';
import { Section } from '../../../styles/layouts';
import { TabStyled } from './styles';
import Team from '../tabs/team';

export default function BodyCommunity() {
  const tabs = [
    {
      key: "versions",
      title: "Versões"
    },
    {
      key: "videos",
      title: "Videos"
    },
    {
      key: "team",
      title: "Time Horusec"
    }
  ];
  
  const [key, setKey] = useState(tabs[0].key);

  return (
    <Section className='h-100' style={{ minHeight: '70vh'}}>
      <Container>
      <TabStyled
       id="community-tabs"
       activeKey={key}
       onSelect={(k) => setKey(k)}
       className="mb-3" 
       >
        <Tab eventKey={tabs[0].key} title={tabs[0].title}>
          <h1 className='testee'>lol</h1>
        </Tab>
        <Tab eventKey={tabs[1].key} title={tabs[1].title}>
          <h1>sadas</h1>
        </Tab>
        <Tab eventKey={tabs[2].key} title={tabs[2].title}>
          <Team />
        </Tab>
      </TabStyled>
      </Container>
    </Section>  
  );
}