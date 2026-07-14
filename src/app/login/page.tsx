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

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 if (!email.trim()) {
  toast.error("Email is required");
  return;
}

if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  toast.error("Please enter a valid email address");
  return;
}
  if (!password) {
    toast.error("Password is required");
    return;
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters");
    return;
  }
    setLoading(true);

    try {
     const { data, error } = await authClient.signIn.email({
  email,
  password,
});
   
      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("Login Successful!");
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
            Welcome Back
          </h1>

          <p className="mt-2 text-default-500">
            Sign in to continue to BookVerse.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5">
          <TextField
            isRequired
            name="email"
            type="email"
          >
            <Label>Email</Label>

           <Input
  id="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="john@example.com"
/>

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            
          >
            <Label>Password</Label>

            <Input
  id="password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Enter your password"
/>

            <Description>
              Enter the password associated with your account.
            </Description>

            <FieldError />
          </TextField>
        </div>

        <div className="mt-6 flex w-full flex-col gap-3">
          <Button
            type="submit"
            isDisabled={loading}
            className="w-full bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] text-white font-semibold"
          >
            {loading ? "Signing In..." : "Login"}
          </Button>
<Button
  variant="outline"
  onPress={() => {
    setEmail("demo@bookverse.com");
    setPassword("Demo12345");
  }}
>
  Fill Demo Credentials
</Button>
        </div>


        <p className="mt-5 w-full text-center text-sm">
          Do not have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-[#008B8B] hover:underline"
          >
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
}