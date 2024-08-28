import { IconChartBar, IconHomeFilled, IconX } from "@tabler/icons-react";
import sagalaLogo from '../../assets/sagala.webp'
import SidebarItem from "./SidebarItem";
import useSidebarStore from "../../store/useSidebarStore";
import { useEffect } from "react";

export default function Sidebar() {
  const { isOpen, close, open, isMobile, setMobile } = useSidebarStore();

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 1024; // Adjust this breakpoint as needed
      setMobile(isMobileView);
      if (isMobileView && !isOpen) {
        close();
      } else if (!isMobileView && !isOpen) {
        open();
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [setMobile, close, isOpen]);

  return (
    <>
      <aside className={`bg-white shadow-sm transition-all duration-300 h-screen ${isMobile ? 'absolute z-50 transition-all duration-300' : 'sticky'} top-0 ${isOpen ? 'block' : 'hidden'} min-w-[290px] overflow-auto`}>
        <IconX size={20} className='absolute top-2 right-2 block lg:hidden cursor-pointer' onClick={
          close
        } />
        <div className="my-10">
          <img src={sagalaLogo} alt="sagala-logo" loading="lazy" className="mx-auto max-w-[200px]" />
        </div>
        <hr className='mb-10' />
        <ul className='pl-8 w-full'>
          <SidebarItem
            icon={IconHomeFilled}
            title='Main Dashboard'
            href='/'
            active
          />
          <SidebarItem
            icon={IconChartBar}
            title='Data Tables'
            href='/'
          />
          <SidebarItem
            icon={IconChartBar}
            title='Data Tables'
            href='/'
          />
          <SidebarItem
            icon={IconChartBar}
            title='Data Tables'
            href='/'
          />
          <SidebarItem
            icon={IconChartBar}
            title='Data Tables'
            href='/'
          />
          <SidebarItem
            icon={IconChartBar}
            title='Data Tables'
            href='/'
          />
          <SidebarItem
            icon={IconChartBar}
            title='Data Tables'
            href='/'
          />
        </ul>
      </aside>
      {isMobile && isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 max-h-screen" onClick={close} />
      )}
    </>
  )
}