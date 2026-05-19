import { videos } from "@/data/videos";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  return (
    <section id="aulas" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Aulas do Curso</h2>
        <p className="text-muted-foreground mb-12">
          {videos.length} aulas disponíveis
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
