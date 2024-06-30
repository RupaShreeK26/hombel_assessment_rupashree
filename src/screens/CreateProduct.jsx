import React, { useState } from 'react';
import '../css/CreateProduct.css';
import NavBar from './NavBar';
import {postRequest} from "../axios";
import { useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const CreateProduct = () => {
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        allergen_info: '',
        cooking_instruction: '',
        cost_price: '',
        selling_price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const navigate = useNavigate();
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product created:', product);
        postRequest('products', product)
            .then(() => {
                navigate('/items'); 
            })
            .catch((error) => {
                console.error('There was an error creating the product!', error);
                setError(error);
            });
    };

    if (error) return <ErrorPage/>;

    return (
        <div>
            <NavBar/>
            <div className='container2'>
                <h2>CREATE PRODUCT</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Allergen Information:</label>
                        <textarea
                            name="allergen_info"
                            value={product.allergen_info}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Cooking Instruction:</label>
                        <textarea
                            name="cooking_instruction"
                            value={product.cooking_instruction}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Cost Price:</label>
                        <input
                            type="number"
                            name="cost_price"
                            value={product.cost_price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Selling Price:</label>
                        <input
                            type="number"
                            name="selling_price"
                            value={product.selling_price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="create_button1" type="submit">ADD PRODUCT</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
