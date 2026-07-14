'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageBooks = () => {
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
const { data: session, isPending } = authClient.useSession();
    const [books, setBooks] = useState<Book[]>([]);
const [loading, setLoading] = useState(true);
const handleDelete = async (id: string) => {
  try {
    const { data: tokenData } = await authClient.token();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/books/${id}?email=${session?.user?.email}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      }
    );

    const data = await response.json();

    if (data.deletedCount > 0) {
      setBooks((prev) => prev.filter((book) => book._id !== id));
      toast.error("Book deleted succesfully!!")
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  const fetchBooks = async () => {
    if (!session?.user?.email) return;

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/my-books?email=${session.user.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      }
    );

    const data = await res.json();

    setBooks(data);
    setLoading(false);
  };

  fetchBooks();
}, [session]);
if (loading || isPending) {
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 h-10 w-72 animate-pulse rounded-xl bg-slate-200" />
        <div className="mx-auto h-5 w-80 animate-pulse rounded bg-slate-200" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm"
          >
            <div className="h-72 animate-pulse bg-slate-200" />

            <div className="space-y-4 p-5">
              <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />

              <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />

              <div className="flex justify-between">
                <div className="h-7 w-24 animate-pulse rounded-full bg-slate-200" />
                <div className="h-6 w-14 animate-pulse rounded bg-slate-200" />
              </div>

              <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />

              <div className="flex gap-3 pt-2">
                <div className="h-11 flex-1 animate-pulse rounded-full bg-slate-200" />
                <div className="h-11 flex-1 animate-pulse rounded-full bg-slate-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
    return (
        <div className='w-11/12 mx-auto'>
            <div className="my-10 text-center">
  <h1 className="text-5xl font-bold text-[#1A365D]">
    Manage Books
  </h1>

  <p className="mt-4 text-slate-600">
    View and manage every book in your library.
  </p>
</div>
<div className="mb-6">
   
  <p className="text-slate-600">
    Total Books:
    <span className="ml-2 font-semibold">
      {books.length}
    </span>
  </p>
   {books.length === 0 && (
  <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 py-24 text-center">
    <div className="text-7xl">📚</div>

    <h2 className="mt-6 text-2xl font-bold text-[#1A365D]">
      No Books Yet
    </h2>

    <p className="mt-2 text-slate-500">
      Start building your personal library by adding your first book.
    </p>

    <Link
      href="/items/add"
      className="mt-8 rounded-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] px-8 py-3 font-semibold text-white transition hover:scale-105"
    >
      Add Your First Book
    </Link>
  </div>
)}
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5">
  {books.map((book) => (
    <div
      key={book._id}
       className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="overflow-hidden">
  <Image
    src={book.image}
    alt={book.title}
    width={1000}
    height={1000}
    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 rounded-2xl"
  />
</div>

      <div className="space-y-3 p-5">
        <div>
    <h2 className="line-clamp-1 text-xl font-bold text-[#1A365D]">
      {book.title}
    </h2>

    <p className="mt-1 text-sm text-slate-500">
      by {book.author}
    </p>
  </div>

  <div className="flex items-center justify-between">

    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
      {book.genre}
    </span>

    <span className="text-lg font-bold text-[#008B8B]">
      ${book.price}
    </span>

  </div>

  <div className="flex items-center justify-between text-sm">

    <span className="text-amber-500 font-medium">
      ⭐ {book.rating || 0}/5
    </span>

  </div>

        <div className="mt-5 flex gap-3">
        <Link
  href={`/items/${book._id}`}
  className="flex-1 rounded-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] py-2 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
>
  View
</Link>

         <AlertDialog>
  <Button
  variant='danger-soft'
  className="flex-1 rounded-full py-3 font-semibold transition-all duration-300 hover:bg-red-300 hover:shadow-lg"
>
  Delete
</Button>

  <AlertDialog.Backdrop>
    <AlertDialog.Container>
      <AlertDialog.Dialog className="sm:max-w-[400px]">

        <AlertDialog.CloseTrigger />

        <AlertDialog.Header>
          <AlertDialog.Icon status="danger" />

          <AlertDialog.Heading>
            Delete "{book.title}"?
          </AlertDialog.Heading>

        </AlertDialog.Header>

        <AlertDialog.Body>
          This action cannot be undone.
        </AlertDialog.Body>

        <AlertDialog.Footer>

          <Button
            slot="close"
            variant="tertiary"
          >
            Cancel
          </Button>

          <Button
            slot="close"
            variant="danger-soft"
            onPress={() => handleDelete(book._id)}
          >
            Delete
          </Button>

        </AlertDialog.Footer>

      </AlertDialog.Dialog>
    </AlertDialog.Container>
  </AlertDialog.Backdrop>
</AlertDialog>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
    );
};

export default ManageBooks;