import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
<path d="M8.25 12.625C8.25 14.0688 7.06875 15.25 5.625 15.25C4.18125 15.25 3 14.0688 3 12.625C3 11.1813 4.18125 10 5.625 10C7.06875 10 8.25 11.1813 8.25 12.625ZM10.875 12.625C10.875 11.1813 12.0563 10 13.5 10C14.9438 10 16.125 11.1813 16.125 12.625C16.125 14.0688 14.9438 15.25 13.5 15.25C12.0563 15.25 10.875 14.0688 10.875 12.625ZM18.75 12.625C18.75 11.1813 19.9313 10 21.375 10C22.8188 10 24 11.1813 24 12.625C24 14.0688 22.8188 15.25 21.375 15.25C19.9313 15.25 18.75 14.0688 18.75 12.625Z" fill="#5C3F34"/>
    </Svg>
  );
};

export default Icon;
