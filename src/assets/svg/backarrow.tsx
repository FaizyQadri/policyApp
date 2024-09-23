import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackArrow = (props:any) => (
  <Svg
    width={18}
    height={16}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.50146 7.25H16.5015C16.7004 7.25 16.8911 7.32902 17.0318 7.46967C17.1724 7.61032 17.2515 7.80109 17.2515 8C17.2515 8.19891 17.1724 8.38968 17.0318 8.53033C16.8911 8.67098 16.7004 8.75 16.5015 8.75H1.50146C1.30255 8.75 1.11179 8.67098 0.971135 8.53033C0.830483 8.38968 0.751465 8.19891 0.751465 8C0.751465 7.80109 0.830483 7.61032 0.971135 7.46967C1.11179 7.32902 1.30255 7.25 1.50146 7.25Z"
      fill="black"
    />
    <Path
      d="M1.81184 7.99997L8.03234 14.219C8.17317 14.3598 8.25229 14.5508 8.25229 14.75C8.25229 14.9491 8.17317 15.1401 8.03234 15.281C7.89151 15.4218 7.7005 15.5009 7.50134 15.5009C7.30218 15.5009 7.11117 15.4218 6.97034 15.281L0.220341 8.53097C0.150496 8.4613 0.0950816 8.37854 0.057272 8.28742C0.0194623 8.1963 0 8.09862 0 7.99997C0 7.90132 0.0194623 7.80364 0.057272 7.71252C0.0950816 7.6214 0.150496 7.53864 0.220341 7.46897L6.97034 0.718971C7.11117 0.578141 7.30218 0.499023 7.50134 0.499023C7.7005 0.499023 7.89151 0.578141 8.03234 0.718971C8.17317 0.859801 8.25229 1.05081 8.25229 1.24997C8.25229 1.44913 8.17317 1.64014 8.03234 1.78097L1.81184 7.99997Z"
      fill="black"
    />
  </Svg>
);
export default BackArrow;
