import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { Section } from '../../../styles/layouts';

import { navigate } from 'gatsby'
import { TabStyled } from './styles';

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
    <Section>
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
          <h1>eeee</h1>
        </Tab>
      </TabStyled>
      </Container>
    </Section>  
  );
}