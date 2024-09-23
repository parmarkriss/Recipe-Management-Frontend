import React, { useState } from 'react';
import { recipes } from '../recipes';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const FormRecipes = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [cookingTime, setCookingTime] = useState('');

    const generateId = () => {
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        return existingRecipes.length ? existingRecipes[existingRecipes.length - 1].id + 1 : 1;
    };

    const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];

    const handleCookingTimeChange = (e) => {
        const selectedTime = e.target.value;
        setCookingTime(selectedTime);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Check if all fields are filled
        if (!title || !ingredients || !instructions || !cuisineType || !cookingTime) {
            toast.error('Please fill in all fields before submitting.', { autoClose: 2000 });
            return;
        }

        const newRecipe = {
            id: generateId(),
            title,
            ingredients: ingredients.split(',').map(item => item.trim()), 
            instructions,
            cuisine: cuisineType,
            cookingTime,
        };

        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        localStorage.setItem('recipes', JSON.stringify([...existingRecipes, newRecipe]));

       
        toast.success('Recipe added successfully!', { autoClose: 1000 });
        navigate('/view-recipe');
    
        setTitle('');
        setIngredients('');
        setInstructions('');
        setCuisineType('');
        setCookingTime('');
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center">Add Recipe</h2>
                
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
                    <label className="block text-gray-700">Ingredients (comma separated):</label>
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
                        onChange={handleCookingTimeChange}
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
                    Add Recipe
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FormRecipes;
