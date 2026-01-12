import React,{useEffect, useState} from 'react';
import {getCosts} from '../api/costApi';

export const useCosts =  () => {

    const [costs, setCosts] =  useState([]);
    const [loading, setLoading] =  useState(false);
    const [error, setError] =  useState(null);

    const fetchCosts = async () => {
        try {
            setLoading(true);
            const costs = await getCosts();
            setCosts(costs?.data || []);
        } 
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);  
        }
    };

    useEffect(() => {   
        fetchCosts();
    }, []);

    return {
        fetchCosts,
        costs,
        loading,
        error
    };  

};

