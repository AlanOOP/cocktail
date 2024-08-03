import axios from "axios";
import { CategoryResponse, DrinkAPIResponse, DrinksAPIResponse, SearchFilter } from "../types";
import { CategoryResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../schemas/recipe-schema";


export async function fetchCategories() {
    try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const response = await axios.get<CategoryResponse>(url);
        const result = CategoryResponseSchema.safeParse(response.data);

        if (result.success) {
            return result.data.drinks;
        }

    } catch (error) {
        console.log(error);
    }
}

export async function getRecipes(filter: SearchFilter) {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.category}&i=${filter.ingredient}`
        const response = await axios.get<DrinksAPIResponse>(url)

        const result = DrinksAPIResponseSchema.safeParse(response.data);

        if (result.success) {
            return result.data.drinks
        }
    } catch (error) {
        console.log(error);

    }
}

export async function getRecipeById(id: DrinkAPIResponse['idDrink']) {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await axios.get(url);
        const result = RecipeAPIResponseSchema.safeParse(response.data.drinks[0]);

        if (result.success) {
            return result.data
        }
    } catch (error) {
        console.log(error);
    }
}