import React, { useState } from 'react';
import { Input } from '../components/core';

export default {
	title: 'Input',
	component: Input,
};

let value = '';
const setValue = (val) => value=val; 

export const basic = () => {
	return (
		<Input
			type='text'
			requiredField
			nameAttr='username'
			setValue={setValue}
			value={value}
			placeholder='Username'
		/>
	);
};

export const withStartIcon= () => {
    
    return (
		<Input
			type='password'
			requiredField
			nameAttr='password'
			setValue={setValue}
			value={value}
			placeholder='Password'
            leftIcon='key'
		/>
    );
}

let inputType = 'password';
const setInputType = val => inputType = val;

export const withEndIcon = () => {
    return (
        <Input
            type={inputType}
            requiredField
            nameAttr='password'
            setValue={setValue}
            value={value}
            placeholder='Password'
            rightIcon='eye'
            rightIconAction={() => inputType === 'password' ? setInputType('text') : setInputType('password')}
        />
    )
}

export const withIcons = () => {

    return (
        <Input
            type={inputType}
            requiredField
            nameAttr='password'
            setValue={setValue}
            value={value}
            placeholder='Password'
            leftIcon='key'
            rightIcon='eye'
            rightIconAction={() => inputType === 'password' ? setInputType('text') : setInputType('password')}
        />
    )
}

export const disabled = () => {
	return (
		<Input
			type='email'
			requiredField
			nameAttr='email'
			setValue={setValue}
			value={value}
			placeholder='Email'
            disabled
		/>
	);
};