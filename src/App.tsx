import { IconBell, IconChartBar, IconHomeFilled, IconInfoCircle, IconMenu2, IconMoonFilled, IconSearch, IconX } from '@tabler/icons-react'
import sagalaLogo from './assets/sagala.webp'

function App() {
  return (
    <>
      <main className='w-full flex min-h-screen'>
        <aside className='bg-white shadow-sm h-screen sticky top-0 hidden lg:block lg:min-w-[290px]'>
          <IconX size={20} className='absolute top-2 right-2' />
          <div className="my-10">
            <img src={sagalaLogo} alt="sagala-logo" loading="lazy" className="mx-auto max-w-[200px]" />
          </div>
          <hr className='mb-10' />
          <ul className='pl-8 w-full'>
            {/* ACTIVE */}
            <li className='mb-4 flex gap-4 w-full relative items-start h-6'>
              <IconHomeFilled size={24} className='text-blue-700 ' />
              <a href="/" className='font-semibold'>Main Dashboard</a>
              <div className="absolute right-0 top-px h-6 w-1 rounded-lg bg-blue-700"></div>
            </li>
            {/* NONACTIVE */}
            <li className='mb-4 flex gap-4 w-full relative items-start'>
              <IconChartBar size={24} className='text-gray-400' />
              <a href="/" className='font-medium text-gray-400'>Main Dashboard</a>
            </li>
            <li className='mb-4 flex gap-4 w-full relative items-start'>
              <IconChartBar size={24} className='text-gray-400' />
              <a href="/" className='font-medium text-gray-400'>Main Dashboard</a>
            </li>
          </ul>
        </aside>
        <section className='bg-primary min-h-screen w-full p-5'>
          <div className="w-full mx-auto bg-white sticky top-5 rounded-lg bg-white-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border-gray-100 flex flex-col lg:flex-row lg:justify-between lg:items-center ">
            <div className="">
              <p className='text-sm mb-2'>Pages / Data Tables</p>
              <h1 className='font-semibold text-[33px] tracking-wide'>Data Tables</h1>
            </div>
            <div className="w-full lg:w-6/12 bg-white rounded-3xl shadow-lg h-full border p-2 flex items-center justify-between">
              <div className=" bg-primary rounded-3xl w-full lg:w-[60%] h-10 flex gap-3 items-center px-2 py-4">
                <IconSearch size={24} className='text-gray-400' />
                <input type="text" placeholder='Search...' className='w-full outline-none bg-primary' />
              </div>
              <div className="flex gap-2 items-center">
                <IconMenu2 size={16} className='text-gray-400 block lg:hidden' />
                <IconBell size={16} className='text-gray-400' />
                <IconInfoCircle size={16} className='text-gray-400' />
                <IconMoonFilled size={16} className='text-gray-400' />
                <img src="https://placehold.co/600x400" alt="avatar" width={32} height={32} className=' object-cover rounded-full w-[40px] h-[40px]' />
              </div>
            </div>
          </div>
          <div className="h-[1000px] mt-5">
            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white h-56 rounded-md shadow"></div>
              <div className="bg-white h-56 rounded-md shadow"></div>
              <div className="bg-white h-56 rounded-md shadow"></div>
              <div className="bg-white h-56 rounded-md shadow"></div>
              <div className="bg-white h-56 rounded-md shadow"></div>
            </div>
          </div>
          <footer className='flex justify-between flex-col lg:flex-row text-gray-400'>
            <p>
              © 2024 Horizon UI. All Rights Reserved. Made with love bySimmmple!
            </p>
            <ul className='flex gap-5'>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">License</a>
              </li>
              <li>
                <a href="/">Terms of Use</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </footer>
        </section>
      </main>
    </>
  )
}

export default App
