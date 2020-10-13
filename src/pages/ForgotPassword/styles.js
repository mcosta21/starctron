import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: flex-end;
    text-align: center;
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.colors.lightest};
    
    & div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    & div:first-child img {
        animation-name: logo;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        opacity: .5
    }

    @keyframes logo {
        0%   {transform: scale(0.8);}
        50% {transform: scale(0.9);}
        100% {transform: scale(0.8);}
    }

    & form {
        height: inherit;
        background: ${props => props.theme.backgrounds.lightest};
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & form img {
        width: 20%;
        margin-bottom: 40px;
    }

    & form section{
        padding: 40px;
        border: none;
        width: inherit;
    }

    & .field {
        text-align: start;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }

    & .field label {
        margin-bottom: 10px;
    }

    & .field input {
        flex: 1;
        border-radius: 8px;
        border: 2px solid ${props => props.theme.backgrounds.dark};
        padding: 16px 24px;
        font-size: 16px;
        color: ${props => props.theme.colors.lightest};
        background: ${props => props.theme.backgrounds.dark};
    }

    & .button-group {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .button-group a {
        text-decoration: none;
        font-size: 14px;
        color: ${props => props.theme.colors.lightest};
    }

    & .button-group button {
        height: 50px;
        padding: 0 40px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        color: ${props => props.theme.colors.dark};
        background: ${props => props.theme.backgrounds.darker};
    }

    & .message-validator {
        height: 40px;
        margin-top: 30px;
    }

    & .message-validator p {
        width: 100%;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${props => props.theme.colorsTheme.red};
        color: ${props => props.theme.colorsTheme.red};
        border-radius: 4px;
    }
`;