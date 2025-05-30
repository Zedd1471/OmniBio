// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to OmniBio</h1>
      <Image
        src="/images/hero.jpg"
        alt="Hero image"
        width={600}
        height={400}
        priority
      />
      <p>This is your homepage with optimized image loading.</p>

      {/* ✅ Correct internal navigation */}
      <p>
        <Link href="/notes/">Go to Notes</Link>
      </p>
    </main>
  );
}
