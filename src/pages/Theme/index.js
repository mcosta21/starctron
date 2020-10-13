import React from 'react';
import Body from '../../components/Body';
import {  } from './styles';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Box from '../../components/Box';

function Theme() {
  return (
          <Body active="Theme">
            <Title>Starctron</Title>
            <Subtitle>Starctron</Subtitle>
            <Row height={600}>
              <Column>
                <Box flexDirection="column">
                    <Title size={30}>Starctron</Title>
                </Box>
              </Column>
            </Row>
          </Body>
  );
}

export default Theme;
