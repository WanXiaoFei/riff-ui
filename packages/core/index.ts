import { makeInstaller } from "@riff-ui/utils";
import components from "./components";

import "@riff-ui/theme/index.css";

const installer = makeInstaller(components);

export * from "@riff-ui/components";
export default installer;