import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import { NOTES_DATA } from "@/data/19-mart-eylemleri";
import Link from "next/link";

export const metadata: Metadata = {
  title: "19 Mart Eylemleri",
  description: "",
};

export default function NotesPage() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto p-8 md:p-16">
      <section className="mx-auto w-full max-w-full space-y-8 bg-white">
        <h1 className="text-2xl font-bold">19 Mart Eylemleri</h1>
        {NOTES_DATA.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <h2 className="text-xl font-semibold">
                {note.videoUrl ? (
                  <Link href={note.videoUrl} target="_blank" rel="noopener noreferrer">
                    {note.title}
                  </Link>
                ) : (
                  note.title
                )}
              </h2>
            </CardHeader>
            <CardContent>              
              {note.content && note.content.length > 0 ? (
                 note.content.split("\n\n").map((para, index) => (
                   <p key={index} className="mb-4">{para}</p>
                 ))
               ) : (
                 <p>Bu video için henüz not eklenmemiş.</p>
              )}              
            </CardContent>
            <p className="text-sm text-muted-foreground">{note.date}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
