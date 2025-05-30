export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-6 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} OmniBio. All rights reserved.</p>
      <p className="mt-2">
        Built for students and educators in life sciences.
      </p>
    </footer>
  );
}
