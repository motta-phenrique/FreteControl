"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { DataTable } from "@/components/table/table";
import { columns, fretes } from "@/components/table/column"
import { useState } from "react";
import NewFreteModal from "@/components/newFreteModal";

export default function Home() {
  

  const [openNewFrete, setOpenNewFrete] = useState(true)

  return (
    <div className="flex w-full p-6 justify-center items-center flex-col gap-4">
      <div className="flex justify-between w-full items-center">
        <Input className="max-w-48" placeholder="Procure por frete" />
        <NewFreteModal />
      </div>
      <DataTable columns={columns} data={fretes}/>
    </div>
  );
}
