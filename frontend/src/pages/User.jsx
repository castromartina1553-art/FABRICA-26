import { useState } from 'react';
import Form from '../components/Form';
import TextField from '../components/TextField';
import SecretField from '../components/SecretField';

export default function User() {
    const {data, setData} = useState({
        username: '',
        email: '',
        password: '',
        role: 'user',
    });

    function submitHandler(e){
        e.preventDefault();
        console.log(data);
    }


    return <Form
    title="Agregar usuario"
    onSubmit={submitHandler}
    >
    <TextField
        label="Nombre de usuario:"
        value={data.username}
        onChange={newValue => setData({...data, username: newValue})}
        required
    />
    <TextField
        label="Correo electrónico:"
        value={data.email}
        onChange={newValue => setData({...data, email: newValue})}
        required
    />
    <SecretField
        label="Contraseña:"
        value={data.password}
        onChange={newValue => setData({...data, password: newValue})}
        required
    />
    <SecretField
        label="Rol:"
        value={data.role}
        onChange={newValue => setData({...data, role: newValue})}
        options={[
            {value: 'user', label: 'Usuario'},
            {value: 'admin', label: 'Administrador'},
        ]}
        required
    />
    </Form>
}
