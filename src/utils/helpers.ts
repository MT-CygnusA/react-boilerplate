export const modifyDateString = (dateString?: string): string => {
  if (!dateString) {
    return '';
  }

  try {
    return String(new Date(dateString)).split(' ').slice(0, 4).join(' ');
  } catch (_) {
    return '';
  }
};
