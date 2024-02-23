import Accordion from "@/components/accordion/Accordion";
import RandomColor from "@/components/random-color/RandomColor";
import StarRating from "@/components/star-rating/StarRating";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Accordion/>
      <RandomColor/>
      <StarRating/>
    </main>
  );
}
