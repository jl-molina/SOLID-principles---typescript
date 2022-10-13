import { logCaloriesSurplus } from './logger';

class CalorieTracker {
    maxCalories: number;
    currentCalories: number;

    constructor(maxCalories: number) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount: number) {
        this.currentCalories += calorieCount;
        if (this.currentCalories > this.maxCalories) {
            logCaloriesSurplus('Max calories exceeded');
        }
    }
}

export { CalorieTracker }