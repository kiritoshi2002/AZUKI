import React, { useState } from 'react';

const TelegramBot = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendMessage = async () => {
    const botToken = 'TELEGRAM_BOT_ID';
    const chatId = 'CHAT_ID';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
      chat_id: chatId,
      text: message,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setMessage(''); // Clear the message input
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Error occurred while sending message.');
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div>
      <h1>Send Message to Telegram Bot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default TelegramBot;
