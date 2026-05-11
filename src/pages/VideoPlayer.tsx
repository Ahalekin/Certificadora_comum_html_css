import { useParams, Link } from "react-router-dom";
import { videos } from "@/data/videos";
import SiteHeader from "@/components/SiteHeader";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const VideoPlayer = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);
  const currentIndex = videos.findIndex((v) => v.id === id);
  const prevVideo = currentIndex > 0 ? videos[currentIndex - 1] : null;
  const nextVideo = currentIndex < videos.length - 1 ? videos[currentIndex + 1] : null;

  if (!video) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Aula não encontrada.</p>
      </div>
    );
  }

  // Detecta se é um vídeo do YouTube e extrai o ID
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(video.videoUrl);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <div className="bg-secondary">
          <div className="max-w-5xl mx-auto">
            {youtubeId ? (
              <iframe
                key={video.id}
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video bg-background border-0"
              />
            ) : (
              <video
                key={video.id}
                controls
                autoPlay
                className="w-full aspect-video bg-background"
              >
                <source src={video.videoUrl} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto px-6 py-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar às aulas
          </Link>

          <p className="text-sm text-primary font-medium mb-1">{video.module}</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Aula {video.order}: {video.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-10">{video.description}</p>

          <div className="flex items-center justify-between border-t border-border pt-6">
            {prevVideo ? (
              <Link
                to={`/aula/${prevVideo.id}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Aula anterior</span>
              </Link>
            ) : (
              <div />
            )}
            {nextVideo ? (
              <Link
                to={`/aula/${nextVideo.id}`}
                className="flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity font-medium"
              >
                <span>Próxima aula</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>

        {/* Sidebar list */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-lg font-semibold mb-4">Todas as aulas</h2>
          <div className="space-y-1">
            {videos.map((v) => (
              <Link
                key={v.id}
                to={`/aula/${v.id}`}
                className={`flex items-center justify-between px-4 py-3 rounded-md text-sm transition-colors ${
                  v.id === id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <span>
                  {v.order}. {v.title}
                </span>
                <span className="text-xs">{v.duration}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPlayer;
