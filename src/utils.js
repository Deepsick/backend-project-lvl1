/* Default export for one util function is lame */
/* eslint-disable-next-line */
export const generateRandomNumber = (min = 0, max = 15) => (
  min + Math.floor(Math.random() * (max - min + 1))
);
