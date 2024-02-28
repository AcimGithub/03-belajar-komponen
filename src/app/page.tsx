import Profile from "../components/profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="center">
      <p style={{ textAlign: 'center' }}>
        Ilmuwan yang luar biasa
      </p>
      <div className="columns-3">
        <Profile />
      <Profile />
      <Profile />
      </div>
    </div>
  );
}

