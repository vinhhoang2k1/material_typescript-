import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import WellcomeMessage from "./WellcomeMessage";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
const useStyte = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);
const Navbar = () => {
  const [position, setPosition] = useState<string>("full-stack developer");
  const [date, setDate] = useState<Date>(() => new Date(Date.now()));
  useEffect(() => {
    const timer = setInterval(() => setDate(() => new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);
  const classes = useStyte();
  const onPositionchange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);
  console.log("re-render");

  return (
    <AppBar position="static" color="primary" >
      <Toolbar >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          my={2}
        >
          <Typography variant="h6">the movie</Typography>
          <Box>
            <WellcomeMessage position={position} />
            <Box mr={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionchange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="full-stack developer">
                    full-stack developer
                  </MenuItem>
                  <MenuItem value="font-end developer">
                    font-end developer
                  </MenuItem>
                  <MenuItem value="back-end developer">
                    back-end developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box my={1}>
            <Typography variant="h6">{date.toUTCString()}</Typography>
            </Box>
            <Button variant="contained">login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
