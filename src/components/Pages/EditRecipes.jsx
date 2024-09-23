import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { recipes } from '../recipes'; 

const EditRecipes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [cookingTime, setCookingTime] = useState('');

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const recipeToEdit = storedRecipes.find(recipe => recipe.id === parseInt(id));
        if (recipeToEdit) {
            setTitle(recipeToEdit.title);
            setIngredients(recipeToEdit.ingredients);
            setInstructions(recipeToEdit.instructions);
            setCuisineType(recipeToEdit.cuisine);
            setCookingTime(recipeToEdit.cookingTime);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: parseInt(id),
            title,
            ingredients,
            instructions,
            cuisine: cuisineType,
            cookingTime,
        };

        const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const updatedRecipes = storedRecipes.map(recipe => recipe.id === parseInt(id) ? updatedRecipe : recipe);
        
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        toast.success('Recipe updated successfully!', { autoClose: 1000 });
        navigate('/view-recipe');

        setTitle('');
        setIngredients('');
        setInstructions('');
        setCuisineType('');
        setCookingTime('');
    };

    // Extract unique cuisines from the recipes array
    const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-3">
            <form onSubmit={handleSubmit} className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-blue-600">Edit Recipe</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Ingredients:</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Instructions:</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cuisine Type:</label>
                    <select
                        value={cuisineType}
                        onChange={(e) => setCuisineType(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select cuisine type</option>
                        {uniqueCuisines.map((cuisine, index) => (
                            <option key={index} value={cuisine}>
                                {cuisine}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cooking Method:</label>
                    <select
                        onChange={(e) => setCookingTime(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select cooking method</option>
                        <option value="10">Boil (10 min)</option>
                        <option value="15">Steam (15 min)</option>
                        <option value="20">Bake (20 min)</option>
                        <option value="30">Grill (30 min)</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cooking Time (in minutes):</label>
                    <input
                        type="number"
                        value={cookingTime}
                        readOnly
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-gray-100"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Update Recipe
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default EditRecipes;
