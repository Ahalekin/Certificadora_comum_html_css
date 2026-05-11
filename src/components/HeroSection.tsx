import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Play } from "lucide-react";

const HeroSection = () => {
  const scrollToLessons = () => {
    document.getElementById("aulas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6">
            Curso Online
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient-gold">HTML e CSS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            Aulas práticas e objetivas para transformar seu aprendizado em resultados reais.
          </p>
          <button
            type="button"
            onClick={scrollToLessons}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <Play className="w-5 h-5" />
            Começar a Assistir
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
