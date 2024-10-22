"use client";
import React, { useEffect, useState } from "react";
import S1BaseLayout from "../s1-base-layout";
import DottedSeparator from "@/components/dotted-separator";
import S1FinisherCard from "@/components/s1-finisher-card";

const Page: React.FC = () => {
  const [finishers, setFinishers] = useState([]);

  useEffect(() => {
    const fetchFinishers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get-finishers");
        const data = await response.json();
        console.log("data:", data);
        setFinishers(data);
      } catch (error) {
        console.error("Error fetching finishers:", error);
      }
    };

    fetchFinishers();
  }, []);

  return (
    <S1BaseLayout>
      <div className="text-center my-8">
        <h2 className="text-5xl font-extrabold">hall of fame</h2>
      </div>
      <div className="grid justify-center grid-cols-1 justify-items-center md:grid-cols-2 gap-8 md:gap-10 md:max-w-[640px] mx-auto mb-8">
        {finishers.map((person) => (
          <S1FinisherCard
            key={person.username}
            id={person.id}
            name={person.name}
            vibe={person.vibe}
          />
        ))}
      </div>
      <DottedSeparator />
    </S1BaseLayout>
  );
};

export default Page;
