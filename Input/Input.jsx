import React, { forwardRef } from 'react'
import { Container, InputField, Error, Label } from './styles'

export const Input = forwardRef(
  (
    {
      value,
      placeholder,
      name,
      type,
      required,
      inverted,
      isTouched = false,
      error,
      label = null,
      ...rest
    },
    ref
  ) => {
    return (
      <Container>
        {label && <Label htmlFor={name}>{label}</Label>}
        <InputField
          inverted={inverted}
          ref={ref}
          type={type}
          name={name}
          required={required}
          placeholder={required ? placeholder.concat(' *') : placeholder}
          value={value}
          id={name}
          {...rest}
        />
        {isTouched && error && <Error>{error}</Error>}
      </Container>
    )
  }
)
