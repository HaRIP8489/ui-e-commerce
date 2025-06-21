import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface Product {
    image?: string;
    title?: string;
    id?: string;
    price?: string;
    discount?: string;
    priceDiscount?: string;
    quantitySold?: string;
}

interface CCardProductsProps {
    product: Product;
}
const CCardProduct = (props: CCardProductsProps) => {
    return (
        <Card className="col-3 p-0 position-relative" sx={{ width: "300px" }}>
            <Box className="position-absolute top-0 end-0 px-3 py-2 z-3 rounded rounded-top-0 text-danger" sx={{ backgroundColor: "var(--discount)"}}>{props.product.discount}</Box>
            <CardActionArea className="pt-3 px-3 d-flex flex-column justify-content-center align-items-center">
                <CardMedia
                    component="img"
                    height="250px"
                    width="250px"
                    image={props.product.image}
                    alt="livingroom"
                    className="rounded-3"
                />
                <CardContent >
                    <Typography variant="subtitle2" className="fw-bold">
                        {props.product.title}
                    </Typography>
                    <Box className="d-flex justify-content-between align-items-center">
                        <Typography variant="subtitle1" className="text-decoration-line-through">
                            {props.product.price}đ
                        </Typography>
                        <Typography variant="subtitle1" className="text-danger fw-bold" sx={{ fontSize: "1.5rem" }}>
                            {props.product.priceDiscount}đ
                        </Typography>
                    </Box>
                    <Typography variant="subtitle2" className="text-end" sx={{ color: '#0070f3'}}>
                        {props.product.quantitySold} lượt thuê
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default CCardProduct;