export default async function handler(req, res) {
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;

  const query = req.url.split('?')[1] || '';
  const r = await fetch(`${base}/rest/v1/kuliner?${query}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });

  res.status(r.status).setHeader('Content-Type', 'application/json');
  res.send(await r.text());
}
