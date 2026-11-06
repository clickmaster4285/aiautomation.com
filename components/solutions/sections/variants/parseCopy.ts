function splitSentences(text: string) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function splitBoldItem(line: string) {
  const marked = line.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
  if (marked) {
    return { title: marked[1].trim(), description: marked[2].trim() };
  }
  const clean = line.replace(/\*\*/g, "").trim();
  const dashed = clean.split(/\s+[—–]\s+/);
  if (dashed.length > 1) {
    return { title: dashed[0].trim(), description: dashed.slice(1).join(" — ").trim() };
  }
  return { title: clean, description: "" };
}

export function splitBoundaries(paragraphs: string[]) {
  const isNot: string[] = [];
  const is: string[] = [];

  for (const paragraph of paragraphs) {
    for (const sentence of splitSentences(paragraph)) {
      const whatItIs = sentence.match(/^what it is:\s*(.*)$/i);
      if (whatItIs) {
        if (whatItIs[1]) is.push(whatItIs[1]);
        continue;
      }
      if (/\b(not about|it's not|it is not|not a |not an )\b/i.test(sentence)) {
        isNot.push(sentence);
        continue;
      }
      if (is.length > 0) is.push(sentence);
    }
  }

  return {
    is: is.filter(Boolean),
    isNot: isNot.filter(Boolean),
  };
}
