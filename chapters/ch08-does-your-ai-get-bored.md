---
title: "Does Your AI Get Bored?"
subtitle: "The habituation experiment nobody has run yet"
short_title: "Does Your AI Get Bored?"
description: "You stop hearing the refrigerator hum. That is habituation — the simplest form of learning there is, and it comes with a strict checklist that separates real learning from mere fatigue. Slime mold passes it. Single cells pass it. Nobody has run it on AI agents. This chapter hands you the protocol, the analysis plan, and the reason it matters: an assistant that stops flagging the alert it has seen forty times is a production incident waiting to happen."
label: ch-08-does-your-ai-get-bored
tags: [habituation, experiment, protocol, alert-fatigue, research-design]
---

# Does Your AI Get Bored?

:::{warning} Chapter In Progress
This chapter has not been written yet. What follows is the working outline — the core claim, the sections planned, and the key sources. It is published so the book's structure is visible, not as finished reading.
:::

## Chapter Plan

**Core claim of the chapter:** Habituation has rigorous, agreed-upon diagnostic criteria that have been applied across the tree of life down to organisms without a single neuron. Those criteria have never been systematically applied to LLM-based agents. They can be, cheaply, and the results would matter operationally.

### Sections to write

1. **The refrigerator hum** — Open with the phenomenon everyone has experienced. Then the discipline: habituation is not boredom, not fatigue, not sensor failure. It is learning, and it has a definition.
2. **The classical criteria** — The full checklist as established in comparative psychology (Thompson & Spencer; refined by Rankin et al.). Cover all of them, with the two that carry the most weight for this study:
   - **Spontaneous recovery** — remove the stimulus, rest the system, and the response returns. Fatigue does not do this.
   - **Dishabituation** — introduce a novel, strong stimulus and the habituated response snaps back immediately. A depleted system cannot do this.
   - Plus: frequency effects, intensity effects, stimulus specificity, potentiation of habituation, below-zero habituation, generalization.
3. **Habituation without neurons** — The prior art. *Physarum* habituating to bitter-but-harmless quinine and caffeine, with spontaneous recovery demonstrated. *Stentor*'s classic avoidance-response decline. Single-cell and molecular-network models. Why these results are what make the AI question well-posed rather than whimsical.
4. **Why AI agents are a live case** — The mechanistic candidates for habituation-like behavior in LLM agents: in-context repetition effects, attention distribution over repeated tokens, induction-head dynamics, memory-summarization decay, and explicit engineered dedup logic. Note carefully which of these would be *learning* and which would be plumbing — the criteria are designed to tell them apart.
5. **The protocol** — The core of the chapter. Fully specified:
   - **Setup:** an agent in a monitoring role with a defined response channel (flag / escalate / summarize)
   - **Stimulus:** a repeated alert, held constant in content and format
   - **Phase 1 — Acquisition:** N repetitions; measure response strength per trial (flag rate, escalation language, token count devoted to the alert, explicit dismissal)
   - **Phase 2 — Rest:** defined interval with no stimulus; then re-present. Test spontaneous recovery.
   - **Phase 3 — Dishabituation:** novel high-salience stimulus, then re-present the original. Test recovery.
   - **Controls:** context-length control, token-budget control, randomized-order control, fresh-session baseline, non-agentic single-turn baseline
   - **Operational definitions:** exactly how "response strength" is scored, with an inter-rater plan
6. **Analysis plan** — What curve shape counts as habituation, what counts as fatigue, what counts as neither. Pre-registered predictions for each criterion. How to report a null result honestly.
7. **Why anyone cares** — The operational stakes. Alert fatigue in security operations, monitoring agents, code review bots, content moderation pipelines. If an agent's flagging behavior decays with repetition, every long-running deployment has a silent failure mode nobody is measuring.
8. **The fix biology already found** — Spacing and variation. Distributed presentation slows habituation; stimulus variation prevents it; dishabituating events reset it. Concrete mitigations for agent deployments, derived from the biological literature rather than invented.
9. **Cost, scope, and who should run this** — API calls and time. A well-supervised student can execute it in a semester. Extension paths: sensitization, associative learning, and the rest of the ladder.

### Concepts requiring the 5-step plain-language treatment
- Habituation vs. fatigue vs. sensory adaptation
- Spontaneous recovery as the discriminating test
- Dishabituation as the second discriminating test

### Image plan
1. Infographic — "Does Your AI Get Bored?" chapter overview
2. The refrigerator hum — response decay curve
3. Habituation vs. fatigue vs. adaptation, three curves compared
4. The full criteria checklist as a visual table
5. Spontaneous recovery — the signature that rules out fatigue
6. Dishabituation — the snap-back
7. *Physarum* habituating to quinine, experimental setup
8. *Stentor* avoidance-response decline
9. Candidate mechanisms in LLM agents, layered diagram
10. The three-phase protocol, full flowchart
11. Control conditions matrix
12. Predicted result patterns and how to read them
13. Spacing and variation as mitigations, applied to agent design

### Chapter closes with
- Productive-Struggle Problem
- Discussion Guidelines
- Hands-On Lab + Group Build
- **Optional Advanced Python Lab + Colab badge** — this one is the real experiment: a runnable notebook that executes the three-phase protocol against an API and plots the response curves
- Glossary (15+ terms)
- Leader's Takeaway + closing passage for the book

*Quiz lives in `quizzes/ch08-quiz.md`.*
