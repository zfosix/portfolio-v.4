import { authUrl, getAccessToken } from '@/utils/config';
import { useEffect } from 'react';

export const TikTokAuth = () => {
  useEffect(() => {
    // Handle redirect callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      handleAuth(code);
    }
  }, []);

  const handleAuth = async (code: string) => {
    try {
      const token = await getAccessToken(code);
      // Simpan token di localStorage atau state management
      localStorage.setItem('tiktok_token', token);
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  const login = () => {
    if (typeof window !== 'undefined') {
      window.location.href = authUrl;
    }
  };

  return (
    <button 
      onClick={login}
      className="px-4 py-2 bg-black text-white rounded"
    >
      Connect TikTok
    </button>
  );
};