import { Play, Clock } from "lucide-react";
import { Video } from "@/data/videos";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
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
        <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors z-10">
            <Play className="w-6 h-6 text-primary fill-primary" />
          </div>
          <span className="absolute bottom-3 right-3 text-xs bg-background/80 text-foreground px-2 py-1 rounded font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {video.duration}
          </span>
        </div>
        <div className="p-5">
          <p className="text-xs text-primary font-medium mb-1.5">{video.module}</p>
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
