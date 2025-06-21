import { Box, InputAdornment, TextField, Typography } from "@mui/material"
import { ReactNode } from "react";

interface CTextFieldIconProps {
    label?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    adornment?: ReactNode;
}

const CTextFieldIcon = (props: CTextFieldIconProps) => {

    return (
        <Box marginBottom={1} marginTop={1} display={"flex"} flexDirection="column" width="100%" alignItems="flex-start" justifyContent="center">
            {props.label && <Typography variant="h6" marginBottom={0.5} color="var(--black)" >{props.label}</Typography>}
            <Box position="relative" paddingBottom="24px" width="100%">
                <TextField
                    type={props.type}
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    error={props.error}
                    fullWidth
                    variant="outlined"
                    sx={{
                        backgroundColor: "#eaebed",
                        borderRadius: "10px",
                        "& fieldset": { border: "none" },
                        border: props.error ? "1px solid #d32f2f" : "none",

                        input: {
                            color: "black",
                            padding: "16px",
                            fontSize: "16px",
                            height: "22px"
                        }
                    }}
                    InputProps={{
                        endAdornment: props.adornment ? (
                            <InputAdornment position={"end"}>{props.adornment}</InputAdornment>
                        ) : undefined
                    }}

                />
                {props.error && props.helperText && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#d32f2f", marginTop: "4px", marginLeft: "4px",
                            position: "absolute", bottom: "2px", left: "12px"
                        }}
                    >
                        {props.helperText}
                    </Typography>
                )}
            </Box>

        </Box>
    )
}
export default CTextFieldIcon;