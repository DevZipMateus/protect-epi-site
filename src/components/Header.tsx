import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  const menuItems = [{
    label: "Início",
    id: "hero"
  }, {
    label: "Sobre",
    id: "about"
  }, {
    label: "Serviços",
    id: "services"
  }, {
    label: "Contato",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-header/95 backdrop-blur-md shadow-md" : "bg-header"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2 flex items-center justify-center">
              <img src={logo} alt="PROTECT EPI - Equipamentos de proteção individual" className="h-24 w-24 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">PROTECT EPI</span>
              <span className="text-xs text-white/70">Sua proteção, nossa missão</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-glow transition-all duration-300">
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-header border-t border-white/10 shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-white/90 hover:text-white transition-colors duration-200 font-medium py-2">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
              Fale conosco
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;