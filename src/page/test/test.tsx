const Test = () => <div> Test </div>;

export default Test;

export const square = (n: number): boolean | number => {
  if (n % 2 !== 0) return false;
  return Math.sqrt(n);
};
