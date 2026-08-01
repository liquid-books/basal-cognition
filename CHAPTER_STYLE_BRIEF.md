# CHAPTER_STYLE_BRIEF.md — Basal Cognition

**Read this completely before writing a single word.**

Book: *Basal Cognition — How Intelligence Works Without a Brain, and What That Means for Machines*
Author: Dr. Ernesto Lee
Site: BasalCognition.com
Repo: https://github.com/liquid-books/basal-cognition
Local: `/home/node/openclaw/books/basal-cognition/`

---

## THE VOICE — THIS IS THE WHOLE JOB

**The bar: every chapter is a masterclass. Every chapter is a TED talk.**

Not a textbook chapter with a friendly tone. A performance. The reader should not be
able to put it down. If a section could be skimmed without loss, it is not written yet.

### The model: Arvin Ash

Dr. Lee named the target explicitly. Study how Ash actually builds an explanation —
this is his real opening on why life is carbon-based:

> "All life is based on carbon chemistry. But carbon is not the most abundant element
> on earth. 20% of our body is made up of carbon, but it comprises less than 1% of the
> mass of the earth's atmosphere, oceans and crust. Why did life go to the trouble of
> concentrating carbon 20-fold in our bodies, when other more abundant elements were
> available? The answer boils down to three things: complexity, abundance and stability."

Six moves are happening there. Use all six in every chapter.

1. **Open on an anomaly with a number in it.** Not a topic — a puzzle. "20% of you,
   under 1% of the planet." The number makes it feel like a fact, and the mismatch
   makes it feel like a mystery. Never open with "This chapter explores..."
2. **Name the shape of the answer immediately.** "It boils down to three things:
   complexity, abundance, stability." The reader now has a container. They will hold
   attention across 4,000 words if they know how many pieces are coming.
3. **One homely analogy per abstract point.** "You can't build a castle if you don't
   have enough Lego bricks." Kitchen-table objects. Never an analogy that needs its
   own explanation.
4. **Raise the smart reader's objection *before* they can.** "What about silicon? It
   also forms four bonds. In fact there's more silicon on Earth than carbon." Ash goes
   looking for the strongest counterexample and handles it in the open. This is the
   single biggest trust-builder available to you. Do it at least twice per chapter.
5. **Go to real mechanism, never equations.** He gets to electron shells and bond
   strength — actual physics — without one formula. "Silicon's unpaired electrons sit
   farther from the nucleus, on the third shell, so its bonds are weaker." That is
   graduate-level content in plain words. **This is the whole trick of the book.**
   Depth is not the enemy of clarity. Vagueness is.
6. **Close by elimination.** Walk the candidates off the table one at a time until
   only the answer is standing. Endings should feel like a door clicking shut.

### Soundbites — MANDATORY, 6 to 9 per chapter

Dr. Lee asked for these specifically. A soundbite is a **standalone bolded line** that
lands a single idea hard enough to quote. It sits alone as its own paragraph.

Rules:
- **6 to 9 per chapter.** Roughly one per major section.
- **Under 15 words.** Most should be under 10.
- **Own paragraph, bolded, nothing else on the line.**
- It must survive removal from context. If it needs the previous sentence to make
  sense, it is not a soundbite.
- Never two in a row. They need prose around them to hit.

Good:
> **Brains did not invent intelligence. They scaled it.**

> **Cancer is not a cell that got dumber. It is a cell whose circle of caring shrank.**

> **The hard part of healing is not closing. It is stopping.**

Bad (explains instead of lands):
> **Cellular systems demonstrate goal-directed behavior across multiple scales.**

### Hard rules on prose

- **Average sentence length under 15 words.** Vary hard — some 4-word sentences, some
  25-word ones. Three long sentences in a row means break one.
- **No paragraph longer than 5 sentences.** Most 2–4.
- **Ban list — never use these words or phrases:**
  `delve, leverage, robust, paradigm, tapestry, landscape (figurative), navigate (figurative), unpack, harness, realm, testament, underscore, pivotal, crucial, myriad, plethora, moreover, furthermore, it is worth noting, in today's world, in the modern era, at its core, fundamentally, essentially, arguably, multifaceted, holistic, synergy, game-changer, revolutionize, cutting-edge, seamless, dive deep, deep dive, journey, embark, foster, facilitate, utilize, elucidate, nuanced interplay`
- **Max one em-dash per paragraph.**
- **No "Let's explore..." / "In this section we will..."** Just start.
- **One rhetorical question per section maximum.**
- **Numbers stay concrete.** "Cut a flatworm into 279 pieces and you get 279 worms"
  beats "flatworms display remarkable regenerative capacity."
- **Name the scientist and the year.** "In 2000, Toshiyuki Nakagaki put slime mold in
  a maze." Real people doing real experiments reads as authority. Vague passive
  attribution reads as filler.

### The 5-step concept formula (MANDATORY for every core concept)

1. **Something they already know.** A fridge hum. A thermostat. A group chat.
2. **Build the bridge.** Map it onto the biology.
3. **Name it.** *Now* the technical term. Anchor it to the analogy.
4. **Where the analogy breaks.** One honest sentence. This buys trust.
5. **Why it matters.** What becomes possible? What does the old view get wrong?
   One solid paragraph, real stakes.

### The level: a sharp 17-year-old — NOT a 12-year-old

This changed. The previous version of this brief targeted a 14-year-old and the
result read as too simple. Dr. Lee's correction: **a 17-year-old should understand it,
and it should function as an upper-level undergraduate or graduate text.**

What that means concretely:

- **Assume real intellectual stamina.** The reader can hold a three-part argument
  across ten pages. Stop over-restating.
- **Mechanism at full depth.** Bioelectric gradients, gap junctions, resting membrane
  potential, ion channels — name them and explain how they actually work. The old
  brief said the technical term could come "later, or never." **Wrong. It always
  comes, and it comes with its mechanism.**
- **Real citations inline.** Author and year, in the prose.
- **Genuine open problems.** Say plainly what is unresolved and where the field
  disagrees. A graduate reader wants the edges, not a tidy story.
- **No baby talk.** Cut "Now here's the cool part," "Pretty wild, right?", and any
  sentence that congratulates the reader for still reading.
- Still no equations. Still no jargon without a plain-language landing first. Clarity
  is not the thing being relaxed — **the ceiling on difficulty is.**

### The Dinner Table Test (still applies)

Could the reader explain the core idea to a friend, with no notes and no diagram? If
the explanation needs a picture to work, the words aren't good enough. The picture
should *reinforce*, never *rescue*.

---

## AUDIENCE

Upper-level undergraduates, graduate students, and technically serious general
readers. A sharp 17-year-old should follow every page. No biology background. No
physics. No math beyond "bigger and smaller."

Do NOT write for executives. No CFO framing, no ROI paragraphs. When showing why
something matters practically, use engineers, doctors, researchers, teachers — real
people doing real work.

---

## CHAPTER STRUCTURE (follow exactly)

```markdown
---
title: "Chapter Title"
subtitle: "One clear line"
short_title: "Nav Title"
description: "2–3 plain sentences."
label: ch-NN-slug
tags: [tag, tag, tag]
---

# Chapter Title

:::{figure} ../images/chNN-infographic.png
:label: fig-chNN-infographic
:alt: ...
:width: 100%
:align: center

Chapter overview.
:::

[Opening: 3–5 short paragraphs. Start with a concrete story or image. NO "in this chapter we will."]

## [H2 sections — 6 to 9 of them]

### [H3 subsections as needed]

## 🤔 Think About It
[ONE open-ended scenario. Genuinely hard. No right answer. 150–250 words.]

## 💬 Discussion
[Prompt, then this exact block:]

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

## 🔬 Hands-On Lab: [Title]
[No-code / low-barrier. Anyone with a browser can do it.]

## 🛠️ Build It: [Specific Thing They Build] (Two Paths)

[REQUIRED IN EVERY CHAPTER. They must BUILD the chapter's main concept — not read
about it. Give ONE build target, reachable two ways, so a non-programmer is never
locked out.]

**What you're building:** [One sentence. Concrete and demoable.]

::::{tab-set}

:::{tab-item} Path A — Colab (Python)
[Colab badge with the REAL notebook filename, then 4–6 numbered implementation steps.
Name the functions they write. State the success criterion as an observable output.]
:::

:::{tab-item} Path B — Vibe Code (No Python)
[A COMPLETE, COPY-PASTEABLE prompt in a fenced block, 150–250 words, that gets a
working artifact out of Claude/ChatGPT/Cursor on the first try. It must specify: the
artifact (single-file HTML, sliders, live chart), the exact mechanism from the chapter,
what the user can manipulate, and what they should SEE. Then 3–4 follow-up prompts
that deepen it. This path is NOT a lesser option — it must produce something as
impressive as Path A.]
:::

::::

**Success check:** [One observable thing that proves it works. Same for both paths.]

## 🔍 Research Frontier: [Specific Open Question] (2-page paper)

[REQUIRED IN EVERY CHAPTER. A genuinely unresolved question at the edge of the field —
something published in roughly the last three years where the answer is not yet known.
NOT a book report. NOT a summary of settled science.]

**The question:** [State the open problem in 2–3 sentences. Make it feel alive.]

**Why it's open:** [What specifically is missing — a measurement, a mechanism, a
control experiment? 2–3 sentences.]

**Starting points:** [3–4 real, verifiable papers or labs. Author, year, and title or
venue. Never invent a citation. If unsure it exists, cite the lab and topic instead.]

**Deliverable:** A 2-page paper (roughly 800–1,000 words) that: states the question,
summarizes what is currently known, identifies the specific gap, and proposes one
concrete experiment or approach that could close it. Cite at least four sources.

## ⚙️ Applied Exercise: [Real Thing They Make] (10 pts)

[REQUIRED IN EVERY CHAPTER. Takes the chapter's concept OUT of biology and INTO
something they actually use or work on. Not a thought experiment — a deliverable.
Specify the artifact, the constraint that makes it hard, and how it will be judged.
Fully self-contained: never "details provided in class."]

**Points:** 10

## 📖 Glossary
[15+ terms. Definitions in the same plain voice. Use a list-table or definition list.]

## 🔑 The Takeaway
[5–8 bullets. Each a short punchy sentence someone would actually remember.]
```

### Absolute structural rules

- **NO quizzes or multiple-choice in the chapter file.** Write them to `quizzes/chNN-quiz.md` instead. Format: one file, questions, then answers embedded in `:::{dropdown}` blocks. That file is NOT in the TOC.
- **Every chapter has FOUR graded end-matter pieces beyond Discussion: Build It,
  Research Frontier, Applied Exercise, plus the Hands-On Lab.** None of them may say
  "details provided in class." That placeholder is banned — it was in all 8 chapters
  of the first draft and Dr. Lee flagged the whole set as under-built.
- **Build It must have both paths.** Colab AND a vibe-code prompt. A reader who does
  not write Python must still be able to build the concept and see it run.
- **Notebook filenames must be real.** Use `chNN-lab-<actual-topic>.ipynb` and create
  the file. Never ship the literal placeholder `chNN-lab-slug.ipynb` — ch01 shipped
  exactly that and the Colab badge pointed at a file named "slug".
- **Discussion is an individual online assignment.** Never mention small groups, debates, seminars, or synchronous class time in the Discussion section.

---

## LENGTH

**Target 4,500 words** per chapter. Acceptable: 4,000–5,000. Count with `wc -w`.

This is DELIBERATELY shorter than a typical textbook chapter, and the number is not negotiable upward.

Here is why. The voice in this book is a compression voice. Short sentences, hard stops, one idea at a time. 4,500 words of short sentences is already about 350 sentences. Every one of them has to earn its spot.

If you find yourself at 4,500 words with more to say, **you are not done writing — you are done cutting.** Cut the weakest example. Cut the third restatement of the main idea. Cut the transitional paragraph that says what's coming next. Depth comes from better examples, not more of them.

Signs you are padding (all forbidden):
- Restating the section's point at the end of the section
- Two examples where one great one would land harder
- A paragraph that summarizes what the reader just read
- "Before we look at X, it helps to remember Y"
- Hedged elaboration on a point already made cleanly

A tight 4,300-word chapter beats a padded 6,000-word chapter every single time. Dr. Lee will notice the difference immediately.

---

## MYST FEATURES — USE THEM

Every chapter must include:

- **`:::{note}` / `:::{tip}` / `:::{warning}` / `:::{important}`** — at least 5 total, mixed
- **`:::{dropdown}`** — at least 2, for optional deeper detail
- **`:::{tab-set}` with `:::{tab-item}`** — at least 1, comparing things side by side
- **`:::{grid} 2` with `:::{grid-item-card}`** — at least 1
- **A mermaid diagram** — at least 1 (```{mermaid} fenced block)
- **`:::{prf:definition}`** — at least 2 formal definitions
- **`:::{list-table}`** — at least 2 tables with headers
- **An epigraph** — `:::{epigraph}` opening quote where it fits
- **Cross-references** — `[](#label)` to figures and to other chapters
- **A worked example** — at least one thing walked through step by step

### NESTED FENCES — KNOWN BUG, READ THIS TWICE

MyST closes a directive at the **first** close marker of matching length. If a nested
directive uses the same number of colons as its parent, the parent closes early and
everything after it renders as a literal code block on the live site.

This shipped to production once already. Do not repeat it.

**WRONG — the tab-set dies at the first inner `:::`**
```
:::{tab-set}
:::{tab-item} A
text
:::
:::
```

**RIGHT — outer fence is longer than inner**
```
::::{tab-set}
:::{tab-item} A
text
:::
::::
```

Rule: **every container that wraps other directives gets one more colon than its
deepest child.** This applies to `tab-set` (wraps `tab-item`) and `grid` (wraps
`grid-item-card`) — the two you are required to use.

Check before reporting done:
```bash
node /home/node/openclaw/skills/book-writer/scripts/check-fences.js chapters/chNN-*.md
```

---

### DOLLAR SIGNS — KNOWN BUG
Any `$` before a digit is parsed as math and renders as garbage. Always escape: `\$500 million`, not `$500 million`. Frontmatter is exempt.

Check before committing:
```bash
grep -nP '(?<!\\)\$[0-9]' chapters/chNN-*.md
```

---

## IMAGES — 12 PER CHAPTER, MANDATORY

Generate with the script. Never write your own image code.

```bash
node /home/node/openclaw/skills/book-writer/scripts/generate-image.js \
  /home/node/openclaw/books/basal-cognition/images/chNN-name.png \
  "<prompt>"
```

**Image 1 is the infographic.** Prompt must include:
> "A professional, comprehensive explainer infographic summarizing [chapter topic]. Clean modern flat design. Clear typography, icons, and flowchart elements. Textbook quality, 16:9 landscape format."

**Every prompt must include these style keywords for cross-chapter consistency:**
> "Professional textbook illustration. Clean modern infographic style. Deep teal and lime green color scheme with slate gray accents. White or very light background. Labeled components with clear typography. Biology and artificial intelligence education context. Wide landscape format, high resolution."

### THE IMAGE MUST CARRY THE IDEA, NOT DECORATE IT

Dr. Lee's verdict on the first draft: **the images are not powerful and do not
reinforce the main concepts.** Technically clean is not the bar. This is.

Before writing any prompt, answer in one sentence: *what single idea does this image
make impossible to forget?* If you cannot answer, do not generate the image.

**Aim for the ONE image per chapter that could go on the cover.** Every chapter should
have at least one figure a reader would screenshot and send to a friend.

What makes an image powerful here:

- **Show the anomaly, not the apparatus.** A labeled diagram of a flagellum is a
  textbook figure. Two worms where there was one worm is an *argument*. Draw the
  thing that shouldn't be possible.
- **Before/after beats annotated cross-section.** The reader's eye does the reasoning
  for you. Half a worm becoming a whole worm. A maze full of mold becoming one clean
  path. A blank frog flank growing an eye.
- **Contrast beats catalogue.** Two panels that disagree teach faster than six panels
  that coexist. If you have six things, ask which two carry the fight.
- **Scale shock is free drama.** Put the single cell next to the thing it built.
- **One idea per image.** If the caption needs "and," split it into two figures.

Anti-patterns that produced the weak first draft:
- Generic icon grids (a brain, a gear, a lightbulb, an arrow) — says nothing
- Flowcharts of the chapter's own section order — that is a table of contents
- Any figure whose caption could be swapped with another figure's caption
- Decorative "AI concept" imagery: glowing circuit boards, blue neural meshes, robot
  heads staring thoughtfully. Banned. They are stock filler.

**Captions do real work.** A caption states what the reader should notice and why it
matters — not what the image contains. Bad: "Diagram of planarian regeneration." Good:
"Cut it in half and each piece rebuilds a whole worm, then stops. The stopping is the
hard part to explain."

**KEEP TEXT IN IMAGES SPARSE — THIS IS THE #1 IMAGE FAILURE.**

Image models garble small text. Reliably. A diagram asking for twenty labels comes
back with "Micressopic," "PROBLIDI SOLVING," and "milrennia." We found nine such
images in chapters 1–4 and had to regenerate them all.

Rules that actually work:

- **Ten labels maximum per image.** Fewer is better.
- **Whitelist them.** End every prompt with the exact permitted strings:
  `The ONLY text in the image is: "Run", "Tumble", "Gradient". No other text, labels, captions, or writing anywhere.`
- **Say each label appears exactly once.** Whitelisting the strings is not enough —
  the model will happily print the same word twice, once as a heading and again as
  an arrow annotation. Add: `Each of these words appears EXACTLY ONCE in the entire
  image and never twice.` and `Do not put a text label on any arrow.`
- **Ban numerals unless the numbers are the point.** "Numbered steps" invites the
  model to miscount — one diagram came back numbered 1,2,3,4,4,5. If a figure does
  not need numbers, write `Absolutely no numbers or numerals anywhere in the image.`
- **Name any word the model tends to mangle and forbid it.** A cell icon labeled
  "Cell" came back as "Gell". If the icon is self-evident, say `Do not write the
  word Cell anywhere` and let the shape do the work.
- **Never write an image constraint in CAPITAL LETTERS.** The landing page graph came
  back with the literal phrase "EXACTLY ONCE" printed as a subtitle beneath all four
  of its labels — the model read the capitalized instruction as label text. Phrase
  constraints as plain lowercase prose: `Each word appears one single time.`
- **Avoid concentric rings, mirrored, or radially symmetric layouts for labeled
  diagrams.** Symmetry invites the model to mirror the labels too; a ring diagram
  printed "Machine" and "Swarm" at both top and bottom. Prefer stacked bars, single
  columns, or left-to-right sequences — layouts that are structurally incapable of
  duplicating a label.
- **Make the hero image wordless.** The single most important image in a chapter or
  on the landing page should carry its idea through composition alone. Zero text means
  zero garble risk on the one image people actually look at. Say
  `This image is entirely wordless.`
- **Never render a table, matrix, or flowchart with branch labels as an image.**
  If it has rows and columns, it is a `list-table`. If it has decision branches, it
  is a `mermaid` block. Both stay searchable, screen-readable, and correct. Two ch08
  images had to be deleted for this. And never place a figure that restates the table
  sitting right beneath it.
- **Do not let a section heading repeat as an icon caption.** Infographics love to
  label the illustration with the same words as the panel title above it. Add:
  `Do not label the individual icons. Do not repeat a heading underneath its own
  illustration.`
- **Never ask for a paragraph inside an image.** If the concept needs sentences,
  it is not a figure — build it as a MyST `list-table`, `grid`, or code block instead.
- **Never ask the model to render code, logs, prompts, or config files.** It cannot.
  Use a fenced code block in the chapter.
- File size over 50KB means the file exists. It does **not** mean the text is legible.
  Size is not a quality check.

**Naming:** `images/chNN-descriptive-name.png` — lowercase, hyphens, PNG only.

**Figure directive — always this form:**
```markdown
:::{figure} ../images/chNN-name.png
:label: fig-chNN-name
:alt: Plain description of what is shown.
:width: 80%
:align: center

Caption that explains why this matters, not just what it is.
:::
```

Exception: the chapter-opening infographic uses `:width: 100%`.

**NEVER** use markdown `![]()`. **NEVER** make an SVG placeholder. **NEVER** reference an image file that doesn't exist.

Every image must teach something. No decoration. If you can't say what a reader learns from it, replace it.

Verify each one:
```bash
ls -la images/chNN-*.png   # each must be >50KB
```

---

## CONTENT ACCURACY

The science here is real. Anchor to it:

- **Michael Levin** (Tufts) — TAME framework, bioelectric pattern control, planarian regeneration, xenobots/anthrobots
- **Josh Bongard** (Vermont) — xenobot design via evolutionary algorithms
- **Physarum polycephalum** — Nakagaki 2000 maze solving; Tero 2010 Tokyo rail network
- **Habituation criteria** — Rankin et al. 2009, *Neurobiology of Learning and Memory*: the ten hallmarks, including spontaneous recovery and dishabituation
- **Single-cell habituation** — *Stentor roeselii*, Jennings 1906; recent work by Dexter, Prabakaran & Gunawardena (2019)
- **Anthrobots** — Gumuskaya et al. 2023, human tracheal cells self-assembling into motile constructs
- **Two-headed planaria** — bioelectrically induced, stable through subsequent regenerations with unaltered genome
- **William James** — intelligence as "the pursuit of the same end by different means" (1890)

Do not invent studies. Do not invent numbers. If you're unsure of a figure, describe it qualitatively instead. Case examples about AI systems should reflect 2025–2026 reality (agentic workflows, tool-calling agents, multi-agent orchestration, long-context assistants).

---

## AI CONNECTION — EVERY CHAPTER

This is not a biology book with an AI chapter bolted on. Every chapter earns its place by connecting the biology to machines. Each chapter must include one substantial section (400–600 words) applying the idea to AI systems, and it must be *useful*, not decorative. Concrete failure modes. Real design patterns. Things an engineer could act on Monday.

Keep it tight. One sharp, specific application beats a survey of five vague ones.

---

## WORKFLOW

1. Read your chapter's existing skeleton file — it has the section plan and image plan. Follow it, improve it where you can.
2. Read `index.md` for the book's framing and voice.
3. Write the full chapter over the skeleton file (same filename).
4. Escape dollar signs.
5. Generate all 12 images.
6. Write `quizzes/chNN-quiz.md` (10 multiple choice + 3 short answer, answers in dropdowns).
7. Write `notebooks/chNN-lab-slug.ipynb` for the advanced lab (valid JSON, install cell, imports, TODO scaffolding, deliverable cell).
8. Validate:
   ```bash
   node /home/node/openclaw/skills/book-writer/scripts/validate-chapter.js \
     /home/node/openclaw/books/basal-cognition chapters/chNN-slug.md
   ```
   Exit code 1 means STOP and fix. Do not proceed with errors.
9. **Do NOT commit or push.** The orchestrator handles git. Just leave clean files on disk.
10. Report back: word count, image count with file sizes, validation result, anything broken.

---

## SELF-CHECK BEFORE YOU REPORT DONE

**Voice and engagement (the part that got rejected last time):**
- [ ] Opening hooks on a concrete anomaly, ideally with a number. Not a topic sentence.
- [ ] The shape of the answer is named early ("three things," "two mechanisms")
- [ ] **6–9 soundbites**: standalone bolded lines, under 15 words, each quotable alone
- [ ] At least **two** places where you raise the smart reader's objection and answer it
- [ ] Mechanism explained at real depth — ion channels, gap junctions, actual biology
- [ ] Scientists named with years, inline
- [ ] Chapter ends by elimination or with a door-closing line, not a summary
- [ ] Read the opening out loud. Is it a TED talk opening? If not, rewrite.
- [ ] No baby talk. No "pretty wild, right?" No congratulating the reader.
- [ ] Would a sharp 17-year-old follow it? Would a grad student not feel talked down to?

**End matter (all four required, none stubbed):**
- [ ] 🔬 Hands-On Lab — no-code, browser only
- [ ] 🛠️ Build It — BOTH Path A (Colab) and Path B (full copy-pasteable vibe-code prompt)
- [ ] 🔍 Research Frontier — real open question, 3–4 verifiable real citations, 2-page paper
- [ ] ⚙️ Applied Exercise — concrete deliverable, fully specified, 10 pts
- [ ] Zero occurrences of "provided in class"
- [ ] Notebook filename is real and descriptive, badge URL matches, file exists

**Images:**
- [ ] 12 images exist on disk, all referenced, none is a table or branch-flowchart
- [ ] For each: you can state in one sentence the idea it makes unforgettable
- [ ] At least one image is cover-quality
- [ ] Zero glowing-circuit / robot-head / neural-mesh stock filler
- [ ] Captions say what to notice and why it matters, not what the image contains
- [ ] Every prompt whitelisted its labels, said each appears exactly once, banned
      stray numerals, and put no text on arrows
- [ ] **You did NOT self-certify the images as clean.** Report them for independent
      review instead. Every prior chapter reported 12/12 clean and every one had at
      least one defect. You cannot proofread your own image text. File size proves
      nothing — corrected images are often smaller.

**Mechanics:**
- [ ] Word count 4,000–5,000 (`wc -w`) — if over, CUT, don't justify
- [ ] Zero banned words (grep for a few)
- [ ] No paragraph over 5 sentences
- [ ] Every core concept has all 5 formula steps
- [ ] No unescaped `$` before digits
- [ ] Glossary has 15+ terms
- [ ] No quiz content in the chapter file; quiz written separately
- [ ] check-fences.js passes
- [ ] validate-chapter.js exits 0
