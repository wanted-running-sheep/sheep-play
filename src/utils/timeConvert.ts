export const toHoursAndMinutes = (minute: number) => {
  const minutes = minute % 60;
  const hours = Math.floor(minute / 60);

  if (hours < 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
};
