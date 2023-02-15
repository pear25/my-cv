import Grid from "@mui/material/Grid";
// import Item from "@mui/material/Item"
import './Column.css'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled('div') ({
    // color: '#F7F7F7',
    // fontWeight: '600',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'2.7ch',
    // backgroundColor: '#322F29',
  });
    

const Column = () => {
    return(
        <Grid container>
        <Grid className='tri-col' id='one' item xs={4}>
            <Item className="tag">python</Item>
        </Grid>
        <Grid className='tri-col' id='two' item xs={4}>
            <Item className="tag">Something B</Item>
        </Grid>
        <Grid className='tri-col' id='three' item xs={4}>
            <Item className="tag">Something C</Item>
        </Grid>
        </Grid>
    )
}

export default Column;