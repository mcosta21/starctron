import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme.backgrounds.lightest};
    margin: 0 20px;   
    height: inherit;     
    border-radius: 4px;
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'unset'};
    align-items: center;
    justify-content: center;
`