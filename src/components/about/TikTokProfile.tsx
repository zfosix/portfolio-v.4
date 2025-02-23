'use client';  // Tambahkan ini di baris pertama

import React, { useEffect, useState } from 'react';  // Impor React secara eksplisit
import { getTikTokProfile } from '@/utils/config';
import Image from 'next/image';

interface TikTokProfileData {
  avatar_url: string;
  display_name: string;
  follower_count: number;
}

export const TikTokProfile = () => {
  const [profile, setProfile] = useState<TikTokProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getTikTokProfile();
        setProfile(data);
      } catch (err) {
        setError('Failed to fetch profile data');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data available</div>;

  return (
    <div className="p-4 border rounded">
      {profile.avatar_url && (
        <Image 
          src={profile.avatar_url} 
          alt="Profile" 
          width={80}
          height={80}
          className="rounded-full"
        />
      )}
      <h2 className="text-xl font-bold mt-2">{profile.display_name}</h2>
      <p className="mt-1">Followers: {profile.follower_count?.toLocaleString()}</p>
    </div>
  );
};