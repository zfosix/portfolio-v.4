// LoginButton.tsx
"use client";
import Image from "next/image";

interface LoginButtonProps {
  isDarkMode: boolean;
  onLogin: () => Promise<void>;
  isLoggingIn: boolean;
}

const LoginButton = ({ isDarkMode, onLogin, isLoggingIn }: LoginButtonProps) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onLogin}
        className={`flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-lg transition-colors ${
          isDarkMode
            ? "bg-neutral-900 hover:bg-neutral-800 text-white"
            : "bg-white hover:bg-gray-50 text-black border border-gray-300"
        }`}
        disabled={isLoggingIn}
      >
        <Image
          src="/google.png"
          alt="Google"
          width={20}
          height={20}
          priority
        />
        <span className="text-sm">
          {isLoggingIn ? "Logging in..." : "Login with Google to Chat"}
        </span>
      </button>
    </div>
  );
};

export default LoginButton;