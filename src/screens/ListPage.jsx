import React from "react";
import { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import LoadingPage from "./LoadingPage";
import {getRequest} from "../axios";
import "../css/ListPage.css"
import { Link } from 'react-router-dom';
import ErrorPage from "./ErrorPage";


const ListPage = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
          const response = await getRequest("/products", {}, "json");
          const sorted_response = response.sort((a, b) => a.selling_price - b.selling_price);
          setProducts(response);
          console.log(response);
          console.log(sorted_response);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    
    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage/>;

    return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="list_header"><h1>Products</h1><a href="/create" className="create_button">Add Product</a></div>
            <div className="product_list">
                {products.map(product => (
                    <Link to={`/product/${product.id}`} className="product_class">
                        <div>
                            <img className="product_img" src={product.productImage} alt={product.name} width="300" height="300"></img>
                        </div>
                        <div className="product_details">
                            <span>
                            <b><p className="product_name" key={product.id}>{product.name}</p></b>
                            </span>
                            <span>
                                <b>{product.selling_price}</b>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
    );
};

export default ListPage;
