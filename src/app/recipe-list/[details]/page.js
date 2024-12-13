import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId){
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const data = await apiResponse.json();
    return data
}
export default async function RecipeDetails({params}){
    const recipeDetails = await fetchRecipeDetails(params?.details);
    return <RecipeDetailsItem recipeDetails={recipeDetails}/>
}