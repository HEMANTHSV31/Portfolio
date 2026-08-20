import Link from "next/link";

export const Navbar = () => (
  <nav className="bg-black py-4 px-6 shadow-md bg-gradient-to-r from-black via-zinc-900 to-red-900 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between item-center ">
      <Link href="/" className="text-xl font-bold">
        Hemanth's Portfolio
      </Link>
      <div className="space-x-4">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="/projects" className="text-white">
          Projects
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);
