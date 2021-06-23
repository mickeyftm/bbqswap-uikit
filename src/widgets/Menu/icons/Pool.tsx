import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M2.2294 13.4277C2.42984 12.864 3.04932 12.5695 3.61306 12.7699L12.2743 15.8495C12.7438 16.0164 13.2565 16.0164 13.726 15.8495L22.3872 12.7699C22.9509 12.5695 23.5704 12.864 23.7709 13.4277C23.9713 13.9915 23.6768 14.611 23.1131 14.8114L14.4518 17.8909C13.5128 18.2248 12.4874 18.2248 11.5484 17.8909L2.88721 14.8114C2.32347 14.611 2.02896 13.9915 2.2294 13.4277Z" fill="#5C3F34"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.2294 18.0322C2.42984 17.4685 3.04932 17.174 3.61306 17.3744L12.2743 20.454C12.7438 20.6209 13.2565 20.6209 13.726 20.454L22.3872 17.3744C22.9509 17.174 23.5704 17.4685 23.7709 18.0322C23.9713 18.596 23.6768 19.2154 23.1131 19.4159L14.4518 22.4954C13.5128 22.8293 12.4874 22.8293 11.5484 22.4954L2.88721 19.4159C2.32347 19.2154 2.02896 18.596 2.2294 18.0322Z" fill="#5C3F34"/>
<path d="M14.8513 3.58296C13.6556 3.14813 12.3449 3.14813 11.1491 3.58295L3.51314 6.35968C1.61151 7.05118 1.6115 9.74061 3.51314 10.4321L11.1491 13.2088C12.3449 13.6437 13.6556 13.6437 14.8513 13.2088L22.4873 10.4321C24.3889 9.74061 24.389 7.05118 22.4873 6.35968L14.8513 3.58296Z" fill="#5C3F34"/>

    </Svg>
  );
};

export default Icon;