import styled from 'styled-components'
import { colors } from 'config/themes'

export const Container = styled.div`
  margin-bottom: 1rem;
`

export const InputField = styled.input`
  display: block;
  background-color: ${({ inverted }) =>
    inverted ? colors['secondaryDark'] : colors['secondaryDark']};
  border-radius: 10px;
  text-align: ${({ type }) => type === 'time' && 'center'};
  color: ${colors.darkText};
  outline: none;
  border: none;
  padding: 0.55rem 1rem;
  font-size: 1rem;

  &::placeholder {
    font-family: Gilroy-ExtraBold, sans-serif;
    color: #c6c3c3;
    opacity: 0.7;
    content: 'red';
    text-transform: uppercase;
  }
`

export const Label = styled.label`
  font-weight: 900;
  margin-left: 1rem;
  color: ${colors.darkText};
`

export const Error = styled.span`
  display: block;
  padding: 0.3rem 0;
  font-size: 0.75rem;
  color: ${colors.red};
`
