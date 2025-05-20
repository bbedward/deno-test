export const handler = (_req: Request) =>
  new Response("Hello from Deno!", {
    headers: { "content-type": "text/plain" },
  });

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  Deno.serve({ port: 8000 }, handler);
}
