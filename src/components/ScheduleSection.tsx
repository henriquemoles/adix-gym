import { Clock, Calendar } from 'lucide-react';

export function ScheduleSection() {
  const schedule = [
    { days: "Segunda a Sexta", hours: "06:00 – 22:00", isOpen: true },
    { days: "Sábado", hours: "09:00 – 13:00", isOpen: true },
    { days: "Domingo", hours: "Fechado", isOpen: false }
  ];

  return (
    <section id="horarios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
              <Clock className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Horários de <span className="text-red-500">Funcionamento</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos aqui para você em horários flexíveis durante toda a semana.
            </p>
          </div>

          {/* Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border transition-all duration-300 ${
                  item.isOpen
                    ? 'border-border hover:border-red-500/50 bg-card hover:shadow-lg hover:shadow-red-500/10'
                    : 'border-border bg-muted/50'
                }`}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className={`h-6 w-6 ${item.isOpen ? 'text-red-500' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.days}
                  </h3>
                  <p className={`text-lg ${
                    item.isOpen ? 'text-red-500 font-semibold' : 'text-muted-foreground'
                  }`}>
                    {item.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-block p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-red-500 font-medium">
                💡 Dica: Nos horários de pico (18h às 21h), chegue um pouco mais cedo para garantir seu treino!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}