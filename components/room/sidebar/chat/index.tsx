import { useEffect, useRef } from 'react';
import { useMessages } from '@/states/messagesState';

import { ChatInput } from '@/components/room/sidebar/chat/ChatInput';
import { ChatMessage } from '@/components/room/sidebar/chat/ChatMessage';

export function Chat() {
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [messages] = useMessages();

  useEffect(() => {
    const messageEl = messagesRef.current;
    if (!messageEl) return;

    messageEl.scrollTop = messageEl?.scrollHeight;
  }, [messages]);

  return (
    <div className="relative flex h-full flex-col justify-between p-4">
      <div
        ref={messagesRef}
        className="flex max-h-[calc(100%-4rem)] flex-col overflow-y-auto"
      >
        {messages.map((message, index) => (
          <ChatMessage
            message={message}
            sameSender={message.fromId === messages?.[index - 1]?.fromId}
            key={message.id}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
}
