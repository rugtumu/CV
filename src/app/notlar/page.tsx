import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Metadata } from "next";
import { NOTES_DATA } from "@/data/notlar-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yazılar",
  description: "Enstantane yazılar.",
};

export default function NotesPage() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto p-8 md:p-16">
      <section className="mx-auto w-full max-w-full space-y-8 bg-white">
        <h1 className="text-2xl font-bold">Yazılar</h1>
        
        <div className="flex flex-col gap-4 max-w-2xl">
          {NOTES_DATA.map((note) => (
            <Link 
              key={note.id} 
              href={note.videoUrl || "#"} 
              className="block w-full"
            >
              <Card className="flex flex-col w-full overflow-hidden border border-muted p-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader className="p-3">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-medium">
                      {note.title}
                    </CardTitle>
                    {note.date && note.date.length > 0 && (
                      <CardDescription className="font-mono text-xs">
                        {note.date}
                      </CardDescription>
                    )}
                  </div>
                </CardHeader>
                {note.points && note.points.length > 0 && (
                  <CardContent className="pt-0 pb-3 px-3">
                    <div className="text-sm text-muted-foreground">
                      {note.points.length > 0 && (
                        <p className="line-clamp-2">{note.points[0]}</p>
                      )}
                      {note.points.length > 1 && (
                        <p className="text-xs text-muted-foreground mt-1">... devamı</p>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}