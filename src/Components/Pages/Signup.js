import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, []) //eslint-disable-line

    const colletData = async () => {
        let result = await fetch("http://localhost:4000/api/signup", {
            method: "post",
            body: JSON.stringify({ name, email, number, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // eslint-disable-next-line
        let res = await result.json();
        // localStorage.setItem('user', JSON.stringify(res));
        navigate('/login')
    }
    return (
        <>
            <div className='container my-5'>
                <div className='col-6 m-auto'>
                    <Form className='shadow p-4 rounded'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder=" Enter Name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text" name='number' placeholder="Enter Number "
                                value={number} onChange={(e) => setNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder=" Enter Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={colletData}>Signup</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Signup