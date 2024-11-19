"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LeadsInfo from "./about-component";
import EmeralSpark from "../../../public/emraldspark.png";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";

export type Leads = {
  id: number;
  name: string;
  linkedInURL: string;
  websiteURL: string;
};

const Page: React.FC = () => {
  const [leads, setLeads] = useState<Leads[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        // Unexpected error here
        const response = await fetch("/api/get-leads-info");
        const data = await response.json();
        console.log("data: ", data);
        setLeads(data);
      } catch (error) {
        console.log("Error fetching leads info: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

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
          <Button variant="outline" disabled className="rounded-full mt-2">
            <Link href="/s1" target="_blank">
              visit s1
            </Link>
          </Button>
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
      <div className="flex flex-col justify-center">
        {loading ? (
          <LoadingSpinner size="55vh" />
        ) : (
          <div className="flex flex-row gap-1 items-center justify-center">
            {leads.map((lead) => (
              <LeadsInfo
                key={lead.id}
                name={lead.name}
                linkedInURL={lead.linkedInURL}
                websiteURL={lead.websiteURL}
                imageURL={EmeralSpark}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
