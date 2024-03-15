// import styles and assets
import styles from './MealsGrid.module.css';

// import local components
import MealItem from './MealItem';

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
