
export interface IRecipe {
    Title: string;
    Amount: string;
    Utility: string | null;
    Type: string | null;
    Ingredients: string[];
    Ingredients2: Ingredients2;
    Steps: string[];
}

export interface Ingredients2 {
    TitleIngredients2: string;
    Ingredients: string[];
}