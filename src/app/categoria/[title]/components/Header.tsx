"use client";
import { useState } from 'react';
import { House, Menu, X} from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function scrollToSection(local: string) {
    setIsMenuOpen(false)
    const section = document.getElementById(`${local}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Rolagem suave
    }
  }

  return (
    <header className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
      <nav className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <NavLink href={"/"} onClick={() => scrollToSection("categoryProjects")} className="text-2xl font-bold text-gray-800">
            Dev<span className="text-blue-600">Portfolio</span>
          </NavLink>

          <div className="items-center hidden space-x-8 md:flex">
            <NavLink href='/' onClick={() => scrollToSection("categoryProjects")}>Tela Inicial <House /></NavLink>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href='/' onClick={() => scrollToSection("categoryProjects")}>Tela Inicial</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({href, onClick, children, className }: { href: string, onClick: () => void, children: React.ReactNode, className?:string }) => (
  <Link href={href} onClick={onClick} className={ className + ` text-gray-600 transition-colors hover:text-blue-600 flex gap-1 items-center justify-center font-bold`}>
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode; onClick: () => void }) => (
  <Link href={href} onClick={onClick} className="block px-4 text-gray-600 transition-colors hover:text-blue-600">
    {children}
  </Link>
);

export default Header;