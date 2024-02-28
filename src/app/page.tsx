import { Gallery } from "@/components/gallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="center">
      <p style={{ textAlign: 'center' }}>
        Ilmuwan yang luar biasa
      </p>
      <Gallery/>
    </div>
  );
}

