"use client";
import { LoginForm } from "@/components/login-form";
import CoverImageSection from "./cover-image";

export default function LoginPage() {
  return (
    <div className="grid h-screen max-h-[1024px] md:grid-cols-2 overflow-hidden">
      <div className="p-6 md:p-10 bg-primary">
        <div className="flex flex-col flex-1 items-center md:items-end justify-center md:justify-start gap-5 md:pr-8 md:pt-24">
          <div className="w-full max-w-[420px] md:px-3">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col gap-4 p-6 md:p-10 bg-background relative">
        <CoverImageSection />
      </div>
    </div>
  );
}
