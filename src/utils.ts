import dayjs from 'dayjs';

export function timestampToDateFormatter(timestamp: number): string {
  ///TODO if date is not today add date day
  const date = dayjs(timestamp);
  return date.format('HH:mm');
}
