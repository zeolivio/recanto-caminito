import { Button } from "@/components/ui/button";
import { MapPin, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-6 mb-6 opacity-90">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.9/5 no Google</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">+2.000 hóspedes felizes</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Brotas • SP</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Desconecte-se do mundo.
            <br />
            <span className="text-accent">Reconecte-se com você.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            No coração do Caminho das Cachoeiras em Brotas, a Vila Caminito oferece o refúgio perfeito 
            para quem busca descanso verdadeiro em meio à natureza exuberante.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://hbook.hsystem.com.br/Booking?companyId=67be07ec81636722ab44b57f">
              <Button variant="reserve" className="animate-bounce">
                Reservar Agora
              </Button>
            </a>
            <a href="https://wa.me/5514982210078">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Fale Conosco
              </Button>
            </a>
          </div>

          {/* Special Offer */}
          <div className="bg-accent/90 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto animate-slide-up">
            <h3 className="text-2xl font-bold text-accent-foreground mb-2">
              🎉 Oferta Especial de Agosto
            </h3>
            <p className="text-accent-foreground mb-4">
              <span className="font-bold text-xl">25% OFF</span> para hospedagens de 3 diárias ou mais
              <br />
              <span className="font-bold text-lg">10% OFF</span> para 2 diárias
            </p>
            <p className="text-sm text-accent-foreground/80">
              ⏰ Oferta válida por tempo limitado • 📞 Reserve pelo WhatsApp para garantir o desconto
            </p>
          </div>
        </div>
      </div>

      {/* Floating animation element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};