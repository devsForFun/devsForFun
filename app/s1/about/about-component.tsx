import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

// gonna change the imageURL props soon
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
      <h3 className="text-md font-bold">{name}</h3>
      <Button variant="outline" className="rounded-full" asChild>
        <Link href={linkedInURL} target="_blank">
          LinkedIn profile
        </Link>
      </Button>
      <Button variant="outline" className="rounded-full" asChild>
        <Link href={websiteURL} target="_blank">
          visit here
        </Link>
      </Button>
    </div>
  );
};

export default LeadsInfo;
