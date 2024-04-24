import type { Meta, StoryObj } from '@storybook/react';

import { Rangepicker } from '@/components/Rangepicker';
import { FirstWeekDay } from '@/types/date';

const meta = {
  title: 'Rangepicker',
  component: Rangepicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Rangepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    firstDayOfWeek: FirstWeekDay.MONDAY,
    showHolidays: true,
  },
};
