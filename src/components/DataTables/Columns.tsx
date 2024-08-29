import { ColumnDef } from "@tanstack/react-table";
import Progress from "../Progress/Index";
import { IconBrandAndroid, IconBrandAppleFilled, IconBrandWindows, IconCheck, IconExclamationMark, IconX } from "@tabler/icons-react";
import { formatDate } from "../../utils";
import { getActionsColumn } from "./ActionsColumn";
import { complexType } from "../../data/complex";
import { fourColumnType } from "../../data/four-column";
import { developmentType } from "../../data/development";
import { checkType } from "../../data/check";

export const getDevelopmentColumns = (handleDelete: (idx: number) => void): ColumnDef<developmentType>[] => [
  {
    accessorKey: "name",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Name</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{row.getValue() as string}</p>
  },
  {
    accessorKey: "os",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Tech</div>,
    enableSorting: true,
    cell: (row) => (
      <div className="flex items-center gap-2 p-5">
        {
          (row?.getValue() as string[])?.map((os: string, key: number) => {
            if (os === 'windows') {
              return <IconBrandWindows size={22} key={key} className="text-gray-400" />
            } else if (os === 'apple') {
              return <IconBrandAppleFilled size={22} key={key} className="text-gray-400" />
            } else if (os === 'android') {
              return <IconBrandAndroid size={22} key={key} className="text-gray-400" />
            }
          })
        }
      </div>
    )
  },
  {
    accessorKey: "date",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Date</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{
      formatDate(row.getValue() as string)
    }</p>
  },
  {
    accessorKey: "progress",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Progress</div>,
    enableSorting: true,
    cell: (row) => (
      <div className="flex gap-2 justify-center items-center p-5">
        <p className="font-semibold text-blue-950 text-sm">{row.getValue() as string}%</p>
        <Progress percentage={row.getValue() as number} />
      </div>
    )
  },
  getActionsColumn(handleDelete)
];

export const getCheckColumns = (handleDelete: (idx: number) => void): ColumnDef<checkType>[] => [
  {
    accessorKey: "name",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Name</div>,
    enableSorting: true,
    cell: (row) => (
      <div className="flex gap-1">
        <input type="checkbox" id="scales" name="scales" />
        <p className="text-sm font-semibold text-blue-950 p-5">{row.getValue() as string}</p>
      </div>
    )
  },
  {
    accessorKey: "progress",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Progress</div>,
    enableSorting: true,
    cell: (row) => (
      <div className="flex gap-2 justify-center items-center p-5">
        <p className="font-semibold text-blue-950 text-sm">{row.getValue() as string}%</p>
        <Progress percentage={row.getValue() as number} />
      </div>
    )
  },
  {
    accessorKey: "quantity",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Quantity</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{row.getValue() as string}</p>
  },
  {
    accessorKey: "date",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Date</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{
      formatDate(row.getValue() as string)
    }</p>
  },

  getActionsColumn(handleDelete)
];


export const getFourColumns = (handleDelete: (idx: number) => void): ColumnDef<fourColumnType>[] => [
  {
    accessorKey: "name",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Name</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{row.getValue() as string}</p>
  },
  {
    accessorKey: "progress",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Progress</div>,
    enableSorting: true,
    cell: (row) => (
      <div className="flex gap-2 justify-center items-center p-5">
        <p className="font-semibold text-blue-950 text-sm">{row.getValue() as string}%</p>
        <Progress percentage={row.getValue() as number} />
      </div>
    )
  },
  {
    accessorKey: "quantity",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Quantity</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{row.getValue() as string}</p>
  },
  {
    accessorKey: "date",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Date</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{
      formatDate(row.getValue() as string)
    }</p>
  },

  getActionsColumn(handleDelete)
];

export const getComplexColumns = (handleDelete: (idx: number) => void): ColumnDef<complexType>[] => [
  {
    accessorKey: "name",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Name</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{row.getValue() as string}</p>
  },
  {
    accessorKey: "progress",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Progress</div>,
    enableSorting: true,
    cell: (row) => (
      <div className="flex gap-2 justify-center items-center p-5">
        <p className="font-semibold text-blue-950 text-sm">{row.getValue() as string}%</p>
        <Progress percentage={row.getValue() as number} />
      </div>
    )
  },
  {
    accessorKey: "status",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Status</div>,
    enableSorting: true,
    cell: (row) => (
      <div className="flex gap-2 items-center p-5">
        {
          row.getValue() === 'Approved' ? (
            <IconCheck className=" bg-green-400 text-white rounded-full" size={24} />
          ) : row.getValue() === 'Error' ? (
            <IconExclamationMark className=" bg-yellow-400 text-white rounded-full" size={24} />
          ) : (
            <IconX className=" bg-red-400 text-white rounded-full" size={24} />
          )
        }

        <p className="font-semibold text-blue-950 text-sm">{row.getValue() as string}</p>
      </div>
    )
  },
  {
    accessorKey: "date",
    header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Date</div>,
    enableSorting: true,
    cell: (row) => <p className="text-sm font-semibold text-blue-950 p-5">{
      formatDate(row.getValue() as string)
    }</p>
  },

  getActionsColumn(handleDelete)
];



