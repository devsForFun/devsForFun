import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

interface ProfileProps {
  userdetails: {
    club: string;
    country: string;
    d12repo1: string;
    d12site1: string;
    d12repo2: string;
    d12site2: string;
    d14repo: string;
    d14site: string;
    gender: string;
    github: string;
    id: number;
    linkedin: string;
    name: string;
    pd1repo: string;
    pd1site: string;
    pd2repo: string;
    pd2site: string;
    rdcrepo: string;
    rdcsite: string;
    username: string;
    vibe: string;
  };
}

const vibeImageUrls: { [key in ProfileProps["userdetails"]["vibe"]]: string } =
  {
    scarletnova: "/scarletnova.png",
    emraldspark: "/emraldspark.png",
    goldlight: "/goldlight.png",
    moonwind: "/moonwind.png",
  };

const projects = [
  "green screen image editor",
  "to-do app with local storage task retrieval",
  "html day 4 notion notes page replica",
  "grey filter for images",
  "clock app with extra features",
  "counter app",
];

const textColorVariants:
  | { [key in ProfileProps["userdetails"]["vibe"]]: string } = {
  scarletnova: "text-scarletnova",
  moonwind: "text-moonwind",
  emraldspark: "text-emraldspark",
  goldlight: "text-goldlight",
};

export const ProfileCard: React.FC<ProfileProps> = ({ userdetails }) => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center m-4">
      <section className="flex flex-col sm:flex-row items-center justify-center">
        <Image
          src={vibeImageUrls[userdetails.vibe]}
          alt=""
          className="w-200 mr-8 rounded-full"
          width={200}
          height={200}
        />
        <article className="flex flex-col sm:items-start items-center my-1">
          <span className="text-white text-3xl font-bold lowercase my-1 text-center">
            {userdetails.name}
          </span>
          <span className="my-1 ">
            club:{" "}
            <a className="hover:underline" href="">
              {userdetails.club}
            </a>
          </span>
          <span className="my-1">
            house:{" "}
            <span className={textColorVariants[userdetails.vibe]}>
              {userdetails.vibe}
            </span>
          </span>
          <span className="flex gap-3 items-center my-1">
            <a href={userdetails.github}>
              <GitHubLogoIcon className="h-7 w-7" />
            </a>
            <a href={userdetails.linkedin}>
              <LinkedInLogoIcon className="h-7 w-7" />
            </a>
          </span>
        </article>
      </section>
      <section className="flex flex-col m-4 sm:items-end">
        <article className="flex flex-col items-center justify-center text-center text-md py-2">
          <p className="text-muted-foreground">
            here&apos;s{" "}
            <span className={textColorVariants[userdetails.vibe]}>
              {userdetails.name}&apos;s
            </span>{" "}
            work in devsForFun s1
          </p>
        </article>
        <ProjectDisplay
          text={projects[0]}
          sitelink={userdetails.pd2site}
          repolink={userdetails.pd2repo}
          vibe={userdetails.vibe}
        />
        <ProjectDisplay
          text={projects[1]}
          sitelink={userdetails.pd1site}
          repolink={userdetails.pd1repo}
          vibe={userdetails.vibe}
        />
        <ProjectDisplay
          text={projects[2]}
          sitelink={userdetails.rdcsite}
          repolink={userdetails.rdcrepo}
          vibe={userdetails.vibe}
        />
        <ProjectDisplay
          text={projects[3]}
          sitelink={userdetails.d14site}
          repolink={userdetails.d14repo}
          vibe={userdetails.vibe}
        />
        <ProjectDisplay
          text={projects[4]}
          sitelink={userdetails.d12site1}
          repolink={userdetails.d12repo1}
          vibe={userdetails.vibe}
        />
        <ProjectDisplay
          text={projects[5]}
          sitelink={userdetails.d12site2}
          repolink={userdetails.d12repo2}
          vibe={userdetails.vibe}
        />
      </section>
      <article className="text-center text-md text-white ">
        only <span className={textColorVariants[userdetails.vibe]}>0.025%</span>{" "}
        finished this program and{" "}
        <span className={textColorVariants[userdetails.vibe]}>
          {userdetails.name}
        </span>{" "}
        is one of them!
      </article>
    </section>
  );
};

export default ProfileCard;

export const ProjectDisplay: React.FC<{
  text: string;
  sitelink: string;
  repolink: string;
  vibe: string;
}> = ({ text, sitelink, repolink, vibe }) => {
  return (
    <article className="flex">
      <span className="text-muted-foreground py-1 text-md">
        {text}:
        <a href={sitelink}>
          <span
            className={`pl-2 ${textColorVariants[vibe]} underline hover:text-white hover:underline`}
          >
            live site
          </span>
        </a>
        <a href={repolink}>
          <span
            className={`pl-2 ${textColorVariants[vibe]} underline hover:text-white hover:underline`}
          >
            repo
          </span>
        </a>
      </span>
    </article>
  );
};
