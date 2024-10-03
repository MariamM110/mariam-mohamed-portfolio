import Image from "next/image";
import profilePic from "./public/portfolio-outline.png";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Mariam Mohamed Portfolio</title>
      </head>
      <body className="flex flex-col justify-between min-h-screen">
        <header className="bg-white p-5 m-10 rounded-full">
          <div className="flex justify-evenly">
            <span className="text-greenP400">Home</span>
            <span className="text-greenP400">About</span>
            <span className="text-greenP400">Experience</span>
            <span className="text-greenP400">Projects</span>
            <span className="text-greenP400">Contact</span>
          </div>
        </header>
        <div className="flex-grow flex items-end mb-10">
          <Image
            src={profilePic}
            alt="Profile picture"
            width={280}
            height={380}
            priority
          />
        </div>
      </body>
    </html>
  );
}
