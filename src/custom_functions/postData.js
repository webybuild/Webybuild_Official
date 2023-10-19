import axios from "axios";


async function postData(url, formData, errorHandler, cb) {
    try {
        const token = window.localStorage.getItem('token');
        const headers = { authorization: `bearer ${token}` };
        const { data } = await axios.post(url, formData, { headers });
        
        if(cb !== null && cb !== undefined) {
            cb(data)
        } else {
            return data
        }
    } catch (error) {
        errorHandler(error)
    }
}

export default postData;