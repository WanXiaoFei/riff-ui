import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { makeInstaller } from "@riff-ui/utils";
import components from "./components";

import "@riff-ui/theme/index.css";
library.add(fas);
const installer = makeInstaller(components);

export * from "@riff-ui/components";
export default installer;