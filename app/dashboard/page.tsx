import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-8">Admin Paneli</h1>
            <div className="flex gap-4">
                <Link
                    href="/dashboard/news"
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg w-48 text-center font-semibold"
                >
                    Haberler
                </Link>
                <Link
                    href="/dashboard/categories"
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg w-48 text-center font-semibold"
                >
                    Kategoriler
                </Link>
            </div>
        </div>
    );
}