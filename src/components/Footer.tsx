

import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/adixgym",
      label: "Instagram",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:comercial.adix.gym@gmail.com",
      label: "E-mail",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "https://wa.me/5511942121589",
      label: "WhatsApp",
    },
  ];
  const adixLogo =
    "https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/partners/494193/lg_a74294f6-e9cf-4bec-8a48-102fb1ab8ee7_faacdabfaaecffcbcbDesignsemnome.png";
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src={adixLogo}
                  alt="Adix Gym"
                  className="h-16 w-auto object-cover"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Treinamento de verdade, resultado de verdade.
                Alta performance e tecnologia para sua evolução
                fitness.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Links Rápidos
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() =>
                    document
                      .getElementById("sobre")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-muted-foreground hover:text-red-500 transition-colors text-sm"
                >
                  Sobre a Academia
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("horarios")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-muted-foreground hover:text-red-500 transition-colors text-sm"
                >
                  Horários
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contato")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-muted-foreground hover:text-red-500 transition-colors text-sm"
                >
                  Contato
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Contato
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Osasco - SP</p>
                <p>comercial.adix.gym@gmail.com</p>
                <p>+55 11 94212-1589</p>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={
                    social.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>
                © {currentYear} ADIX GYM. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}