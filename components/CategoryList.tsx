"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Category {
    _id: string;
    title: string;
    slug: string;
}

export default function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [title, setTitle] = useState("");

    const fetchCategories = async () => {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleAdd = async () => {
        const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        const order = categories.length + 1;
        await axios.post("http://localhost:5000/api/categories", { title, slug, description: title, order });
        setTitle("");
        fetchCategories();
    };

    const handleDelete = async (id: string) => {
        await axios.delete(`http://localhost:5000/api/categories/${id}`);
        fetchCategories();
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Kategoriler</h2>

            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="font-semibold mb-3">Yeni Kategori Ekle</h3>
                <input
                    type="text"
                    placeholder="Kategori adı"
                    className="w-full border p-2 rounded mb-4 text-gray-900"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Ekle
                </button>
            </div>

            <div className="bg-white rounded-lg shadow">
                {categories.map((category) => (
                    <div
                        key={category._id}
                        className="flex justify-between items-center p-4 border-b"
                    >
                        <p className="font-semibold text-gray-900">{category.title}</p>
                        <button
                            onClick={() => handleDelete(category._id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Sil
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}