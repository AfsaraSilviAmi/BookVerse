import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function BookCard({ book }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Book Cover */}
      <div className="relative mx-auto mt-6 aspect-[2/3] w-40 overflow-hidden rounded-lg shadow-md">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-1 text-xl font-bold text-[#1A365D]">
          {book.title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          by {book.author}
        </p>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="rounded-full bg-[#E0F7FA] px-3 py-1 text-[#008B8B]">
            {book.genre}
          </span>

          <span className="font-semibold text-amber-500">
            ⭐ {book.rating || 4.5}
          </span>
        </div>

        <p className="mt-4 line-clamp-3 flex-1 text-sm text-slate-600">
          {book.shortDescription}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-[#5B21B6]">
            ${book.price}
          </span>

          <Link href={`/items/${book._id}`}>
            <Button className="bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}