"use client";
import ListFretes from "@/components/listFretes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="flex w-full p-6 justify-center items-center flex-col gap-4">
      <div className="flex justify-between w-full items-center">
        <Input className="max-w-48" placeholder="Procure por frete" />
        <Button className="bg-black">Frete +</Button>
      </div>
      <ListFretes />
    </div>
  );
}
