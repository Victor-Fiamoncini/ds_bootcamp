import { Meta, StoryObj } from '@storybook/react'

import { Props, Button } from '@/ui/components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem ipsum',
  },
} as Meta<Props>

export const Default: StoryObj = {
  args: {},
}
