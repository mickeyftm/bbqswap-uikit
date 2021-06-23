import "styled-components";
import { PancakeTheme } from "./theme";
import "./fonts.css"
declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
