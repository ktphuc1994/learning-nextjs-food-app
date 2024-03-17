import { notFound } from 'next/navigation';
import Image from 'next/image';

// import styles and assets
import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import { getCloudinaryUrl } from '@/utils';

export default function MealDetails({ params }) {
  const meal = getMeal(params['meal-id']);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={getCloudinaryUrl(meal.image)} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
