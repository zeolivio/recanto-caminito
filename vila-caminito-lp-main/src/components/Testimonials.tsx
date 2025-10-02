import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Lugar incrível! A piscina com vista para o vale é simplesmente deslumbrante. O café da manhã é delicioso e o atendimento é muito acolhedor. Já estou planejando voltar!",
    date: "Julho 2025"
  },
  {
    name: "Carlos e Ana Santos",
    location: "Campinas, SP",
    rating: 5,
    text: "Passamos nossa lua de mel na Vila Caminito e foi perfeito! Os quartos são muito confortáveis, a localização é ideal para visitar as cachoeiras e o ambiente é super romântico.",
    date: "Junho 2025"
  },
  {
    name: "João Oliveira",
    location: "Ribeirão Preto, SP",
    rating: 5,
    text: "Viagem em família maravilhosa! As crianças adoraram a piscina e nós adultos aproveitamos muito o sossego e a vista incrível. Recomendo demais!",
    date: "Julho 2025"
  },
  {
    name: "Fernanda Costa",
    location: "São José dos Campos, SP",
    rating: 5,
    text: "Lugar perfeito para desconectar! Fiquei 4 dias e foi exatamente o que eu precisava. A natureza ao redor é linda e o pessoal da pousada é muito atencioso.",
    date: "Agosto 2025"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos <span className="text-primary">hóspedes dizem</span>
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(+200 avaliações)</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 2.000 hóspedes já viveram momentos inesquecíveis na Vila Caminito.
            Veja alguns depoimentos de quem já se hospedou conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-strong transition-smooth bg-card/80 backdrop-blur-sm border-border/50">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary opacity-50 mr-3" />
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.date}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2.000+</div>
            <div className="text-muted-foreground">Hóspedes Felizes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Avaliação Google</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Hóspedes Retornam</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5 Anos</div>
            <div className="text-muted-foreground">de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};