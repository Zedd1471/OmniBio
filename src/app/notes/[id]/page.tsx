// src/app/notes/page.tsx

export default function NotesPage() {
  const courses = [
    {
      id: 1,
      title: "BTH 504/BTG 404",
      summary: "Metabolic Engineering",
      materials: [
        {
          name: "Metabolic Engineering Lecture.pdf",
          url: "https://drive.google.com/uc?export=download&id=1G-xZ78l1GtIjj6q3DNF5anEsiIq5JOdT",
        },
      ],
    },
    {
      id: 2,
      title: "BTH 308",
      summary: "Animal Micro Techniques and Tissue Culture",
      materials: [
        {
          name: "Animal Micro Techniques Notes.pdf",
          url: "https://drive.google.com/uc?export=download&id=1mHmsWGqHp53SdtU4f4zlMoNXIORpw3WU",
        },
      ],
    },
    {
      id: 3,
      title: "BTH 304",
      summary: "Metabolism of Macro Molecules",
      materials: [], // No materials yet
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Lecture Notes</h1>

      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow p-6 mb-6 hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-blue-800">{course.title}</h2>
          <p className="text-gray-700 mb-4">{course.summary}</p>

          {course.materials.length === 0 ? (
            <p className="italic text-gray-500">No materials available yet.</p>
          ) : (
            course.materials.map((file) => (
              <a
                key={file.url}
                href={file.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-4 mb-2"
              >
                Download {file.name}
              </a>
            ))
          )}
        </div>
      ))}
    </div>
  );
}
