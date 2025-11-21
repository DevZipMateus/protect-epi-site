import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (id: string, isRoute?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isRoute) {
      // Se for uma rota, simplesmente navega
      navigate(`/${id}`);
    } else {
      // Se for uma seção, verifica se estamos na home
      if (location.pathname === "/") {
        // Estamos na home, faz scroll direto
        scrollToSection(id);
      } else {
        // Não estamos na home, navega para home e depois faz scroll
        navigate("/");
        // Aguarda um pequeno delay para a página carregar e então faz scroll
        setTimeout(() => {
          scrollToSection(id);
        }, 100);
      }
    }
  };
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
    label: "Vitrine",
    id: "vitrine",
    isRoute: true
  }, {
    label: "Contato",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-header/95 backdrop-blur-md shadow-md" : "bg-header"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="PROTECT EPI - Equipamentos de proteção individual" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(item => <button key={item.id} onClick={() => handleNavigation(item.id, item.isRoute)} className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => handleNavigation("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-glow transition-all duration-300">
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-header border-t border-border shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {menuItems.map(item => <button key={item.id} onClick={() => handleNavigation(item.id, item.isRoute)} className="text-left text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2">
                {item.label}
              </button>)}
            <Button onClick={() => handleNavigation("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
              Fale conosco
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;