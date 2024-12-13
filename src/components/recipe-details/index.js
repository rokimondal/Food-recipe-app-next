import Link from "next/link";

export default function RecipeDetailsItem({ recipeDetails }) {
    return (
        <div className="w-full min-h-screen">
            <div className="font-bold m-5 ">
                <Link href={"/recipe-list"} >Go To Recipe Page</Link>
            </div>
            <div className="w-full flex items-center flex-wrap">
                <div className="w-full lg:w-1/2 md:w-1/2 overflow-hidden p-5">
                    <img src={recipeDetails.image} className="object-cover rounded-md" />
                </div>
                <div className="w-full lg:w-1/2 md:w-1/2">
                    <h2 className="text-center text-3xl lg:text-5xl font-bold font-serif text-gray-600 m-auto mb-10">{recipeDetails.name}</h2>
                    <div className="p-5">
                        <h3 className="text-2xl font-bold">Ingredients:</h3>
                        <ul className="font-bold ml-5 text-gray-700 font-sans list-disc">{recipeDetails.ingredients.map((ingredient,index)=>(
                            <li key={index}>{ingredient}</li>
                        ))}</ul>
                        <h3 className="text-2xl font-bold mt-8">Instructions:</h3>
                        <ul className="font-bold ml-5 text-gray-700 font-sans list-decimal">{recipeDetails.instructions.map((instruction, index)=>(
                            <li key={index}>{instruction}</li>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}