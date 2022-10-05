import React, {  useContext } from 'react';
import { Grid, Typography, Card, Box, TextField, } from '@mui/material';
import { ParkingContext } from '../contextapi/Mycontext';

const Form = () => {
    const { category, setCategory } = useContext(ParkingContext);
    const { category2, setCategory2 } = useContext(ParkingContext);
    const { category3, setCategory3 } = useContext(ParkingContext);
    const { category4, setCategory4 } = useContext(ParkingContext);
    const { category5, setCategory5 } = useContext(ParkingContext);
    const { category6, setCategory6 } = useContext(ParkingContext);
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card sx={{ width: "60%", marginLeft: "20%", boxShadow: "2px solid black" }}>
                    <Box>
                        <Typography variant="h6" textAlign="center" sx={{ color: "#3090C7" }}>Pain & Function Discription </Typography>
                        <Typography textAlign="center">The description of the current situation gives your Optimum <br /> Trainer a picture of and clues to the underlying causes of your<br /> problems </Typography>
                    </Box>
                    <Box >
                        <Typography textAlign="center" sx={{ marginTop: "20px" }}>If you have problems with pain/aches,stifness,weakness of functional problems ,describe <br /> this/these below.(List teh syptoms in descendinng order with the most troublesome first)</Typography>
                        <TextField sx={{ width: "80%", marginLeft: "10%", marginTop: "10px", height: "35%" }} />
                    </Box>
                    <Box sx={{ display: "flex", mt: 3, ml: 10 }}>
                        <Typography textAlign="center">Have you been diagnosed with this problem? </Typography>
                        <Box sx={{ ml: 6 }}>
                            <label>Not Relevant</label>
                            <input type="radio" name='category' value="Not Relevant" onChange={e => setCategory(e.target.value)} />
                            <label style={{ marginLeft: "10px" }}>Yes</label>
                            <input type="radio" name='category' value="Yes" onChange={e => setCategory(e.target.value)} />
                            <label style={{ marginLeft: "10px" }}>No</label>
                            <input type="radio" name='category' value="No" onChange={e => setCategory(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mr: 7 }}>
                        <Typography >Did the problem Start after a physical trauma? </Typography>
                        <Box sx={{ ml: 5 }}>
                            <label>Not Relevant</label>
                            <input type="radio" name='category2' value="Not Relevant" onChange={e => setCategory2(e.target.value)} />
                            <label style={{ marginLeft: "10px" }}>Yes</label>
                            <input type="radio" name='category2' value="Yes" onChange={e => setCategory2(e.target.value)} />
                            <label style={{ marginLeft: "10px" }}>No</label>
                            <input type="radio" name='category2' value="No" onChange={e => setCategory2(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mr: 7 }}>
                        <Typography >Did the problem Start after a physical trauma? </Typography>
                        <Box sx={{ ml: 5 }}>
                            <label>Not Relevant</label>
                            <input type="radio" name='category3' value="Not Relevant" onChange={e => setCategory3(e.target.value)} />
                            <label style={{ marginLeft: "10px" }}>Yes</label>
                            <input type="radio" name='category3' value="Yes" onChange={e => setCategory3(e.target.value)} />
                            <label style={{ marginLeft: "10px" }}>No</label>
                            <input type="radio" name='category3' value="No" onChange={e => setCategory3(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ ml: 10, mt: 4 }}>
                        <Typography>How  often do you experience the problem? </Typography>
                        <Box>
                            <label>Not Relevant</label>
                            <input type="radio" name='category4' value="Not Relevant" onChange={e => setCategory4(e.target.value)} />
                            <label style={{ marginLeft: "20px" }}>Daily</label>
                            <input type="radio" name='category4' value="Daily" onChange={e => setCategory4(e.target.value)} />
                            <label style={{ marginLeft: "20px" }}>Several times/weak</label>
                            <input type="radio" name='category4' value="Several times/weak" onChange={e => setCategory4(e.target.value)} />
                            <label style={{ marginLeft: "20px" }}>A few times/month</label>
                            <input type="radio" name='category4' value="A few times/month" onChange={e => setCategory4(e.target.value)} />
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <label style={{ marginTop: "10px" }}>A few times/years</label>
                            <input type="radio" name='category4' value="A few times/years" onChange={e => setCategory4(e.target.value)} />
                        </Box>
                    </Box>
                    <Box sx={{ ml: 10, mt: 2 }}>
                        <Typography>How  often do you experience the problem? </Typography>
                        <Box sx={{ mt: 1 }}>
                            <input type="radio" name='category5' value="Not Relevant" onChange={e => setCategory5(e.target.value)} />
                            <label>Not Relevant</label>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <input type="radio" name='category5' value="When Lyinng down" onChange={e => setCategory5(e.target.value)} />
                            <label>When Lyinng down</label>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <input type="radio" name='category5' value="when sitting" onChange={e => setCategory5(e.target.value)} />
                            <label>when sitting</label>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <input type="radio" name='category5' value="Under standing" onChange={e => setCategory5(e.target.value)} />
                            <label>Under standing</label>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <input type="radio" name='category5' value="In walking" onChange={e => setCategory5(e.target.value)} />
                            <label>In walking</label>
                        </Box>
                    </Box>
                    <Box sx={{ ml: 10 }}>
                        <Typography>How  often do you experience the problem? </Typography>
                        <Box sx={{ display: "flex" }}>
                            <input type="radio" name='category6' value="1" onChange={e => setCategory6(e.target.value)} />
                            <input style={{ marginLeft: "30px" }} type="radio" name='category6' value="2" onChange={e => setCategory6(e.target.value)} /><br />
                            <input style={{ marginLeft: "40px" }} type="radio" name='category6' value="3" onChange={e => setCategory6(e.target.value)} /><br />
                            <input style={{ marginLeft: "40px" }} type="radio" name='category6' value="4" onChange={e => setCategory6(e.target.value)} /><br />
                            <input style={{ marginLeft: "40px" }} type="radio" name='category6' value="5" onChange={e => setCategory6(e.target.value)} /><br />
                            <input style={{ marginLeft: "40px" }} type="radio" name='category6' value="6" onChange={e => setCategory6(e.target.value)} /><br />
                            <input style={{ marginLeft: "40px" }} type="radio" name='category6' value="7" onChange={e => setCategory6(e.target.value)} /><br />
                            <input style={{ marginLeft: "40px" }} type="radio" name='category6' value="8" onChange={e => setCategory6(e.target.value)} /><br />
                            <input style={{ marginLeft: "40px" }} type="radio" name='category6' value="9" onChange={e => setCategory6(e.target.value)} /><br />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <label style={{ marginLeft: "5px" }}>1</label>
                            <label style={{ marginLeft: "40px" }}>2</label>
                            <label style={{ marginLeft: "47px" }}>3</label>
                            <label style={{ marginLeft: "47px" }}>4</label>
                            <label style={{ marginLeft: "47px" }}>5</label>
                            <label style={{ marginLeft: "47px" }}>6</label>
                            <label style={{ marginLeft: "47px" }}>7</label>
                            <label style={{ marginLeft: "48px" }}>8</label>
                            <label style={{ marginLeft: "48px" }}>9</label>
                        </Box>
                        <Box><input type="radio" name='category6' value="10" onChange={e => setCategory6(e.target.value)} /><br />
                            <label>10</label></Box>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Form