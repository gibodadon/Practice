import logo from "./logo.svg";
import "./App.css";
import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(100);
  const add = () => {
    setCount(count + 1);
  };
  const add2 = () => {
    setCount2(count2 + 2);
  };
  const add3 = () => {
    setCount3(count3 + 3.5);
  };
  return (
    <Box>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => {
            add();
          }}
        >
          One
        </Button>
        <Button
          onClick={() => {
            add2();
          }}
        >
          Two
        </Button>
        <Button
          onClick={() => {
            add3();
          }}
        >
          Three
        </Button>
      </ButtonGroup>
      <Box>
        <Stack direction="row" spacing={7}>
          <Box height="30vh" display="flex" alignItems="center">
            <Typography align="center">{count}</Typography>
          </Box>
          <Box width="3%">
            <Typography align="center">{count2}</Typography>
          </Box>
          <Typography align="center">{count3}</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
