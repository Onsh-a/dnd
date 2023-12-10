export const calculateModificator = (stat: number) => {
  const modificator = Math.floor((stat - 10) / 2);
  return modificator <= 0 ? `${modificator}` : `+${modificator}`;
}
