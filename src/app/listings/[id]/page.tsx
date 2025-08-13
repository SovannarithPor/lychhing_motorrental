import React from 'react';
import { notFound } from 'next/navigation';

export default function ListingDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) return notFound();
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Property Details</h1>
      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-xl font-semibold mb-2">Property #{id}</h2>
        <p>Description for property #{id}.</p>
        <a href="/listings" className="text-blue-500 hover:underline">Back to Listings</a>
      </div>
    </main>
  );
}
