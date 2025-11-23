import { generateText } from "ai"

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json()

  const result = await generateText({
    model: "google/gemini-2.5-flash-image-preview",
    providerOptions: {
      google: { responseModalities: ["TEXT", "IMAGE"] },
    },
    prompt,
  })

  const image = result.files.find((f) => f.mediaType?.startsWith("image/"))

  if (!image) {
    return Response.json({ error: "No image found" }, { status: 500 })
  }

  return Response.json({
    base64: image.base64,
    uint8Array: image.uint8Array,
    mediaType: image.mediaType,
  })
}
