import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 10px;
    border: 0;
    border-radius: 50px;
    color: ${props => props.theme.colors.dark};
    background: transparent;
    cursor: pointer;
    transition: .1s;

    &:hover {
        background: ${props => props.theme.backgrounds.darker};
    }
`;