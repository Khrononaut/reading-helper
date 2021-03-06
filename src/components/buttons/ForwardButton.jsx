import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton, Link } from "@mui/material";
import buttonEffects from "../../helpers/buttonEffects";

const ForwardButton = (props) => {
  const { unhovered, hovered } = buttonEffects;
  const { type, searchString } = props.input;
  return (
    <Link
      href={
        type === "word"
          ? `https://www.merriam-webster.com/dictionary/${searchString}`
          : `https://www.google.com/search?q=${searchString}`
      }
      target="_blank"
    >
      <IconButton sx={hovered}>
        <OpenInNewIcon
          sx={{
            ...unhovered,
            opacity: `${props.opacity}`,
            color: `${props.color}`,
          }}
          fontSize={props.size}
        />
      </IconButton>
    </Link>
  );
};

export default ForwardButton;
