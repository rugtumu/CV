import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import { NOTES_DATA } from "@/data/notes-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Altın Elbiseli Adam Videolarından Notlar",
  description: "Altın Elbiseli Adam'ın videolarından aldığım notlar.",
};

export default function NotesPage() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto p-8 md:p-16">
      <section className="mx-auto w-full max-w-full space-y-8 bg-white">
        <h1 className="text-2xl font-bold">Altın Elbiseli Adam Videolarından Notlar</h1>
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
              <p className="text-sm text-muted-foreground">{note.date}</p>
            </CardHeader>
            <CardContent>
                {note.points && note.points.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {note.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Bu video için henüz not eklenmemiş.</p>
                )}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
