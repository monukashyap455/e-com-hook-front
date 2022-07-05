import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddProducts = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const userId = JSON.parse(localStorage.getItem('user')).data.userId;
    const handleAddProducts = async () => {

        if (!name || !price || !category || !company) {
            setError(true)
            return false
        }
        let result = await fetch("http://localhost:4000/api/products", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await result.json();
        navigate('/');
    }
    return (
        <>
            <div className='container my-5'>
                <div className='col-6 m-auto'>

                    <Form className='shadow p-4 rounded'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control className={error && !name && "validate"} type="product" name='name' placeholder="Enter product name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                            {error && !name && <span style={{ color: 'red' }}>Enter valid Name</span>}
                            {false && <span style={{ color: 'red' }}>Enter valid Name</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control className={error && !price && "validate"} type="price" name='price' placeholder=" Enter price"
                                value={price} onChange={(e) => setPrice(e.target.value)} />
                            {error && !price && <span style={{ color: 'red' }}>Enter valid Price</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Category</Form.Label>
                            <Form.Control className={error && !category && "validate"} type="category" name='category' placeholder=" Enter category"
                                value={category} onChange={(e) => setCategory(e.target.value)} />
                            {error && !category && <span style={{ color: 'red' }}>Enter valid Category</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Company</Form.Label>
                            <Form.Control className={error && !company && "validate"} type="company" name='company' placeholder=" Enter company name"
                                value={company} onChange={(e) => setCompany(e.target.value)} />
                            {error && !company && <span style={{ color: 'red' }}>Enter valid Company</span>}
                        </Form.Group>

                        <Button variant="primary" onClick={handleAddProducts}>AddProducts</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default AddProducts;