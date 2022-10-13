import { CalorieTracker } from './calorieTracker';

const calorieTracker = new CalorieTracker(500);
console.log(calorieTracker.currentCalories);

calorieTracker.trackCalories(250);
console.log(calorieTracker.currentCalories);

calorieTracker.trackCalories(260);
console.log(calorieTracker.currentCalories);