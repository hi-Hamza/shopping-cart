import axios from "axios";

export  const getApi = async () => {
    try {
        return await axios.get("https://fakestoreapi.com/products")
    } catch (error) {
        console.log(error, 'error')
    }

}