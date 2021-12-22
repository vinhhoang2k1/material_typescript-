import { Box, Container, Theme, Typography } from "@material-ui/core";
import React from "react";
import ProductCard from "../components/ProductCard";
import { createStyles, makeStyles } from "@material-ui/core";
import { margin } from "@mui/system";
import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    content1: {
      marginTop: "20px",
    },
  })
);
const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const Home = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box className={classes.content1} textAlign="center">
          <Box>
            <Typography variant="h3" color="textPrimary">
              photo albums
            </Typography>
          </Box>
          <Box py={2}>
            <Typography variant="subtitle1" color="textPrimary">
              hello everyone this is a my albums. wellcome to my service
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box py={2}>
          <Grid container spacing={2}>
            {cards.map((card) => (
              <ProductCard key={card} />
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
