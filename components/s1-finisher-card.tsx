import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const S1FinisherCard = ({
  name,
  vibe,
  username,
}: {
  name: string;
  vibe: string;
  username: string;
}) => {
  return (
    <Card className={`hover:border-${vibe}-faded w-[300px] flex items-center`}>
      <CardHeader className="p-2">
        <Image
          src={`/${vibe}.png`}
          width={100}
          height={100}
          alt=""
          className="border rounded-full mx-auto min-w-[80px]"
        />
      </CardHeader>
      <CardContent className="p-2">
        <span className="text-xl overflow-hidden whitespace-nowrap text-ellipsis block mb-2 max-w-[150px]">
          {name}
        </span>
        <Link href={`/s1/hall-of-fame/${username}`}>
          <Badge className={`rounded-full hover:bg-${vibe}`}>
            View Profile
          </Badge>
        </Link>
      </CardContent>
    </Card>
  );
};

export default S1FinisherCard;
