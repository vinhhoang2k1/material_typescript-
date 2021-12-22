import React from "react";
import Card from "@mui/material/Card";
import { CardMedia, Grid, Button } from "@mui/material";
import { CardActions, CardContent , Typography} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() =>
  createStyles({
    button: {
      backgroundColor: "#787878"
    }
  })
);
const ProductCard = () => {
    const classes = useStyle()
  return (
    <Grid item lg={4} sm={6} xs={12}>
      <Card >
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/200"
          alt="green iguana"
        />
        <CardContent>
            <Typography variant="h6">
                this is a media card , you can use this card
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained" className={classes.button} > read </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
