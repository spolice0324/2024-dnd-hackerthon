import { openai } from "@/lib"
import { generateAdv } from "@/lib/prompt"

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as { prompt: string[] }

  const generatedPrompt = generateAdv(prompt)

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `
        너는 고립은둔청년을 위해 조언을 해주는 로봇이야.
        제공되는 콘텐츠를 활용하여 적절한 조언 내용 작성해줘.
        단, 컨텐츠 내의 조건은 무조건 지킬 것.
        `,
      },
      {
        role: "user",
        content: generatedPrompt,
      },
    ],
  })

  return Response.json({
    ok: true,
    result:
      res.choices[0].message.content
        ?.split("\n")
        .map((item) => item.trim())
        .filter((item) => !!item) ?? [],
  })
}
