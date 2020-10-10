import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    align-content: center;
    justify-content: flex-end;
    text-align: center;
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.colors.lightest};
    
    & form {
        width: 500px;
        height: inherit;
        background: ${props => props.theme.backgrounds.lightest};
        display: grid;
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