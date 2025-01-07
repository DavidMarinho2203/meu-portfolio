"use client";
import { useState } from 'react';
import { Menu, X, } from 'lucide-react';
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
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Dev<span className="text-blue-600">Portfolio</span>
          </Link>

          <div className="items-center hidden space-x-8 md:flex">
            {/* <NavLink onClick={() => scrollToSection("Projetos")}>Tela Inicial</NavLink> */}
            <NavLink onClick={() => scrollToSection("about")}>Sobre</NavLink>
            <NavLink onClick={() => scrollToSection("categoryProjects")}>Projetos</NavLink>
            <NavLink onClick={() => scrollToSection("skills")}>Habilidades</NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>Contato</NavLink>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {/* <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>Tela Inicial</MobileNavLink> */}
              <MobileNavLink onClick={() => scrollToSection("about")}>Sobre</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("categoryProjects")}>Projetos</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("skills")}>Habilidades</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("contact")}>Contato</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ onClick , children }: {onClick: () => void, children: React.ReactNode }) => (
  <button onClick={onClick} className="text-gray-600 transition-colors hover:text-blue-600">
    {children}
  </button>
);

const MobileNavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button onClick={onClick} className="block px-4 text-gray-600 transition-colors hover:text-blue-600">
    {children}
  </button>
);

export default Header;