import type { Meta, StoryObj } from '@storybook/react';

import { Datepicker } from '@/components/Datepicker';
import { withHolidays } from '@/hocs';
import { getTimestampByDate } from '@/utils/getTimestampByDate';

const holidays = [
  getTimestampByDate({ day: 9, month: 5, year: 2024 }),
  getTimestampByDate({ day: 1, month: 5, year: 2024 }),
  getTimestampByDate({ day: 3, month: 5, year: 2024 }),
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

export const Primary: Story = {
  args: {},
};
