import { Package, GraduationCap, Clipboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Desenvolvimento de produtos",
      description:
        "Trabalhamos com as melhores marcas e desenvolvemos soluções personalizadas de EPIs para atender as necessidades específicas da sua empresa.",
    },
    {
      icon: GraduationCap,
      title: "Treinamentos",
      description:
        "Capacitação completa para uso correto de equipamentos de proteção, garantindo a segurança e conformidade com as normas regulamentadoras.",
    },
    {
      icon: Clipboard,
      title: "Visita técnica",
      description:
        "Análise profissional do ambiente de trabalho para identificar riscos e recomendar os EPIs mais adequados para cada função.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em equipamentos de proteção individual para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-accent/50 bg-card animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent/10 p-6 rounded-full mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-12 h-12 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
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
