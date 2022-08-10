const getPostfix = (n) => {
  const base = 'пересад';
  switch (true) {
    case n >= 5:
      return base + 'ок';
    case n >= 2:
      return base + 'ки';
    default:
      return base + 'ка';
  }
};

export { getPostfix };
