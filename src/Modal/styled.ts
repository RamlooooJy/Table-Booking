import styled from "styled-components";
import {Flex} from "../Application/globalStyled";

export const StyledModal = styled.div<{isActive: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.darkTransparent};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: ${props => props.theme.transitions.primary};
  .info {
    font-size: 2rem;
    line-height: 2.1rem;
    color: aliceblue;
    p {
      margin: 0;
      padding: 6px;
    }
  }
  * {
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
  }
`

export const StyledModalContainer = styled.div`
  padding: 35px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 820px;
  border-radius: 16px;
  background: ${props => props.theme.colors.dark};
  box-shadow: ${props => props.theme.shadows.primary};
  overflow: auto;
`
export const StyledInputsContainer = styled.div`
  .container {
    div {
      width: 49%;
    }
  }
`

export const StyledControlsContainer = styled(Flex)`
  
`
