import React from 'react'
import { DefaultButton, GhostButton, RedButton, YellowButton } from './styles'

export const Button = ({
  name,
  theme,
  icon,
  padding,
  onClick,
  style,
  ...rest
}) => {
  const themes = {
    primary: DefaultButton,
    secondary: YellowButton,
    redButton: RedButton,
    ghost: GhostButton
  }

  const icons = {
    edit: 'fas fa-edit',
    back: 'fas fa-undo',
    add: 'fas fa-plus',
    check: 'fas fa-check',
    key: 'fas fa-key',
    basket: 'fas fa-shopping-cart',
    clock: 'far fa-clock',
    plug: 'fas fa-plug',
    print: 'fas fa-print',
    clip: 'fas fa-paperclip',
    close: 'fas fa-times',
    import: 'fas fa-file-import'
  }

  const Style = themes[theme || 'primary']

  return (
    <Style onClick={onClick} style={style} {...rest}>
      {icon && <i className={icons[icon]} />}
      {name}
    </Style>
  )
}
