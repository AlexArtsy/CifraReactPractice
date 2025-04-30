import React, { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { Box, Text } from '@mantine/core';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

interface MantineCalendarProps {
  firstDayOfWeek?: 0 | 1;
  minDate?: Date;
  maxDate?: Date;
  dateFormat?: string;
  locale?: string;
  onChange?: (date: Date | null) => void; // Добавляем поддержку null
}

const MantineCalendar: React.FC<MantineCalendarProps> = ({
  firstDayOfWeek = 1,
  minDate,
  maxDate,
  dateFormat = 'DD.MM.YYYY',
  locale = 'en',
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

      {selectedDate && (
        <Text mt="md" fw={500}>
          Выбрана дата: {dayjs(selectedDate).format(dateFormat)}
        </Text>
      )}
    </Box>
  );
};

export default MantineCalendar;
