import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Camera,
  Trees,
  Waves
} from "lucide-react";

const attractions = [
  {
    name: "Cachoeira da Primavera",
    distance: "5 min",
    icon: Waves,
    description: "Uma das mais belas cachoeiras de Brotas"
  },
  {
    name: "Arvorismo Brotas",
    distance: "10 min",
    icon: Trees,
    description: "Aventura nas alturas entre as árvores"
  },
  {
    name: "Centro de Brotas",
    distance: "15 min",
    icon: MapPin,
    description: "Comércio, restaurantes e vida noturna"
  },
  {
    name: "Cachoeira do Saltão",
    distance: "20 min",
    icon: Camera,
    description: "Visual incrível e ótima para fotos"
  }
];

export const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Localização <span className="text-primary">Privilegiada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No coração do Caminho das Cachoeiras em Brotas, com fácil acesso às principais 
            atrações naturais e aventuras da região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map Area */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-card-foreground">Endereço</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Estrada Vicinal Brotas BRO-040, KM 8 + 600 metros<br />
                Brotas - SP, Brasil
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>São Paulo: 3h de carro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>Campinas: 2h de carro</span>
                </div>
              </div>
            </Card>

            {/* Mock Map */}
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-foreground font-semibold">Vila Caminito</p>
                <p className="text-muted-foreground text-sm">Brotas - SP</p>
              </div>
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                <Button variant="outline" size="sm">
                  Ver no Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Attractions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Atrações Próximas
            </h3>
            
            <div className="space-y-4">
              {attractions.map((attraction, index) => (
                <Card key={index} className="p-4 hover:shadow-soft transition-smooth">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <attraction.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-card-foreground">
                          {attraction.name}
                        </h4>
                        <span className="text-sm font-bold text-primary">
                          {attraction.distance}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <h4 className="text-lg font-bold mb-3">🚗 Como Chegar:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Saindo de São Paulo: Rodovia Anhanguera → Itu → Brotas</li>
                <li>• GPS: Estrada Vicinal BRO-040, KM 8</li>
                <li>• Estacionamento gratuito no local</li>
                <li>• Sinalização clara na estrada</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <p className="text-xs opacity-90">
                  💡 Dica: Chegue durante o dia para apreciar melhor a vista do caminho!
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Activities Banner */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Atividades em Brotas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <Waves className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-foreground">Cachoeiras</div>
              <div className="text-sm text-muted-foreground">+20 opções</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <Trees className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-foreground">Arvorismo</div>
              <div className="text-sm text-muted-foreground">Aventura</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <Navigation className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-foreground">Trilhas</div>
              <div className="text-sm text-muted-foreground">Caminhadas</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-foreground">Turismo Rural</div>
              <div className="text-sm text-muted-foreground">Experiências</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};