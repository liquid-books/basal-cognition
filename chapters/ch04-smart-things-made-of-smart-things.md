---
title: "Smart Things Made of Smart Things"
subtitle: "Every level says what, and lets the level below figure out how"
short_title: "Made of Smart Things"
description: "Your cells are a little smart. They build tissue that is smarter. That builds organs, then you. The newt proves it: give it giant cells and it uses fewer of them to build the same tube — and one enormous cell will curl around itself and build the tube alone. Nobody sent new instructions. This chapter is about multi-scale competency architecture, and why it is the design pattern for every agent system worth building."
label: ch-04-smart-things-made-of-smart-things
tags: [multi-scale-competency, hierarchy, newt, agents, TAME]
---

# Smart Things Made of Smart Things

<!-- INFOGRAPHIC: opening explainer covering the chapter's core concepts -->

> **Status:** skeleton. Target 6,500 words, 10–12 images.

## Chapter Plan

**Core claim of the chapter:** Living systems are not hierarchies of dumb parts following detailed instructions. They are nested stacks of competent agents, where each level specifies *outcomes* and the level below solves for *means*. This is the most directly transferable idea in the book.

### Sections to write

1. **The newt tubule experiment** — Lead with it, in detail. Polyploid newts, larger cells, same kidney tubule. Fewer cells used. Then the extreme case: one giant cell wraps around itself to make the tube solo. No new genetic instructions were issued. Sit in the strangeness before explaining.
2. **What the experiment rules out** — Explicitly kill the "genome as blueprint" reading. A blueprint specifying cell positions would fail here. Something is specifying the *target shape* and letting the hardware improvise.
3. **Multi-scale competency architecture (MCA), defined** — The formal idea. Each level: has goals, has error-correction, has partial autonomy, is made of levels that also have those things.
4. **How levels talk** — Outcome specification downward, status and constraint upward. Why this is not micromanagement and why it cannot be.
5. **The robustness dividend** — Why MCA systems tolerate damage, novelty, and hardware substitution that designed systems cannot. Concrete cases across scales.
6. **The cost of MCA** — Honest accounting. You lose predictability, you lose direct control, you gain surprise behaviors. Sometimes the level below solves your problem in a way you hate.
7. **MCA in AI architectures** — Orchestrator/sub-agent patterns read through this lens. Why "specify the goal, not the steps" works. Why over-specified agent prompts produce brittle agents. The 2026 agent-team landscape as an accidental rediscovery of MCA.
8. **Designing for competent subordinates** — A practical rubric: what to specify, what to leave open, how to detect when a level is under-competent for the goal it was handed.

### Concepts requiring the 5-step plain-language treatment
- Multi-scale competency architecture
- Outcome specification vs. process specification
- The robustness/predictability tradeoff

### Image plan
1. Infographic — "Smart Things Made of Smart Things" chapter overview
2. The newt tubule — normal cells vs. polyploid cells vs. one giant cell
3. Blueprint model vs. target-morphology model, side-by-side
4. The competency stack: molecule → cell → tissue → organ → organism
5. Information flow diagram — outcomes down, status up
6. Micromanagement vs. delegation, failure comparison
7. Robustness under damage — MCA vs. designed system
8. The cost side: unpredictability and surprise solutions
9. Orchestrator + sub-agent architecture mapped onto MCA
10. Over-specified vs. outcome-specified agent prompt, annotated
11. Under-competent subordinate — diagnostic signature
12. Design rubric: what to specify at each level

### Chapter closes with
- Productive-Struggle Problem
- Discussion Guidelines
- Hands-On Lab + Group Build
- Optional Advanced Python Lab + Colab badge
- Glossary (15+ terms)
- Leader's Takeaway

*Quiz lives in `quizzes/ch04-quiz.md`.*
