import { Play, Clock } from "lucide-react";
import { Video } from "@/data/videos";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const getYouTubeId = (url: string): string | null => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  const ytId = getYouTubeId(video.videoUrl);
  const thumb = ytId
    ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`
    : video.thumbnail;
  const fallbackThumb: string | undefined = undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/aula/${video.id}`}
        className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-colors"
      >
        <div className="aspect-video bg-secondary relative overflow-hidden">
          {thumb ? (
            <img
              src={thumb}
              alt={video.title}
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                if (fallbackThumb && img.src !== fallbackThumb) {
                  img.src = fallbackThumb;
                }
              }}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
            </div>
          </div>
          <span className="absolute bottom-3 right-3 text-xs bg-background/80 text-foreground px-2 py-1 rounded font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {video.duration}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
            Aula {video.order}: {video.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;
