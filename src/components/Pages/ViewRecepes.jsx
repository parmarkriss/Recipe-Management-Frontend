import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        setRecipes(storedRecipes);
    }, []);

    const handleDelete = (id) => {
        const updatedRecipes = recipes.filter((item) => item.id !== id);
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        if (updatedRecipes) {
            toast.success('Recipe deleted successfully!', { autoClose: 2000 });
        } else {
            toast.error('Failed to delete the recipe.', { autoClose: 2000 });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Recipe List</h2>
            <div className="flex justify-end mb-4">
                <Link to="/form-recipe">
                    <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors">
                        Add Recipes
                    </button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg mb-5">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">ID</th>
                            <th className="py-2 px-4 border-b text-left">Title</th>
                            <th className="py-2 px-4 border-b text-left">Ingredients</th>
                            <th className="py-2 px-4 border-b text-left">Instructions</th>
                            <th className="py-2 px-4 border-b text-left">Cuisine</th>
                            <th className="py-2 px-4 border-b text-left">Cooking Time (min)</th>
                            <th className="py-2 px-4 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="py-4 text-center text-gray-500">No recipes found.</td>
                            </tr>
                        ) : (
                            recipes.map((recipe) => (
                                <tr key={recipe.id} className="hover:bg-gray-100 transition-colors">
                                    <td className="py-2 px-4 border-b">{recipe.id}</td>
                                    <td className="py-2 px-4 border-b">{recipe.title}</td>
                                    <td className="py-2 px-4 border-b">
                                        {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : 'No ingredients available'}
                                    </td>
                                    <td className="py-2 px-4 border-b">{recipe.instructions}</td>
                                    <td className="py-2 px-4 border-b">{recipe.cuisine}</td>
                                    <td className="py-2 px-4 border-b">{recipe.cookingTime}</td>
                                    <td className="py-2 px-4 flex space-x-2">
                                        <Link to={`/edit-recipe/${recipe.id}`}>
                                            <button
                                                className="bg-yellow-500 text-white font-bold py-1 px-3 rounded hover:bg-yellow-600 transition-colors"
                                            >
                                                Edit
                                            </button>
                                        </Link>
                                        <button
                                            className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition-colors"
                                            onClick={() => handleDelete(recipe.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ViewRecipes;
