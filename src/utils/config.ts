export const client_key = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY;
export const client_secret = process.env.TIKTOK_CLIENT_SECRET;
export const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
export const scope = 'user.info.basic';

export const authUrl = `https://www.tiktok.com/auth/authorize/?client_key=${client_key}&scope=${scope}&response_type=code&redirect_uri=${redirect_uri}&state=state`;

export async function getAccessToken(code: string) {
  const response = await fetch('https://open-api.tiktok.com/oauth/access_token/', {
    method: 'POST',
    body: JSON.stringify({
      client_key: client_key,
      client_secret: client_secret,
      code: code,
      grant_type: 'authorization_code'
    })
  });
  
  const data = await response.json();
  return data.access_token;
}

export async function getTikTokProfile() {
  const token = localStorage.getItem('tiktok_token');
  
  if (!token) return null;

  try {
    const response = await fetch('https://open-api.tiktok.com/user/info/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}