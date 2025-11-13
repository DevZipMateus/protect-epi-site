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
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="PROTECT EPI"
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">PROTECT EPI</span>
                <span className="text-sm text-primary-foreground/80">
                  Sua proteção, nossa missão
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Oferecemos EPIs de qualidade que garantem segurança, conforto e
              confiança no dia a dia de trabalho.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5517996777841"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                >
                  (17) 99677-7841
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:comercial.protectepi@gmail.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 break-all"
                >
                  comercial.protectepi@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Av José Rodrigues Lisboa, 440 - Jardim Alice, São José do Rio
                  Preto
                </span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horário de atendimento</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Segunda a sexta
              <br />
              08:00 às 18:00
            </p>
            <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-4 border border-accent/30">
              <p className="text-sm font-semibold mb-2">CNPJ</p>
              <p className="text-sm text-primary-foreground/70">
                45.079.649/0001-88
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} PROTECT EPI. Todos os direitos
              reservados.
            </p>
            <p className="text-sm text-primary-foreground/60 text-center md:text-right">
              Desenvolvido com segurança e qualidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
