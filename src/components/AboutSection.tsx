
import { CheckCircle, Dumbbell, Users, Zap, Wifi, Droplets } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-red-500" />,
      title: "Avaliação física personalizada",
      description: "Análise completa para criar seu treino ideal"
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Planos personalizados",
      description: "Conveniados com Gympass(Wellhub) e Totalpass"
    },
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: "Iluminação personalizada",
      description: "Salas com ambiente otimizado para cada treino"
    },
    {
      icon: <Droplets className="h-6 w-6 text-red-500" />,
      title: "Vestiários completos",
      description: "Banheiros amplos com chuveiros e armários"
    },
    {
      icon: <Wifi className="h-6 w-6 text-red-500" />,
      title: "Wi-Fi gratuito",
      description: "Conexão de alta velocidade em toda a academia"
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-red-500" />,
      title: "App moderno",
      description: "Acompanhe seus treinos pelo smartphone"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sobre a <span className="text-red-500">ADIX GYM</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A ADIX GYM oferece treinos de alta qualidade com suporte de um app moderno no seu celular.
              Nossa equipe está sempre se aprimorando para entregar resultados reais a cada ciclo.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-red-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="inline-block p-6 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pronto para começar sua transformação?
              </h3>
              <p className="text-muted-foreground mb-4">
                Venha conhecer nossa estrutura e faça uma aula experimental gratuita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}