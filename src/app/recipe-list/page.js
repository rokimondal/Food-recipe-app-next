import RecipeList from "@/components/recipe-list";

async function fetchAllRecipes(){
        try {
            const apiResponse = await fetch("https://dummyjson.com/recipes");
            
            const data = await apiResponse.json();
            return data?.recipes
            
        } catch (e) {
            throw new Error(e);
            console.log(e);
        }
    }
export default async function Recipes(){
    const recipeList = await fetchAllRecipes();
    return <RecipeList recipeList={recipeList} />
}