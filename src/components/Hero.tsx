import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-city.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Cidade sustentável com comunicações verdes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Hero Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transforme Sua Cidade com
            <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
              Comunicações Sustentáveis
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Conecte, comunique e construa o futuro urbano sustentável. 
            Nossa plataforma revoluciona como as cidades se comunicam, 
            reduzindo o impacto ambiental em até 75%.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
            >
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">75%</div>
              <div className="text-white/80">Redução de CO₂</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-white/80">Cidades Conectadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1M+</div>
              <div className="text-white/80">Usuários Ativos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;