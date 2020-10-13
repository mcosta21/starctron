import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme.backgrounds.lightest};
    margin: 0 20px;   
    height: ${props => props.height === undefined ? 'inherit' : props.height + 'px'};
    border-radius: 4px;
    display: ${props => props.grid ? 'grid': 'flex'};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'unset'};
    align-items: center;
    justify-content: center;
    overflow-y: overlay;
    padding: 12px 30px;
    text-align: justify;
`