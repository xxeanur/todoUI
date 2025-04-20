import React from 'react'
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { title } from 'process';

interface CenterContentProps {
    image: string;
    title?: string;
    description: string;
}


const CenterContent: React.FC<CenterContentProps> = ({ image, title, description }) => {
    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1, // Tüm boş alanı kapla
            margin: 'auto 0' // Yukarı ve aşağıdan eşit boşluk bırak
        }}>
            <Box sx={{
                marginBottom: 1
            }}>
                <Image src={image} alt="" width={100}
                    height={100}></Image>
            </Box>

            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography variant="h6" sx={{
                    fontWeight: 'medium',
                    marginBottom: 1,
                    opacity: 0.7,
                    fontSize: "0.9rem",
                }}>
                    {title}
                </Typography>
                <Typography sx={{
                    opacity: 0.7,
                    marginBottom: 4,
                    fontSize: "0.8rem",
                }}>
                    {description}
                </Typography>
            </Box>
        </Box>

    )
}

export default CenterContent