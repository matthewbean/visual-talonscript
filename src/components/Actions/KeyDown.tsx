import React, { Key } from "react";

import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import HelperButton from "../HelperButton";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ChangeHistoryOutlinedIcon from "@mui/icons-material/ChangeHistoryOutlined";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";

import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

interface Props {
  value: String;
  uuid: String;
  active: Boolean;
  editAction: Function;
  deleteAction: Function;
  moveUpCommand: Function;
  moveDownCommand: Function;
}

export default function KeyDown({
  moveUpCommand,
  uuid,
  value,
  active,
  editAction,
  moveDownCommand,
  deleteAction,
}: Props) {
  return (
    <>
      {active ? (
        <motion.li
          layout
          key={("animation" + uuid) as Key}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <h2>Hold Key:</h2>
          <Grid sx={{ alignItems: "center" }} container spacing={1}>
            <Grid xs={9}>
              <InputLabel id="demo-simple-select-label">Key Down</InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={(e) => editAction(uuid, e.target.value)}
              >
                <MenuItem value={"a"}>a</MenuItem>
                <MenuItem value={"b"}>b</MenuItem>
                <MenuItem value={"c"}>c</MenuItem>
                <MenuItem value={"d"}>d</MenuItem>
                <MenuItem value={"e"}>e</MenuItem>
                <MenuItem value={"f"}>f</MenuItem>
                <MenuItem value={"g"}>g</MenuItem>
                <MenuItem value={"h"}>h</MenuItem>
                <MenuItem value={"i"}>i</MenuItem>
                <MenuItem value={"j"}>j</MenuItem>
                <MenuItem value={"k"}>k</MenuItem>
                <MenuItem value={"l"}>l</MenuItem>
                <MenuItem value={"m"}>m</MenuItem>
                <MenuItem value={"n"}>n</MenuItem>
                <MenuItem value={"o"}>o</MenuItem>
                <MenuItem value={"p"}>p</MenuItem>
                <MenuItem value={"q"}>q</MenuItem>
                <MenuItem value={"r"}>r</MenuItem>
                <MenuItem value={"s"}>s</MenuItem>
                <MenuItem value={"t"}>t</MenuItem>
                <MenuItem value={"u"}>u</MenuItem>
                <MenuItem value={"v"}>v</MenuItem>
                <MenuItem value={"w"}>w</MenuItem>
                <MenuItem value={"x"}>x</MenuItem>
                <MenuItem value={"y"}>y</MenuItem>
                <MenuItem value={"z"}>z</MenuItem>
                <MenuItem value={"space"}>space</MenuItem>
                <MenuItem value={"f1"}>f1</MenuItem>
                <MenuItem value={"f2"}>f2</MenuItem>
                <MenuItem value={"f3"}>f3</MenuItem>
                <MenuItem value={"f4"}>f4</MenuItem>
                <MenuItem value={"f5"}>f5</MenuItem>
                <MenuItem value={"f6"}>f6</MenuItem>
                <MenuItem value={"f7"}>f7</MenuItem>
                <MenuItem value={"f8"}>f8</MenuItem>
                <MenuItem value={"f9"}>f9</MenuItem>
                <MenuItem value={"f10"}>f10</MenuItem>
                <MenuItem value={"f11"}>f11</MenuItem>
                <MenuItem value={"f12"}>f12</MenuItem>
                <MenuItem value={"shift"}>Shift</MenuItem>
                <MenuItem value={"ctrl"}>Control</MenuItem>
                <MenuItem value={"alt"}>Alt</MenuItem>
                <MenuItem value={"super"}>Cmd/Win</MenuItem>
              </Select>
            </Grid>
            <Grid xs={2}>
              <HelperButton
                text={
                  "Talon will hold down this key until you specify to release it with a release key action."
                }
              />
            </Grid>
            <Grid xs={1}>
              <IconButton
                sx={{ display: "block" }}
                onClick={() => moveUpCommand(uuid)}
                color="primary"
                aria-label="move up"
                component="button"
              >
                <ChangeHistoryOutlinedIcon />
              </IconButton>
              <IconButton
                sx={{ display: "block" }}
                onClick={() => deleteAction(uuid)}
              >
                <DeleteForeverRoundedIcon />
              </IconButton>
              <IconButton
                sx={{ display: "block" }}
                onClick={() => moveDownCommand(uuid)}
                color="primary"
                aria-label="move up"
                component="button"
              >
                <ChangeHistoryOutlinedIcon
                  sx={{ transform: "rotate(180deg)" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </motion.li>
      ) : (
        <Box sx={{ m: 1, ml: 2 }}>Hold Down: "{value}"</Box>
      )}
    </>
  );
}
