import Link from 'next/link';
import Image from 'next/image';

export default function GetStarted() {
	const roles = [
		{
			id: 1,
			title: "Job Seeker",
			description: "Find your dream job with AI-powered recommendations and automated applications",
			image: "/images/icons/jobseeker.png",
			link: "/signup?role=jobseeker"
		},
		{
			id: 2,
			title: "Recruiter",
			description: "Post jobs and discover perfect candidates with intelligent AI screening",
			image: "/images/icons/recruiter.png",
			link: "/signup?role=recruiter"
		},
		{
			id: 3,
			title: "Administrator",
			description: "Manage users and monitor comprehensive system analytics",
			image: "/images/icons/admin.png",
			link: "/signup?role=admin"
		}
	];

	return (
		<section id="get-started" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Get Started Today
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Choose your role and experience the future of recruitment
					</p>
				</div>

				{/* Role Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{roles.map((role) => (
						<div
							key={role.id}
							className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-emerald-100"
						>
							{/* Image */}
							<div className="w-24 h-24 relative mx-auto mb-6">
								<Image
									src={role.image}
									alt={role.title}
									fill
									className="object-contain"
								/>
							</div>

							{/* Title */}
							<h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
								{role.title}
							</h3>

							{/* Description */}
							<p className="text-gray-600 text-center leading-relaxed mb-8">
								{role.description}
							</p>

							{/* CTA Link */}
							<div className="text-center">
								<Link
									href={role.link}
									className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300 group"
								>
									Get Started
									<span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

