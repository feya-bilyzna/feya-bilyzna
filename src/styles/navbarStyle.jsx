import styled from 'styled-components'

export const NavbarSticky = styled.nav`
  height: 55px;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;

  display: flex;

  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;

  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`
