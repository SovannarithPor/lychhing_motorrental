import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
			<h1 className="text-4xl font-bold mb-4 text-blue-900 text-center">Welcome to Ly Chhing Motorbike Rental Shop</h1>
			<p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
				Your trusted motorbike rental shop in Siem Reap! Explore the city and its wonders with our reliable motorbikes. Affordable rates, friendly service, and the best way to experience Siem Reap.
			</p>
			<div className="flex gap-4">
				<Link href="/listings" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 font-semibold">View Motorbikes</Link>
				<Link href="/contact" className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 font-semibold">Contact Us</Link>
			</div>
		</main>
	);
}
