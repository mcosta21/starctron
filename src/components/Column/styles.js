import styled from 'styled-components'

export const Container = styled.div`
    height: ${props => props.height === undefined ? 'inherit' : props.height + 'vh'};
    width: ${props => props.width === undefined ? '100vw' : props.width + 'vw'};
    overflow-y: hidden;
    overflow-x: hidden;
    transition: all ease .6s;
`;