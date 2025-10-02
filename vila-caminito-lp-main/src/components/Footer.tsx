import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook,
  Clock
} from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Vila Caminito</h3>
            <p className="mb-6 opacity-90">
              Seu refúgio no coração do Caminho das Cachoeiras em Brotas. 
              Descanso verdadeiro em meio à natureza exuberante.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/recantocaminito/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-smooth"
              >
                <div className="bg-primary-foreground/20 p-2 rounded-lg">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
              <a 
                href="https://www.facebook.com/recantocaminito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-smooth"
              >
                <div className="bg-primary-foreground/20 p-2 rounded-lg">
                  <Facebook className="w-5 h-5" />
                </div>
              </a>
              <a 
                href="https://wa.me/5514982210078" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-smooth"
              >
                <div className="bg-primary-foreground/20 p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5514982210078" 
                className="flex items-center space-x-3 hover:opacity-80 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>(14) 98221-0078</span>
              </a>
              <a 
                href="tel:+5514982210077" 
                className="flex items-center space-x-3 hover:opacity-80 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>(14) 98221-0077</span>
              </a>
              <a 
                href="mailto:contato@recantocaminito.com.br" 
                className="flex items-center space-x-3 hover:opacity-80 transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>contato@recantocaminito.com.br</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Estrada Vicinal BRO-040, KM 8 + 600m<br />
                  Brotas - SP
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Funcionamento</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <div className="font-medium">Check-in / Check-out</div>
                  <div className="text-sm opacity-90">14h / 12h</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <div className="font-medium">Café da Manhã</div>
                  <div className="text-sm opacity-90">9h às 11h</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <div className="font-medium">Restaurante</div>
                  <div className="text-sm opacity-90">11h às 15h</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <div className="font-medium">Recepção</div>
                  <div className="text-sm opacity-90">24h (WhatsApp)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Reserve Agora</h4>
            <div className="space-y-3">
              <a href="https://hbook.hsystem.com.br/Booking?companyId=67be07ec81636722ab44b57f">
                <Button variant="secondary" className="w-full mb-2">
                  Reserva Online
                </Button>
              </a>
              <a href="https://wa.me/5514982210078">
                <Button variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  WhatsApp
                </Button>
              </a>
              <div className="mt-4 p-3 bg-primary-foreground/10 rounded-lg">
                <div className="text-sm font-semibold mb-1">🎊 Oferta Especial</div>
                <div className="text-xs opacity-90">
                  25% OFF em 3+ diárias<br />
                  10% OFF em 2 diárias
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2025 Vila Caminito • Recanto Caminito • Todos os direitos reservados
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:opacity-80 transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="hover:opacity-80 transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="hover:opacity-80 transition-smooth">
                Trabalhe Conosco
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5514982210078" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button 
          variant="cta" 
          size="icon" 
          className="w-14 h-14 rounded-full shadow-glow animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </a>
    </footer>
  );
};