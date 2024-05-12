import type { Meta, StoryObj } from '@storybook/react';

import { Datepicker } from '@/components/Datepicker';
import { withHolidays } from '@/hocs';

const holidays = [
  { day: 9, month: 5, year: 2024 },
  { day: 1, month: 5, year: 2024 },
  { day: 3, month: 5, year: 2024 },
];

const meta = {
  title: 'WithHolidays',
  component: withHolidays(Datepicker, holidays),

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
