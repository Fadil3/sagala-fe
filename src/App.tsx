// src/App.tsx
import Sidebar from './components/Sidebar/Index'
import Footer from './components/Footer/Index'
import useSidebarStore from './store/useSidebarStore'
import Header from './components/Header/Index'

function App() {
  const { isMobile, isOpen } = useSidebarStore()
  return (
    <div className={`w-full flex ${isOpen && isMobile ? "max-h-screen overflow-y-hidden" : "min-h-screen"}`}>
      <Sidebar />
      <section className="bg-primary w-full p-5 flex flex-col">
        <Header title='Data Tables' breadcrumb='Pages / Data Tables' />
        <div className="my-5 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white h-56 rounded-md shadow"></div>
            <div className="bg-white h-56 rounded-md shadow"></div>
            <div className="bg-white h-56 rounded-md shadow"></div>
            <div className="bg-white h-56 rounded-md shadow"></div>
          </div>
        </div>
        <Footer />
      </section >
    </div >
  )
}

export default App
