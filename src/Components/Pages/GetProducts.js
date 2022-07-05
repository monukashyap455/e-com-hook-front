import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const GetProducts = () => {
    const token = localStorage.getItem('token');

    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);  // eslint-disable-line

    const getProducts = async () => {
        let result = await fetch("http://localhost:4000/api/products", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        result = await result.json();
        setProducts(result.data);
    }


    const deleteProduct = async (id) => {

        let result = await fetch(`http://localhost:4000/api/products/${id}`, {
            method: 'DELETE'
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchProoducts = async (event) => {
        let key = event.target.value;

        if (key) {
            let result = await fetch(`http://localhost:4000/api/search/${key}`);
            result = await result.json()
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }

    return (
        <div className='container '>
            <h1>Product List</h1>
            <input onChange={searchProoducts} type='text' placeholder=' Searc Product' />
            <table className="table table-bordered ">
                <thead >
                    <tr >
                        <th scope="col">S .No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Company</th>
                        <th scope="col">Opearation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 ? products.map((e, i) => {
                            return (
                                <tr key={i.ProductId}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.category}</td>
                                    <td>{e.company}</td>
                                    <td className='d-flex justify-content-around'>
                                        <button type='button' class="btn btn-danger" onClick={() => deleteProduct(e.ProductId)}>Delete</button>
                                        <Link to={"/update/" + e.ProductId} type="button" class="btn btn-primary ml-10px">Update</Link>
                                    </td>
                                </tr>)
                        }) : <h1>No Result Found</h1>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetProducts;
