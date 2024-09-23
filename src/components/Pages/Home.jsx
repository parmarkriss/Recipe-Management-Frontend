import React, { useState } from 'react';
import { recipes } from '../recipes';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) || recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Just for you</h1>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search by ingredients or cuisine..."
                    className="w-full sm:w-1/2 p-2 rounded border border-gray-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <div className="flex justify-center">
                                <img className="w-full h-48 sm:h-52 md:h-60 object-cover" src={recipe.image} alt={recipe.title} />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl text-gray-800 mb-2">{recipe.title}</div>
                                <p className="text-gray-600 text-base">
                                    Ingredients: {recipe.ingredients.join(', ')}
                                </p>
                                <p className="text-gray-500 italic">{recipe.cuisine}</p>
                            </div>
                            <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                                <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                                    <i className="fas fa-heart"></i> Bite
                                </span>
                                <span className="text-gray-700 text-sm">7k</span>
                            </div>
                            <div className="px-6 py-4 flex items-center">
                                {/* Star Rating */}
                                {[...Array(5)].map((_, index) => (
                                    <span 
                                        key={index} 
                                        className={`fa fa-star ${index < recipe.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                        style={{ fontSize: '1.25rem' }} // Adjust size if needed
                                    ></span>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
