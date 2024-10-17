import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Castle } from "lucide-react";
import DottedSeparator from "@/components/dotted-separator";
import { Badge } from "@/components/ui/badge";

const images = ["/red.png", "/blue.png", "/yellow.png", "/green.png"];

const Page: React.FC = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex flex-wrap-reverse justify-center p-8 lg:justify-evenly items-center h-[90vh]">
        <div className="mt-8 w-min">
          {/* heading */}
          <h2 className="text-6xl font-extrabold xl:text-7xl">
            try to learn how to code for 3 weeks. <br /> you in?
          </h2>
          {/* badges */}
          <div className="mt-8 flex gap-4">
            <Badge
              className="border-dashed rounded-full border-green-500 bg-green-500/20 text-green-500"
              variant="outline"
            >
              free
            </Badge>
            <Badge
              className="border-dashed rounded-full border-red-500 bg-red-500/20 text-red-500"
              variant="outline"
            >
              s1 is over
            </Badge>
          </div>
          {/* cta buttons */}
          <div className="my-6 flex gap-8">
            <Button
              className="text-2xl font-extrabold rounded-full sm:text-3xl sm:px-6 sm:py-6"
              disabled
            >
              i&apos;m in
            </Button>
            <Button
              className="text-2xl font-extrabold rounded-full sm:text-3xl sm:px-6 sm:py-6"
              variant="outline"
              asChild
            >
              <Link href="/s1/hall-of-fame">
                <Castle className="mr-4" /> s1 hall of fame
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex lg:grid grid-cols-2 h-max">
          {images.map((src, index) => (
            <Image
              src={src}
              width={500}
              height={500}
              alt=""
              className={`w-20 sm:w-36 lg:w-52 xl:w-72`}
              key={src + index}
            />
          ))}
        </div>
      </div>

      <DottedSeparator />
      {/* how-does-it-work section */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between">
        {/* image used to goes here */}
        <Image
          alt=""
          src="/howdoesitwork.png"
          width={700}
          height={1200}
          className="basis-full w-full h-52 object-cover object-bottom sm:border-r sm:border-dashed sm:basis-0 sm:w-64 sm:h-96 md:w-[500px] md:h-[600px] lg:h-screen"
        />
        <div className="w-full">
          <div className="p-8 mx-auto max-w-[500px] lg:max-w-[640px] ">
            <h2 className="text-4xl font-extrabold lg:text-6xl">
              how does it work?
            </h2>
            {/* badges */}
            <div className="mt-4 flex gap-4">
              <Badge
                className="border-dashed rounded-full border-green-500 bg-green-500/20 text-green-500"
                variant="outline"
              >
                beginner
              </Badge>
              <Badge
                className="border-dashed rounded-full border-yellow-500 bg-yellow-500/20 text-yellow-500"
                variant="outline"
              >
                14 hours/week
              </Badge>
              <Badge
                className="border-dashed rounded-full border-red-500 bg-red-500/20 text-red-500"
                variant="outline"
              >
                level:hard
              </Badge>
            </div>
            {/* content */}
            <div className="text-muted-foreground mt-4 lg:text-xl">
              <p>
                7 classes, each followed by a day for practice. you&apos;ll
                build a cool little project at the end.
              </p>
              <p className="mt-2 mb-4">
                week 1: intro to programming <br />
                week 2: use what you&apos;ve learned <br />
                week 3: do it yourself
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full text-lg font-bold"
              asChild
            >
              <Link href="/s1/curriculum">open full plan</Link>
            </Button>
          </div>
        </div>
      </div>

      <DottedSeparator />
      {/* you-can-do-it section */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between">
        <div className="w-full">
          <div className="p-8 mx-auto max-w-[500px] lg:max-w-[640px]">
            <h2 className="text-4xl font-extrabold lg:text-6xl">
              you can do this!
            </h2>
            <div className="text-muted-foreground mt-4 lg:text-xl">
              <p className="pb-2 text-muted-foreground">
                you might want a high-paying tech job or maybe work at your own
                schedule.
              </p>
              <p className="pb-2 text-muted-foreground">
                all it takes is to make a solid start in coding. you may have
                tried it before and felt like this was too hard, or it
                wasn&apos;t for you, etc.
              </p>
              <p className="pb-2 text-muted-foreground">
                how about giving it one last shot? not saying it&apos;s easy
                but, if you make it, nothing can stop you after this!
              </p>
              <p className="pb-2 text-muted-foreground">
                let this be your best shot ever! you got this!
              </p>
            </div>
          </div>
        </div>
        {/* image used to go here */}
        <Image
          alt=""
          src="/youcandothis.png"
          width={700}
          height={1200}
          className="basis-full w-full h-52 object-cover object-bottom sm:border-l sm:border-dashed sm:basis-0 sm:w-64 sm:h-96 md:w-[500px] md:h-[600px] lg:h-screen"
        />
      </div>

      <DottedSeparator />
      {/* disclaimer */}
      <div className="p-8 text-center max-w-[520px] border border-dashed mx-auto my-10 md:text-2xl md:max-w-[768px]">
        <h2 className="text-3xl font-extrabold border border-dashed w-fit mx-auto rounded-full py-2 px-6 mb-4 text-red-500 border-red-500 md:text-4xl">
          disclaimer
        </h2>
        <p className="text-muted-foreground">
          this program will not make you a professional developer or a
          freelancer! this will only teach how to start, understand, write, and
          use some real developer tools for coding so that you can continue your
          coding journey without feeling intimidated.
        </p>
      </div>

      {/* cant-follow-live */}
      <div className="p-8 text-center max-w-[520px] border border-dashed mx-auto my-10 md:text-2xl md:max-w-[768px]">
        <h2 className="text-3xl font-extrabold mx-auto mb-6 md:text-5xl">
          can&apso;t follow live? <br /> no problem!
        </h2>
        <p className="text-muted-foreground">
          you can register until 3 days from the start date and still submit
          your updates, get your doubts answered over email, and submit the
          final project
        </p>
      </div>

      <DottedSeparator />
      {/* what-happens-next */}
      <div className="text-center bg-[url('/whathappensnext.png')] bg-no-repeat bg-cover bg-bottom ">
        <div className="py-20 backdrop-brightness-25">
          <h2 className="text-4xl font-extrabold md:text-6xl">
            what happens next?
          </h2>
          <p className="text-muted-foreground mt-6 md:text-2xl">
            stick with us, we&apos;ll tell you soon...
          </p>
        </div>
      </div>

      <DottedSeparator />
    </>
  );
};

export default Page;
