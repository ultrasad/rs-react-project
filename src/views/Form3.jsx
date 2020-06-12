import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

//ref
//https://www.robinwieruch.de/react-hooks-fetch-data

const dataFetchReducer = (state, action) => {
    //...
    switch (action.type) {
        case 'FETCH_INIT':
            return { 
                ...state,
                isLoading: true,
                isError: false 
            };
        case 'FETCH_SUCCESS':
            return { 
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return { 
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

const useDataApi = (initialUrl, initialData) => {
    //const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);

    //const [isLoading, setIsLoading] = useState(false);
    //const [isError, setIsError] = useState(false);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {

            //setIsError(false);
            //setIsLoading(true);

            dispatch({ type: 'FETCH_INIT' });

            try {
                const result = await axios(url);
                //setData(result.data);
                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
                }
            } catch (error) {
                //setIsError(true);
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }

            //setIsLoading(false);
        };
       
        fetchData();

        return () => {
            console.log('use effect return didcancel..');
            didCancel = true;
        };

    }, [url]);

    //return [{ data, isLoading, isError }, setUrl];
    return [state, setUrl];
}

export default function Form(){
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        'https://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] },
    );

    return (
        <>
        <form onSubmit={event => {
            doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
            event.preventDefault();
        }}>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button type="submit">Search</button>

            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
            <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
                </li>
            ))}
            </ul>
            )}
        </form>
        </>
    )
}