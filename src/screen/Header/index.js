import React, { useCallback, useMemo, memo } from 'react'
import { FiX, FiMinus, FiMaximize2, FiSquare } from 'react-icons/fi'
import os from 'os';
import {
  Container,
  WindowActions,
  MacActionButton,
  DefaultActionButton
} from './styles';
import Navbar from '../Navbar';

const remote = window.require('electron').remote;

function Header(props) {

  const handleCloseWindow = useCallback(() => {
    const window = remote.getCurrentWindow()
    window.close()
  }, [])

  const handleMaximize = useCallback(() => {
    const window = remote.getCurrentWindow()

    const isMacSystem = os.platform() === 'darwin'
    if (isMacSystem) {
      return window.setFullScreen(!window.isFullScreen())
    }

    const { width: currentWidth, height: currentHeight } = window.getBounds()

    const {
      width: maxWidth,
      height: maxHeight
    } = remote.screen.getPrimaryDisplay().workAreaSize

    const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight

    if (!isMaximized) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  }, [])

  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.minimize()
  }, [])

  const shouldUseMacOSWindowActions = useMemo(() => {
    return os.platform() === 'darwin'
  }, [])

  return (
    <Container theme={props.theme}>
      <strong>Finance</strong>

      {shouldUseMacOSWindowActions ? (
        <WindowActions position="left" shouldShowIconsOnHover>
          <MacActionButton color="close" onClick={handleCloseWindow}>
            <FiX />
          </MacActionButton>
          <MacActionButton color="minimize" onClick={handleMinimize}>
            <FiMinus />
          </MacActionButton>
          <MacActionButton color="maximize" onClick={handleMaximize}>
            <FiMaximize2 />
          </MacActionButton>
        </WindowActions>
      ) : (
        <>
        <WindowActions position="left">
          <Navbar />
        </WindowActions>
        <WindowActions position="right">
          <DefaultActionButton onClick={handleMinimize}>
            <FiMinus />
          </DefaultActionButton>
          <DefaultActionButton onClick={handleMaximize}>
            <FiSquare />
          </DefaultActionButton>
          <DefaultActionButton onClick={handleCloseWindow}>
            <FiX />
          </DefaultActionButton>
        </WindowActions>
        </>
      )}

    </Container>
  )
}

export default memo(Header);
