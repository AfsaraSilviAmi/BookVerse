"use client";

import { useState } from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox
} from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function AddItemPage() {
  const [loading, setLoading] =useState(false);
  const { data: session } = authClient.useSession();
  const email = session?.user?.email;

  const onSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const form = e.currentTarget; // Save the form before any await
  const formData = new FormData(form);

  setLoading(true);

  try {
    const item = {
      title: formData.get("title"),
      author: formData.get("author"),
      genre: formData.get("genre"),
      shortDescription: formData.get("shortDescription"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      rating: Number(formData.get("rating")),
      image: formData.get("image")?.toString().trim() || "/default-book-cover.png",
         ownerEmail: session?.user?.email,
    };

    console.log(item);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/books`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add book.");
    }

    const data = await response.json();

    if (data.insertedId) {
      toast.success("Book added successfully!");
      form.reset(); // Works correctly now
    } else {
      toast.error("Failed to add book.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex items-center justify-center">
      <Form
        onSubmit={onSubmit}
        className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="mb-8 w-full text-center">
          <h1 className="text-3xl font-bold text-[#1A365D]">
            Add a New Book
          </h1>

          <p className="mt-2 text-default-500">
            Share your favorite book with the BookVerse community.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5">
          {/* Title */}
          <TextField isRequired name="title">
            <Label>Book Title</Label>

            <Input placeholder="Atomic Habits" />

            <FieldError />
          </TextField>
           <TextField isRequired name="author">
  <Label>Author</Label>

  <Input placeholder="James Clear" />

  <FieldError />
</TextField>

<Select isRequired name="genre">
  <Label>Genre</Label>

  <Select.Trigger>
    <Select.Value />
    <Select.Indicator />
  </Select.Trigger>

  <Select.Popover>
    <ListBox>
      <ListBox.Item id="fiction">Fiction</ListBox.Item>
      <ListBox.Item id="non-fiction">Non-Fiction</ListBox.Item>
      <ListBox.Item id="fantasy">Fantasy</ListBox.Item>
      <ListBox.Item id="mystery">Mystery</ListBox.Item>
      <ListBox.Item id="romance">Romance</ListBox.Item>
      <ListBox.Item id="history">History</ListBox.Item>
      <ListBox.Item id="programming">Programming</ListBox.Item>
      <ListBox.Item id="self-help">Self Help</ListBox.Item>
      <ListBox.Item id="others">Others</ListBox.Item>
    </ListBox>
  </Select.Popover>
</Select>
          {/* Short Description */}
          <TextField isRequired name="shortDescription">
            <Label>Short Description</Label>

            <TextArea
              placeholder="Write a short summary..."
             
            />

            <FieldError />
          </TextField>

          {/* Full Description */}
          <TextField isRequired name="description">
            <Label>Full Description</Label>

            <TextArea
              placeholder="Tell readers more about this book..."
             
            />

            <FieldError />
          </TextField>

          {/* Price */}
          <TextField isRequired name="price">
            <Label>Price ($)</Label>

            <Input
              type="number"
              placeholder="25"
            />

            <FieldError />
          </TextField>
<TextField isRequired name="rating">
  <Label>Rating</Label>

  <Input
    type="number"
    min="1"
    max="5"
    step="0.1"
    placeholder="4.8"
  />

  <FieldError />
</TextField>
          {/* Image URL */}
         <TextField
  name="image"
>
  <Label>Book Cover URL</Label>

  <Input placeholder="https://images.com/book-cover.jpg" />

  <FieldError />
</TextField>
<TextField>
<Label>User Email</Label>
<Input
  value={session?.user?.email || ""}
  readOnly
/>
</TextField>
        </div>

        <div className="mt-6 w-full">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            {loading ? "Adding Book..." : "Add Book"}
          </Button>
        </div>
      </Form>
    </div>
  );
}