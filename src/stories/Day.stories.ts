import type { Meta, StoryObj } from '@storybook/react';

import { Day } from '../components/Date';

const meta = {
  title: 'Day',
  component: Day,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Day>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: 15,
    variant: 'default',
  },
};
