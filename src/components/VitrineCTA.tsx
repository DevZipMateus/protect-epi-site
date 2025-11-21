import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Sparkles, Eye, ArrowRight } from "lucide-react";

const VitrineCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-accent/20 backdrop-blur-sm p-3 sm:p-4 rounded-full">
                <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Conheça nossa vitrine online
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto px-4">
              Explore nosso catálogo completo de EPIs com preços atualizados em tempo real
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              {
                icon: Eye,
                title: "Visualização Completa",
                description: "Veja todos os produtos disponíveis com fotos e descrições detalhadas"
              },
              {
                icon: Sparkles,
                title: "Preços Atualizados",
                description: "Valores sempre atualizados para você tomar a melhor decisão"
              },
              {
                icon: ShoppingBag,
                title: "Catálogo Diversificado",
                description: "Encontre EPIs para todas as necessidades da sua empresa"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 animate-fade-in"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="bg-accent/20 p-2 sm:p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-center text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in px-4">
            <Button
              size="lg"
              onClick={() => navigate("/vitrine")}
              className="bg-accent hover:bg-accent/90 text-white text-lg sm:text-xl px-8 py-6 sm:px-12 sm:py-8 shadow-glow hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
            >
              Acessar vitrine agora
              <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <p className="text-white/60 mt-4 text-xs sm:text-sm">
              Navegação fácil • Preços competitivos • Atendimento especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineCTA;
