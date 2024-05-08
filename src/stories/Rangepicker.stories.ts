import type { Meta, StoryObj } from '@storybook/react';

import { Rangepicker } from '@/components/Rangepicker';

const meta = {
  title: 'Rangepicker',
  component: Rangepicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    calendarVariant: {
      description: 'Select variant of the calendar',
      control: { type: 'radio', options: ['month', 'week'] },
      table: {
        defaultValue: { summary: 'month' },
        type: { summary: ['month', 'week'] },
        category: 'Calendar',
      },
    },
    firstDayOfWeek: {
      description: 'Select the first day of the week',
      control: { type: 'radio', options: ['Mo', 'Su'] },
      table: {
        defaultValue: { summary: 'Mo' },
        type: { summary: ['Mo', 'Su'] },
        category: 'Calendar',
      },
    },
    showHolidays: {
      description: 'Highlight holidays  on the calendar',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
        category: 'Holidays',
      },
    },
    holidayTimestamps: {
      description: 'Set holidays timestamps of dates to highlight',
      control: false,
      table: {
        category: 'Holidays',
      },
    },
    selectedStartDate: {
      description: 'Select the start date on the calendar.',
      control: false,
      table: {
        type: { summary: '{ day: number, month: number, year: number }' },
        category: 'Dates',
      },
    },
    dateLimit: {
      description: 'Select the min and max date of calendar.',
      control: false,
      table: {
        category: 'Dates',
      },
    },
    addTodo: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    calendarVariant: 'month',
  },
} satisfies Meta<typeof Rangepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    firstDayOfWeek: 'Mo',
    calendarVariant: 'month',
  },
};

export const WithSundayFirstDay: Story = {
  name: 'With Sunday First Day',
  args: {
    firstDayOfWeek: 'Su',
    calendarVariant: 'month',
  },
};

export const WithHolidays: Story = {
  name: 'With Weekends Highlighted',
  args: {
    showHolidays: true,
    calendarVariant: 'month',
  },
};

export const WithWeekMode: Story = {
  name: 'With Week Mode',
  args: {
    calendarVariant: 'week',
  },
};
