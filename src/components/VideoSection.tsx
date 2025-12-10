import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const videos = [
  {
    title: "FireGuard Insurance Company",
    description: "Podcast Insurance Company",
    duration: "05:47",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    title: "FireGuard Building Managers",
    description: "Podcast Building Manager",
    duration: "04:51",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    title: "FireGuard Home Owners",
    description: "Podcast Homeowners",
    duration: "05:08",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

export default function VideoSection() {
  return (
    <section id="videos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-videos-title">
            Podcast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how FireGuard protects different types of properties and customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => console.log(`Play video: ${video.title}`)}
              data-testid={`card-video-${index + 1}`}
              style={{
                border: '2px solid #cc3333',
                boxShadow: '0 0 10px rgba(204, 51, 51, 0.2)'
              }}
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225'%3E%3Crect fill='%23ddd' width='400' height='225'/%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center hover-elevate">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
