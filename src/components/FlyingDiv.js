import React, { Component } from 'react'
import styled from 'styled-components'
import { FluidContainer } from './Container';
import LinesImg from './LinesImg';

class FlyingDiv extends Component {

  // TODO create parallax effect for lines

  // will not update mousePos because z-index is < 0

  render() {
    return (
      <FloatingLines bgColor="transparent">
        <LinesImg />
      </FloatingLines>
    )
  }
}

const FloatingLines = styled(FluidContainer)`
  position: fixed;
  top: -10px;
  z-index: -1;
`;

export default FlyingDiv;