import AnimateCircular from "@/components/AnimateCircular";
import CollisionAnimation from "@/components/AnimateCollision";
import AnimateGravity from "@/components/AnimateGravity";
import SvgMorph from "@/components/AnimateMorph";
import AnimateProps from "@/components/AnimateProps";
import AnimateSpring from "@/components/AnimateSpring";
import BallAnimate from "@/components/BallAnimate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <AnimateProps/> */}
      {/* <BallAnimate /> */}
      {/* <AnimateGravity/> */}
      {/* <CollisionAnimation/> */}
      {/* <AnimateSpring/> */}
      <SvgMorph/>
      {/* <AnimateCircular/> */}
    </main>
  );
}
