import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    background: ${props => props.theme.backgrounds.lightest};
    width: inherit;
`

export const LogoBar = styled.main`
    width: inherit;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 15vh;
`

export const Options = styled.div`
    width: inherit;
    height: 77vh;
    overflow-y: auto;

    a:first-child {
        margin-top: 10px;
    }

    a {
        text-decoration: none;
        width: inherit;
        height: 45px;
        font-size: 14px;
        color: ${props => props.theme.backgrounds.darker};
        display: flex;
        align-items: center;
        margin-top: 8px;
    }

    a div:first-child{
        display: flex;
        justify-content: center;
        align-content: center;
    }

    a div {
        width: 100%;
    }

    a:hover {
        background-image: linear-gradient(to right, ${props => props.theme.backgrounds.dark}, ${props => props.theme.backgrounds.dark});
        color: ${props => props.theme.colors.dark};
    }

    a.active {
        border-right: 3px solid ${props => props.theme.colorsTheme.blue};
        border-radius: 2px;
        font-weight: 700;
        color: ${props => props.theme.colors.lightest};
    }

    a.active svg {
        color: ${props => props.theme.colorsTheme.blue};
    }
`

export const Footer = styled.footer`
    height: 8vh;
    border-top: 1px solid ${props => props.theme.backgrounds.darker};
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div {
        position: fixed;
        z-index: 999;
        background: ${props => props.theme.backgrounds.lightest};
        height: inherit;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-left: 1px solid ${props => props.theme.backgrounds.darker};
        animation: footer-width .5s;
        opacity: 1
    }

    @keyframes footer-width {
        0% {
            width: 0;
            opacity: 0
        }
    }
`