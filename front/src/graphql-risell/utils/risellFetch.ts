export const RISELL_FETCH_ERROR = "risellFetchError";

export interface RisellFetchRequestOpts extends RequestInit {
  params?: ConstructorParameters<typeof URLSearchParams>[0]; // type of first argument of URLSearchParams constructor.
  timeout?: number;
}

/**
 * risellFetch fetches data and handles response edge cases and error handling.
 */
export async function risellFetch(
  url: RequestInfo,
  opts: RisellFetchRequestOpts,
) {
  opts = {
    headers: {},
    method: "get",
    timeout: 30000, // 30 secs
    ...opts, // Any other fetch options
  };

  if (!url) throw new Error("risellFetch: Missing url argument");

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), opts.timeout);

  const { body, params, headers, ...otherOpts } = opts;

  const requestBody =
    body && typeof body === "object" ? JSON.stringify(opts.body) : opts.body;

  const response = await fetch(`${url}${createParams(params)}`, {
    ...otherOpts,
    body: requestBody,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
    signal: controller.signal,
  });

  clearTimeout(id);

  const responseBody = await getBody(response);

  if (response.ok) {
    const { headers, status } = response;
    return { data: responseBody, headers, status };
  } else {
    const errorResponseBody =
      typeof responseBody === "string" ? { error: responseBody } : responseBody;

    const error = generateError({
      requestBody: body,
      response,
      responseBody: errorResponseBody,
    });

    throw error;
  }
}

function getBody(response: Response) {
  const contentType = response.headers.get("Content-Type");
  if (contentType?.startsWith("application/json")) {
    return response.json();
  } else {
    return response.text();
  }
}

function createParams(params: RisellFetchRequestOpts["params"]) {
  return params ? `?${new URLSearchParams(params)}` : "";
}

interface RisellFetchError extends Error {
  response?: Response;
  responseBody?: any;
  requestBody?: RequestInit["body"];
}

function generateError({
  requestBody,
  response,
  responseBody,
}: {
  requestBody: RequestInit["body"];
  response: Response;
  responseBody: any;
}) {
  const message =
    responseBody?.error ||
    response?.statusText ||
    "There was an error with the request.";

  const error: RisellFetchError = new Error(message);

  error.response = response;
  error.responseBody = responseBody;
  error.requestBody = requestBody;

  return error;
}

interface RisellFetchClientOpts extends RisellFetchRequestOpts {
  baseURL?: string;
}

export class RisellFetchClient {
  baseURL: string;
  opts: RisellFetchRequestOpts;

  constructor(opts: RisellFetchClientOpts = {}) {
    const { baseURL = "", ...otherOpts } = opts;
    this.baseURL = baseURL;
    this.opts = otherOpts;
  }

  /**
   * Perform a GET request with the RisellFetchClient.
   */
  get(url?: RequestInfo, opts?: RisellFetchRequestOpts) {
    return risellFetch(`${this.baseURL}${url}`, {
      ...opts,
      method: "get",
    });
  }

  /**
   * Perform a DELETE request with the RisellFetchClient.
   */
  delete(url?: RequestInfo, opts?: RisellFetchRequestOpts) {
    return risellFetch(`${this.baseURL}${url}`, {
      ...opts,
      method: "delete",
    });
  }

  /**
   * Perform a HEAD request with the RisellFetchClient.
   */
  head(url?: RequestInfo, opts?: RisellFetchRequestOpts) {
    return risellFetch(`${this.baseURL}${url}`, {
      ...opts,
      method: "head",
    });
  }

  /**
   * Perform a OPTIONS request with the RisellFetchClient.
   */
  options(url?: RequestInfo, opts?: RisellFetchRequestOpts) {
    return risellFetch(`${this.baseURL}${url}`, {
      ...opts,
      method: "options",
    });
  }

  /**
   * Perform a POST request with the RisellFetchClient.
   */
  post(url?: RequestInfo, body?: any, opts?: RisellFetchRequestOpts) {
    return risellFetch(`${this.baseURL}${url}`, {
      ...opts,
      body,
      method: "post",
    });
  }

  /**
   * Perform a PUT request with the RisellFetchClient.
   */
  put(url?: RequestInfo, body?: any, opts?: RisellFetchRequestOpts) {
    return risellFetch(`${this.baseURL}${url}`, {
      ...opts,
      body,
      method: "put",
    });
  }

  /**
   * Perform a PATCH request with the RisellFetchClient.
   */
  patch(url?: RequestInfo, body?: any, opts?: RisellFetchRequestOpts) {
    return risellFetch(`${this.baseURL}${url}`, {
      ...opts,
      body,
      method: "patch",
    });
  }
}
