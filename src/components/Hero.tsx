import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";
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
          <div className="flex justify-center mb-6 animate-scale-in">
            <div className="bg-accent/20 backdrop-blur-sm p-4 rounded-full">
              <Shield className="w-16 h-16 text-accent" />
            </div>
          </div>

          <h1 className="sr-only">PROTECT EPI</h1>
          <img 
            src={logoHero} 
            alt="PROTECT EPI" 
            className="w-full max-w-2xl mx-auto mb-6 animate-fade-in brightness-0 invert"
          />

          <h2 className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in font-light">
            Proteger quem trabalha é nossa missão
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Oferecemos EPIs de qualidade que garantem segurança, conforto e confiança no dia a dia de trabalho
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            {[
              "Produtos certificados",
              "Atendimento personalizado",
              "Entrega rápida",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-4 px-6 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => navigate("/vitrine")}
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-glow hover:scale-105 transition-all duration-300"
            >
              Ver nossa vitrine
            </Button>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
            >
              Solicite um orçamento
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
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
