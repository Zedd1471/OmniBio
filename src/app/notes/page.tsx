'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NotesPage() {
  const courses = [
    {
      id: 'bth504',
      title: 'BTH 504/BTG 404',
      summary: 'Metabolic Engineering',
      materialUrl: '/materials/bth504.pdf',
    },
    {
      id: 'bth308',
      title: 'BTH 308',
      summary: 'Animal Micro Techniques and Tissue Culture',
      materialUrl: '/materials/bth308.pdf',
    },
    {
      id: 'bth304',
      title: 'BTH 304',
      summary: 'Metabolism of Macro Molecules',
      materialUrl: '/materials/bth304.pdf',
    },
  ];

  const [openCourse, setOpenCourse] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Lecture Notes</h1>
      <p className="text-gray-700 mb-6">Click on a course to access material and ask questions.</p>

      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.id} className="border rounded-lg p-4 bg-white shadow">
            <button
              onClick={() =>
                setOpenCourse(openCourse === course.id ? null : course.id)
              }
              className="text-left w-full text-lg font-semibold text-blue-700"
            >
              {course.title}
            </button>

            <p className="text-gray-600 text-sm mt-1">{course.summary}</p>

            {openCourse === course.id && (
              <div className="mt-4 pl-4">
                <a
                  href={course.materialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-max"
                >
                  📥 Download Course Material
                </a>

                <div className="h-4" /> {/* Spacer */}

                <Link
                  href={`/notes/${course.id}`}
                  className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-max"
                >
                  ❓ Ask a Question
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
