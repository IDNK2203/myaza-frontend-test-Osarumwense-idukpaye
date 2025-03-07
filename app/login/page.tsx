"use client";

import Image from "next/image";
import Logo1 from "../../public/images/logo-1.png";
import { LoginForm } from "@/components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-primary">
        <div className="flex flex-col flex-1 items-center justify-center gap-5">
          <Logo />
          <div className="w-full max-w-md md:px-3">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <div className="w-full flex justify-center max-w-28">
      <Link href="#" className="flex items-center gap-2 font-medium">
        <Image alt="Brand Logo" src={Logo1} className="w-full" />{" "}
      </Link>
    </div>
  );
};
