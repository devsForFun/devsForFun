"use client";
import { useEffect, useState } from "react";
import S1BaseLayout from "../../s1-base-layout";
import DottedSeparator from "@/components/dotted-separator";
import { ProfileCard } from "@/components/profile-card";
import LoadingSpinner from "@/components/ui/loading-spinner";

export type UserDetails = {
  id: number;
  name: string;
  gender: string;
  username: string;
  country: string;
  linkedin: string;
  github: string;
  club: string;
  vibe: string;
  pd2repo: string;
  pd2site: string;
  pd1repo: string;
  pd1site: string;
  rdcrepo: string;
  rdcsite: string;
  d14repo: string;
  d14site: string;
  d12repo2: string;
  d12repo1: string;
  d12site2: string;
  d12site1: string;
};

export default function Page({ params }: { params: { username: string } }) {
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const [loading, setLoading] = useState(true);
  console.log(typeof userDetails);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `/api/get-userprofile?username=${params.username}`,
        );
        const data = await response.json();
        console.log("data:", data);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching finishers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [params.username]);
  return (
    <S1BaseLayout>
      {loading ? (
        <LoadingSpinner size="70vh" />
      ) : (
        <ProfileCard
          userdetails={
            userDetails
              ? userDetails
              : {
                  id: 0,
                  name: "",
                  gender: "",
                  username: "",
                  country: "",
                  linkedin: "",
                  github: "",
                  club: "",
                  vibe: "",
                  pd2repo: "",
                  pd2site: "",
                  pd1repo: "",
                  pd1site: "",
                  rdcrepo: "",
                  rdcsite: "",
                  d14repo: "",
                  d14site: "",
                  d12repo2: "",
                  d12repo1: "",
                  d12site2: "",
                  d12site1: "",
                }
          }
        />
      )}

      <DottedSeparator />
    </S1BaseLayout>
  );
}
