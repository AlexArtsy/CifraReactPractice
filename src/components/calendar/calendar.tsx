import React from 'react';
import { Calendar } from '@mantine/dates';
import { Box } from '@mantine/core';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

interface MantineCalendarProps {
  firstDayOfWeek?: 0 | 1;
  minDate?: Date;
  maxDate?: Date;
  dateFormat?: string;
  locale?: string;
}

const MantineCalendar: React.FC<MantineCalendarProps> = ({
  firstDayOfWeek = 1,
  minDate,
  maxDate,
  locale = 'en',
}) => {
  dayjs.locale(locale);

  return (
    <Box maw={400} mx="auto">
      <Calendar
        firstDayOfWeek={firstDayOfWeek}
        minDate={minDate}
        maxDate={maxDate}
        locale={locale}
        size="sm"
        styles={{
          calendarHeader: {
            marginBottom: '1rem',
          },
          day: {
            borderRadius: '50%',
          },
        }}
      />
    </Box>
  );
};

export default MantineCalendar;
