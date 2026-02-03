import Image from 'next/image';

export default function AboutSection() {
	const stats = [
		{
			id: 1,
			number: "10k+",
			label: "Active Users"
		},
		{
			id: 2,
			number: "500+",
			label: "Companies"
		},
		{
			id: 3,
			number: "95%",
			label: "Success Rate"
		},
		{
			id: 4,
			number: "24/7",
			label: "Support"
		}
	];

	return (
		<section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50">
			<div className="max-w-7xl mx-auto px-6">
				{/* Page Header */}
				<div className="text-center mb-20">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
						About SmartHire
					</h1>
					<p className="text-xl text-gray-600">
						Revolutionizing recruitment with AI-powered technology
					</p>
				</div>

				{/* Mission Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
					{/* Image */}
					<div className="order-2 md:order-1">
						<div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-lg">
							<Image
								src="/images/about/mission-office.jpg"
								alt="SmartHire Team"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* Content */}
					<div className="order-1 md:order-2">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Our Mission
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed mb-4">
							At SmartHire, were on a mission to make job searching and hiring more efficient, accurate, and accessible for everyone through the power of artificial intelligence.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed">
							Founded by AI experts and HR professionals, we combine cutting-edge technology with deep industry knowledge to solve the biggest challenges in recruitment.
						</p>
					</div>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{stats.map((stat) => (
						<div
							key={stat.id}
							className="bg-emerald-100 rounded-2xl p-8 text-center border border-emerald-200 hover:shadow-md transition-shadow duration-300"
						>
							<p className="text-4xl font-bold text-emerald-600 mb-2">
								{stat.number}
							</p>
							<p className="text-gray-700 font-medium">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}