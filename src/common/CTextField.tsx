import { Box, TextField, Typography } from "@mui/material"

interface TextFieldProps {
    label?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
}

const CTextField = (props: TextFieldProps) => {
    return (
        <Box marginBottom={1} marginTop={1} display={"flex"} flexDirection="column" width="100%" alignItems="flex-start" justifyContent="center">
            {props.label && <Typography variant="subtitle1" marginBottom={0.5} color="var(--black)" >{props.label}</Typography>}
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
                        backgroundColor: "var(--background-textfield)",
                        borderRadius: "10px",
                        border: props.error ? "1px solid #d32f2f" : "none",
                        "& fieldset": { border: "none" },
                        input: {
                            color: "black",
                            padding: "16px",
                            fontSize: "16px",
                            height: "22px"
                        }
                    }} />
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
export default CTextField;