import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA_TR } from "@/data/resume-data-turkish";
import { ProjectCard } from "@/components/project-card";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useEffect } from "react";
import avatarImage from "/public/images/avatar.jpg";
import { WebsiteIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `${RESUME_DATA_TR.name}`,
  description: RESUME_DATA_TR.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-8 md:p-16">
      <section className="mx-auto w-full max-w-full space-y-8 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA_TR.name}</h1>
            <p className="max-w-full text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA_TR.about}
            </p>
            <p className="max-w-full items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA_TR.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA_TR.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground">
              {RESUME_DATA_TR.contact.email ? (
                <Button
                  className="size-35"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA_TR.contact.email}`} className="flex items-center gap-1 underline">
                    <MailIcon className="size-4" />
                    {RESUME_DATA_TR.contact.email}
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA_TR.contact.tel ? (
                <Button
                  className="size-30"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA_TR.contact.tel}`} className="flex items-center gap-1 underline">
                    <PhoneIcon className="size-4" />
                    {RESUME_DATA_TR.contact.tel}
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA_TR.personalWebsiteUrl ? (
                <Button
                  className="size-35"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={RESUME_DATA_TR.personalWebsiteUrl} className="flex items-center gap-1 underline">
                    <WebsiteIcon className="w-4 h-4 text-black" />
                    {"umutgur.com"}
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA_TR.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-30"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} className="flex items-center gap-1 underline">
                    <social.icon className="size-4" />
                    {social.text}
                  </a>
                </Button>
              ))}              
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground">
              {RESUME_DATA_TR.contact.email ? (
                <a href={`mailto:${RESUME_DATA_TR.contact.email}`}>
                  <span className="underline">{RESUME_DATA_TR.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA_TR.contact.tel ? (
                <a href={`tel:${RESUME_DATA_TR.contact.tel}`}>
                  <span className="underline">{RESUME_DATA_TR.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* Avatar - Sağ üst köşe */}
          <div className="ml-6">
            <Avatar className="size-40">
              <AvatarImage 
                alt={RESUME_DATA_TR.name} 
                src={avatarImage.src || "/images/avatar.jpg"} 
              />
              <AvatarFallback>
                {RESUME_DATA_TR.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Section>
          <h2 className="text-xl font-bold">Hakkında</h2>
          <ul className="list-disc ml-5 text-pretty font-mono text-sm text-muted-foreground space-y-1">
            {RESUME_DATA_TR.summaryPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Eğitim Bilgileri</h2>
          {RESUME_DATA_TR.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <div className="font-semibold leading-none">
                      {education.school}
                    </div>     
                                   
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.range}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <CardContent className="mt-18">
                        {education.degree}
                    </CardContent>

                    <div className="text-right">
                          <div className="text-xs tabular-nums text-gray-500">
                          {education.gpa}
                          </div>
                        </div>
                  </div>                
                </CardHeader>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">İş Deneyimi</h2>
          {RESUME_DATA_TR.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.range}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  <ul className="list-disc ml-4 space-y-1">
                    {work.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Beceriler</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA_TR.skills.map((skills) => {
              return (
                <Badge className="" key={skills}>
                  {skills}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Hobiler ve Sosyal Aktiviteler</h2>
          <ul className="list-disc ml-5 text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA_TR.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Projeler ve Sertifikalar</h2>
          <div className="-mx-4 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
            {RESUME_DATA_TR.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>
      {/*}
      <p>
      ✷✷
      </p>*/}
    </main>
  );
}
