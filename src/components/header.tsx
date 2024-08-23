import Link from "next/link";

export default function Header() {
  return (
    <header className='bg-blue-500 p-4 '>
      <nav className='flex justify-between items-center max-w-4xl mx-auto'>
        <Link href='/' className='text-white text-2xl font-bold'>
          My Blogs
        </Link>

        <ul className='flex gap-4 flex-row-reverse'>
          <li>
            <Link
              href='/api/auth/signin'
              className='text-white hover:underline'
            >
              Login
            </Link>
          </li>
          <li>
            <Link href='/blogs' className='text-white hover:underline'>
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
