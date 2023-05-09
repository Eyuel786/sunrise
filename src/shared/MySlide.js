import { Slide } from "@mui/material";
import { useEffect, useState } from "react";



function MySlide(props) {
    const {
        in: In = true,
        direction = 'down',
        timeout = 1000,
        delay = 1000,
        children
    } = props;

    const [isIn, setIsIn] = useState(In && delay === 0);

    useEffect(() => {
        if (delay > 0)
            setTimeout(() => setIsIn(true), delay);
    }, []);

    return (
        <Slide
            in={isIn}
            direction={direction}
            timeout={timeout}>
            {children}
        </Slide>
    )
}

export default MySlide;