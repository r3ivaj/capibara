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
  const [status, setStatus] = useState<
    "submitted" | "streaming" | "ready" | "error"
  >("ready");

  const handleSubmit = async (message: PromptInputMessage) => {
    if (!message.text?.trim()) return;

    try {
      setStatus("submitted");

      const response = await fetch("/api/image", {
        method: "POST",
        body: JSON.stringify({ prompt: message.text }),
      });

      const data = await response.json();
      setImageData(data);

      setStatus("ready");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return (
    <div>
      {imageData && (
        <Image
          {...imageData}
          alt="Imagen generada"
          className="aspect-square h-[500px] border"
        />
      )}
      <PromptInput onSubmit={handleSubmit} className="mt-4">
        <PromptInputBody>
          <PromptInputTextarea placeholder="Describe la imagen que quieres generar" />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit status={status} />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
}
