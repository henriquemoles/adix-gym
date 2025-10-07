'use client';

import { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { InstagramIcon } from 'lucide-react';
import { Button } from './ui/button';

export function InstagramSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="instagram" className="py-20 bg-black dark min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Siga nosso <span className="text-red-500">Instagram</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Acompanhe os treinos, dicas fitness e tudo que acontece na ADIX Gym através do nosso Instagram.
            </p>
          </div>

          {/* Instagram Embed */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-4xl">
              <div className="bg-gradient-to-br from-red-500/10 to-black rounded-2xl p-8 shadow-2xl border border-red-500/30 backdrop-blur-sm">
                <div className="bg-black/50 rounded-xl p-6 backdrop-blur-sm">
                  {isClient && (
                    <InstagramEmbed 
                      url="https://www.instagram.com/adixgym/?hl=en" 
                      width="100%"
                      captioned={false}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-center text-white shadow-2xl border border-red-400">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                  <InstagramIcon className="h-16 w-16" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                🔥 Não perca nenhuma novidade da ADIX!
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
                Segue a gente no Instagram para ver os bastidores, treinos especiais e dicas exclusivas!
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100 hover:scale-105 px-12 py-6 text-xl font-semibold rounded-full shadow-lg transition-all duration-300"
                onClick={() => window.open('https://www.instagram.com/adixgym/?hl=en', '_blank')}
              >
                <InstagramIcon className="h-6 w-6 mr-3" />
                Seguir @adixgym
              </Button>
            </div>
          </div>

          {/* Fade lateral sutil */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
