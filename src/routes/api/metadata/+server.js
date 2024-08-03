import urlMetadata from 'url-metadata';

const allowedOrigin = {
  'Access-Control-Allow-Origin': [
    'https://www.ddsmit.com'
    // 'http://locahost:5173'
  ]
};

export async function GET (req) {
  // Fetch the URL query param for which the metadata needs to be fetched
  
  const queryUrl = req.url.searchParams.get('url');

  // Error when no URL is passed
  if (!queryUrl) {
    return new Response(
      'Invalid URL',
      {
        headers: allowedOrigin,
        status: 404
      }
    );
  }
  try {
    // Fetch metadata
    const metadata = await urlMetadata(queryUrl, { maxRedirects: 1 });

    // Error response when page has no title configured.
    // Nothing to show to user
    if (!metadata.title) throw new Error();

    // Caching the response at the edge for 1 hour.
    return new Response(
      JSON.stringify({
        title: metadata.title,
        image: JSON.stringify(metadata.image) || '',
        description: metadata.description || ''
      }),
      {
        headers: {
          'Cache-Control': 's-maxage=43200', // Cache header for CDN
          ...allowedOrigin
        }
      }
    );
  } catch {
    console.log('error with:' + queryUrl)
    return new Response('Error in fetching webpage info',{status: 404})
  }
};