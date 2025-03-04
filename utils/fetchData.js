import axios from "axios"

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}