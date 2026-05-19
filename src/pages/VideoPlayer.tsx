import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { videos } from "@/data/videos";
import SiteHeader from "@/components/SiteHeader";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
const renderDescription = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:opacity-80 break-all"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};
const VideoPlayer = () => {
  const { id } = useParams();
  const currentIndex = videos.findIndex((v) => v.id === id);
  const prevVideo = currentIndex > 0 ? videos[currentIndex - 1] : null;
  const nextVideo = currentIndex < videos.length - 1 ? videos[currentIndex + 1] : null;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);
  if (!video) {
    return (
    );
  }
  // Detecta se é um vídeo do YouTube e extrai o ID
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
            Voltar às aulas
          </Link>
          <p className="text-sm text-primary font-medium mb-1">{video.module}</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Aula {video.order}: {video.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-10">{video.description}</p>
          <p className="text-muted-foreground max-w-2xl mb-10 whitespace-pre-wrap break-words">
            {renderDescription(video.description)}
          </p>
          <div className="flex items-center justify-between border-t border-border pt-6">
            {prevVideo ? (
          </div>
        </motion.div>
        {/* Sidebar list */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-lg font-semibold mb-4">Todas as aulas</h2>
          <div className="space-y-1">
