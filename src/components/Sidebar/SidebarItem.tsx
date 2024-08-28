interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  active?: boolean;
}

export default function SidebarItem({
  icon: Icon,
  title,
  href,
  active = false,
}: SidebarItemProps) {
  const activeClasses = active ? 'text-blue-700' : 'text-gray-400'
  return (
    <>
      <li className='mb-4 flex gap-4 w-full relative items-start h-6'>
        <Icon size={24} className={activeClasses} />
        <a href={href} className={`${!active ? 'font-medium text-gray-400' : 'font-semibold'}`}>{title}</a>
        {
          active && (
            <div className="absolute right-0 top-px h-6 w-1 rounded-lg bg-blue-700"></div>
          )
        }
      </li>

    </>
  )
}