"use client";

import { useState } from "react";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Image, type ImageProps } from "@/components/ai-elements/image";

export default function Home() {
  const [imageData, setImageData] = useState<ImageProps | null>(null);

  const handleSubmit = async (message: PromptInputMessage) => {
    if (!message.text?.trim()) return;

    const response = await fetch("/api/image", {
      method: "POST",
      body: JSON.stringify({ prompt: message.text }),
    });
    const data = await response.json();
    setImageData(data);
  };


  return (
    <div>
      {imageData && (
        <Image
          {...imageData}
          alt="Example generated image"
          className="aspect-square h-[150px] border"
        />
      )}
      <PromptInput onSubmit={handleSubmit} className="mt-4">
        <PromptInputBody>
          <PromptInputTextarea />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
}
