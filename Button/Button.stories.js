import React from 'react'
import { Button } from './Button'

export default {
  title: 'Components/Button',

  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'redButton', 'ghost']
      }
    },
    icon: {
      control: {
        type: 'select',
        options: ['add', 'key', 'edit', 'back', 'check', 'close', null]
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'normal']
      }
    }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const RedButton = Template.bind({})
export const LinkButton = Template.bind({})

Primary.args = {
  name: 'Button',
  size: 'normal',
  theme: 'primary',
  icon: 'edit'
}

Secondary.args = {
  name: 'Button',
  size: 'normal',
  theme: 'secondary',
  icon: 'edit'
}

RedButton.args = {
  name: 'Red button',
  size: 'normal',
  theme: 'redButton',
  icon: 'edit'
}

LinkButton.args = {
  as: 'a',
  name: 'Button',
  size: 'normal',
  theme: 'primary',
  icon: 'edit'
}
