import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid ${props => props.theme.backgrounds.dark};
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .content-user {
        display: flex;
        align-items: center;
        border-radius: 50px;
        padding: 5px;
        cursor: pointer;
        transition: .2s;
    }

    .content-user:hover {
        background: ${props => props.theme.backgrounds.dark};
    }

    .content-user img{
        width: 38px;
        height: 38px;
        border-radius: 50px;
    }

    .content-user span {
        padding: 0 15px;
        font-size: 14px;
        font-weight: 500;
        color: ${props => props.theme.colors.lighter}
    }

    .content-user div {
        width: 10px;
        height: 10px;
        z-index: 1;
        background: ${props => props.theme.colorsTheme.red};
        margin-left: -9px;
        margin-top: 30px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px ${props => props.theme.backgrounds.darker}
    }

`