import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import partnershipImg from "@/assets/partnership.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(17) 99677-7841",
      link: "tel:+5517996777841",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "comercial.protectepi@gmail.com",
      link: "mailto:comercial.protectepi@gmail.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Av José Rodrigues Lisboa, 440 - Jardim Alice, São José do Rio Preto",
      link: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Segunda a sexta: 08:00 às 18:00",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e sua empresa com as melhores soluções em EPIs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-primary/50 transition-all duration-300 bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-1">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-accent transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center animate-fade-in">
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img
                  src={partnershipImg}
                  alt="Parceria profissional em segurança do trabalho"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Solicite um orçamento sem compromisso
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe está pronta para oferecer a melhor solução em EPIs para sua empresa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-glow transition-all duration-300"
                  >
                    <a
                      href="https://wa.me/5517996777841"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar no WhatsApp
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary/10 hover:bg-primary/20 text-primary border-2 border-primary/60 hover:border-primary transition-all duration-300"
                  >
                    <a href="mailto:comercial.protectepi@gmail.com">
                      Enviar e-mail
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
