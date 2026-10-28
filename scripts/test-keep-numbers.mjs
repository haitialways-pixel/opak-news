/** Regex-level check mirroring src/lib/keepNumbers.tsx */
const SPACE_SEP = "[\u00A0\u202F\u2007\u2009 ]";
const DIGIT_GROUP = new RegExp(
  `\\d{1,3}(?:${SPACE_SEP}\\d{3})+(?:[.,]\\d+)?|\\d{4,}(?:[.,]\\d+)?`,
  "g",
);
const SEP_RE = /[\u00A0\u202F\u2007\u2009 ]/g;

function wrap(text) {
  const parts = [];
  let last = 0;
  const re = new RegExp(DIGIT_GROUP.source, "g");
  for (const match of text.matchAll(re)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(["text", text.slice(last, start)]);
    const normalized = match[0].replace(SEP_RE, "\u00A0");
    parts.push(["nowrap", normalized]);
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(["text", text.slice(last)]);
  return parts;
}

const cases = [
  {
    name: "regular space 1 000",
    input: "environ 1 000 soldats",
    expectNowrap: ["1\u00A0000"],
  },
  {
    name: "existing NBSP",
    input: "Environ 1\u00A0000 soldats",
    expectNowrap: ["1\u00A0000"],
  },
  {
    name: "narrow NBSP",
    input: "environ 1\u202F000 soldats",
    expectNowrap: ["1\u00A0000"],
  },
  {
    name: "unspaced 17000",
    input: "plus de 17000 nouveaux",
    expectNowrap: ["17000"],
  },
  {
    name: "100 000",
    input: "100 000 gourdes",
    expectNowrap: ["100\u00A0000"],
  },
  {
    name: "Salvador headline",
    input:
      "Le Salvador dépêche environ 1 000 soldats en Haïti après l'embuscade du 18 octobre",
    expectNowrap: ["1\u00A0000"],
  },
  {
    name: "no numbers",
    input: "pas de chiffres ici",
    expectNowrap: [],
  },
];

let failed = 0;
for (const c of cases) {
  const parts = wrap(c.input);
  const got = parts.filter((p) => p[0] === "nowrap").map((p) => p[1]);
  const ok =
    got.length === c.expectNowrap.length &&
    got.every((g, i) => g === c.expectNowrap[i]);
  if (!ok) {
    failed++;
    console.log("FAIL", c.name, { got, expect: c.expectNowrap, parts });
  } else {
    console.log("PASS", c.name, "=>", got.map((g) => JSON.stringify(g)).join(", "));
  }
}
process.exit(failed ? 1 : 0);
