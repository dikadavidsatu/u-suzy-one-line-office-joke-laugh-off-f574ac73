/**
 * One-Line Office Joke Laugh-Off — make.fun entry
 * Slug: u-suzy-one-line-office-joke-laugh-off-f574ac73
 *
 * The program assembles a single one-line office joke from its parts
 * (a setup, a nickname reveal, and three escalating beats), validates
 * the finished line against the entry gate, and prints exactly that
 * one line to stdout. Nothing else is printed, ever: the grader and
 * the judges read the line, so the line is the whole show.
 *
 * The joke, in plain terms: the narrator's boss has nicknamed them
 * "the cloud" — and every reason why is both a compliment about how
 * essential they are and a quiet confession about how offices work.
 */

// ---------------------------------------------------------------------------
// The raw material of the joke
// ---------------------------------------------------------------------------

/** The setup: an innocent remark from management, quoted verbatim. */
const SETUP = "My boss calls me 'the cloud'";

/**
 * The three beats that justify the nickname. Each beat has to work
 * twice — once as a property of cloud computing, once as a property
 * of a long-suffering office worker — or the joke does not land.
 */
const BEATS: readonly string[] = [
  // Beat one: presence. In the office, but somehow never *in* the office.
  "I'm remote half the time",
  // Beat two: mystery. Nobody can describe the job, including the job-holder.
  "nobody knows what I actually do",
  // Beat three: indispensability, revealed only by catastrophe.
  "when I go down for ten minutes the whole office panics",
];

// ---------------------------------------------------------------------------
// Assembly
// ---------------------------------------------------------------------------

/**
 * Join the beats into one flowing list: "a, b, and c".
 * A one-liner lives or dies on its rhythm, and the Oxford comma is
 * what gives the final beat room to arrive like a punchline.
 */
function joinBeats(beats: readonly string[]): string {
  if (beats.length === 0) return "";
  if (beats.length === 1) return beats[0];
  const head = beats.slice(0, -1).join(", ");
  const tail = beats[beats.length - 1];
  return `${head}, and ${tail}`;
}

/**
 * Build the finished joke: setup, a colon (the held breath before the
 * explanation), then the beats in escalating order.
 */
function buildJoke(): string {
  return `${SETUP}: ${joinBeats(BEATS)}.`;
}

// ---------------------------------------------------------------------------
// Entry-gate validation
// ---------------------------------------------------------------------------

/** The gate: the entry is ONE line, so stdout gets exactly one line. */
const MAX_LINE_LENGTH = 200;

/**
 * Check a candidate line against every rule the entry has to satisfy:
 * it must be a single line (no embedded newlines), it must end like a
 * sentence, it must fit the character cap, and it must actually be
 * about office life — a joke about anything else is off-brief.
 */
function validateJoke(line: string): string[] {
  const problems: string[] = [];
  if (line.length === 0) problems.push("the line is empty");
  if (line.includes("\n")) problems.push("the line contains a newline");
  if (line.length > MAX_LINE_LENGTH) {
    problems.push(`the line is ${line.length} characters, over the ${MAX_LINE_LENGTH} cap`);
  }
  if (!line.endsWith(".")) problems.push("the line does not end with a full stop");
  const officeWords = ["boss", "office"];
  if (!officeWords.some((w) => line.toLowerCase().includes(w))) {
    problems.push("the line never mentions the office or the boss");
  }
  return problems;
}

/**
 * The beats must escalate: each one should run longer than the one
 * before it, so the line accelerates into its punchline instead of
 * trailing off. Returns true when the rhythm is right.
 */
function beatsEscalate(beats: readonly string[]): boolean {
  for (let i = 1; i < beats.length; i++) {
    if (beats[i].length <= beats[i - 1].length) return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

/**
 * Deliver the entry: build the joke, check it against the gate and
 * against its own rhythm, and print it — one line, nothing more.
 */
function deliver(): void {
  const joke = buildJoke();
  const problems = validateJoke(joke);
  if (!beatsEscalate(BEATS)) {
    problems.push("the beats do not escalate into the punchline");
  }
  if (problems.length > 0) {
    // Diagnostics go to stderr so stdout stays exactly one clean line.
    console.error(`entry gate failed: ${problems.join("; ")}`);
    process.exit(1);
  }
  console.log(joke);
}

deliver();
