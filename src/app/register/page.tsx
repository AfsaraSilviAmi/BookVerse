"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
  name: string;
  email: string;
  password: string;
  image: string;
};

      const { data, error } = await authClient.signUp.email({
  name: user.name,
  email: user.email,
  password: user.password,
  image: user.image || undefined,
});

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("Registration Successful!");
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <Form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="mb-6 w-full text-center">
          <h1 className="text-3xl font-bold text-[#1A365D]">
            Create Your Account
          </h1>

          <p className="mt-2 text-default-500">
            Join BookVerse and start your reading journey.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5">
          <TextField isRequired name="name">
            <Label>Full Name</Label>

            <Input placeholder="John Doe" />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>

            <Input placeholder="john@example.com" />

            <FieldError />
          </TextField>

<TextField
  name="image"
  type="url"
>
  <Label>Profile Image URL</Label>

  <Input placeholder="https://example.com/avatar.jpg" />

  <Description>
    Optional. Paste a direct image URL.
  </Description>

  <FieldError />
</TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (!value) return "Password is required";

              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Must contain one uppercase letter";
              }

              if (!/[a-z]/.test(value)) {
                return "Must contain one lowercase letter";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input
              placeholder="Enter your password"
              minLength={6}
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
            />

            <Description>
              Minimum 8 characters with one uppercase and one lowercase letter.
            </Description>

            <FieldError />
          </TextField>
        </div>

        <div className="mt-6 flex w-full gap-3">
          <Button
            type="submit"
            isDisabled={loading}
            className="flex-1 bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white font-semibold"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          <Button
            type="reset"
            variant="outline"
            isDisabled={loading}
            className="flex-1"
          >
            Reset
          </Button>
        </div>

        <p className="mt-5 w-full text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#008B8B] hover:underline"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}