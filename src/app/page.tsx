// src/app/page.tsx

export default function HomePage() {
  return (
    <>
    
      <main className="p-6">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to OmniBio</h1>
        <p className="mt-4 text-gray-600">
          Your companion for learning life sciences and molecular biology. Dive into lecture notes, quizzes, and interactive content built for students and educators.
        </p>
        <div className="mt-6">
          <img 
            src="/images/first-photo.jpg" 
            alt="OmniBio preview" 
            className="w-full max-w-3xl rounded-lg shadow-lg" 
          />
        </div>

        {/* Features Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">What You Can Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold text-blue-600 text-lg mb-2">Lecture Notes</h3>
              <p className="text-gray-600">Access well-organized notes to supplement your learning.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold text-blue-600 text-lg mb-2">Interactive Quizzes</h3>
              <p className="text-gray-600">Test your understanding with weekly and topic-based quizzes.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-bold text-blue-600 text-lg mb-2">Project Support</h3>
              <p className="text-gray-600">Get tips and examples to guide your science projects and reports.</p>
            </div>
          </div>
          {/* Call-to-Action Section */}
<section className="mt-12 text-center">
  <h2 className="text-2xl font-semibold text-gray-800">Ready to Dive In?</h2>
  <p className="mt-2 text-gray-600">Explore notes, try a quiz, or start your next big project with OmniBio.</p>
  <div className="mt-4">
    <a 
      href="/notes" 
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
    >
      Get Started
    </a>
  </div>
</section>

        </section>
      </main>
    </>
  );
}
