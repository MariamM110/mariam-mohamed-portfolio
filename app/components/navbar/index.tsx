import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white p-5 m-10 rounded-full">
      <div className="flex justify-evenly">
        <span className="text-greenP400">Home</span>
        <span className="text-greenP400">About</span>
        <span className="text-greenP400">Experience</span>
        <span className="text-greenP400">Projects</span>
        <span className="text-greenP400">Contact</span>
      </div>
    </header>
  );
};
