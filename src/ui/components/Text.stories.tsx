import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Props, Text } from '@/ui/components/Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
  },
} as Meta<Props>

export const Default: StoryObj = {
  args: {},
}

export const Small: StoryObj = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: <p>Lorem ipsum</p>,
  },
}
