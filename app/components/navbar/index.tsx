"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const currentPath = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="flex justify-center mt-5">
      <nav className="flex justify-evenly p-4 rounded-full">
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.path}
            aria-label={page.name}
            className={`px-4 py-2 ${
              isActive(page.path)
                ? "text-green font-bold rounded-full bg-grey100"
                : "text-greenP400"
            }`}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
