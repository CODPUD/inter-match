import React from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

type Props = {};

function JobCard({}: Props) {
  return (
    <div className="border-2 rounded-md border-black p-3">
      <div className="flex gap-3">
        <Image
          src="/logo.svg"
          alt="company_logo"
          width={50}
          height={50}
        ></Image>
        <div>
          <h3 className="font-bold font-sans">Mid-level UX Designer</h3>
          <span>Toptal</span>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">Full time</Badge>
          <Badge variant="secondary">Remote</Badge>
        </div>
        <div>
          <span className="text-black/50 text-xs md:text-base">
            $84k - $120k/year
          </span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
