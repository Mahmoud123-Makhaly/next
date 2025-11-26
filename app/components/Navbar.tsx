"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    // {
    //   title: "Categories",
    //   href: "/categories",
    // },
    // {
    //   title: "Offers",
    //   href: "/offers",
    // },
    {
      title: "About",
      href: "/about",
    },
  ];
  return (
    <header className="bg-indigo-500 py-5 fixed w-full">
      <nav>
        <ul className=" flex justify-center items-center gap-24 text-white">
          {links.map((link) => (
            <li
              key={link.title}
              className={`${pathname === link.href ? "underline" : ""}`}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
