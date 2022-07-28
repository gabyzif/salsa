import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import PropTypes from "prop-types";

interface Color {
  color: string;
}
const Arrow = ({ color }: Color) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="36"
      fill="none"
      viewBox="0 0 33 36"
    >
      <path stroke={color} strokeWidth="4" d="M3 3h27.363v27.363"></path>
      <path
        stroke={color}
        strokeWidth="4"
        d="M0 -2L42.498 -2"
        transform="matrix(-.66728 .7448 .66728 .7448 31.358 3.765)"
      ></path>
    </svg>
  );
};

Arrow.propTypes = {
  color: PropTypes.string,
};

Arrow.defaultProps = {
  color: "#000",
};
export default Arrow;
