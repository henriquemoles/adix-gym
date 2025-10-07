'use client';

import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/useTheme";

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const newLogoUrl =
    "https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/partners/494193/lg_a74294f6-e9cf-4bec-8a48-102fb1ab8ee7_faacdabfaaecffcbcbDesignsemnome.png";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={newLogoUrl}
            alt="Adix Gym"
            className="h-16 w-28 object-cover"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-red-500 transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("horarios")}
            className="text-foreground hover:text-red-500 transition-colors"
          >
            Horários
          </button>
          <button
            onClick={() => scrollToSection("instagram")}
            className="text-foreground hover:text-red-500 transition-colors"
          >
            Instagram
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-red-500 transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9 hover:bg-red-500/10"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-red-500" />
            ) : (
              <Moon className="h-4 w-4 text-red-500" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-9 h-9"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left text-foreground hover:text-red-500 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("horarios")}
              className="text-left text-foreground hover:text-red-500 transition-colors"
            >
              Horários
            </button>
            <button
              onClick={() => scrollToSection("instagram")}
              className="text-left text-foreground hover:text-red-500 transition-colors"
            >
              Instagram
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-foreground hover:text-red-500 transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}