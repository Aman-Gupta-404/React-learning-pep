export const arr = new Array(29_999_999).fill(0).map((item, i) => {
  return {
    id: i,
    isSelected: i === 29_999_999,
  };
});
