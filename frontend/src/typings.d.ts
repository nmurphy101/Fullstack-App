declare module "*.scss";
declare module "*.ico";
declare module "*.manifestjson";
declare module "*.xml";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module "*.png";
