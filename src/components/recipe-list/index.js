import Link from "next/link";
import { Card, CardTitle } from "../ui/card";

export default function RecipeList({recipeList}) {
    return (
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-2xl">
            <h2 className="text-4xl text-gray-600 font-bold mb-12">Recipes</h2>
            <Link href={"/"}>Go To Home</Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
                {recipeList && recipeList.length>0 ? recipeList.map((recipe)=>(
                    <Link key={recipe.id} href={`recipe-list/${recipe.id}`}>
                        <Card>
                            <CardTitle className="bg-white rounded-md shadow-md overflow-hidden cursor-pointer hover:scale-[1.1] transition-all" >
                                <div className="w-11/12 m-auto my-4 aspect-w-16 aspect-h-8 lg:h-80 overflow-hidden rounded-md">
                                    <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" ></img>
                                </div>
                                <div>
                                    <h3 className="text-bold text-lg m-4 font-sans text-gray-900 mb-2">{recipe.name}</h3>
                                    <div className="flex items-center flex-wrap justify-between mx-4 mb-2">
                                        <p className="text-lg text-gray-600 font-sans">Rating: {recipe.rating}</p>
                                        <p className="text-lg text-gray-600 font-sans">{recipe.cuisine}</p>
                                    </div>
                                </div>
                            </CardTitle>
                        </Card>
                    </Link>
                )):null}
            </div>
        </div>
    )
}