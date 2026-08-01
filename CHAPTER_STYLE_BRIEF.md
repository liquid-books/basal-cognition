# CHAPTER_STYLE_BRIEF.md — Basal Cognition

**Read this completely before writing a single word.**

Book: *Basal Cognition — How Intelligence Works Without a Brain, and What That Means for Machines*
Author: Dr. Ernesto Lee
Site: BasalCognition.com
Repo: https://github.com/liquid-books/basal-cognition
Local: `/home/node/openclaw/books/basal-cognition/`

---

## THE VOICE — THIS IS THE WHOLE JOB

Dr. Lee gave us the target voice directly. Study it:

> Things without brains still act smart. A cell moves toward food. A cut on your arm closes up in the right shape. Mold in a dish finds the shortest path through a maze. Nobody told them how. They just do it.
>
> Basal intelligence is the study of that.
>
> The big idea: being smart isn't something brains invented. Brains just made it bigger.
>
> A germ cares about right here, right now. A cell in a baby cares about building a whole hand over weeks. You can care about your kids' future. That range — how big and how far — is the main thing to measure.
>
> Cancer is interesting here. A cancer cell used to care about the whole liver. Now it only cares about itself. It didn't get dumber. Its circle of caring shrank.

Notice what that does:

1. **Short sentences.** Many are under ten words. "They just do it." "That's it. That's the learning."
2. **Concrete before abstract.** The bacterium comes first. The word *chemotaxis* comes later, or never.
3. **No hedging.** No "arguably," "it could be suggested that," "in some sense."
4. **Plain words.** "Circle of caring," not "cognitive light cone" — the technical term is introduced *after* the plain one, once, and then you can use it.
5. **Surprise is the engine.** Every few paragraphs the reader should think *wait, what?* Cut a worm in half and get two worms. One giant cell curls around itself to make the tube. Skin cells build a swimming animal.
6. **Second person.** Talk to the reader. "You ignore the fridge hum." "Cut the sharing and one worm becomes two."

### Hard rules on prose

- **Average sentence length under 15 words.** Vary it — some 4-word sentences, some 25-word ones. But if you write three long sentences in a row, break one.
- **No paragraph longer than 5 sentences.** Most should be 2–4.
- **Ban list — never use these words or phrases:**
  `delve, leverage, robust, paradigm, tapestry, landscape (figurative), navigate (figurative), unpack, harness, realm, testament, underscore, pivotal, crucial, myriad, plethora, moreover, furthermore, it is worth noting, in today's world, in the modern era, at its core, fundamentally, essentially, arguably, multifaceted, holistic, synergy, game-changer, revolutionize, cutting-edge, seamless, dive deep, deep dive, journey, embark, foster, facilitate, utilize, elucidate, nuanced interplay`
- **Ban em-dash overuse.** Max one em-dash per paragraph.
- **No "Let's explore..." / "In this section we will..."** Just start.
- **No rhetorical question stacks.** One rhetorical question per section maximum.
- **Numbers stay concrete.** "Cut a flatworm into 279 pieces and you get 279 worms" beats "flatworms display remarkable regenerative capacity."

### The 5-step concept formula (MANDATORY for every core concept)

Every core idea gets this treatment, in this order:

1. **Something they already know.** A fridge hum. A thermostat. A GPS. A group chat. A kid learning to ride a bike.
2. **Build the bridge.** Show how that maps onto the biology.
3. **Name it.** *Now* give the technical term. Anchor it to the analogy.
4. **Where the analogy breaks.** One honest sentence. This buys trust.
5. **Why it matters.** Not "why a CFO cares" — why *anyone* cares. What becomes possible? What does it fix? What does it predict that the old view got wrong? Make the reader feel the weight. One solid paragraph, concrete, with real stakes.

### The 9th-Grader Test

Could a bright 14-year-old follow this with zero biology background? If no, rewrite. Not dumbed down. Genuinely clear. There is a difference and the reader can feel it.

### The Dinner Table Test

Could the reader explain this to a friend over dinner, with no notes and no diagram? If the explanation needs a picture to work, the words aren't good enough yet. The picture should *reinforce*, never *rescue*.

---

## AUDIENCE

Everyone. Truly. A curious high schooler, a nurse, a software engineer, a philosopher, a retired teacher. No biology background. No physics. No math beyond "bigger and smaller."

Do NOT write this for executives. Do NOT write "for business leaders." No CFO framing, no board decks, no ROI paragraphs. When you need to show why something matters practically, use engineers, doctors, teachers, or anyone building AI systems — real people doing real work.

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

**Group Build:**
1. Use AI to identify a real problem in your own context.
2. Use AI to develop a solution to it.
3. Be ready to tell the class: what problem, how AI helped, what the solution looks like, and what the AI got right or missed.

## 🐍 Optional Advanced Lab: [Title]
<a href="https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/chNN-lab-slug.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" style="margin-bottom: 1rem;"/>
</a>

[Description of what they'll build.]

## 🎯 In-Class Assignment: [Title] (10 pts)

**Details and instructions will be provided in class.**

**Points:** 10

## 📖 Glossary
[15+ terms. Definitions in the same plain voice. Use a list-table or definition list.]

## 🔑 The Takeaway
[5–8 bullets. Each one a short punchy sentence someone would actually remember.]
```

### Absolute structural rules

- **NO quizzes or multiple-choice in the chapter file.** Write them to `quizzes/chNN-quiz.md` instead. Format: one file, questions, then answers embedded in `:::{dropdown}` blocks. That file is NOT in the TOC.
- **In-Class Assignment gets title + "Details provided in class" + points. NOTHING ELSE.**
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

- [ ] Word count 4,000–5,000 (`wc -w`) — if over, CUT, don't justify
- [ ] 12 images exist on disk, all >50KB, all referenced
- [ ] Zero banned words (grep for a few)
- [ ] No paragraph over 5 sentences
- [ ] Every core concept has all 5 formula steps
- [ ] No unescaped `$` before digits
- [ ] Glossary has 15+ terms
- [ ] In-Class Assignment is title + "provided in class" + points, nothing more
- [ ] No quiz content in the chapter file
- [ ] Quiz file written separately
- [ ] Colab notebook written and badge URL matches the filename
- [ ] validate-chapter.js exits 0
- [ ] Read your opening 3 paragraphs out loud. Do they sound like Dr. Lee's sample? If not, rewrite them.
