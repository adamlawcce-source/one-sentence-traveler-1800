import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, written to explain the modern internet to a time traveler
// who has just stepped out of the year 1800. Built only from things they
// already know — a library, a post office, a market, a road — so the picture
// lands in their head with no word coined after their time.
const TEXT =
  "Imagine every library, post office and market in the world joined by one road, so any letter, book or face can arrive at your door in the blink of an eye.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
