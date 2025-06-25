import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  const Wrapper = link ? 'a' : 'div';

  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="block h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden border-[1.5px] border-gray-300 p-3 hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="space-y-1">
            <CardTitle className="text-base">
              {title}
            </CardTitle>
            {link && (
              <div className="hidden font-mono text-xs underline print:visible">
                {link.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            )}
            <CardDescription className="font-normal text-s print:text-[10px] font-sans print:text-black">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                variant="default"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  );
}
