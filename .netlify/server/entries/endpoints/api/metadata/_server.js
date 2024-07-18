import urlMetadata from "url-metadata";
const allowedOrigin = {
  "Access-Control-Allow-Origin": ["https://ddsmit.com", "https://www.ddsmit.com"]
};
async function GET(req) {
  const queryUrl = req.url.searchParams.get("url");
  if (!queryUrl) {
    return new Response(
      "Invalid URL",
      {
        headers: allowedOrigin,
        status: 404
      }
    );
  }
  console.log(queryUrl);
  try {
    const metadata = await urlMetadata(queryUrl, { maxRedirects: 1 });
    if (!metadata.title)
      throw new Error();
    return new Response(
      JSON.stringify({
        title: metadata.title,
        image: JSON.stringify(metadata.image) || "",
        description: metadata.description || ""
      }),
      {
        headers: {
          "Cache-Control": "s-maxage=43200",
          // Cache header for CDN
          ...allowedOrigin
        }
      }
    );
  } catch {
    console.log("error with:" + queryUrl);
    return new Response("Error in fetching webpage info", { status: 404 });
  }
}
export {
  GET
};
