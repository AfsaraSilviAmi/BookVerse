'use client'
import BookCard from '@/components/BookCard';
import BookLoader from '@/components/BookLoader';
import { Pagination } from '@heroui/react';
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
const [currentPage, setCurrentPage] = useState(1);
const booksPerPage = 8;
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
const totalPages = Math.ceil(
  filteredBooks.length / booksPerPage
);

const currentBooks = filteredBooks.slice(
  (currentPage - 1) * booksPerPage,
  currentPage * booksPerPage
);
const startBook =
  filteredBooks.length === 0
    ? 0
    : (currentPage - 1) * booksPerPage + 1;

const endBook = Math.min(
  currentPage * booksPerPage,
  filteredBooks.length
);
useEffect(() => {
  setCurrentPage(1);
}, [search, genre, price, sort]);
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

if (loading) {
  return <BookLoader />;
}
    return (
        <div className='w-11/12 mx-auto'>
          <div className="mb-10 text-center">

<h1 className="text-5xl font-bold text-[#1A365D] my-5">
Discover Books
</h1>

<p className="mt-4 text-slate-600 max-w-2xl mx-auto">
Browse books from different genres. Search, filter,
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
<div className="mb-6 flex items-center justify-between text-slate-500">
  <p>
    Showing <span className="font-semibold">{startBook}</span>–
    <span className="font-semibold">{endBook}</span> of{" "}
    <span className="font-semibold">{filteredBooks.length}</span> books
  </p>

  <p>
    Page <span className="font-semibold">{currentPage}</span> of{" "}
    <span className="font-semibold">{totalPages || 1}</span>
  </p>
</div>
            {currentBooks.length === 0 ? (
  <div className="py-16 text-center">
    <h2 className="text-2xl font-semibold">
      No books found
    </h2>
    <p className="text-slate-500">
      Try changing your filters or search.
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 my-8">
    {currentBooks.map((book) => (
      <BookCard
        key={book._id}
        book={book}
      />
    ))}
  </div>
)}
<div className="my-10">
  {totalPages > 1 && (
    <Pagination className="justify-center">
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={currentPage === 1}
            onPress={() => setCurrentPage((p) => p - 1)}
          >
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item key={page}>
            <Pagination.Link
              isActive={page === currentPage}
              onPress={() => setCurrentPage(page)}
            >
              {page}
            </Pagination.Link>
          </Pagination.Item>
        ))}

        <Pagination.Item>
          <Pagination.Next
            isDisabled={currentPage === totalPages}
            onPress={() => setCurrentPage((p) => p + 1)}
          >
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  )}
</div>
        </div>
    );
};

export default AllBookPage;