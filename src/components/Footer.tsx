import { Mail, Phone, MapPin, Shield } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
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
  const quickLinks = [{
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
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Slogan */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="bg-white rounded-full p-1 flex items-center justify-center flex-shrink-0">
                <img src={logo} alt="PROTECT EPI" className="h-20 w-20 sm:h-24 sm:w-24 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold">PROTECT EPI</span>
                <span className="text-xs sm:text-sm text-primary-foreground/80">
                  Sua proteção, nossa missão
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed">
              Oferecemos EPIs de qualidade que garantem segurança, conforto e
              confiança no dia a dia de trabalho.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+5517996777841" className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">
                  (17) 99677-7841
                </a>
              </li>
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:comercial.protectepi@gmail.com" className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 break-all">
                  comercial.protectepi@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-primary-foreground/70">
                  Av José Rodrigues Lisboa, 440 - Jardim Alice, São José do Rio
                  Preto
                </span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Horário de atendimento</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/70 mb-4">
              Segunda a sexta
              <br />
              08:00 às 18:00
            </p>
            <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-accent/30">
              <p className="text-xs sm:text-sm font-semibold mb-2">CNPJ</p>
              <p className="text-xs sm:text-sm text-primary-foreground/70">
                45.079.649/0001-88
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-left">
              © {new Date().getFullYear()} PROTECT EPI. Todos os direitos
              reservados.
            </p>
            <p className="text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-right">
              Desenvolvido com segurança e qualidade
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;