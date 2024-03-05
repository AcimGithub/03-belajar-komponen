import { Gallery } from "@/components/gallery";
import Image from "next/image";


// export default function Home() {
//   return (
//     <div className="center">
//       <p style={{ textAlign: 'center' }}>
//         Ilmuwan yang luar biasa
//       </p>
//       <Gallery/>
//     </div>
//   );
// }

export default function Bio() {
  return (
    <>
     <div className="intro">
      <h1>Selamat datang di website saya!</h1>
    </div>
    <p>
      Anda dapat membaca uneg-uneg.
      <br />
      <b>Juga ada <i>foto</i> ilmuwan!</b>
    </p>
    
    </>
   
  )
}

