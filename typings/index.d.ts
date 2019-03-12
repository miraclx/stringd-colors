import {ParsedString} from "stringd"

export interface Colors {
  ["color:random"](): string;
  ["color:bgRandom"](): string;
  // Modifier;
  ["color:reset"]: string;
  ["color:reset:close"]: string;
  ["color:bold"]: string;
  ["color:bold:close"]: string;
  ["color:dim"]: string;
  ["color:dim:close"]: string;
  ["color:italic"]: string;
  ["color:italic:close"]: string;
  ["color:underline"]: string;
  ["color:underline:close"]: string;
  ["color:inverse"]: string;
  ["color:inverse:close"]: string;
  ["color:hidden"]: string;
  ["color:hidden:close"]: string;
  ["color:strikethrough"]: string;
  ["color:strikethrough:close"]: string;
  // Color;
  ["color:close"]: string;
  ["color:black"]: string;
  ["color:red"]: string;
  ["color:green"]: string;
  ["color:yellow"]: string;
  ["color:blue"]: string;
  ["color:magenta"]: string;
  ["color:cyan"]: string;
  ["color:white"]: string;
  ["color:gray"]: string;
  ["color:grey"]: string;
  ["color:redBright"]: string;
  ["color:greenBright"]: string;
  ["color:yellowBright"]: string;
  ["color:blueBright"]: string;
  ["color:magentaBright"]: string;
  ["color:cyanBright"]: string;
  ["color:whiteBright"]: string;
  // bgColor;
  ["color:bgClose"]: string;
  ["color:bgBlack"]: string;
  ["color:bgRed"]: string;
  ["color:bgGreen"]: string;
  ["color:bgYellow"]: string;
  ["color:bgBlue"]: string;
  ["color:bgMagenta"]: string;
  ["color:bgCyan"]: string;
  ["color:bgWhite"]: string;
  ["color:bgBlackBright"]: string;
  ["color:bgRedBright"]: string;
  ["color:bgGreenBright"]: string;
  ["color:bgYellowBright"]: string;
  ["color:bgBlueBright"]: string;
  ["color:bgMagentaBright"]: string;
  ["color:bgCyanBright"]: string;
  ["color:bgWhiteBright"]: string;
}

export const raw: Colors;

export function extend<O = {}>(object:O): O & Colors
declare function stringdColor<O = {}>(template: string, object: O): ParsedString<O & Colors>

declare module "stringd-colors" {
  export = stringdColor;
}
