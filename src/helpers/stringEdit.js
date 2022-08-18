const getPostfix = (n) => {
  const base = 'пересад';
  switch (true) {
    case n >= 5 || n === 0:
      return base + 'ок';
    case n >= 2:
      return base + 'ки';
    default:
      return base + 'ка';
  }
};

export { getPostfix };
