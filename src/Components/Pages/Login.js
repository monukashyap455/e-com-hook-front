import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useMemo(() => {
        const auth = localStorage.getItem("user");
        if (auth) return navigate("/")
    }, []) //eslint-disable-line

    const handleLogin = async () => {
        let result = await fetch("http://localhost:4000/api/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.data.token) {
            localStorage.setItem('user', JSON.stringify(result));
            localStorage.setItem('token', result.data.token);
            navigate('/')
        } else {
            alert("Please enter correct fields");
        }
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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder=" Enter Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={handleLogin}>Login</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login;