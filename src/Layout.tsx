// Layout.tsx
import React from 'react';
import Sidebar from './components/Sidebar/Index';
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';
import useSidebarStore from './store/useSidebarStore';

interface LayoutProps {
  title: string;
  breadcrumb: string;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, breadcrumb, onSearch, children }) => {
  const { isMobile, isOpen } = useSidebarStore();

  return (
    <div className={`w-full flex ${isOpen && isMobile ? "max-h-screen overflow-y-hidden" : "min-h-screen"}`}>
      <Sidebar />
      <section className="bg-primary w-full flex flex-col px-3">
        <Header title={title} breadcrumb={breadcrumb} onSearch={onSearch} />
        <div className="my-5 flex-1 p-5">
          {children}
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;