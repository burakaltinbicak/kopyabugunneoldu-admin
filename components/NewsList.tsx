"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Category {
    _id: string;
    title: string;
}

interface News {
    _id: string;
    title: string;
    status: string;
}

export default function NewsList() {
    const [news, setNews] = useState<News[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [status, setStatus] = useState("draft");

    const fetchNews = async () => {
        const res = await axios.get("http://localhost:5000/api/admin/news");
        setNews(res.data.news);
    };

    const fetchCategories = async () => {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data);
    };

    useEffect(() => {
        fetchNews();
        fetchCategories();
    }, []);

    const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

    const handleAdd = async () => {
        await axios.post("http://localhost:5000/api/news", {
            title, slug, summary, content, category, coverImage, status
        });
        setTitle("");
        setSummary("");
        setContent("");
        setCategory("");
        setCoverImage("");
        setStatus("draft");
        fetchNews();
    };

    const handleDelete = async (id: string) => {
        await axios.delete(`http://localhost:5000/api/news/${id}`);
        fetchNews();
    };

    const handleStatusToggle = async (id: string, currentStatus: string) => {
        const newStatus = currentStatus === "published" ? "draft" : "published";
        await axios.put(`http://localhost:5000/api/news/${id}`, { status: newStatus });
        fetchNews();
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Haberler</h2>

            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="font-semibold mb-3">Yeni Haber Ekle</h3>
                <input
                    type="text"
                    placeholder="Başlık"
                    className="w-full border p-2 rounded mb-2 text-gray-900"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Özet"
                    className="w-full border p-2 rounded mb-2 text-gray-900"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
                <textarea
                    placeholder="İçerik"
                    className="w-full border p-2 rounded mb-2 text-gray-900"
                    rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Kapak Görseli URL"
                    className="w-full border p-2 rounded mb-2 text-gray-900"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                />
                <select
                    className="w-full border p-2 rounded mb-2 text-gray-900"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Kategori Seç</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>{cat.title}</option>
                    ))}
                </select>
                <select
                    className="w-full border p-2 rounded mb-4 text-gray-900"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="draft">Taslak</option>
                    <option value="published">Yayında</option>
                </select>
                <button
                    onClick={handleAdd}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Ekle
                </button>
            </div>

            <div className="bg-white rounded-lg shadow">
                {news.map((item) => (
                    <div
                        key={item._id}
                        className="flex justify-between items-center p-4 border-b"
                    >
                        <div>
                            <p className="font-semibold text-gray-900">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.status === "published" ? "Yayında" : "Taslak"}</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleStatusToggle(item._id, item.status)}
                                className="text-blue-500 hover:text-blue-700 text-sm"
                            >
                                {item.status === "published" ? "Taslağa Al" : "Yayınla"}
                            </button>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Sil
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}