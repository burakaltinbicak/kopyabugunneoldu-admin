"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (
            username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
            password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        ) {
            localStorage.setItem("isAdmin", "true");
            router.push("/dashboard");
        } else {
            setError("kullanini adi veya şifre yanliş");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Admin Girişi</h1>

                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                )}

                <input
                    type="text"
                    placeholder="Kullanici adi"
                    className="w-full border p-2 rounded mb-4 text-gray-900"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    className="w-full border p-2 rounded mb-6 text-gray-900"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Giriş Yap
                </button>
            </div>
        </div>
    );
}

