import React, { Component } from 'react'
import styled, {keyframes, css} from 'styled-components'
import { Link } from 'gatsby'
import MenuIcon from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'

import { colors, fonts } from '../../assets/identity'

class Navigation extends Component {
  state = {
    menuIsOpen: false,
  }

  toggleMenu = () => {

    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    })
  }

  render() {
    const { menuIsOpen } = this.state;

    return (
      <Container color={this.props.color}>
        <Brand to="/">{this.props.brand}</Brand>
        <CollapseBtn onClick={this.toggleMenu}>
          {!menuIsOpen ? <MenuIcon style={{fontSize: 25}} /> : <Close style={{fontSize: 25}}/>}
        </CollapseBtn>
        <Menu animate={menuIsOpen} height={menuIsOpen ? `auto` : 0}>
          <NavBtn to="#about">About</NavBtn>
          <NavBtn to="#projects">Projects</NavBtn>
          <NavBtn to="#contact">Contact</NavBtn>
        </Menu>
      </Container>
    )
  }
}



// animations 

const rainbow = keyframes`
  0% { 
    border-bottom: 3px solid ${colors.dark};
  }

  35% {
    border-bottom: 3px solid ${colors.blue};
  }

  100% {
    border-bottom: 3px solid ${colors.dark};
  }
`;

const expand = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 200px;
  }
`;

// styled-components

const Container = styled.div`
  background: ${props => props.color || "transparent" };
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 25px;
  box-shadow: 0 1px 3px ${colors.dark};
  z-index: 999;
`;

const Brand = styled(Link)`
  color: ${props => props.dark ? colors.white : colors.dark};
  font-family: ${fonts.primary};
  font-size: 20px;
  font-weight: 600;
  text-transform: lowercase;
  text-decoration: none;
  border-bottom: 3px solid ${colors.dark};
`;

const animateMenu = css`
  animation: ${expand} 0.2s;
`;

const Menu = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${props => props.height || 0};
    max-height: 200px;
    ${props => props.animate && animateMenu};
    animation-direction: ${props => !props.animate && `reverse`};
  }
`;

const NavBtn = styled(Link)`
  font-size: 18px;
  background: ${props => props.bgColor || `none`};
  font-family: ${fonts.primary};
  font-weight: 500;
  margin-right: 25px;
  text-decoration: none;
  cursor: pointer;
  padding: 5px 10px;
  transition: 0.3s;
  color: ${props => props.dark ? colors.white : colors.dark};

  &:hover {
    animation: ${rainbow} 2.5s linear infinite;
  }

  @media (max-width: 480px) {
    margin: 25px 20px 10px 20px;

    &:hover {
      animation: none;
    }
  }
`;

const CollapseBtn = styled.button`
  background: none;
  border: none;
  display: none;

  &:focus {
    outline: none;
  }
  
  @media (max-width: 480px) {
    display: inline-block;
  }
`;

export default Navigation;
