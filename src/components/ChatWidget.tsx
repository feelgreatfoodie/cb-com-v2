'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME_SHOWN_KEY = 'bourlier-chat-welcome-shown';

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content:
    "Welcome! I'm here to answer questions about Christian's work with production AI systems, MCP development, and multi-agent orchestration. Feel free to ask about his systems, skills, or experience.",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto-open on first visit
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(WELCOME_SHOWN_KEY)) {
      localStorage.setItem(WELCOME_SHOWN_KEY, '1');
      setTimeout(() => setIsOpen(true), 750);
    }
  }, []);

  // Re-focus input after loading completes
  useEffect(() => {
    if (!isLoading && isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading, isOpen]);

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.filter((m) => m !== WELCOME_MESSAGE),
          context: 'chat',
        }),
      });

      const data = await response.json();

      if (response.status === 429) {
        setMessages((prev) => [...prev, {
          role: 'assistant',
          content: data.message || "You've reached the question limit for this hour. Check back soon, or message Christian directly at christian@bourlier.ai.",
        }]);
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message || 'Sorry, I couldn\'t generate a response.',
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={handleOpen}
        className={cn(
          'fixed bottom-20 right-6 z-50 print:hidden',
          'w-14 h-14 rounded-full',
          'backdrop-blur-md',
          'transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2',
          'flex items-center justify-center',
          isOpen && 'opacity-0 pointer-events-none'
        )}
        style={{
          backgroundColor: 'rgba(91, 184, 212, 0.15)',
          borderColor: 'rgba(91, 184, 212, 0.4)',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        aria-label="Open AI chat"
        type="button"
      >
        <svg
          className="w-6 h-6"
          style={{ color: 'var(--accent-active)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed bottom-32 right-6 z-[60] print:hidden',
              'w-80 h-[28rem]',
              'rounded-lg',
              'flex flex-col',
              'shadow-2xl'
            )}
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'rgba(91, 184, 212, 0.3)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{
                borderBottom: '1px solid rgba(91, 184, 212, 0.2)',
              }}
            >
              <h3
                className="text-[15px] font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Chat with AI Assistant
              </h3>
              <button
                onClick={handleClose}
                className={cn(
                  'w-8 h-8 rounded-full',
                  'transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2',
                  'flex items-center justify-center'
                )}
                style={{
                  color: 'var(--text-secondary)',
                }}
                aria-label="Close chat"
                type="button"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] px-3 py-2 rounded-lg text-[13px]',
                    )}
                    style={{
                      backgroundColor: message.role === 'user'
                        ? 'rgba(91, 184, 212, 0.15)'
                        : 'rgba(30, 33, 36, 0.6)',
                      color: message.role === 'user'
                        ? 'var(--text-primary)'
                        : 'rgba(226, 232, 240, 0.9)',
                    }}
                  >
                    {message.content.includes('christian@bourlier.ai') ? (
                      <span>
                        {message.content.split('christian@bourlier.ai')[0]}
                        <a
                          href="mailto:christian@bourlier.ai"
                          className="underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 rounded"
                          style={{ color: 'var(--accent-active)' }}
                        >
                          christian@bourlier.ai
                        </a>
                        {message.content.split('christian@bourlier.ai')[1]}
                      </span>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div
                    className="px-3 py-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(30, 33, 36, 0.6)' }}
                  >
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                          backgroundColor: 'rgba(91, 184, 212, 0.6)',
                          animationDelay: '0ms',
                        }}
                      />
                      <div
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                          backgroundColor: 'rgba(91, 184, 212, 0.6)',
                          animationDelay: '150ms',
                        }}
                      />
                      <div
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{
                          backgroundColor: 'rgba(91, 184, 212, 0.6)',
                          animationDelay: '300ms',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Disclaimer */}
            <div
              className="px-4 py-2"
              style={{
                borderTop: '1px solid rgba(91, 184, 212, 0.2)',
              }}
            >
              <p
                className="text-[11px] text-center"
                style={{ color: 'rgba(226, 232, 240, 0.5)' }}
              >
                AI-generated — not from Christian directly
              </p>
            </div>

            {/* Input */}
            <div
              className="px-4 py-3"
              style={{
                borderTop: '1px solid rgba(91, 184, 212, 0.2)',
              }}
            >
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className={cn(
                    'flex-1 px-3 py-2 rounded-lg',
                    'text-[13px]',
                    'focus:outline-none focus:ring-2',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                  style={{
                    backgroundColor: 'rgba(22, 24, 25, 0.4)',
                    borderColor: 'rgba(91, 184, 212, 0.3)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    color: 'var(--text-primary)',
                  }}
                  aria-label="Chat message input"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    'px-4 py-2 rounded-lg',
                    'transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                  style={{
                    backgroundColor: !input.trim() || isLoading
                      ? 'rgba(91, 184, 212, 0.3)'
                      : 'rgba(91, 184, 212, 0.8)',
                    color: 'white',
                  }}
                  aria-label="Send message"
                  type="button"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
