import { g as getHistory } from "../../../chunks/sanity.js";
import { e as error } from "../../../chunks/index.js";
const load = async () => {
  const history = await getHistory();
  if (history) {
    return {
      history
    };
  }
  throw error(404, "Not found");
};
export {
  load
};
