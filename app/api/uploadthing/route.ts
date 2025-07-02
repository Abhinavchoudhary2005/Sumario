// app/api/uploadthing/route.ts
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core"; // ✅ Correct relative import

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
