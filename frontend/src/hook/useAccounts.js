import { useEffect, useState } from "react";
import { createAccount, getAccounts, getAccountDetails } from "../api/accountApi";

export const useAccounts = () => {

    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchAccounts = async () => {
        try {
            setLoading(true);
            const accounts = await getAccounts();
            setAccounts(accounts?.data|| []);
        } 
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);  
        }
    };

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
        fetchAccounts();
    }, []);

    return {
        fetchAccounts,
        fetchAccountDetails,
        addAccount,
        accounts,
        loading,
        error
    };
};