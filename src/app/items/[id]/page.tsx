"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  shortDescription: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

import { useParams } from "next/navigation";

export default function BookDetails() {
  const params = useParams();
  const id = params.id as string;
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books/${id}`)
    .then((res) => res.json())
    .then((data) => setBook(data));
}, [id]);

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-slate-500">Loading book...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-6">

        {/* Top Section */}
        <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2">

          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative aspect-[2/3] w-72 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Main Info */}
          <div className="flex flex-col justify-center">

            <span className="mb-3 w-fit rounded-full bg-[#E6FFFA] px-4 py-1 text-sm font-medium text-[#008B8B]">
              {book.genre}
            </span>

            <h1 className="text-4xl font-bold text-[#1A365D]">
              {book.title}
            </h1>

            <p className="mt-2 text-lg text-slate-600">
              by <span className="font-semibold">{book.author}</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-6">

              <div>
                <p className="text-sm text-slate-500">Price</p>
                <p className="text-2xl font-bold text-[#5B21B6]">
                  ${book.price}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Rating</p>
                <p className="text-2xl font-bold text-yellow-500">
                  ⭐ {book.rating || 4.5}
                </p>
              </div>

            </div>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              {book.shortDescription}
            </p>

            <div className="mt-8">
              <Link href="/items">
                <Button className="bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white">
                  ← Back to Books
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* Description */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-5 text-2xl font-bold text-[#1A365D]">
            About this Book
          </h2>

          <p className="leading-8 text-slate-700">
            {book.description}
          </p>

        </div>

        {/* Book Information */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold text-[#1A365D]">
            Book Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <p className="text-sm text-slate-500">Author</p>
              <p className="font-semibold">{book.author}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Genre</p>
              <p className="font-semibold">{book.genre}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Price</p>
              <p className="font-semibold">${book.price}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Rating</p>
              <p className="font-semibold">⭐ {book.rating || 45}</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}