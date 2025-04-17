
import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cloth", label: "Status Cloth" },
  { href: "/log", label: "Nkisi Logbook" },
  { href: "/sync", label: "Sync" },
  { href: "/beads", label: "Beads" },
];

export default function Navigation() {
  return (
    <nav className="w-full flex justify-center bg-white shadow-sm py-3 mb-6">
      <ul className="flex space-x-4 text-sm font-medium">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-neutral-700 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
