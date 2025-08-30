import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Zap, Users } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-12 h-12 text-destructive" />,
      title: "Poluição Urbana Crescente",
      description: "Sistemas de comunicação tradicionais geram 40% mais emissões de CO₂ que soluções sustentáveis."
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-destructive" />,
      title: "Custos Operacionais Altos",
      description: "Infraestrutura antiga consome 3x mais energia, impactando negativamente o orçamento municipal."
    },
    {
      icon: <Zap className="w-12 h-12 text-destructive" />,
      title: "Desperdício Energético",
      description: "60% da energia em sistemas urbanos convencionais é desperdiçada por falta de otimização."
    },
    {
      icon: <Users className="w-12 h-12 text-destructive" />,
      title: "Desconexão Cidadã",
      description: "Falta de canais eficientes resulta em 70% dos cidadãos se sentindo desconectados da gestão urbana."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Os Desafios das Cidades Modernas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Problemas urbanos exigem soluções inovadoras. Descubra como 
            nossa tecnologia resolve os maiores desafios de comunicação e sustentabilidade.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 border-l-4 border-l-destructive bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {problem.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Solution Highlight */}
        <div className="bg-hero-gradient rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            A Solução Está Aqui
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa plataforma de comunicações sustentáveis resolve todos esses problemas 
            com tecnologia de ponta e foco na sustentabilidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">75%</div>
              <div className="text-white/80">Menos Emissões</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300 mb-2">60%</div>
              <div className="text-white/80">Economia de Energia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">90%</div>
              <div className="text-white/80">Satisfação Cidadã</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;