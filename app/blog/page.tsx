"use client";

import Image from "next/image";
import HeroShowcase from "../components/HeroShowcase";
import Pagination from "../components/Pagination";
import { useState } from "react";

// Mock data para os posts
const blogPosts = [
  {
    id: 1,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    comments: 2,
    date: "20 SET",
    image: "/crianças/crianca1.jpg",
    description:
      "Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor.",
  },
  {
    id: 2,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    comments: 2,
    date: "20 SET",
    image: "/crianças/crianca2.jpg",
    description:
      "Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor.",
  },
  {
    id: 3,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    comments: 2,
    date: "20 SET",
    image: "/crianças/crianca3.jpg",
    description:
      "Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor.",
  },
  {
    id: 4,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    comments: 2,
    date: "20 SET",
    image: "/crianças/crianca4.jpg",
    description:
      "Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor.",
  },
  {
    id: 5,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    comments: 2,
    date: "20 SET",
    image: "/crianças/crianca5.jpg",
    description:
      "Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor. Neque porro est qui dolorem ipsum quia quaed inventor.",
  },
];

const latestPosts = [
  {
    id: 1,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    image: "/crianças/crianca1.jpg",
  },
  {
    id: 2,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    image: "/crianças/crianca2.jpg",
  },
  {
    id: 3,
    title: "5 Dicas para fazer uma boa redação",
    author: "Prof. Antônio",
    image: "/crianças/crianca3.jpg",
  },
];

const categories = [
  { name: "Redação", count: 6 },
  { name: "Matemática", count: 6 },
  { name: "Português", count: 6 },
  { name: "ENEM", count: 6 },
  { name: "Química", count: 6 },
];

const tags = ["Ciências", "ENEM", "Matemática", "Química", "Português", "Redação"];

const comments = [
  "Neque Porro Est Qui Dolorem Ipsum Quia Quaed Inventor",
  "Neque Porro Est Qui Dolorem Ipsum Quia Quaed Inventor",
  "Neque Porro Est Qui Dolorem Ipsum Quia Quaed Inventor",
];

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = 3;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-[#F5F7FF] min-h-screen">
      <HeroShowcase
        backgroundImage="/escola.jpg"
        eyebrow=""
        title="Nosso Blog"
      />

      {/* Blog Content Section */}
      <section className="py-12 bg-[#F5F7FF]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Filters */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#001F63] mb-4">
                  Pesquise aqui
                </h3>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Pesquise aqui"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C437F]"
                  />
                  <button className="w-10 h-10 bg-[#1C437F] text-white rounded-lg flex items-center justify-center hover:bg-[#1C437F]/90">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 19L14.65 14.65"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Latest Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#001F63] mb-4">
                  Últimos Posts
                </h3>
                <div className="space-y-4">
                  {latestPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">
                          Por: {post.author}
                        </p>
                        <h4 className="text-sm font-semibold text-[#001F63] line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#001F63] mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-600 hover:text-[#1C437F] transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#001F63] mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        tag === "ENEM"
                          ? "bg-[#1C437F] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#001F63] mb-4">
                  Comentários
                </h3>
                <div className="space-y-3">
                  {comments.map((comment, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#1C437F] mt-1 flex-shrink-0"
                      >
                        <path
                          d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C8.55228 16 9 15.5523 9 15C9 14.4477 8.55228 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.10457 13.6569 10.1214 13.0711 10.9497C12.4853 11.7781 11.6569 12.4183 10.6569 12.8284C10.1046 13.0386 9.55228 13.4477 9.55228 14C9.55228 14.5523 10 15 10.5523 15C11.6569 15 12.6569 14.6569 13.4853 14.0711C14.3137 13.4853 14.9497 12.6569 15.364 11.6569C15.7781 10.6569 16 9.55228 16 8C16 3.58172 12.4183 0 8 0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">{comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Column - Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#1C437F] text-white px-4 py-2 rounded-lg font-semibold">
                      {post.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>Por: {post.author}</span>
                      <span>{post.comments} Comentários</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#001F63] mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <button className="bg-[#1C437F] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#1C437F]/90 transition-colors">
                      Leia Mais
                    </button>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <div className="pt-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={TOTAL_PAGES}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

