import { useEffect, useState, useCallback } from "react";
import { createAccount, getAccounts, getAccountDetails, getCustomerAccounts } from "../api/accountApi";
import { useSelector } from "react-redux";

export const useAccounts = () => {

    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const role = useSelector(state => state.auth.role);

    const fetchAccounts = useCallback(async () => {
        if (!role) return;

        try {
            setLoading(true);
            const accounts = role === "CUSTOMER" ? await getCustomerAccounts() : await getAccounts();
            setAccounts(accounts?.data|| []);
        } 
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);  
        }
    },[role]);

    const fetchAccountDetails = async (accountId) => {
        try{
            setLoading(true);
            const accountDetails = await getAccountDetails(accountId);
            return accountDetails?.data;
        }
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    };

    const addAccount = async (accountData) => {
        try {
            const newAccount = await createAccount(accountData);
            setAccounts((prevAccounts) => [...prevAccounts, newAccount?.data]);
        }
        catch (error) {
            setError(error);
        }
    };


    useEffect(() => {   
        setAccounts([]);
        fetchAccounts();
        
    }, [fetchAccounts]);

    return {
        fetchAccounts,
        fetchAccountDetails,
        addAccount,
        accounts,
        loading,
        error
    };
};