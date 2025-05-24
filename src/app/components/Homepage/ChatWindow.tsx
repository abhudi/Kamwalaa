import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { MessageBubble } from "./MessageBubble";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 w-fit max-w-[80%] ml-1">
      <div
        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
};

export const ChatWindow = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState([
    { text: "Hey there! How can I help you?", from: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message instantly
    const newMessages = [...messages, { text: input, from: "user" }];
    setMessages(newMessages);
    setInput("");

    // Show typing indicator first
    setIsTyping(true);

    // Wait a bit before starting to type
    setTimeout(() => {
      setIsTyping(false);

      // Start with an empty bot message
      setMessages([...newMessages, { text: "", from: "bot" }]);

      // Bot typing effect - character by character
      const botReply = "Thanks for your message! 😊";
      let currentText = "";
      let charIndex = 0;

      const typeCharacter = () => {
        if (charIndex < botReply.length) {
          currentText += botReply[charIndex];
          charIndex++;

          // Update the last message with the current text
          setMessages((msgs) => {
            const updated = [...msgs];
            const lastIndex = updated.length - 1;
            updated[lastIndex] = {
              text: currentText,
              from: "bot",
            };
            return updated;
          });

          // Random typing speed between 40-90ms for realism
          const typingSpeed = Math.floor(Math.random() * 50) + 40;
          setTimeout(typeCharacter, typingSpeed);
        }
      };

      // Start typing after a brief pause (simulates thinking)
      setTimeout(typeCharacter, 300);
    }, 1000);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="w-90 h-[400px] bg-white rounded-xl shadow-2xl p-3 flex flex-col">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="font-bold text-lg">Support Chat</h2>
        <button onClick={onClose} className="cursor-pointer">
          <X />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 my-3 p-1">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} text={msg.text} from={msg.from} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center gap-2 mt-auto mb-4">
        <input
          className="flex-1 border rounded px-2 py-1 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="text-sm bg-black text-white px-3 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};
