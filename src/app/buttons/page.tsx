"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, LoaderIcon } from "lucide-react";

export default function ButtonExamplesPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-2xl font-bold">Button Examples</h1>

      {/* Default Button */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Default Button</h2>
        <Button onClick={() => alert("Default Button Clicked")}>Default</Button>
      </section>

      {/* Button Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button Variants</h2>
        <div className="flex space-x-2">
          <Button variant="default" onClick={() => alert("Primary Button Clicked")}>
            Primary
          </Button>
          <Button variant="secondary" onClick={() => alert("Secondary Button Clicked")}>
            Secondary
          </Button>
          <Button variant="outline" onClick={() => alert("Outline Button Clicked")}>
            Outline
          </Button>
          <Button variant="ghost" onClick={() => alert("Ghost Button Clicked")}>
            Ghost
          </Button>
          <Button variant="link" onClick={() => alert("Link Button Clicked")}>
            Link
          </Button>
        </div>
      </section>

      {/* Disabled Button */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Disabled Button</h2>
        <Button disabled onClick={() => alert("Disabled Button Clicked")}>
          Disabled
        </Button>
      </section>

      {/* Button Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button Sizes</h2>
        <div className="flex space-x-2">
          <Button size="sm" onClick={() => alert("Small Button Clicked")}>
            Small
          </Button>
          <Button size="default" onClick={() => alert("Medium Button Clicked")}>
            Medium
          </Button>
          <Button size="lg" onClick={() => alert("Large Button Clicked")}>
            Large
          </Button>
        </div>
      </section>

      {/* Icon Buttons */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Icon Buttons</h2>
        <div className="flex space-x-2">
          <Button variant="link" size="icon" onClick={() => alert("Mail Icon Button Clicked")}>
            <MailIcon className="w-5 h-5" />
          </Button>
          <Button variant="link" size="icon" onClick={() => alert("Phone Icon Button Clicked")}>
            <PhoneIcon className="w-5 h-5" />
          </Button>
          <Button variant="outline" onClick={() => alert("Icon with Text Button Clicked")}>
            <MailIcon className="w-5 h-5 mr-2" />
            Email Me
          </Button>
        </div>
      </section>

      {/* Loading Button */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Loading Button</h2>
        <Button disabled>
          <LoaderIcon className="w-5 h-5 mr-2 animate-spin" />
          Loading...
        </Button>
      </section>

      {/* Button with Different Events */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button with Different Events</h2>
        <Button
          onMouseEnter={() => console.log("Mouse Enter")}
          onMouseLeave={() => console.log("Mouse Leave")}
          onFocus={() => console.log("Focus")}
          onBlur={() => console.log("Blur")}
          onClick={() => console.log("Click")}
        >
          Hover & Click Me
        </Button>
      </section>
    </div>
  );
}
