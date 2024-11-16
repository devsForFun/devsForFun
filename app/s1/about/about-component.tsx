import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface LeadsInfoProps {
  name: string;
  imageURL: StaticImageData;
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
    <div className="flex flex-col items-center gap-2">
      <Image
        src={imageURL}
        alt={name}
        className="rounded-2xl"
        width={150}
        height={150}
      />
      <Link
        href={linkedInURL}
        target="_blank"
        className="hover:text-blue-400 hover:border-blue-400 hover:transition hover:ease-in hover:delay-100 mt-1"
      >
        LinkedIn profile
      </Link>
      <Link
        href={websiteURL}
        target="_blank"
        className="hover:text-blue-400 hover:border-blue-400 hover:transition hover:ease-in hover:delay-100"
      >
        visit here
      </Link>
    </div>
  );
};

export default LeadsInfo;
