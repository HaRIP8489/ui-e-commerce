import axios from "axios";

export const addToCart = async (
    productId: number | string,
    quantity: number,
    rentStart: string,
    rentEnd: string
) => {
    const accessToken = localStorage.getItem("accessToken");
    const res = await axios.post(
        "http://localhost:8080/api/cart/add",
        { productId, quantity, rentStart, rentEnd },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return res.data;
};
