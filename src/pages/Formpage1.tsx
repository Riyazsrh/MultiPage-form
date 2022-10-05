import React, { useState, Fragment } from 'react';
import { Box, Button } from '@mui/material';
import Form from '../components/Form';
import { useNavigate } from "react-router-dom";
const Formpage1 = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate()
    return (
        <div>
            <Fragment>
                <Form />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained" onClick={() => setCount(count + 1)}>
                        +
                    </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Button color="primary" variant="contained">Back</Button>

                    <Button sx={{ ml: 2 }} color="primary" variant="contained" onClick={() => navigate("/summary")} >Next</Button>
                </Box>
                <Box sx={{ mt: 3 }}>
                    {[...Array(count)].map((_, i) => {
                        return (
                            <>
                                <Form key={i} />
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button variant="contained" onClick={() => setCount(count + 1)}>
                                        +
                                    </Button>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                    <Button color="primary" variant="contained">Back</Button>
                                    <Button sx={{ ml: 2 }} color="primary" variant="contained" onClick={() => navigate("/summary")} >Next</Button>
                                </Box>
                            </>
                        )
                    }
                    )}
                </Box>



            </Fragment>
        </div>
    )
}

export default Formpage1


