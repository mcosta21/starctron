import styled from 'styled-components'

export const Box = styled.div`
    background: ${props => props.theme.backgrounds.lightest};
    margin: 0 20px;   
    height: inherit;     
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`
