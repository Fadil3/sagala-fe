import { ColumnDef } from "@tanstack/react-table";
import { IconTrashFilled } from "@tabler/icons-react";
import { complexType } from "../../data/complex";
import { developmentType } from "../../data/development";
import { fourColumnType } from "../../data/four-column";

export const getActionsColumn = <T extends complexType | developmentType | fourColumnType>(handleDelete: (idx: number) => void): ColumnDef<T> => ({
  accessorKey: "actions",
  header: () => <div className="font-bold text-sm text-gray-300 cursor-pointer tracking-wider p-5">Actions</div>,
  cell: (row) => (
    <div className="flex gap-2 justify-center items-center p-5">
      <button
        className="bg-red-500 text-white rounded-lg p-2 flex justify-center items-center gap-2"
        onClick={() => handleDelete(row.row.index)}
      >
        Delete <IconTrashFilled size={24} />
      </button>
    </div>
  )
});