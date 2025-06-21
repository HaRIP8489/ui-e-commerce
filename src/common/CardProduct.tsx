import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleRent = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/checkout", { state: { product: props.product } });
    } else {
      alert("⚠️ Bạn cần đăng nhập để thuê sản phẩm!");
      navigate("/login");
    }
  };

  return (
    <Card className="col-3 p-0 position-relative" sx={{ width: "300px", overflow: 'hidden' }}>
      {/* Label giảm giá */}
      <Box
        className="position-absolute top-0 end-0 px-3 py-2 z-3 rounded rounded-top-0 text-danger"
        sx={{ backgroundColor: "var(--discount)" }}
      >
        {props.product.discount}
      </Box>

      {/* Nút thuê góc trái dưới */}
      <Box
        className="position-absolute bottom-0 start-0 z-3 m-2"
      >
        <Button
          variant="contained"
          size="small"
          onClick={handleRent}
          sx={{
            backgroundColor: "#0070f3",
            color: "white",
            borderRadius: "20px",
            px: 3,
            py: 0.5,
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#0055cc"
            }
          }}
        >
          Thuê
        </Button>
      </Box>

      {/* Nội dung sản phẩm */}
      <CardActionArea className="pt-3 px-3 d-flex flex-column justify-content-center align-items-center">
        <CardMedia
          component="img"
          height="250px"
          width="250px"
          image={props.product.image}
          alt="livingroom"
          className="rounded-3"
        />
        <CardContent>
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
          <Typography variant="subtitle2" className="text-end" sx={{ color: '#0070f3' }}>
            {props.product.quantitySold} lượt thuê
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CCardProduct;
