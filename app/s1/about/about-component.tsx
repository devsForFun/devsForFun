import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { GlobeIcon } from "@radix-ui/react-icons";
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
      <h3 className="text-md font-bold max-w-[150px] truncate">{name}</h3>
      <Button variant="outline" className="rounded-full" size="sm" asChild>
        <Link href={linkedInURL} target="_blank">
          LinkedIn profile
        </Link>
      </Button>
      <Button variant="outline" className="rounded-full" size="sm" asChild>
        <Link href={websiteURL} target="_blank" className="flex items-center gap-2">
          <GlobeIcon className="w-4 h-4" />
          Website
        </Link>
      </Button>
    </div>
  );
};

export default LeadsInfo;
