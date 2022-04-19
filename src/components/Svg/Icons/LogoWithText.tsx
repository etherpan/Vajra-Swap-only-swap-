import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const wrapColor = isDark ? "#5FFF71" : "#3B9863";
  return (
    <Svg viewBox="0 0 416.8 149.7" {...props}>
      <image width="416.8" height="149.7" href={'/images/metafintec_logo_text.png'}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
