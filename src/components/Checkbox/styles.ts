import styled, { keyframes } from 'styled-components'

import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;

  width: 22px;
  height: 22px;
  border-radius: 4px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: red;
  position: absolute;
  border: 2px solid ${(props) => props.theme.backgroud};

  [data-state='checked'] {
    background: ${(props) => props.theme.blue};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.blue};
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  };
  to {
    transform: translateY(0);
  };
  `

const slideOut = keyframes`
  from {
    transform: translateY(0);
  };
  to {
    transform: translateY(-100%);
  };
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: white;
  width: 22px;
  height: 22px;

  [data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`
