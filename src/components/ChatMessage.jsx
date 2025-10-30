import React from "react";
import ReactMarkdown from "react-markdown";

export default function ChatMessage({ sender, text }) {
  const isUser = sender === "user";
  const displayText =
    typeof text === "object" ? JSON.stringify(text, null, 2) : text;

  return (
    <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 rounded-2xl whitespace-pre-wrap shadow ${
          isUser 
          ? "bg-blue-500 text-white max-w-[60%] text-right" 
          : "bg-gray-100 text-black w-full"
        }`}
      >
        <ReactMarkdown>{displayText}</ReactMarkdown>
      </div>
    </div>
  );
}