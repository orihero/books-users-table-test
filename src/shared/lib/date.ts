import dayjs from 'dayjs';

export function formatDate(date: Date) {
  const parsedDate = dayjs(date);

  const formattedDate = parsedDate.format('YYYY-MM-DD');

  return formattedDate;
}
