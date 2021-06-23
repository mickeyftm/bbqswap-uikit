import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
<path d="M5.1648 3.48648L2.72761 6.96107C2.22405 7.67898 2.7376 8.6665 3.61452 8.6665H22.3859C23.2628 8.6665 23.7763 7.67898 23.2728 6.96107L20.8356 3.48648C20.2229 2.65638 19.2524 2.1665 18.2207 2.1665H7.77967C6.74794 2.1665 5.7775 2.65638 5.1648 3.48648Z" fill="#5C3F34"/>
<path d="M23.1407 12.567C23.6769 11.853 23.1674 10.8332 22.2744 10.8332H3.72596C2.83293 10.8332 2.32343 11.853 2.85969 12.567L10.421 22.6356C11.7218 24.3324 14.2785 24.3324 15.5794 22.6356L23.1407 12.567Z" fill="#5C3F34"/>
    </Svg>
  );
};

export default Icon;