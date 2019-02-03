export const calculateSumInArr = (arr: Array<any>, variable: string): number => {
  let total: number = 0;

  if (arr && arr.length) {
    arr.forEach(item => {
      total += item[variable];
    });
  }

  return total;
};
