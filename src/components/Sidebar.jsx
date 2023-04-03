import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: "row", md: "column" }}
    sx={{ overflowY: "auto", height: { xs: "auto", md: "95%" } }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#fc1503",
          color: "#fff",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "f00",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : ".8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
