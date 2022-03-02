import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/ui/navbar/navbar";
import WindowCode from "../components/ui/windows/window-code";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <WindowCode />
    </div>
  );
}
