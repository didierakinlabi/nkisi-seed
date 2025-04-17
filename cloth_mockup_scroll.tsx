
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockOdus = [
  {
    odu: "Èjì Ọ̀kànrán",
    figure: "Oya",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#D2B48C]",
  },
  {
    odu: "Èjì Ejìogbè",
    figure: "Obatala",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#A0522D]",
  },
  {
    odu: "Èjì Ògúndá",
    figure: "Queen Nanny",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#D2B48C]",
  },
  {
    odu: "Èjì Ìròsùn",
    figure: "Fannie Lou Hamer",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#A0522D]",
  },
  {
    odu: "Èjì Òsé",
    figure: "Mawu-Lisa",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#D2B48C]",
  },
  {
    odu: "Èjì Ọ̀bàrà",
    figure: "Malcolm X",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#A0522D]",
  },
  {
    odu: "Èjì Òkànràn",
    figure: "Zumbi dos Palmares",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#D2B48C]",
  },
  {
    odu: "Èjì Ọ̀dí",
    figure: "Papa Legba",
    colorTop: "bg-[#8B4513]",
    colorBottom: "bg-[#A0522D]",
  },
];

export default function ClothScroll() {
  return (
    <ScrollArea className="h-screen w-full p-6">
      <div className="space-y-6">
        {mockOdus.map((patch, i) => (
          <Card key={i} className="w-full max-w-md mx-auto">
            <CardContent className="p-0">
              <div className="h-24 w-full text-white font-bold text-center flex flex-col justify-center border-b border-white">
                <div className={`h-1/2 ${patch.colorTop} flex items-center justify-center`}>
                  <p>{patch.odu}</p>
                </div>
                <div className={`h-1/2 ${patch.colorBottom} flex items-center justify-center`}>
                  <p className="text-sm">{patch.figure}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
