import { videos } from "@/data/videos";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const modules = [...new Set(videos.map((v) => v.module))];

  return (
    <section id="aulas" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Aulas do Curso</h2>
        <p className="text-muted-foreground mb-12">
          {videos.length} aulas disponíveis
        </p>
        {modules.map((mod) => (
          <div key={mod} className="mb-12">
            <h3 className="text-xl font-semibold text-primary mb-6">{mod}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos
                .filter((v) => v.module === mod)
                .map((video, i) => (
                  <VideoCard key={video.id} video={video} index={i} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
