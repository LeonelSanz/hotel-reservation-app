import { useQuery } from "@tanstack/react-query";
import { Typography } from "@mui/material"

const fetchHotels = async () => {
    const res = await fetch("http://localhost:3001/hotels");
    if (!res.ok) {
        throw new Error("Network response was not OK");
    }

    return res.json();
}

function HotelList() {
    const: {
        data: hotels,
        isLoading,
        error,
    } = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error fetching Hotels! {error.message}</div>
    }

    return (
        <>
            <Typography variant="h4" component="h2">
                Booking App
            </Typography>
        </>
    )
}