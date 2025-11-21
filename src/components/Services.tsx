import { Package, GraduationCap, Clipboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import trainingImg from "@/assets/training.jpg";
import inspectionImg from "@/assets/inspection.jpg";
import productsImg from "@/assets/products.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Desenvolvimento de produtos",
      description:
        "Trabalhamos com as melhores marcas e desenvolvemos soluções personalizadas de EPIs para atender as necessidades específicas da sua empresa.",
      image: productsImg,
    },
    {
      icon: GraduationCap,
      title: "Treinamentos",
      description:
        "Capacitação completa para uso correto de equipamentos de proteção, garantindo a segurança e conformidade com as normas regulamentadoras.",
      image: trainingImg,
    },
    {
      icon: Clipboard,
      title: "Visita técnica",
      description:
        "Análise profissional do ambiente de trabalho para identificar riscos e recomendar os EPIs mais adequados para cada função.",
      image: inspectionImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 px-4">
            Nossos serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas em equipamentos de proteção individual para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-accent/50 bg-card animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent/10 backdrop-blur-sm p-3 sm:p-4 rounded-full border-2 border-accent/30">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-primary text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
