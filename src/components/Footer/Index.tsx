export default function Footer() {
  return (
    <footer className='flex justify-between flex-col lg:flex-row text-gray-400 text-center'>
      <p>
        © 2024 Horizon UI. All Rights Reserved. Made with love <span className="font-bold">bySimmmple!</span>
      </p>
      <ul className='flex gap-5 justify-center items-center'>
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
  )
}