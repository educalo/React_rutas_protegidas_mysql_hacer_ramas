import React, { useEffect, useState } from 'react'

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const Login = () => {

    //const [user, setUser] = useLocalStorage('user');
    const [user, setUser] = useState(false);
  
    //se usa para obtener datos de una API y actualizar el estado del componente con el resultado
    useEffect(()=> {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: form_email.id, password: form_password.id })
    };
    //si devuelve 1 es que existe el usuario si devuelve 0 no exite usuario
    fetch('http://localhost:3000/login', requestOptions)
      .then(response => {
        console.log(response);
        if (response==1){
            setUser(true)
        }else{
            setUSer(false)
        }
      })
    }, [])

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        //localStorage.setItem('user', JSON.stringify(data));
        navigate('/about');
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label>Email</label>
            <input id="form_email" type="text" className="form-control" {...register('email')} />
        </div>
        <div className="mb-3">
            <label>Password</label>
            <input id="form_password" type="password" className="form-control" {...register('password')} />
        </div>
        <input type="submit" value="Enviar" />
    </form>
}

export default Login;