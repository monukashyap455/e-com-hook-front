import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, []); // eslint-disable-line

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:4000/api/products/${params.id}`);
        result = await result.json();
        setName(result.data.name);
        setPrice(result.data.price);
        setCategory(result.data.category);
        setCompany(result.data.company);
    }

    const handleUpdateProduct = async () => {
        let result = await fetch(`http://localhost:4000/api/products/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json()
        if (result) {
            navigate('/')
        }
    }
    return (
        <>
            <div className='container my-5'>
                <div className='col-6 m-auto'>

                    <Form className='shadow p-4 rounded'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="product" name='name' placeholder="Enter product name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="price" name='price' placeholder=" Enter price"
                                value={price} onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Category</Form.Label>
                            <Form.Control type="category" name='category' placeholder=" Enter category"
                                value={category} onChange={(e) => setCategory(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Company</Form.Label>
                            <Form.Control type="company" name='company' placeholder=" Enter company name"
                                value={company} onChange={(e) => setCompany(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={handleUpdateProduct}>UpdateProduct</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct;