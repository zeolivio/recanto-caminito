import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Coffee, Utensils, Mountain } from "lucide-react";
import breakfastImage from "@/assets/breakfast.jpg";

const breakfastFeatures = [
  {
    icon: Coffee,
    title: "Pães Artesanais",
    description: "Frescos e feitos diariamente"
  },
  {
    icon: Utensils,
    title: "Ingredientes Regionais",
    description: "Frutas da estação e produtos locais"
  },
  {
    icon: Mountain,
    title: "Vista para o Vale",
    description: "Desfrute do café com paisagem deslumbrante"
  },
  {
    icon: Clock,
    title: "Horário Flexível",
    description: "Servido das 9h às 11h todos os dias"
  }
];

export const Breakfast = () => {
  return (
    <section id="comodidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Café da Manhã <span className="text-primary">Incluso</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comece o dia com um café da manhã especial, servido no restaurante com vista panorâmica 
              para o vale. Gastronomia feita com tempo, sabor e cuidado, utilizando ingredientes 
              regionais frescos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {breakfastFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gradient-primary p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-3">🍳 Menu Incluso:</h3>
              <ul className="space-y-2 mb-4">
                <li>• Pães artesanais variados</li>
                <li>• Frutas frescas da estação</li>
                <li>• Frios e queijos selecionados</li>
                <li>• Itens de confeitaria</li>
                <li>• Sucos naturais e café especial</li>
                <li>• Opções vegetarianas disponíveis</li>
              </ul>
              <p className="text-sm opacity-90">
                ⏰ Servido diariamente das 9h às 11h no restaurante com vista para o vale
              </p>
            </Card>
          </div>

          <div className="relative">
            <img 
              src={breakfastImage} 
              alt="Café da manhã da Vila Caminito"
              className="w-full h-96 object-cover rounded-xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-sm font-semibold">Café da Manhã</div>
                <div className="text-xs opacity-90">Incluso na diária • 9h às 11h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional restaurant info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <Card className="p-6">
            <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-card-foreground mb-2">Café da Manhã</h3>
            <p className="text-muted-foreground text-sm">9h às 11h • Todos os dias</p>
          </Card>
          
          <Card className="p-6">
            <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-card-foreground mb-2">Almoço</h3>
            <p className="text-muted-foreground text-sm">11h às 15h • Restaurante próprio</p>
          </Card>
          
          <Card className="p-6">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-card-foreground mb-2">Café da Tarde</h3>
            <p className="text-muted-foreground text-sm">14h às 16h • Opcional</p>
          </Card>
        </div>
      </div>
    </section>
  );
};