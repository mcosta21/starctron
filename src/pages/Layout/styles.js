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

export const Title = styled.h3`
    margin: 10px 20px;   
`
export const Subtitle = styled.h5`
    margin: 10px 20px;   
`