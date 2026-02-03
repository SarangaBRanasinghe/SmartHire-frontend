import Image from 'next/image';

export default function SuccessStories() {
	const testimonials = [
		{
			id: 1,
			name: "Emma Davis",
			role: "Product Designer",
			image: "/images/success-stories/jobseeker-1.svg",
			rating: 5,
			testimonial: "Found my dream role at a top tech company within 3 weeks. The platform is incredibly intuitive and the AI recommendations were spot-on!"
		},
		{
			id: 2,
			name: "David Park",
			role: "Startup Founder",
			image: "/images/success-stories/recruiter-1.svg",
			rating: 5,
			testimonial: "As a recruiter, SmartHire transformed how we hire. The AI screening saves us 10+ hours per week and we're getting better candidates."
		},
		{
			id: 3,
			name: "Lisa Martinez",
			role: "Marketing Manager",
			image: "/images/success-stories/jobseeker-2.svg",
			rating: 5,
			testimonial: "The interview scheduling feature is brilliant! No more back-and-forth emails. Everything is streamlined and professional."
		}
	];

	return (
		<section id="success-stories" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						More Success Stories
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Join thousands of professionals who found their perfect match
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white rounded-2xl p-8 border border-emerald-100 hover:shadow-md transition-shadow duration-300"
						>
							{/* User Profile */}
							<div className="flex items-center mb-6">
								<div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-emerald-600 mr-4">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h3 className="text-lg font-bold text-gray-900">
										{testimonial.name}
									</h3>
									<p className="text-sm text-gray-600">
										{testimonial.role}
									</p>
								</div>
							</div>

							{/* Rating */}
							<div className="flex mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<span key={i} className="text-yellow-400 text-lg">★</span>
								))}
							</div>

							{/* Testimonial Text */}
							<p className="text-gray-700 leading-relaxed">
								"{testimonial.testimonial}"
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}