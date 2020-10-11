import styled from 'styled-components'

export const Container = styled.h3`
    margin: 10px 20px;    
    font-weight: 500;
    color: ${props => props.color };
    font-size: ${props => props.size ? props.size + 'pt' : '12pt' }
`