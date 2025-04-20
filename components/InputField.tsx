import { Box, Input, InputAdornment, Typography } from "@mui/material";
import { JSX } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export default function InputField({ label, type, icon, register}: { label: string, type: string, icon: JSX.Element, register:UseFormRegisterReturn }) {
    return (
        <Box sx={{
            textAlign: "left",
            marginBottom: 2,
        }}>
            <Typography sx={{
                textAlign: "left",
                marginBottom: 2,
            }}>{label}</Typography>
            <Input
                type={type}
                fullWidth
                {...register}
                endAdornment={<InputAdornment position="end">{icon}</InputAdornment>}
                sx={{color:"whitesmoke",}}>
            </Input>
        </Box>

    )
}