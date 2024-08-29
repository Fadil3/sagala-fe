export enum Status {
  Approved = 'Approved',
  Disable = 'Disable',
  Error = 'Error'
}

export type complexType = {
  name: string;
  status: Status;
  date: string;
  progress: number;
};

const tableDataComplex: complexType[] = [
  {
    name: 'Horizon UI PRO',
    progress: 75.5,
    status: Status.Approved,
    date: '12 Jan 2021'
  },
  {
    name: 'Horizon UI Free',
    progress: 25.5,
    status: Status.Disable,
    date: '21 Feb 2021'
  },
  {
    name: 'Weekly Update',
    progress: 90,
    status: Status.Error,
    date: '13 Mar 2021'
  },
  {
    name: 'Marketplace',
    progress: 50.5,
    status: Status.Approved,
    date: '24 Oct 2022'
  }
];

export default tableDataComplex;