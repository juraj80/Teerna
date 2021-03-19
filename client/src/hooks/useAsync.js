import { useRef, useLayoutEffect, useCallback, useReducer } from 'react';
import {} from 'prop-types';

function useSafeDispatch(dispatch) {
	const mountedRef = useRef(false);

	useLayoutEffect(() => {
		mountedRef.current = true;
		return () => (mountedRef.current = false);
	}, []);

	return useCallback(
		(...args) => (mountedRef.current ? dispatch(...args) : void 0),
		[dispatch]
	);
}

function asyncReducer(state, action) {
    switch(action.type) {
        case 'PENDING': return { status: 'PENDING', data: null, error: null };
        case 'RESOLVED': return { status: 'RESOLVED', data: action.data, error: null };
        case 'REJECTED': return { status: 'REJECTED', data: null, error: action.error};
        default: throw new Error(`Unhandled action typ, ${action.type}`);
    }   
}


/**
 * @param {*} initialState 
 * @returns the result of running the async call
 */
export default function useAsync(initialState) {
    const [state, unsafeDispatch] = useReducer(asyncReducer, {
        status: 'IDLE', data: null, error: null, ...initialState
    });

    const dispatch = useSafeDispatch(unsafeDispatch);

    const { status, data, error } = state; 

    const run = useCallback(
        promise => {
            dispatch({type: 'PENDING'});
            promise.then(
                data => dispatch({type: 'RESOLVED', data}),
                error => dispatch({type: 'REJECTED', error}),
            )
        }, [dispatch]
    );

    return { error, status, data, run};
};
