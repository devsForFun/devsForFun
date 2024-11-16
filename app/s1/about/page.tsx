import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <>
      <div className="flex text-6xl font-bold flex-col items-center justify-center mx-auto my-6 p-2 border-dashed border-gray-600 border-[0.01rem] w-1/2 max-lg:text-5xl max-lg:w-3/6 max-sm:w-3/4 max-sm:text-3xl">
        <h2 className="p-4"> about us</h2>
        <div className="text-gray-400 text-lg font-normal text-center my-4 max-lg:text-lg max-sm:text-sm">
          <p className="mb-4">
            devsForFun is a program created by four incredible clans of computer
            wizards (or developer student groups, as they call themselves).
          </p>
          <p>
            this incredibly tough, yet rewarding path has been designed to set
            you on a path to become a computer warrior (developer) of the
            future.
          </p>
          <button className="hover:text-blue-400 hover:border-blue-400 hover:transition hover:ease-in hover:delay-100 px-2 border-[0.01rem] rounded-full border-white mt-4 text-white">
            <Link href="/s1" target="_blank">
              visit s1
            </Link>
          </button>
          <div className="mt-3">
            <p>follow us on socials: </p>
            <p>
              <a href="https://x.com/devsForFun">
                <i className="hover:transition hover:ease-in hover:delay-100 hover:text-white"></i>
              </a>
              <a href="https://www.linkedin.com/company/devsforfun/">
                <i className="hover:transition hover:ease-in hover:delay-100 hover:text-white"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
