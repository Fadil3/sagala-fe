import { IconArrowDown, IconArrowUp, IconDots, IconPlus } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import AddDataDialog from "./AddDataDialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  title?: string;
  variant?: string;
  data: TData[];
  query?: {
    sortBy: string;
    sortOrder: string;
    search: string;
  };
  onAddData: (newData: TData, variant: string) => void;
}

export function DataTable<TData, TValue>({
  columns,
  title,
  variant,
  data,
  query,
  onAddData,
}: DataTableProps<TData, TValue>) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const sortingIcons: { [key: string]: JSX.Element } = {
    asc: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M18 11l-6 -6" />
        <path d="M6 11l6 -6" />
      </svg>
    ),
    desc: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M18 13l-6 6" />
        <path d="M6 13l6 6" />
      </svg>
    ),
  };

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <div className="bg-white rounded-3xl shadow p-6 w-full ">
      <div className="flex justify-between items-center w-full">
        <h3 className="font-semibold text-xl tracking-wide text-blue-950">
          {title}
        </h3>
        <div className="relative">
          <div
            className="w-[32px] h-[32px] bg-purple-100 rounded-lg flex flex-col items-center justify-center"
            onClick={togglePopup}
          >
            <IconDots size={24} className="cursor-pointer text-blue-950 " />
          </div>
          {isPopupVisible && (
            <div
              ref={popupRef}
              className="absolute top-full mt-2 -left-[80px] transform -translate-x-1/2 w-48 p-2 bg-white rounded-lg shadow-lg"
            >
              <button
                className="border bg-blue-500 text-white rounded-lg p-2 flex justify-center items-center gap-2"
                onClick={() => setIsDialogVisible(true)}
              >
                Add Data
                <IconPlus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} className="text-gray-200">
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start select-none flex items-center gap-1"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <IconArrowUp />,
                          desc: <IconArrowDown />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="h-24 text-center">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddDataDialog
        isVisible={isDialogVisible}
        variant={variant as string}
        onClose={() => setIsDialogVisible(false)}
        onAdd={
          (newData) => {
            onAddData(newData as TData, variant as string);
          }
        }
      />
    </div >
  );
}