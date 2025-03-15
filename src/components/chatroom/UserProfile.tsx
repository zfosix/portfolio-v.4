"use client";
import Image from "next/image";
import { User } from "@/types/chatroom";

interface UserProfileProps {
  user: User | null;
  handleLogout: () => Promise<void>;
}

const UserProfile = ({ user, handleLogout }: UserProfileProps) => {
  if (!user) return null;

  return (
    <div className="mb-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Image
          src={user.photo}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full border border-gray-300"
          priority
        />
        <span className="font-medium">{user.name}</span>
        <button
          onClick={handleLogout}
          className="bg-red-900 hover:bg-red-800 transition-colors text-white py-1 px-4 rounded-lg"
          aria-label="Logout"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;