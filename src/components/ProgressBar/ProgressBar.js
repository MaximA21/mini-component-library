/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        "--height": 8 + "px",
        "--radius": "4px",
        "--padding": "0px",
    },
    medium: {
        "--height": 12 + "px",
        "--radius": "4px",
        "--padding": "0px",
    },
    large: {
        "--height": "24px",
        "--radius": "8px",
        "--padding": "4px",
    }
}



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
