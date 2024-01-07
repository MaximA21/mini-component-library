/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        "--height": 8 + "px",
        "--padding": "0px",
        "--radius": "4px",
    },
    medium: {
        "--height": 12 + "px",
        "--padding": "0px",
        "--radius": "4px",
    },
    large: {
        "--height": "16px",
        "--padding": "4px",
        "--radius": "8px",
    }
}


const ProgressBar = ({value, size}) => {
    const coreValues = SIZES[size];
    if (!coreValues) {
        throw new Error(`Unknown Size: ${size}`)
    }
    return <>
        <Wrapper
            role={"progressbar"}
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            value={value}
            style={coreValues}>

            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper>
            <Bar style={{"--width": value + "%"}} />
            </BarWrapper>
        </Wrapper>
        <p>{size}</p>
    </>
};

export default ProgressBar;

const Wrapper = styled.div`
 
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`

const BarWrapper = styled.div`
border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`

/*
const ProgressBar = ({ value, size }) => {
    const coreValues = SIZES[size]
    console.log(coreValues)
 return <>
   <Bar max="100" value={value} style={coreValues} aria-valuenow={value}></Bar>
  <p>{size}</p>
  </>
};

export default ProgressBar;

const Bar = styled.progress`
  border: none;
  width: 370px;
  height: var(--height);

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--radius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-radius: ${p => p.value >= 99.8 ? "2px" : ""};
  }
`
*/
