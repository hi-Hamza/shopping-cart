import axios from "axios";

export  const getApi = async () => {
    try {
        return await axios.get("https://fakestoreapi.com/products")
    } catch (error) {
        console.log(error, 'error')
    }

}


export const putApi = async (body , id) => {
    try {
        return await axios.put(`https://fakestoreapi.com/products${id}`,body  )
    } catch (error) {
        console.log("error")
    }
};