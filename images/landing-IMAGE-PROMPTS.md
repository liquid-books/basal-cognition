# Landing Page Image Prompts

## 1. landing-hero-anomaly.png

**Idea it makes unforgettable:** Cut one flatworm into 279 pieces, and each piece becomes a complete animal — then every one of them stops.

**Prompt:**
A professional textbook illustration, clean modern infographic style, deep teal and lime green color scheme with slate gray accents, white background, wide landscape format, high resolution. Three-panel horizontal sequence showing flatworm regeneration. Left panel: a single intact flatworm, dark teal color, worm-shaped, elongated. Center panel: the same worm split cleanly into three fragments by two horizontal cuts, each fragment shown separate. Right panel: each of the three fragments has fully regenerated into a complete, intact worm — three complete worms where there was one. Each complete worm in the right panel has a lime green dot at its head end. No arrows between panels. Thin slate gray vertical dividers separate the three panels. The ONLY text in the image is: "One worm" appearing EXACTLY ONCE below the left panel, "Three fragments" appearing EXACTLY ONCE below the center panel, "Three worms" appearing EXACTLY ONCE below the right panel. Each label appears EXACTLY ONCE and never twice. Do not put any text on arrows. Absolutely no other numbers, numerals, or labels anywhere in the image. Do not label individual worm parts. No glowing effects, no robot imagery, no circuit boards, no neural meshes.

---

## 2. landing-six-ideas.png

**Idea it makes unforgettable:** The same cognitive property — goal-directed, error-correcting behavior — appears at every level of biological scale, from single molecule to organism to machine.

**Prompt:**
A professional textbook illustration, clean modern infographic style, deep teal and lime green color scheme with slate gray accents, white background, wide landscape format, high resolution. A vertical scale ladder running left-to-right across the image, showing six levels of biological organization from bottom-left (smallest) to top-right (largest). Each level is represented by a simple clean icon: bottom-left shows a single small circle (molecule/cell), then a cluster of circles (tissue), then an organ shape, then a full organism silhouette, then a group of organism silhouettes, then a network of connected nodes at top-right (collective/machine). Each icon sits on a stepped platform that rises from left to right like a staircase. A single continuous lime green horizontal arrow runs beneath all six steps pointing right. The steps are deep teal. Slate gray connecting lines join adjacent steps. The ONLY text in the image is six short labels, one per step: "Cell" EXACTLY ONCE, "Tissue" EXACTLY ONCE, "Organ" EXACTLY ONCE, "Organism" EXACTLY ONCE, "Collective" EXACTLY ONCE, "Network" EXACTLY ONCE. Each label appears EXACTLY ONCE. No text on any arrow. Absolutely no other numerals or labels. Do not add decorative flourishes, glowing effects, robot imagery, circuit boards, or neural meshes.

---

## 3. landing-the-experiment.png

**Idea it makes unforgettable:** A true learning system's response declines with repetition but snaps back after rest — and that recovery is what separates learning from exhaustion.

**Prompt:**
A professional textbook illustration, clean modern infographic style, deep teal and lime green color scheme with slate gray accents, white background, wide landscape format, high resolution. A single smooth line graph showing response magnitude on the vertical axis and time on the horizontal axis. The curve starts high on the left. It declines steeply across the first section as repeated identical stimuli are given — this section of the line is deep teal. Then there is a gap in the horizontal axis marked by a shaded slate gray vertical band labeled "Rest" EXACTLY ONCE. After the rest band, the line rises back up sharply — a spontaneous recovery peak — in lime green. Then the line declines again gradually. At the right end of the chart, a single vertical lime green spike shoots upward, taller than the recovery peak, labeled "Novel stimulus" EXACTLY ONCE. The vertical axis is labeled "Response" EXACTLY ONCE. The horizontal axis is labeled "Time" EXACTLY ONCE. The ONLY text in the image is: "Response" EXACTLY ONCE, "Time" EXACTLY ONCE, "Rest" EXACTLY ONCE, "Novel stimulus" EXACTLY ONCE. Each label appears EXACTLY ONCE and never twice. No text on any arrow or on the curve itself. Absolutely no other numbers, numerals, or labels anywhere. No glowing effects, no robot imagery, no circuit boards, no neural meshes. Clean white background, thin axis lines in slate gray.

---

## Review notes — all three regenerated once

- `landing-the-experiment.png` — **NEW FAILURE MODE.** The first pass printed the
  literal phrase "EXACTLY ONCE" as a subtitle under all four labels. The constraint
  `Each appears EXACTLY ONCE` was written in caps, and the model read the caps as
  label text rather than as an instruction. Fix: phrase constraints as plain prose
  ("Each word appears one single time") and never put an instruction in caps.
- `landing-six-ideas.png` — regenerated twice. First pass was a stock corporate
  staircase (the exact anti-pattern the brief bans). Second pass used concentric
  rings, which mirrored the outer labels top and bottom and printed "Machine" and
  "Swarm" twice. Concentric layouts invite mirrored duplication — use a layout that
  is structurally incapable of it. Final version: six stacked bars, icon-free.
- `landing-hero-anomaly.png` — regenerated. First pass was flat clip art with three
  worms. Final is a wordless dark-background piece, one glowing worm becoming dozens.
  Making it entirely wordless removes all text-garbling risk from the most important
  image in the book.
