import { useEffect, useRef, useState } from 'react';
import { string, oneOfType, func } from 'prop-types';

/**
 * @param {string} key - the key associated to the stored value (i.e. 'token')
 * @param {string} defaultValue - the defaulting value  
 * @param {object} - object of JSON parsing function defs, `serialize` (stringify) and `deserialize`(parse)
 * @returns custom hook to set and get the state of item in localstorage
 */
export default function useLocalStorage( 
    key, defaultValue = '', { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
    const [state, setState] = useState(() => {
        const valueInLocalStorage = localStorage.getItem(key);
        try { return deserialize(valueInLocalStorage);}
        catch (err) { localStorage.removeItem(key);}
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    });

    const prevKeyRef = useRef(key);

    useEffect(() => {
        const prevKey = prevKeyRef.current;
        if (prevKey !== key) localStorage.removeItem(prevKey);
        prevKeyRef.current = key;
        localStorage.setItem(key, serialize(state));
    }, [key, state, serialize]);

    return [state, setState];
}

useLocalStorage.propTypes = {
    key: string.isRequired,
    defaultValue: oneOfType([string, func ])
}