import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './components/HeaderandFooter/Layout';
import Home from './components/Pages/Home';
import FormRecipes from './components/Pages/FormRecipes';
import ViewRecipes from './components/Pages/ViewRecepes';
import EditRecipes from './components/Pages/EditRecipes';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/view-recipe' element={<ViewRecipes/>}></Route>
                <Route path='/form-recipe' element={<FormRecipes/>}></Route>
                <Route path='/edit-recipe/:id' element={<EditRecipes/>}></Route>
             </Route>
          </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
