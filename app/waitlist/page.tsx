"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";

const images = ["/red.png", "/blue.png", "/yellow.png", "/green.png"];

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
      } else {
        console.error("Error submitting form:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[322px] sm:w-[386px]">
        <div className="flex">
          {images.map((src, index) => (
            <Image
              src={src}
              width={500}
              height={500}
              alt=""
              className={`w-20 sm:w-24 ${index == 0 ? "rounded-tl-xl" : ""} ${
                index == 3 ? "rounded-tr-xl" : ""
              }`}
              key={src + index}
            />
          ))}
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">devsForFun</CardTitle>
          <CardDescription>
            <span>Join the waitlist to get a reminder when we launch!</span>
            <br />
            <span>
              We did sth last time:{" "}
              <Button variant="link" className="p-0" asChild>
                <Link href="/s1">s1</Link>
              </Button>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="">
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </Button>
            {success && (
              <p className="mt-4 text-green-600">
                Thank you! We&apos;ll send you only
                <strong> one email</strong> when we launch. Share this with your
                friends too if you will!
              </p>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex sm:gap-10">
          <CardDescription>
            We won&apos;t spam you after one email unless you sign-up after the
            launch. <br />
            For queries:{" "}
            <a
              className="dark:text-white text-black"
              href="mailto:hello@devsforfun.com"
            >
              hello@devsforfun.com
            </a>
          </CardDescription>
          <ModeToggle />
        </CardFooter>
      </Card>
    </div>
  );
};

export default WaitlistForm;
