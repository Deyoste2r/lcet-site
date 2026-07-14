export default async function handler(req, res) {
  try {
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
    
    if (req.method === 'GET' && req.query.redirect_uri) {
      const redirectUri = req.query.redirect_uri;
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=repo`;
      res.redirect(githubAuthUrl);
      return;
    }
    
    if (req.method === 'POST') {
      const { code } = req.query;
      const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      
      const data = await response.json();
      res.json(data);
      return;
    }
    
    res.status(404).json({ error: 'Not found' });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
