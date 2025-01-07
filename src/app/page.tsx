'use client';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About'
import CategoryProjects from './components/CategoryProjects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <CategoryProjects />
      <Skills />
      <Contact />
    </div>
  );
}
