import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    min-height: 100vh;

    .button-small-menu{
        width: 20px;
        height: 60px;
        background: ${props => props.theme.backgrounds.darker};
        position: fixed;
        top: 45vh;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0px 5px 5px 0px;
        cursor: pointer;
        transition: .4s;
    }
`;

export const Content = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 85px);
    margin-top: 15px;
    padding-left: 25px;
    padding-bottom: 20px;
`


