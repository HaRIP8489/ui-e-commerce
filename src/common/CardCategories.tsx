import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardCategoriesProps {
    image?: string;
    title?: string;
    url?: string;
}


const CardCategories = (props: CardCategoriesProps) => {

    const navigation = useNavigate();

    const handleClick = () => {
        if (props.url) {
            navigation(`/categories/${props.url}`);
        }
    }


    return (
        <Card sx={{ height: "auto", width: "230px" }} onClick={handleClick} className="">
            <CardActionArea className="pt-3 d-flex flex-column justify-content-center align-items-center">
                <CardMedia
                    component="img"
                    height="200px"
                    width="200px"
                    image={props.image}
                    alt="livingroom"
                    sx={{ height: "200px", width: "200px" }}
                />
                <CardContent >
                    <Typography variant="subtitle2" className="fs-6 text-center">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default CardCategories;