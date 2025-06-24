import axios from "axios";

export const getAllProducts = async () => {
    const res = await axios.get("http://localhost:8080/api/public/products");
    return res.data;
};

export const getProductDetail = async (id: number | string) => {
    const res = await axios.get(`http://localhost:8080/api/public/products/${id}`);
    return res.data;
};
