import axios from "axios";


async function fetchData(url, errorHandler, cb) {
    try {
        const token = window.localStorage.getItem('token');
        const headers = { authorization: `bearer ${token}` };
        const { data } = await axios.get(url, { headers });
        
        if(cb !== null && cb !== undefined) {
            cb(data)
        } else {
            return data
        }
    } catch (error) {
        errorHandler(error)
    }
}

export default fetchData;