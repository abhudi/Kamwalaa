"use client";
import { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import { MessageCircle } from "lucide-react";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <ChatWindow onClose={() => setIsOpen(false)} />
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-black text-white rounded-full shadow-lg hover:scale-105 transition cursor-pointer"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
