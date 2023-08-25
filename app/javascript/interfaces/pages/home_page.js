import React from "react"
import { Link } from "react-router-dom"
import {
    Container,
    Typography,
    Button,
    Box,
    Stack
} from "@mui/material"

export default function HomePage() {

    return (
        <Container sx={{ mt: 5 }} maxWidth="md">
            <Typography variant="h3" textAlign="center">Welcome to the Rails-React-Admin!</Typography>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    mt: 3,
                }}
            >
                <Typography variant="h4" textAlign={"center"}
                    sx={{
                        ml: 5,
                    }}
                >
                    Summary
                </Typography>
                <Link 
                    to="/login"
                    style={{ textDecoration: "none" }}
                >
                    <Button variant="contained">Go to Dashboard</Button>
                </Link>
            </Stack>
            <Typography variant="h6" sx={{ mt: 3 }}>Technique Features/Pre-requirements</Typography>
            <Stack
                direction={"column"}
                spacing={0}
                sx={{
                    mt: 2
                }}
            >
                <Typography variant="subtitle2">• Ruby On Rails 7.x (Ruby 3.1.2)</Typography>
                <Typography variant="subtitle2">• PostgreSQL</Typography>
                <Typography variant="subtitle2">• React 18.0.2 (Node 16.17.0 / yarn 1.22.9)</Typography>
            </Stack>
            <Typography variant="h6" sx={{ mt: 3 }}>Packages/Services</Typography>
            <Stack
                direction={"column"}
                spacing={0}
                sx={{
                    mt: 2
                }}
            >
                <Typography variant="subtitle2">• SideKiq</Typography>
                <Typography variant="subtitle2">• Serializers with model</Typography>
                <Typography variant="subtitle2">• Redux/Saga/axios</Typography>
            </Stack>
        </Container>
    );

}