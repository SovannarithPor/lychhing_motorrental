import React from 'react';

export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full border rounded p-2" />
        <input type="email" placeholder="Email" className="w-full border rounded p-2" />
        <textarea placeholder="Message" className="w-full border rounded p-2" rows={4} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </main>
  );
}
