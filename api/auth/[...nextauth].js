// API d'authentification pour Decap CMS
export default async function handler(req, res) {
  try {
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
    
    // Redirection vers GitHub pour l'authentification
    if (req.method === 'GET' && req.query.redirect_uri) {
      const redirectUri = req.query.redirect_uri;
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;
      
      // Rediriger vers GitHub
      res.redirect(githubAuthUrl);
      return;
    }
    
    // Échange du code contre un token
    if (req.method === 'POST' || req.query.code) {
      const code = req.query.code;
      
      if (!code) {
        res.status(400).json({ error: 'Code parameter missing' });
        return;
      }
      
      const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code: code,
        }),
      });
      
      const data = await response.json();
      
      if (data.access_token) {
        res.json({
          token: data.access_token,
          provider: 'github',
        });
      } else {
        res.status(400).json({ error: 'Failed to get access token', details: data });
      }
      return;
    }
    
    res.status(404).json({ error: 'Not found' });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
}
