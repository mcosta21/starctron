import styled from 'styled-components'

export const Container = styled.section`
    height: ${props => props.height === undefined ? '100px' : props.height + 'px'};
    width: ${props => props.width === undefined ? '100%' : props.width + '%'};
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    margin-bottom: 15px;
`;