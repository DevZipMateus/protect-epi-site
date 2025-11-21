import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import productsImg from "@/assets/products.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Proteger quem trabalha! Oferecemos EPIs de qualidade que garantem segurança, conforto e confiança no dia a dia.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser a empresa referência, quando o cliente pensar em segurança no trabalho.",
    },
    {
      icon: Heart,
      title: "Valores",
      points: [
        "Atendimento rápido e humano",
        "Respeito e compromisso com o cliente",
        "Inovação para proteger cada vez melhor",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 px-4">
            Sobre nós
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça nossa missão, visão e valores que nos guiam na busca pela excelência
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 animate-fade-in px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={productsImg}
              alt="Equipamentos de proteção individual - EPIs de qualidade"
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-6">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.points && (
                      <ul className="space-y-3 text-left w-full">
                        {item.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-accent mt-1 flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
