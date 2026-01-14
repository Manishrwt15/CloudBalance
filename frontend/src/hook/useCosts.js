import React,{useState, useCallback} from 'react';
import {getCosts} from '../api/costApi';

export const useCosts =  () => {

    const [costs, setCosts] =  useState([]);
    const [loading, setLoading] =  useState(false);
    const [error, setError] =  useState(null);

    const fetchCosts = useCallback(async (data) => {
        try {
        setLoading(true);
        setError(null);
        const response = await getCosts(data);
        setCosts(response.data);
        } catch (err) {
        setError(err);
        } finally {
        setLoading(false);
        }
    }, []);

    return {
        fetchCosts,
        costs,
        loading,
        error
    };  

};

