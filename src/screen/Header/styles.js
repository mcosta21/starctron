import styled, { css } from 'styled-components'

const { colorsTheme } = require('../../styles/theme')

export const Container = styled.header`
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 1;
  -webkit-user-select: none;
  -webkit-app-region: drag;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.backgrounds.darker};
  border-bottom: 1px solid ${props => props.theme.backgrounds.darkest};

  strong {
    font-size: 13px;
    font-weight: 400;
    color: ${props => props.theme.colors.lighter};
  }
`

export const WindowActions = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  ${props =>
    props.position === 'left'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `};
  ${props =>
    props.shouldShowIconsOnHover &&
    css`
      &:hover svg {
        display: block;
      }
    `}
`

const colors = {
  close: colorsTheme.red,
  minimize: colorsTheme.yellow,
  maximize: colorsTheme.green
}

export const MacActionButton = styled.button`
  background: ${props => colors[props.color]};
  -webkit-app-region: no-drag;
  border: 0;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & + button {
    margin-left: 8px;
  }

  svg {
    width: 8px;
    height: 8px;
    opacity: 0.9;
    display: none;
  }

  &:hover svg {
    display: block;
  }

  &:active {
    opacity: 0.6;
  }

  &:focus {
    outline: 0;
  }
`

export const DefaultActionButton = styled.button`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};

  & + button {
    margin-left: 12px;
  }

  &:hover svg {
    color: ${props => props.theme.colors.darkest};
  }

  &:active {
    opacity: 0.6;
  }

  &:focus {
    outline: 0;
  }
`


