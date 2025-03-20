"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LeadsInfo from "./about-component";
import EmeralSpark from "../../../public/emraldspark.png";
import Goldlight from "../../../public/goldlight.png";
import Moonwind from "../../../public/moonwind.png";
import ScarletNova from "../../../public/scarletnova.png";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import S1BaseLayout from "../s1-base-layout";
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export type Leads = {
  id: number;
  name: string;
  linkedInURL: string;
  websiteURL: string;
  vibe: string;
};

const Page: React.FC = () => {
  const [leads, setLeads] = useState<Leads[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
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
    <S1BaseLayout>
      <div className="min-h-[70vh] border-b border-dashed pb-8">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="flex font-bold flex-col items-center justify-center mx-auto mt-4 p-2 w-1/2 max-lg:w-3/6 max-sm:w-3/4">
              <h2 className="text-5xl font-extrabold">about us</h2>
              <div className="text-lg font-normal text-center my-4 max-lg:text-lg max-sm:text-sm">
                <p className="mb-4 text-muted-foreground">
                  devsForFun is a program created by four incredible clans of
                  computer wizards (or developer student groups, as they used to
                  call themselves).
                </p>
                <p className="text-muted-foreground">
                  this incredibly tough, yet rewarding path has been designed to
                  set you on a path to become a computer warrior (developer) of
                  the future.
                </p>
                <Button variant="outline" className="rounded-full mt-4" asChild>
                  <Link href="/s1">visit s1</Link>
                </Button>
                <div className="mt-3">
                  <p className="text-muted-foreground">
                    follow <span className="text-foreground">devsForFun</span>{" "}
                    on our socials for future updates:{" "}
                  </p>
                  <div className="mt-4 space-x-4">
                    <Button variant="outline" className="rounded-full" asChild>
                      <Link href="https://x.com/devsForFun">
                        <TwitterLogoIcon />
                      </Link>
                    </Button>
                    <Button variant="outline" className="rounded-full" asChild>
                      <Link href="https://www.linkedin.com/company/devsforfun/">
                        <LinkedInLogoIcon />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center gap-4 flex-wrap">
              {leads.map((lead) => (
                <LeadsInfo
                  key={lead.id}
                  name={lead.name}
                  linkedInURL={lead.linkedInURL}
                  websiteURL={lead.websiteURL}
                  imageURL={
                    lead.vibe === "emeraldspark"
                      ? EmeralSpark
                      : lead.vibe === "goldlight"
                        ? Goldlight
                        : lead.vibe === "moonwind"
                          ? Moonwind
                          : ScarletNova
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
    </S1BaseLayout>
  );
};

export default Page;
