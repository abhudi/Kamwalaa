type Props = {
  text: string;
  from: "user" | "bot";
};

export const MessageBubble = ({ text, from }: Props) => {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${
          isUser ? "bg-black text-white" : "bg-gray-200 text-black"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
