import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo1 from "../public/images/logo-1.png";
import { Logo } from "./ui/logo";
import { Heading } from "./ui/heading-a";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="w-full flex justify-center items-center">
        <Logo image={Logo1} />
      </div>
      <Heading
        heading="Welcome back, Ali Riaz 🙇🏾‍♀️"
        rider="Login to access your Uifry account"
      />
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            required
            placeholder="**********"
            isPassword
          />
          <div className="flex items-center justify-start">
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline capitalize text-primary-foreground"
            >
              I forgot my password!
            </a>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full"
          variant={"default"}
          size={"xl"}
        >
          Login
        </Button>
      </div>
      <div className="text-center text-sm capitalize">
        Not Ali Riaz?
        <a
          href="#"
          className="underline underline-offset-4 text-primary-foreground mx-2"
        >
          Sign up to continue
        </a>
      </div>
    </form>
  );
}
