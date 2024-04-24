import type { Meta, StoryObj } from '@storybook/react';

import { Datepicker } from '@/components/Datepicker';
import { FirstWeekDay } from '@/types/date';

const meta = {
  title: 'Datepicker',
  component: Datepicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    firstDayOfWeek: FirstWeekDay.MONDAY,
    showHolidays: true,
  },
};
