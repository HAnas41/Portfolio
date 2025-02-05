import React from "react";
import Link from "next/link";
import { NavItems } from "../../../Utils/Helper/helper";

export default function Navlist() {
  
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
       { 
        NavItems.map((e,i) => {
          return (
            <li key={i}> <Link href={e.link}>{e.list}</Link></li>
          )
        })
       }
      </ul>
    </nav>
  );
}
