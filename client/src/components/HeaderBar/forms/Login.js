import { useContext, useEffect, useState } from 'react';
import { func } from 'prop-types';
import { Form, ErrorBox } from './styles';
import { AuthContext } from '../../../contexts';
import { Input, Button } from '../../../components';

export default function Login({updateShow, closeDropdown}) {
    const { inputs, errors, setInputs, handleLogin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        email && setInputs({...inputs, email});
        password && setInputs({ ...inputs, password});
    }, [email, password]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            updateShow();
            closeDropdown();
        }
    }, [handleLogin]);

    return (
        <Form>
            {errors && errors.length > 0 
                ? (<ErrorBox active>{errors[errors.length - 1]}</ErrorBox>) 
                : (<ErrorBox active={false} />)
            }
            <div>
                <Input 
                    name='email' 
                    type='email' 
                    placeholder='Email' 
                    setValue={setEmail} 
                    value={email} 
                />
                <Input 
                    name='password' 
                    type='password' 
                    placeholder='Password' 
                    setValue={setPassword} 
                    value={password} 
                />
            </div>
            <div>
                <Button action={() => { 
                    handleLogin(); 
                    closeDropdown && closeDropdown();
                  }}
                  type='submit'
                  label='Submit'
                />
            </div>
        </Form>
    )

}

Login.propTypes = {
    updateShow: func.isRequired,
    closeDropdown: func
}