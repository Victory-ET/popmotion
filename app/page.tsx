import AnimateProps from "@/components/AnimateProps";
import BallAnimate from "@/components/BallAnimate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <AnimateProps/> */}
      <BallAnimate />
    </main>
  );
}
