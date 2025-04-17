
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const beads = [
  { name: "Mirror", use: "Self-reflection, memory retrieval" },
  { name: "Soil", use: "Grounding, ancestry, growth" },
  { name: "Flame", use: "Purification, truth, passion" },
  { name: "Joy", use: "Upliftment, mood reset" },
  { name: "Protection", use: "Safety, spiritual warding" },
  { name: "Memory", use: "Accessing deep archive and legacy" },
  { name: "Clarity", use: "Decision-making and truth discernment" },
  { name: "Health", use: "Body scan, wellness check-in" }
];

export default function BeadsPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🧿 Nkisi Beads</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {beads.map((bead, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{bead.name}</h2>
              <p className="text-sm text-neutral-700">{bead.use}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
