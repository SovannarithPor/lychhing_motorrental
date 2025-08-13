import React from 'react';

export default function ListingsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder property cards */}
        {[1,2,3].map((id) => (
          <div key={id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">Property #{id}</h2>
            <p className="mb-2">Description for property #{id}.</p>
            <a href={`/listings/${id}`} className="text-blue-500 hover:underline">View Details</a>
          </div>
        ))}
      </div>
    </main>
  );
}
