
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SyncCloth() {
  const [synced, setSynced] = useState(false);
  const [bundleSize, setBundleSize] = useState(0);

  const handleSync = () => {
    const fakeSize = Math.floor(Math.random() * 10 + 5);
    setBundleSize(fakeSize);
    setSynced(true);
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🪡 Cloth Sync + Export</h1>
      <Card className="max-w-xl mx-auto">
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-neutral-700">
            This page initiates a manual sync of your current Nkisi logs and regenerates your cloth archive.
          </p>
          <Button onClick={handleSync} className="bg-green-700 hover:bg-green-800 text-white">
            Start Sync + Generate Patch Bundle
          </Button>
          {synced && (
            <div className="text-sm text-green-700 mt-4">
              ✅ Synced {bundleSize} log entries into new cloth segment.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
