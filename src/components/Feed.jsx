import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => (
  <Stack direction={{ xs: "column", md: "row" }}>
    <Box
      sx={{
        height: { xs: "auto", md: "92vh" },
        borderRight: "1px solid  #3d3d3d",
        px: { xs: 0, md: 2 },
      }}
    >
      <Sidebar />
      <Typography
        variant="body2"
        className="copyright"
        sx={{ mt: "1.5", color: "#fff" }}
      >
        Created by Wajid
      </Typography>
    </Box>
  </Stack>
);

export default Feed;
