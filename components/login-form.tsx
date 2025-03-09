import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo1 from "../public/images/logo-1.png";
import { Logo } from "./ui/logo";
import { Heading } from "./ui/heading-a";
import { toast } from "react-toastify";

interface ILoginData {
  email: string;
  password: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: yupResolver(schema), mode: "onChange" });

  async function onSubmit(values: ILoginData): Promise<void> {
    try {
      console.log(values);
      toast.success("Login successful", {
        autoClose: 2500,
        onClose: () => router.push("/dashboard"),
      });
    } catch (error: unknown) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
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
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
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
            {...register("password")}
          />
          <div className="flex items-center justify-start">
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline capitalize text-primary-foreground"
            >
              I forgot my password!
            </a>
          </div>
          {errors.password?.message && (
            <p className="text-xs text-red-500">{errors.password?.message}</p>
          )}
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
