import { Button } from "@/components/ui/button";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">EcoConnect</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transformando cidades através de comunicações sustentáveis 
              e tecnologia verde inovadora.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Soluções</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Comunicação Urbana</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Monitoramento Ambiental</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Energia Sustentável</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics Inteligente</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Empresa</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreira</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Parcerias</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@ecoconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-background/20 pt-12 mb-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Pronto para Transformar Sua Cidade?</h3>
            <p className="text-background/70 max-w-2xl mx-auto">
              Junte-se a centenas de cidades que já estão construindo um futuro mais sustentável.
            </p>
            <Button variant="hero" size="lg" className="mt-6">
              Começar Agora
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-background/70 text-sm">
            © 2024 EcoConnect. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-background/70">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;