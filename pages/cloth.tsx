import Layout from "@/components/layout_root";

export default function ClothPage() {
  return (
    <Layout>
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
    </Layout>
  );
}