'use client'
import BookCard from '@/components/BookCard';
import React, { useEffect, useState } from 'react';
interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  shortDescription: string;
  description: string;
  image: string;
  price: number;
  rating?: number;
}
const AllBookPage = () => {
   const [books, setBooks] = useState<Book[]>([]);
const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
const [search, setSearch] = useState("");
const [genre, setGenre] = useState("all");
const [price, setPrice] = useState("all");
const [sort, setSort] = useState("default");
    const [loading, setLoading] = useState(true);
  useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`)
    .then((res) => res.json())
    .then((data) => {
      setBooks(data);
setFilteredBooks(data);
      setLoading(false);
    });
}, []);
useEffect(() => {
  let result = [...books];

  // Search
  if (search) {
    result = result.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Genre
  if (genre !== "all") {
    result = result.filter((book) => book.genre === genre);
  }

  // Price

  if (price === "low") {
    result = result.filter((book) => book.price <= 20);
  }

  if (price === "high") {
    result = result.filter((book) => book.price > 20);
  }

  // Sorting

  if (sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    result.sort((a, b) => (b.rating ?? 4.5) - (a.rating ?? 4.5));
  }

  if (sort === "title") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  setFilteredBooks(result);
}, [books, search, genre, price, sort]);
    return (
        <div>
          <div className="mb-10 text-center">

<h1 className="text-5xl font-bold text-[#1A365D]">
Discover Books
</h1>

<p className="mt-4 text-slate-600 max-w-2xl mx-auto">
Browse hundreds of books from different genres. Search, filter,
and discover your next favorite read.
</p>

</div>
<div className="mb-8">

<input
type="text"
placeholder="Search by title..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full rounded-xl border p-3 outline-none focus:border-[#5B21B6]"
/>

</div>
<div className="mb-10 grid gap-4 md:grid-cols-3">

<select
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
  className="rounded-xl border p-3"
>
  <option value="all">All Genres</option>
  <option value="fiction">Fiction</option>
  <option value="non-fiction">Non-Fiction</option>
  <option value="fantasy">Fantasy</option>
  <option value="mystery">Mystery</option>
  <option value="romance">Romance</option>
  <option value="history">History</option>
  <option value="programming">Programming</option>
  <option value="self-help">Self Help</option>
  <option value="others">Others</option>
</select>

<select
value={price}
onChange={(e)=>setPrice(e.target.value)}
className="rounded-xl border p-3"
>

<option value="all">All Prices</option>
<option value="low">Below $20</option>
<option value="high">$20 & Above</option>

</select>

<select
value={sort}
onChange={(e)=>setSort(e.target.value)}
className="rounded-xl border p-3"
>

<option value="default">Sort By</option>
<option value="price-low">Price Low → High</option>
<option value="price-high">Price High → Low</option>
<option value="rating">Highest Rated</option>
<option value="title">Alphabetical</option>

</select>

</div>
<p className="mb-6 text-slate-500">
Showing {filteredBooks.length} books
</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 my-8">
  {filteredBooks.map((book) => (
    <BookCard
      key={book._id}
      book={book}
    />
  ))}
</div>
        </div>
    );
};

export default AllBookPage;