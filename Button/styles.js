import styled, { css } from 'styled-components'
import { colors } from 'config/themes'

export const DefaultButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  line-height: 1.5rem;

  padding: 0.375rem 0.75rem;

  background: ${colors['primary']};
  color: white;
  border: 2px solid ${colors['secondary']};
  border-radius: 10rem;
  outline: none;

  font-family: Gilroy-ExtraBold, sans-serif;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 0 4px 0 ${colors['secondary']};
  }

  & > i {
    color: white;
    font-size: 0.875rem;
    margin-right: 0.5rem;
  }
`

export const RedButton = styled(DefaultButton)`
  background: ${colors['red']};
  border: 2px solid ${colors['red']};

  &:hover {
    box-shadow: 0 0 4px 0 ${colors['red']};
  }
`

export const YellowButton = styled(DefaultButton)`
  background-color: ${colors['secondary']};
  color: black;

  & > i {
    color: black;
  }
`
export const GhostButton = styled(DefaultButton)`
  border: none;
  border-radius: 0;
  background-color: transparent;
  color: ${colors['secondary']};
  font-family: Gilroy, sans-serif;

  &:hover {
    box-shadow: none;
  }

  & > i {
    color: ${colors['secondary']};
  }
`
