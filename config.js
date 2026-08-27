// Vercel serverless function — GET /api/config
//
// Reads Supabase connection details from environment variables (set via
// the Vercel dashboard, `vercel env add`, or a local .env file) and hands
// them to the browser at runtime. This is what lets index.html avoid
// hardcoding credentials.
//
// Note: the value returned here is the Supabase *publishable/anon* key,
// which is designed to be exposed to the browser (Row Level Security is
// what actually protects your data, not keeping this key secret). Never
// put a `service_role` key in these env vars — it must never reach the
// client.
//
// No dependencies required — Vercel runs this as a plain Node.js function.

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL || "",
    supabaseKey: process.env.SUPABASE_KEY || "",
    storeId: process.env.STORE_ID || "default-store"
  });
}
