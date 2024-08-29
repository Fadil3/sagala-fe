export type fourColumnType = {
  name: string;
  quantity: number;
  date: string;
  progress: number;
};

const fourColumnDataComplex: fourColumnType[] = [
  {
    name: 'Horizon UI PRO',
    quantity: 2458,
    date: '2022-10-24T00:00:00.000Z',
    progress: 100
  },
  {
    name: 'Horizon UI Free',
    quantity: 1485,
    date: '2022-10-24T00:00:00.000Z',
    progress: 75.5
  },
  {
    name: 'Weekly Update',
    quantity: 1024,
    date: '2022-10-24T00:00:00.000Z',
    progress: 15.5
  },
  {
    name: 'Venus 3D Asset',
    quantity: 858,
    date: '2022-10-24T00:00:00.000Z',
    progress: 2.5
  },
];

export default fourColumnDataComplex;