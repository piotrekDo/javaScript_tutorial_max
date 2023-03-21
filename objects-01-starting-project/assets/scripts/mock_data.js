function mockData() {
  return [
    {
      info: {
        title: 'Example 1',
        extra: 'extraValue',
      },
      id: Math.random(),
    },
    {
      info: {
        title: 'Example 2',
        extra: 'extraValue',
      },
      id: Math.random(),
    },
    {
      info: {
        title: 'Example 3',
        extra: 'extraValue',
      },
      id: Math.random(),
    },
    {
      info: {
        title: 'Example 111',
        extra: 'extraValue',
      },
      id: Math.random(),
    },
  ];
}

const getterSetterMovie = {
  set title(val) {
    this._title = val ? val : 'default';
  },
  get title() {
    return this._title;
  },
};
