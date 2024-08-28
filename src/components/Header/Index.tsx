import useSidebarStore from "../../store/useSidebarStore";
import { IconBell, IconInfoCircle, IconMenu2, IconMoonFilled, IconSearch } from "@tabler/icons-react";

interface HeaderProps {
  title: string
  breadcrumb: string
}

export default function Header({ title, breadcrumb }: HeaderProps) {
  const { toggle, isMobile } = useSidebarStore();
  const iconSizeHeader = isMobile ? 20 : 16;
  return (
    <>
      <div className="w-full mx-auto bg-white sticky top-5 rounded-lg bg-white-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border-gray-100 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="">
          <p className="text-sm mb-2">{breadcrumb}</p>
          <h1 className="font-semibold text-[33px] tracking-wide">{title}</h1>
        </div>
        <div className="w-full lg:w-4/12 bg-white rounded-3xl shadow-lg h-fit border p-2 flex items-center justify-between">
          <div className="bg-primary rounded-3xl w-[70%] lg:w-[60%] h-fit flex gap-3 items-center p-2">
            <IconSearch size={24} className="text-gray-400" />
            <input type="text" placeholder="Search..." className="w-full outline-none bg-primary" />
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            {isMobile && (
              <IconMenu2 size={iconSizeHeader} className="text-gray-400 block lg:hidden" onClick={toggle} />
            )}
            <IconBell size={iconSizeHeader} className="text-gray-400" />
            <IconInfoCircle size={iconSizeHeader} className="text-gray-400" />
            <IconMoonFilled size={iconSizeHeader} className="text-gray-400" />
            <img src="https://placehold.co/600x400" alt="avatar" width={32} height={32} className="object-cover rounded-full w-[40px] h-[40px]" />
          </div>
        </div>
      </div>
    </>
  )
}