import styled from 'styled-components';

import { colors, fonts } from '../assets/identity';

export const Container = styled.div`
  height: ${props => props.height || `auto`};
  width: ${props => props.width || `80%`};
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => props.align || `center`};
  justify-content: ${props => props.justify || `center`};
`;

export const FluidContainer = styled(Container)`
  background-color: ${props => props.bgColor || colors.white};
  width: 100%;
  padding: 85px;
`;

export const Heading = styled.h1`
  font-family: ${fonts.primary};
  font-size: 35px;
  font-weight: 300;
  color: ${props => props.color || colors.white};
  text-align: ${props => props.textAlign || 'left'};

  &:after {
    content: " ";
    display: block;
    margin: 5px ${props => props.marginX || 0};
    width: 65px;
    border: 2px solid ${props => props.color || colors.white}; 
    border-radius: 6px;
  }
`;