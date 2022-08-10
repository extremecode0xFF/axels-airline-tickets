const configFilterCheckbox = [
  {
    title: 'Все',
    action: function () {},
    query: { all: 'active' },
  },
  {
    title: 'Без пересадок',
    action: function () {},
    query: { withoutTransfer: 'active' },
  },
  {
    title: '1 пересадка',
    action: function () {},
    query: { transfer1: 'active' },
  },
  {
    title: '2 пересадки',
    action: function () {},
    query: { transfer2: 'active' },
  },
  {
    title: '3 пересадки',
    action: function () {},
    query: { transfer3: 'active' },
  },
];

const configFilterTabs = [
  {
    title: 'Самый дешевый',
    action: function () {},
    query: { fastest: 'active' },
  },
  {
    title: 'Самый быстрый',
    action: function () {},
    query: { cheapest: 'active' },
  },
  {
    title: 'Оптимальный',
    action: function () {},
    query: { optimal: 'active' },
  },
];

export { configFilterCheckbox, configFilterTabs };
