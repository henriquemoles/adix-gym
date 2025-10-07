'use client';

import {
  MapPin,
  Clock,
  Phone,
  Dumbbell,
  Users,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";

import adix1 from '../../public/assets/adix1.avif';
import adix2 from '../../public/assets/adix2.avif';
import adix3 from '../../public/assets/adix3.avif';
import adix4 from '../../public/assets/adix4.avif';
import adix5 from '../../public/assets/adix5.avif';
import adix6 from '../../public/assets/adix6.avif';
import adix7 from '../../public/assets/adix7.avif';
import adix8 from '../../public/assets/adix8.avif';
import adix9 from '../../public/assets/adix9.avif';

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const backgroundImages = [
    adix1, adix2, adix3, adix4, adix5, adix6, adix7, adix8, adix9,
  ];

  useEffect(() => {
    const loadImages = async () => {
      const promises = backgroundImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Falha ao carregar as imagens", error);
      }
    };
    loadImages();
  }, [backgroundImages]);

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [imagesLoaded, backgroundImages.length]);

  const highlights = [
    { icon: <Users className="h-5 w-5" />, text: "Equipe especializada" },
    { icon: <Dumbbell className="h-5 w-5" />, text: "Equipamentos modernos" },
    { icon: <Star className="h-5 w-5" />, text: "Resultados comprovados" },
  ];

  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden pt-24 pb-20">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {!imagesLoaded ? (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <p className="text-white text-lg animate-pulse">Carregando...</p>
          </div>
        ) : (
          backgroundImages.map((image, index) => (
            <div
  key={index}
  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
    index === currentImageIndex ? "opacity-100" : "opacity-0"
  }`}
>
  {/* Container do fundo com fade lateral */}
  <div className="relative w-full h-full flex items-center justify-center bg-gray-800 overflow-hidden">
    
    {/* Imagem com fade do centro para as laterais */}
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src={image.src}
        alt={`Hero background ${index + 1}`}
        className="w-auto h-auto min-w-[70%] min-h-[70%] max-w-[100%] max-h-[100%] object-cover"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 50%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 50%, black 80%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </div>

    {/* Fade lateral do background (bordas para o centro) */}
    <div className="absolute inset-0 pointer-events-none flex">
      <div className="w-1/3 h-full bg-gradient-to-r from-black to-transparent"></div>
      <div className="flex-1"></div>
      <div className="w-1/3 h-full bg-gradient-to-l from-black to-transparent"></div>
    </div>
  </div>
</div>
          ))
        )}

        {/* Overlays para contraste */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

        {/* Elementos animados */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-red-600/12 rounded-full blur-xl animate-pulse" style={{ animationDelay: "3s" }}></div>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255, 229, 0, 0.3) 1px, transparent 0)", backgroundSize: "50px 50px" }}></div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex items-center text-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Título e subtítulo */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white drop-shadow-2xl">ADIX GYM</span>
              <br />
              <span className="text-red-500 drop-shadow-xl">—</span>
              <br />
              <span className="text-white drop-shadow-2xl">Treinamento de verdade,</span>
              <br />
              <span className="text-red-500 drop-shadow-xl">resultado de verdade.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Alta performance, tecnologia no seu treino e estrutura de ponta para você evoluir com conforto.
              A ADIX GYM oferece treinos de alta qualidade com suporte de um app moderno no seu celular.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-red-500 p-1 bg-red-500/20 rounded-full">{highlight.icon}</div>
                <span className="text-white font-medium drop-shadow-sm">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-500 group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-3 text-lg">Localização</h3>
              <p className="text-gray-200">Osasco - SP</p>
              <p className="text-gray-400 text-sm mt-1">Fácil acesso</p>
            </div>

            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-500 group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-all duration-300">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-3 text-lg">Horários</h3>
              <p className="text-gray-200">Seg-Sex: 06h às 22h</p>
              <p className="text-gray-400 text-sm mt-1">Sáb: 09h às 13h</p>
            </div>

            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-500 group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-all duration-300">
                  <Phone className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-3 text-lg">Contato</h3>
              <p className="text-gray-200">+55 11 94212-1589</p>
              <p className="text-gray-400 text-sm mt-1">WhatsApp disponível</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-red-500/25 to-red-600/25 backdrop-blur-md rounded-2xl p-10 border border-red-500/30 mx-auto hover:from-red-500/30 hover:to-red-600/30 left-2 transition-all duration-500">
            <h3 className="text-white font-semibold mb-6 text-2xl">Por que escolher a ADIX?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span>Avaliação física personalizada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span>Gympass e Wellhub</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span>Acompanhe seus treinos pelo smartphone</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span>Iluminação personalizada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span>Vestiários completos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span>Wi-Fi gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Arrow */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        <div className="w-8 h-12 border-2 border-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 relative animate-bounce" style={{ animationDelay: "2s" }}>
          <div className="w-1 h-4 bg-red-500 rounded-full animate-bounce absolute top-1/2 transform -translate-y-1/2" style={{ animationDelay: "1.5s" }} />
        </div>
      </div>
    </section>
  );
}
