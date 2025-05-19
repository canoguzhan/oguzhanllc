import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-montserrat font-bold text-2xl">
              <span className="text-secondary">OGUZHAN</span> LLC
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
            <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
            <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
            <Link href="/contact">
              <Button className="btn-secondary">Get a Quote</Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-primary focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link 
            href="/"
            className="block py-2 text-primary font-montserrat font-medium"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/services"
            className="block py-2 text-primary font-montserrat font-medium"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link 
            href="/about"
            className="block py-2 text-primary font-montserrat font-medium"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            href="/contact"
            className="block py-2 text-primary font-montserrat font-medium"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link href="/contact">
            <Button 
              className="btn-secondary mt-2 w-full"
              onClick={closeMobileMenu}
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
