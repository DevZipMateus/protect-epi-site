import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logoHero from "@/assets/logo-hero.png";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Trabalhadores com equipamentos de proteção"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="sr-only">PROTECT EPI</h1>
          <img 
            src={logoHero} 
            alt="PROTECT EPI" 
            className="w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto mb-4 sm:mb-6 animate-fade-in brightness-0 invert"
          />

          <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 sm:mb-8 animate-fade-in font-light px-4">
            Proteger quem trabalha é nossa missão
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed px-4">
            Oferecemos EPIs de qualidade que garantem segurança, conforto e confiança no dia a dia de trabalho
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12 animate-fade-in px-4">
            {[
              "Produtos certificados",
              "Atendimento personalizado",
              "Entrega rápida",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4 sm:py-4 sm:px-6 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4">
            <Button
              size="lg"
              onClick={() => navigate("/vitrine")}
              className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 shadow-glow hover:scale-105 transition-all duration-300"
            >
              Ver nossa vitrine
            </Button>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 backdrop-blur-sm transition-all duration-300"
            >
              Solicite um orçamento
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 backdrop-blur-sm transition-all duration-300"
            >
              <a
                href="https://wa.me/5517996777841"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
