import React from "react";
import {Stack, Box, Button} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type SelectQuantityProps = {
    quantity: number;
    onChange: (newQuantity: number) => void;
    min?: number;
    max?: number;
};

export default function SelectQuantity({
                                            quantity,
                                            onChange,
                                            min = 1,
                                            max = Infinity,
                                        }: SelectQuantityProps) {
    const handleIncrease = () => {
        if (quantity < max) onChange(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > min) onChange(quantity - 1);
    };

    return (
        <Stack direction="row" alignItems="center" spacing={0}>
            <Button onClick={handleDecrease} variant="outlined" size="small"><RemoveIcon sx={{ color: "black" }} /></Button>
            <Box mx={1} >{quantity}</Box>
            <Button onClick={handleIncrease} variant="outlined" size="small"><AddIcon sx={{ color: "black" }} /></Button>
        </Stack>
    );
}
