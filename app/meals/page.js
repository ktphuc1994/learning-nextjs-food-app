import { Suspense } from 'react';
import Link from 'next/link';

// api
import { getMeals } from '@/lib/meals';

// import styles and assets
import styles from './page.module.css';

// import local components
import MealsGrid from '@/Components/Meals/MealsGrid';
import MealsLoadingPage from './loading-out';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const MealsPage = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, create{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
