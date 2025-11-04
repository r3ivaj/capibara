"use client";

import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
// import { Image } from "@/components/ai-elements/image"


export default function Home() {
  return (
    <div>
      {/* <Image
        alt="Example generated image"
        className="aspect-square h-[150px] border"
      /> */}
      <PromptInput onSubmit={() => {}} className="mt-4">
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
