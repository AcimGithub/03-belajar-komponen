import { Gallery } from "@/components/gallery";
import Image from "next/image";
import TodoList from "@/components/todolist";


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
     <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>
   
  )
}

