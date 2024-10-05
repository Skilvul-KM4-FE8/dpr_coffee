import { useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
const {isSignedIn} = useAuth()

// if (!auth.isSignedIn) {
//   // kick ke mana gitu
// }

// console.log(auth)
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
