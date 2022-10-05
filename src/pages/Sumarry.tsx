import React, { useContext } from 'react';
import { Typography, Grid, Card, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ParkingContext } from '../contextapi/Mycontext';

const Sumarry = () => {
    const navigate = useNavigate();
    const { category, category2, category3, category4, category5, category6 } = useContext(ParkingContext);
    console.log("Category's", useContext(ParkingContext));
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>

                <Card sx={{ width: "60%", marginLeft: "20%", boxShadow: "2px solid black", marginTop: "20px" }}>
                    <Typography variant="h6" textAlign="center">Summary Page</Typography>
                    <table style={{ width: "50%", border: "1px solid black", textAlign: "center", marginLeft: "20%", marginTop: "20px" }}>
                        <tr>
                            <th style={{ border: "1px solid black", width: "10%" }}>Sr.No</th>
                            <th style={{ border: "1px solid black", width: "45%" }}>Problems</th>
                            <th style={{ border: "1px solid black", width: "75%" }}>Given  Data</th>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>2</td>
                            <td style={{ border: "1px solid black" }}>Have you been diagnosed with this problem?</td>
                            <td style={{ border: "1px solid black" }}>{category}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>3</td>
                            <td style={{ border: "1px solid black" }}>Did the problem Start after a physical trauma?</td>
                            <td style={{ border: "1px solid black" }}>{category2}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>4</td>
                            <td style={{ border: "1px solid black" }}>Did the problem Start after a physical trauma?</td>
                            <td style={{ border: "1px solid black" }}>{category3}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>5</td>
                            <td style={{ border: "1px solid black" }}>How  often do you experience the problem?</td>
                            <td style={{ border: "1px solid black" }}>{category4}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>6</td>
                            <td style={{ border: "1px solid black" }}>How  often do you experience the problem?</td>
                            <td style={{ border: "1px solid black" }}>{category5}</td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>7</td>
                            <td style={{ border: "1px solid black" }}>How  often do you experience the problem?</td>
                            <td style={{ border: "1px solid black" }}>{category6}</td>
                        </tr>
                    </table>

                    <Button onClick={() => navigate("/")} color="primary" variant="contained">Back</Button>
                </Card>
            </Grid>
        </Grid >
    )
}

export default Sumarry