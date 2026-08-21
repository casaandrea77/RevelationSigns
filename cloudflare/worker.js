const UPSTREAM_ORIGIN = "https://revelation-signs.vercel.app";
const PUBLIC_ORIGIN = "https://revelationsigns.one";
const SAFE_REQUEST_HEADERS = [
  "accept",
  "accept-encoding",
  "accept-language",
  "if-modified-since",
  "if-none-match",
  "next-router-prefetch",
  "next-router-state-tree",
  "next-url",
  "purpose",
  "range",
  "rsc",
  "user-agent",
];

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { allow: "GET, HEAD" },
      });
    }

    const incomingUrl = new URL(request.url);
    const upstreamUrl = new URL(incomingUrl.pathname, UPSTREAM_ORIGIN);

    if (incomingUrl.pathname === "/_next/image") {
      const source = incomingUrl.searchParams.get("url");
      const width = incomingUrl.searchParams.get("w");
      const quality = incomingUrl.searchParams.get("q");
      const isPublicImage =
        source &&
        (source.startsWith("/assets/") || source.startsWith("/media/")) &&
        !source.includes("..") &&
        !source.includes("\\");
      const isValidWidth = width && /^\d{1,4}$/.test(width) && Number(width) <= 3840;
      const isValidQuality = quality && /^\d{1,3}$/.test(quality) && Number(quality) <= 100;

      if (!isPublicImage || !isValidWidth || !isValidQuality) {
        return new Response("Invalid image request", { status: 400 });
      }

      upstreamUrl.searchParams.set("url", source);
      upstreamUrl.searchParams.set("w", width);
      upstreamUrl.searchParams.set("q", quality);
    }

    const upstreamHeaders = new Headers();

    for (const name of SAFE_REQUEST_HEADERS) {
      const value = request.headers.get(name);
      if (value) upstreamHeaders.set(name, value);
    }

    const upstreamRequest = new Request(upstreamUrl, {
      method: request.method,
      headers: upstreamHeaders,
      redirect: "manual",
    });

    const upstreamResponse = await fetch(upstreamRequest);
    const responseHeaders = new Headers(upstreamResponse.headers);
    const location = responseHeaders.get("location");

    if (location?.startsWith(UPSTREAM_ORIGIN)) {
      responseHeaders.set("location", location.replace(UPSTREAM_ORIGIN, PUBLIC_ORIGIN));
    }

    responseHeaders.set("x-revelation-signs-origin", "vercel-production");

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  },
};
