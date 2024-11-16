import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LeadsInfoProps {
  name: string;
  imageURL: string;
  linkedInURL: string;
  websiteURL: string;
}

const LeadsInfo: React.FC<LeadsInfoProps> = ({
  name,
  imageURL,
  linkedInURL,
  websiteURL,
}) => {
  return (
    <div className="">
      <Image src={imageURL} alt={name} className="" width={100} height={100} />
      <Link href={linkedInURL} target="_blank">
        LinkedIn profile
      </Link>
      <Link href={websiteURL} target="_blank">
        visit here
      </Link>
    </div>
  );
};

export default LeadsInfo;
