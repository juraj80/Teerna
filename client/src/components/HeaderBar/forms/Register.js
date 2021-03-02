import { useContext, useEffect, useState } from 'react';
import { func } from 'prop-types';
import { Form, ErrorBox } from './styles';
import { AuthContext } from '../../../contexts';
import { Input, Button } from '../../../components';

export default function Register({updateShow, closeDropdown}) {
    const { inputs, errors, setInputs, handleRegister } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        email && setInputs({...inputs, email});
        password && setInputs({ ...inputs, password});
        passwordConfirm && setInputs({ ...inputs, passwordConfirm});
    }, [email, password, passwordConfirm]);

    useEffect(() => {
        password !== '' && passwordConfirm === password && setDisabled(false);
        password !== passwordConfirm && setDisabled(true);
    },[passwordConfirm]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            updateShow();
            closeDropdown();
        }
    }, [handleRegister]);

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
                <Input 
                    name='passwordConfirm'
                    type='passwordConfirm' 
                    placeholder='Confirm Password' 
                    setValue={setPasswordConfirm} 
                    value={passwordConfirm} 
                />
            </div>
            <div>
                <Button action={() => { 
                    handleRegister(); 
                    closeDropdown && closeDropdown();
                  }}
                  type='submit'
                  label='Submit'
                  disabled={disabled}
                />
            </div>
        </Form>
    )

}

Register.propTypes = {
    updateShow: func.isRequired,
    closeDropdown: func
}