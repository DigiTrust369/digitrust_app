import axios from "axios";
import { useEffect, useState } from "react"
import { number } from "yup";

interface ResponseInfo {
    prices: number[][];
    "market_caps": number[][];
    "total_volumes": number[][];
}

const useAxios = (param: any) => {
    const [response, setResponse] = useState<ResponseInfo>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

    const fetchData = async (param: any) => {
        try {
            setLoading(true);
            const result = await axios(param);
            setResponse(result.data);
        } catch (err) {
            setError("Error");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param);
    }, []);

    return {
        response, loading, error
    }
}

export default useAxios