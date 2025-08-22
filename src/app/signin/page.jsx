"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
    const router = useRouter();
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const newErrors = {};
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

        if (!password) newErrors.password = "Password is required";
        else if (password.length < 8)
            newErrors.password = "Must be at least 8 characters";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                Swal.fire({
                    icon: "error",
                    title: "unauthenticated",
                    text: "Invalid email or password. Please try again.",
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push("/");
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                text: "Please try again later.",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-6">Log In Now</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="Email"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input input-bordered w-full"
                                    placeholder="Password"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            <div className="pt-2">
                                <button type="submit" className="btn btn-primary w-full">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <a className="link link-hover text-sm cursor-pointer">
                            Forgot password?
                        </a>
                    </div>

                    <div className="divider">OR</div>

                    <p className="text-center">
                        <small>New to this website? </small>
                        <Link href="/register" className="btn btn-link p-0 ml-1">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
