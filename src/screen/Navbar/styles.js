import styled from 'styled-components'

export const Container = styled.div`
  background: transparent;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 8px;
  
  .logo {
    width: 45px;
    height: 100%;
    border-right: 1px solid ${props => props.theme.backgrounds.darkest};
    display: flex;
    align-items: center;

      img {
        max-height: 22px;
      }
    }

    .Button {
      height: 100%;
      text-transform: capitalize;
      padding: 0px 20px;
      -webkit-app-region: no-drag;
      font-size: 13px
      font-weight: 300;
    }

`;
