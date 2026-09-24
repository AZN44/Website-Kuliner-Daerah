import type { Config, Context } from '@netlify/functions'

export default async (req: Request, context: Context) => {
  try {
    const requestUrl = new URL(req.url)
    const baseUrl = Netlify.env.get('SUPABASE_URL') || 'https://pnplibrcrxgpguxpufmz.supabase.co/rest/v1/kuliner'
    const targetUrl = new URL(baseUrl)
    targetUrl.search = requestUrl.search

    const apiKey = Netlify.env.get('SUPABASE_API_KEY') || ''

    const response = await fetch(targetUrl.toString(), {
      method: req.method,
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
    })

    const data = await response.text()
    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const config: Config = {
  path: ['/api/kuliner', '/.netlify/functions/kuliner'],
}
