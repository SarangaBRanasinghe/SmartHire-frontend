'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';

export default function SignUp() {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
	});

	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle signup logic here
		console.log('Signup submitted:', formData);
	};

	return (
		<>
			<Header />
			<div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col">
			

				{/* Main Content */}
				<main className="flex-1 flex items-center justify-center py-12 px-4">
				<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-12">
					{/* Logo */}
					<div className="flex justify-center mb-8">
						<Image 
							src="/images/logo.png" 
							alt="SmartHire Logo" 
							width={50}
							height={50}
						/>
					</div>
					{/* Heading */}
					<h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
						Join SmartHire
					</h1>
					<p className="text-gray-600 text-center mb-8">
						Create your account to get started
					</p>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Full Name */}
						<div>
							<label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
								Full Name
							</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
								placeholder="John Doe"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
								required
							/>
						</div>

						{/* Email Address */}
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="you@example.com"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
								required
							/>
						</div>

						{/* Password */}
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
								Password <span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									name="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="••••••••"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
									required
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
								>
									{showPassword ? '👁️' : '👁️‍🗨️'}
								</button>
							</div>
						</div>

						{/* Create Account Button */}
						<button
							type="submit"
							className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition duration-300 mt-8"
						>
							Create Account
						</button>
					</form>

					{/* Sign In Link */}
					<p className="text-center text-gray-600 mt-6">
						Already have an account?{' '}
						<Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">
							Sign In
						</Link>
					</p>
				</div>
			</main>
		</div>
		</>
	);
}