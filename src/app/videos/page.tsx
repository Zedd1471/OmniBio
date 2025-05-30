export default function VideosPage() {
  // List of your videos
  const videos = [
    {
      id: "dQw4w9WgXcQ", // YouTube video ID
      title: "Introduction to Metabolic Engineering",
      description: "A great intro video for BTH 504/BTG 404 students.",
    },
    {
      id: "V-_O7nl0Ii0",
      title: "Animal Micro Techniques Overview",
      description: "Basics of animal micro techniques for BTH 308.",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Lecture Videos</h1>
      {videos.map((video) => (
        <div key={video.id} className="mb-10">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">{video.title}</h2>
          <p className="text-gray-700 mb-4">{video.description}</p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  );
}
