'use client';

export default function MealsErrorPage({ error }) {
  return (
    <main className='error'>
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try to again later.</p>
    </main>
  );
}
