import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Vila Caminito</h1>
            <span className="text-sm text-muted-foreground">Brotas • SP</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href="#acomodacoes" className="text-foreground hover:text-primary transition-smooth">
                Acomodações
              </a>
              <a href="#comodidades" className="text-foreground hover:text-primary transition-smooth">
                Comodidades
              </a>
              <a href="#localizacao" className="text-foreground hover:text-primary transition-smooth">
                Localização
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-smooth">
                Contato
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <a href="tel:+5514982210078">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Phone className="w-4 h-4" />
                (14) 98221-0078
              </Button>
            </a>
            <a href="https://wa.me/5514982210078" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};