import React from 'react'
import { Input } from './Input'

export default {
  title: 'Components/Input',

  component: Input,
  argTypes: {}
}

export const Default = (args) => {
  return <Input {...args} placeholder="Enter text" required />
}

Default.args = {}
