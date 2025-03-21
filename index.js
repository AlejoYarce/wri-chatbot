import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const openai = new OpenAI({ apiKey: process.env.CHAT_GPT_API_KEY });
console.log(111, process.env.CHAT_GPT_API_KEY);

let history = [
    {
        role: "user",
        content: "tell me a joke",
    },
];

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: history,
});

console.log(completion.choices[0].message.content);

history.push(completion.choices[0].message);
history.push({
    role: "user",
    content: "what do you mean?",
});

const secondCompletion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: history,
});

console.log(secondCompletion.choices[0].message.content);
