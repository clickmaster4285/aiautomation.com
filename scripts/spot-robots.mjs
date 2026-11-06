const html = await (await fetch("http://127.0.0.1:3467/solutions/ai-chatbots/for-healthcare")).text();
const robots = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] || "(none)";
const canonical = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1];
console.log({ robots, canonical });
