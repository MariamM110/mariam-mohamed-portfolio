import Image from "next/image";
import profilePic from "./public/portfolio-outline.png";

import ScrollContext from "./components/ScrollContext";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <>
      <ScrollContext>
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          <div className="flex-grow flex items-end mb-10">
            <Image
              src={profilePic}
              alt="Profile picture"
              width={280}
              height={380}
              priority
            />
          </div>
        </div>
      </ScrollContext>
    </>
  );
}
