import React from 'react';
import Body from '../../components/Body';
import { Title, Box } from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';

function Home() {
  return (
          <Body active="Home">

              <Row height={600}>
                <Column>
                  <Box>
                    <h3>100%</h3>
                  </Box>
                </Column>
              </Row>
          </Body>
  );
}

export default Home;
