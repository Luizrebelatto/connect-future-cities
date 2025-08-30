import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Battery, 
  CloudRain, 
  Users, 
  BarChart3, 
  Shield 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Comunicação Inteligente",
      description: "Conecte todos os dispositivos urbanos em uma rede sustentável e eficiente."
    },
    {
      icon: <Battery className="w-12 h-12 text-secondary" />,
      title: "Energia Renovável",
      description: "100% alimentado por energia limpa, reduzindo drasticamente a pegada de carbono."
    },
    {
      icon: <CloudRain className="w-12 h-12 text-accent" />,
      title: "Monitoramento Ambiental",
      description: "Acompanhe qualidade do ar, ruído e outros indicadores em tempo real."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Engajamento Cidadão",
      description: "Plataforma que conecta governo e cidadãos para uma cidade mais participativa."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-secondary" />,
      title: "Analytics Inteligente",
      description: "Dados e insights para tomada de decisões mais sustentáveis e eficientes."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Segurança Total",
      description: "Comunicações criptografadas e infrastructure resiliente para sua cidade."
    }
  ];

  return (
    <section className="py-24 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que Escolher Comunicações Sustentáveis?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa tecnologia revolucionária oferece uma abordagem completa 
            para transformar sua cidade em um ambiente mais sustentável e conectado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-card-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" className="text-lg px-8 py-4">
              Solicitar Demonstração
            </Button>
            <Button variant="sustainable" size="lg" className="text-lg px-8 py-4">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;