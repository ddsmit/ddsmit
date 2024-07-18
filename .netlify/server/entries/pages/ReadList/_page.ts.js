import { a as getReadList } from "../../../chunks/sanity.js";
import { e as error } from "../../../chunks/index.js";
const load = async () => {
  const readList = await getReadList();
  if (readList) {
    const readListWithMetadata = await Promise.all(
      readList.map(async (readitem) => {
        const response = await fetch(`http://localhost:5173/api/metadata?url=${encodeURIComponent(readitem.link)}`);
        const metadata = await response.json();
        return {
          ...readitem,
          metadata
        };
      })
    );
    return {
      readList: readListWithMetadata
    };
  } else {
    throw error(404, "Not found");
  }
};
export {
  load
};
