
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/weather", () => {
    return HttpResponse.json({ temp: "30°C" });
  }),
  http.post("/api/login", () => {
    return HttpResponse.json({ token: "fake-token" });
  }),
];
