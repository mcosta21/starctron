import React from 'react';
import Body from '../../components/Body';
import { } from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Box from '../../components/Box';

function Layout() {
  return (
          <Body active="Layout">

              <Title>Row with 1 column</Title>
              <Subtitle>Linha com 1 coluna</Subtitle>
              <Row height={100}>
                <Column>
                  <Box>
                    <h3>100%</h3>
                  </Box>
                </Column>
              </Row>

              <br />

              <Title>Row with 2 columns</Title>
              <Subtitle>Linha com 2 colunas</Subtitle>
              <Row height={100}>
                <Column width={50}>
                  <Box>
                    <h3>50%</h3>
                  </Box>
                </Column>
                <Column width={50}>
                  <Box>
                    <h3>50%</h3>
                  </Box>
                </Column>
              </Row>

              <br />

              <Title>Row with 3 proportional columns</Title>
              <Subtitle>Linha com 3 colunas proporcionais</Subtitle>
              <Row height={100}>
                <Column>
                  <Box>
                    <h3>33%</h3>
                  </Box>
                </Column>
                <Column>
                  <Box>
                    <h1>33%</h1>
                  </Box>
                </Column>
                <Column>
                  <Box>
                    <h1>33%</h1>
                  </Box>
                </Column>
              </Row>

              <br />

              <Title>Row with 2 columns with different sizes</Title>
              <Subtitle>Linha com 2 colunas com tamanhos distintos</Subtitle>
              <Row height={100}>
                <Column width={70}>
                  <Box>
                    <h3>70%</h3>
                  </Box>
                </Column>
                <Column width={30}>
                  <Box>
                    <h3>30%</h3>
                  </Box>
                </Column>
              </Row>

              <br />

              <Title>2 rows with 2 columns of different sizes</Title>
              <Subtitle>2 Linhas com 2 colunas com tamanhos distintos</Subtitle>
              <Row height={130}>
                <Column width={20}>
                  <Box>
                    <h3>20%</h3>
                  </Box>
                </Column>
                <Column width={80}>
                  <Box>
                    <h3>80%</h3>
                  </Box>
                </Column>
              </Row>
              <Row height={130}>
                <Column width={40}>
                  <Box>
                    <h3>40%</h3>
                  </Box>
                </Column>
                <Column width={30}>
                  <Box>
                    <h3>30%</h3>
                  </Box>
                </Column>
                <Column width={30}>
                  <Box>
                    <h3>30%</h3>
                  </Box>
                </Column>
              </Row>

          </Body>
  );
}

export default Layout;
