import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function HelperButton({ text }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <IconButton aria-describedby={"help"} onClick={handleClick}>
        <HelpOutlineIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>{text}</Typography>
      </Popover>
    </div>
  );
}
