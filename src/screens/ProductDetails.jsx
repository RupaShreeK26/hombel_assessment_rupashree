import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getRequest} from "../axios";
import LoadingPage from "./LoadingPage";
import NavBar from "./NavBar";
import "../css/ProductDetails.css";
import ErrorPage from './ErrorPage';


const ProductDetails = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [isAllergenVisible, setAllergenVisible] = useState(false);
    const [isInstructionVisible, setInstructionVisible] = useState(false);

    const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);
    const toggleAllergen = () => setAllergenVisible(!isAllergenVisible);
    const toggleInstruction = () => setInstructionVisible(!isInstructionVisible);


    const fetchProduct = async () => {
        try {
          const response = await getRequest(`/products/${id}`, {}, "json");
          setProduct(response);
          console.log(response);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
    };

    useEffect(() => {
        console.log("got");
        fetchProduct();
    }, []);

    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage/>;

    return (
        <div>
            <NavBar/>
            <div className='container'>
                <div className='container1'>
                    <div className='image_div'>
                        <img className="product_img" src={product.productImage} alt={product.name} width="300" height="300"></img>
                    </div>

                    <div className="product_deatils">
                        <h2> PRODUCT NAME: {product.name}</h2>
                        <h2> PRODUCT COST PRICE: {product.cost_price}</h2>
                        <h2> PRODUCT SELLING PRICE: {product.selling_price}</h2>
                        
                        <div>
                            <h2 onClick={toggleDescription} style={{ cursor: 'pointer' }}>
                                DESCRIPTION {isDescriptionVisible ? '▲' : '▼'}
                            </h2>
                            {isDescriptionVisible && <p>{product.description}</p>}
                        <div>
                            <h2 onClick={toggleAllergen} style={{ cursor: 'pointer' }}>
                                ALLERGEN INFORMATION {isAllergenVisible ? '▲' : '▼'}
                            </h2>
                            {isAllergenVisible && <p>{product.allergen_info}</p>}
                        </div>

                        <div>
                            <h2 onClick={toggleInstruction} style={{ cursor: 'pointer' }}>
                                COOKING INSTRUCTIONS {isInstructionVisible ? '▲' : '▼'}
                            </h2>
                            {isInstructionVisible && <p>{product.cooking_instruction}</p>}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
