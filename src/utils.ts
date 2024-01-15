import dayjs from 'dayjs';

export function timestampToDateFormatter(timestamp: string): string {
  ///TODO if date is not today add date day
  const date = dayjs(timestamp);
  console.log(timestamp);
  console.log(date, 'date from timestamp');

  return date.format('HH:mm');
}
