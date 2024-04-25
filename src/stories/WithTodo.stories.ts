import type { Meta, StoryObj } from '@storybook/react';

import { Datepicker } from '@/components/Datepicker';
import { withTodos } from '@/hocs/withTodos';

const meta = {
  title: 'WithTodo',
  component: withTodos(Datepicker),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
