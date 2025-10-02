import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Coffee, 
  Snowflake, 
  Tv, 
  Car, 
  Users,
  Star,
  CheckCircle
} from "lucide-react";
import roomLuxe from "@/assets/room-luxe.jpg";
import roomPremium from "@/assets/room-premium.jpg";

const rooms = [
  {
    id: "luxe",
    name: "Apartamento Luxo",
    image: roomLuxe,
    price: "R$ 280",
    originalPrice: "R$ 350",
    description: "Conforto e aconchego na medida certa para recarregar as energias após um dia de aventura em Brotas.",
    capacity: "Até 2 pessoas",
    features: [
      "Ar-condicionado",
      "Frigobar",
      "Smart TV 42\"",
      "Banheiro privativo",
      "Roupa de cama premium",
      "Amenities inclusos",
      "Wi-Fi gratuito"
    ],
    badge: "Mais Procurado",
    badgeColor: "bg-accent"
  },
  {
    id: "premium",
    name: "Apartamento Premium",
    image: roomPremium,
    price: "R$ 350",
    originalPrice: "R$ 450",
    description: "Mais espaço, mais conforto e uma experiência ainda mais especial. Perfeito para quem valoriza detalhes.",
    capacity: "Até 3 pessoas",
    features: [
      "Ar-condicionado",
      "Frigobar",
      "Smart TV 50\"",
      "Ambiente mais amplo",
      "Área de estar",
      "Banheiro luxo",
      "Varanda privativa",
      "Wi-Fi gratuito"
    ],
    badge: "Luxo Premium",
    badgeColor: "bg-primary"
  }
];

export const Rooms = () => {
  return (
    <section id="acomodacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Acomodações <span className="text-primary">Confortáveis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todos os quartos foram planejados para oferecer aconchego, privacidade e praticidade,
            com amenities de alta qualidade e vista para a natureza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-strong transition-smooth transform hover:scale-[1.02]">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${room.badgeColor} text-white font-semibold`}>
                  {room.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {room.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{room.capacity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg text-muted-foreground line-through">
                        {room.originalPrice}
                      </span>
                      <span className="text-3xl font-bold text-primary">
                        {room.price}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">por noite</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://hbook.hsystem.com.br/Booking?companyId=67be07ec81636722ab44b57f"
                    className="flex-1"
                  >
                    <Button variant="cta" className="w-full">
                      Reservar Agora
                    </Button>
                  </a>
                  <a href="https://wa.me/5514982210078">
                    <Button variant="outline" size="default">
                      Mais Info
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-accent rounded-xl p-8 text-center text-accent-foreground max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            🎊 Oferta Especial • Agosto 2025
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold">25% OFF</div>
              <div className="text-sm">3 diárias ou mais</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-3xl font-bold">10% OFF</div>
              <div className="text-sm">2 diárias</div>
            </div>
          </div>
          <p className="mb-6">
            ⚡ Promoção válida por tempo limitado! Reserve pelo WhatsApp e garante seu desconto.
          </p>
          <a href="https://wa.me/5514982210078">
            <Button variant="secondary" size="lg" className="bg-white text-accent hover:bg-white/90">
              Garantir Desconto no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};