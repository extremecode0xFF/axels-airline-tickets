const getPostfix = (transfers: number) => {
  const base = 'пересад';
  switch (true) {
    case transfers >= 5 || transfers === 0:
      return base + 'ок';
    case transfers >= 2:
      return base + 'ки';
    default:
      return base + 'ка';
  }
};

export { getPostfix };
