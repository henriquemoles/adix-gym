

import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-red-500" />,
      label: "E-mail",
      value: "comercial.adix.gym@gmail.com",
      href: "mailto:comercial.adix.gym@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-red-500" />,
      label: "WhatsApp",
      value: "+55 11 94212-1589",
      href: "https://wa.me/5511942121589"
    },
    {
      icon: <Instagram className="h-6 w-6 text-red-500" />,
      label: "Instagram",
      value: "@adixgym",
      href: "https://www.instagram.com/adixgym"
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      label: "Localização",
      value: "Osasco - SP",
      href: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Entre em <span className="text-red-500">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para tirar suas dúvidas e ajudar você a começar sua jornada fitness.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-lg border border-border hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-red-500 transition-colors">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground text-sm break-words">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}