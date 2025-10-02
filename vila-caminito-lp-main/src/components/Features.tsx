import { Card } from "@/components/ui/card";
import { 
  Trees, 
  Waves, 
  Coffee, 
  Wifi, 
  Car, 
  Utensils,
  Mountain,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Vista Panorâmica",
    description: "Piscina com vista deslumbrante para o vale e natureza exuberante"
  },
  {
    icon: Trees,
    title: "Caminho das Cachoeiras",
    description: "Localização privilegiada no coração do roteiro de cachoeiras de Brotas"
  },
  {
    icon: Coffee,
    title: "Café da Manhã Incluso",
    description: "Gastronomia regional com pães artesanais, frutas da estação e vista para o vale"
  },
  {
    icon: Waves,
    title: "Piscina Relaxante",
    description: "Espaço perfeito para contemplar a paisagem e relaxar em meio à tranquilidade"
  },
  {
    icon: Wifi,
    title: "Wi-Fi Gratuito",
    description: "Internet de alta velocidade para quem precisa se manter conectado"
  },
  {
    icon: Car,
    title: "Estacionamento Gratuito",
    description: "Vaga garantida e segura para todos os hóspedes"
  },
  {
    icon: Utensils,
    title: "Restaurante Próprio",
    description: "Pratos autorais com ingredientes regionais e vista panorâmica"
  },
  {
    icon: Heart,
    title: "Acolhimento Familiar",
    description: "Atendimento personalizado que vai além da hospedagem tradicional"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a <span className="text-primary">Vila Caminito?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais do que uma hospedagem, oferecemos uma experiência completa de reconexão 
            com a natureza e consigo mesmo em um dos destinos mais belos do interior paulista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-strong transition-smooth transform hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};