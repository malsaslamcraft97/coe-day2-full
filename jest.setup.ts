import "whatwg-fetch";
import "@testing-library/jest-dom";

beforeEach(() => {
  global.fetch = jest.fn(async (input, init) => {
    const url = typeof input === "string" ? input : input.url;

    if (url === "/api/weather") {
      return new Response(JSON.stringify({ temp: "30°C" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url === "/api/login" && init?.method === "POST") {
      return new Response(JSON.stringify({ token: "fake-token" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Not Found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});
