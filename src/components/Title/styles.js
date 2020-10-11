import styled from 'styled-components'

export const Container = styled.h1`
    margin: 10px 20px;  
    font-size: ${props => props.size ? props.size + 'pt' : '14pt' }
`