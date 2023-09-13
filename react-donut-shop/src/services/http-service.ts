class HTTPService {
  private _baseURL: string;
  constructor(baseURL: string) {
    this._baseURL = baseURL;
  }

  getAll() {
    const controller = new AbortController();
    return {
      request: fetch(this._baseURL, { signal: controller.signal }),
      cancel: () => controller.abort(),
    };
  }
}

const createHTTP = (baseURL: string) => new HTTPService(baseURL);
export default createHTTP;
