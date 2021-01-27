import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recepeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'Super Tasty Schnitzel',
            'https://thewanderlustkitchen.com/wp-content/uploads/2019/01/traditional-german-pork-schnitzel-550-300x300-300x240.jpg',
            [
                new Ingredient('Chicken Meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'Beef Steak',
            'Beef Steak - Tranches',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [
                new Ingredient('Beef meat', 2),
                new Ingredient('French fries', 15),
                new Ingredient('Beans', 32)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipies() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}