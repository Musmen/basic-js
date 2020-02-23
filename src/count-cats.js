module.exports = function countCats(matrix) {
  let cats = 0;

  matrix.forEach((item) => {
    item.forEach((item) => {
      cats += (item === '^^') ? 1 : 0;
    })
  });

  return cats;
};
