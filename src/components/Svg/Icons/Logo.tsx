import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 110.6 110.6" {...props}>
      <image width="110.6" height="110.6" href={'/images/metafintec_logo.png'}/>
    </Svg>
  );
};

export default Icon;

