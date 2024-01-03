import { ArrowUpIcon } from "lucide-react";
import React from "react";

export default function SingleListItem() {
  return (
    <>
      <div className="flex flex-row bg-slate-100 gap-10 py-5 px-10 max-w-4xl rounded-md hover:scale-105 transition-all hover:my-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>423</p>
          <ArrowUpIcon size={20} />
        </div>
        <div>N</div>
        <div>
          <div>Nike</div>
          <div>
            I really Liked Nike a lot. The store was friendly and the people
            there were reallynice. I just wish they had that one shoe Ive been
            looking for.
          </div>
        </div>
      </div>
    </>
  );
}
