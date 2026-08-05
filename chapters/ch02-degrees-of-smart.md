---
title: "Degrees of Smart"
subtitle: "A clock, a dog, a person — and the right tool for each"
short_title: "Degrees of Smart"
description: "Smartness comes in degrees, and the degree tells you which lever to pull. You fix a clock with tools, train a dog, and talk to a person. This chapter turns that intuition into an engineering discipline — the persuadability spectrum — and shows why picking the wrong lever is the most common failure in both medicine and AI deployment."
label: ch-02-degrees-of-smart
tags: [persuadability, cybernetics, TAME, control, levels-of-agency]
---

# Degrees of Smart

:::{figure} ../images/ch02-infographic.png
:label: fig-ch02-infographic
:alt: A horizontal spectrum from "zero agency" on the left to "full agency" on the right, with a clock, thermostat, single cell, trained dog, and human placed along it. Each position is labeled with its matching intervention type — physical fix, signal, training, conversation.
:width: 100%
:align: center

The persuadability spectrum. Every system sits somewhere on it. Pick the intervention that matches where it sits — not the one you're most comfortable with.
:::

Your clock stopped. You open the back and move a gear.

Your dog won't stop jumping on guests. You can't open the back and move a gear. You have to train him. That takes weeks of repeated signals, rewards, and timing.

Your teenager won't stop staying up until 2 AM. You can't reprogram him. You can't really train him either. You have to talk. You make your case. He might agree. He might not.

Three problems. Three completely different approaches. And here is the key: each approach works *because* of what the system is, not just what you prefer. Swap the tools and everything breaks. Try to train the clock and nothing happens. Try to move a gear in your teenager and you will need a lawyer.

The degree of smartness tells you what kind of intervention actually lands.

## The Spectrum

Picture a line. On the far left: a gear. On the far right: you.

Everything in the universe sits somewhere on that line. Not in a category — on a continuum. The line measures one thing: how much of the problem-solving does the system do for you once you give it input?

A gear does none of it. You move the gear. The gear moves.

A thermostat does a little. You set 72°F. It measures, compares, switches. Small loop. Dumb loop. But a loop.

:::{figure} ../images/ch02-thermostat-minimal.png
:label: fig-ch02-thermostat-minimal
:alt: A thermostat dial set to 72 degrees F, connected by arrows to a feedback loop showing sensor, compare, and switch steps. Labeled "the minimum unit of goal-directed behavior."
:width: 80%
:align: center

The thermostat is the smallest goal-directed system worth studying. It has a target state, a sensor, and a corrective action. Everything on the right side of the spectrum does something like this — but richer, faster, and with goals that weren't hard-coded in.
:::

A bacterium does more. You change the chemistry of the water. The bacterium senses the gradient and swims. It runs its own algorithm. You just changed the environment.

A trained dog does more still. You say "sit." Years of paired signals are now compressed into that word. The dog runs an internal simulation and decides.

A person does the most. You present an argument. They model your goals, their goals, the future, the past, and what their friends would think — and then they decide.

:::{figure} ../images/ch02-spectrum.png
:label: fig-ch02-spectrum
:alt: A labeled horizontal continuum from a mechanical gear on the left to a human figure on the right, with icons for thermostat, bacterium, trained dog placed in between. Below each icon, a label names the intervention type.
:width: 80%
:align: center

Five positions on the persuadability spectrum. The farther right a system sits, the less you need to specify — and the more you need to communicate.
:::

This is the **persuadability spectrum**. Michael Levin's TAME framework calls the right end of it "persuadable systems" — things you can influence by sending a signal and letting the system figure out the rest. The left end is "mechanistic systems" — things you have to specify in full.

The useful move is not memorizing which things go where. It's developing the reflex to ask: *before I choose my intervention, where does this system actually sit?*

:::{prf:definition}
:label: def-persuadability-spectrum

**Persuadability spectrum:** A continuum measuring how much internal problem-solving a system performs in response to input. At the mechanistic end, the system is fully specified by its structure and the intervention must physically alter that structure. At the persuadable end, the system holds goals and strategies internally; an effective intervention presents a target or incentive and lets the system find the path.
:::

## The Four Rough Tiers

The continuum is continuous. But four rough tiers are useful for thinking:

::::{tab-set}

:::{tab-item} Tier 1 — Mechanisms
**Example:** A clock. A lever. A thermostat.

What makes them mechanisms: they have no internal model of a goal. They execute a physical rule. You change the outcome by changing the physical structure.

**Intervention:** Rewire. Replace the part. Move the gear.

**What doesn't work:** Asking. Rewarding. Signaling. None of it registers. The clock doesn't hear you.
:::

:::{tab-item} Tier 2 — Reactive Systems
**Example:** A bacterium. A simple immune cell. A basic reflex arc.

What makes them reactive: they have a small sensorimotor loop. Input → internal state change → output. They don't plan. But they do *compute*.

**Intervention:** Change the environment, not the machinery. Alter the chemical gradient. Introduce a new signal. The system does the rest.

**What doesn't work:** Training. Long sequences of paired stimuli don't stick here. There's no associative memory. You can't negotiate with a neutrophil.
:::

:::{tab-item} Tier 3 — Trainable Systems
**Example:** A mouse. A dog. A crow. Maybe an octopus.

What makes them trainable: they have associative memory. They link stimuli to outcomes over time. They can generalize. They can be surprised.

**Intervention:** Repeated signals with feedback. Timing matters. Consistency matters. You are, slowly, reshaping the internal model.

**What doesn't work:** One-off instructions. Abstract argument. "Look, statistically your behavior is suboptimal" does nothing to a dog.
:::

:::{tab-item} Tier 4 — Persuadable Systems
**Example:** A human adult. Possibly some great apes. Possibly some of the more capable AI systems.

What makes them persuadable: they have a model of the future, a model of other minds, and the ability to update both based on evidence and argument.

**Intervention:** Communication. Make the case. Give a goal, not a script.

**What doesn't work well:** Over-specification. If you tell a persuadable system *exactly* what to do at every step, you have converted them into a Tier 1 mechanism — and you are now doing all the problem-solving yourself.
:::

::::

:::{figure} ../images/ch02-four-tiers.png
:label: fig-ch02-four-tiers
:alt: Four stacked horizontal rows, each labeled with a tier name and icon. Tier 1 shows a clock gear, Tier 2 a bacterium, Tier 3 a dog, Tier 4 a human. Each row has a brief description and intervention type.
:width: 80%
:align: center

The four tiers are rough categories cut from a smooth continuum. Most interesting systems sit between tiers — the useful question is always "which direction does this system lean?"
:::

## The Wrong Lever

Here is where things go wrong. And they go wrong constantly.

The most common mistake is not using the *wrong* tool on the right tier. It's not knowing which tier you're dealing with in the first place. So you bring the wrong tool entirely.

:::{warning}
**The most expensive mistake in any control problem** is choosing the intervention depth that matches your *comfort* rather than the system's *nature*.

Engineers reach for Tier 1 fixes because they feel clean and controllable. Doctors reach for Tier 1 fixes (drugs, surgery) because that's the training. Managers reach for Tier 4 fixes (conversation, persuasion) on Tier 3 problems because they want to avoid conflict. Every one of these is a mismatch.
:::

Consider the hardware fix on a persuadable system. You want your employees to follow a new safety protocol. So you write a 47-page manual specifying every action in sequence. You've tried to turn Tier 4 humans into Tier 1 mechanisms. What happens? They follow the manual when someone is watching. They improvise the rest of the time. The protocol fails in the exact situations where it matters most — the novel ones the manual didn't anticipate.

Now the opposite mistake. You want a production server to stay within a memory budget. You don't change the code. Instead you "motivate" it. This sounds ridiculous, but people do the computational equivalent: they add logs, add dashboards, add alerts — all aimed at *informing* a system that has no goal-pursuit capability. The server doesn't read the dashboard. It just uses memory.

:::{figure} ../images/ch02-wrong-lever.png
:label: fig-ch02-wrong-lever
:alt: A 2x2 matrix with "Intervention Type" on the x-axis (Mechanistic / Persuasive) and "System Type" on the y-axis (Mechanism / Persuadable). The top-left and bottom-right cells are labeled "Match — works." The top-right cell says "Magical thinking." The bottom-left cell says "Over-specification."
:width: 80%
:align: center

Two of the four quadrants work. Two don't. Most expensive failures live in the bottom-left: trying to fully specify the behavior of a system that is capable of doing its own problem-solving.
:::

## The Cell as a Trainable System

Now the pivot that makes this biological.

You have a skin cell. You want it to become an eye.

Option one: you edit the DNA. Specify every gene expression, every protein, every timing signal. That's Tier 1 thinking applied to a biological cell. It's hard, it's fragile, and if you get any part of the sequence wrong, the whole thing collapses.

Option two: you send a bioelectric signal.

Michael Levin's lab at Tufts did exactly this. Using tiny electrodes, they altered the bioelectric state of tissue in tadpoles. The cells read the signal, ran their own developmental program, and built a functional eye — not where eyes normally form, but wherever the signal was delivered. The genome didn't change. No gene editing. One signal. The cell did the rest.

That's Tier 2 being treated like Tier 2. The cell is not a mechanism. It is a reactive system with a built-in developmental program. You don't specify the eye. You *request* the eye. The cell knows how to build it.

:::{figure} ../images/ch02-bioelectric-eye.png
:label: fig-ch02-bioelectric-eye
:alt: A schematic of a tadpole with a small electrode delivering a signal to flank tissue. An arrow leads to the outcome — a secondary eye forming in an unexpected location. Labels compare gene-editing depth vs signal depth.
:width: 80%
:align: center

A bioelectric signal to the right tissue produces a whole eye — without touching the genome. The intervention matched the tier of the system. The cell handled the specification internally.
:::

The same logic applies to limb regeneration. Salamanders regrow lost limbs. Frogs mostly don't. The difference is not in the DNA — frogs have the same genes salamanders use for regeneration. The difference is in the bioelectric state. Levin's group applied bioelectric signals to frog stumps and got partial limb regrowth. The instruction was a signal, not a blueprint.

This is not a trick. It is what the system is designed for.

:::{tip}
The cell tier sits between Tier 1 and Tier 2. A single cell is a reactive system — it runs sensorimotor loops, senses gradients, and adjusts. A group of cells communicating via bioelectric signals behaves more like Tier 3 — capable of learning simple associations, building persistent state across time. Chapter 4 covers this in depth.
:::

:::{prf:definition}
:label: def-bioelectric-signaling

**Bioelectric signaling:** The use of ion flows, membrane voltage, and gap junctions to transmit information between cells and coordinate tissue-level behavior. The target tissue reads the signal and executes a built-in developmental subroutine — the signal specifies a *goal state*, not a *construction procedure*. Levin's lab has used this to induce eye formation, alter body plan symmetry, and repair cancerous tissue without gene editing.
:::

## Intervention Depth vs. Payoff per Unit Effort

There's a curve here worth seeing clearly.

As you move left on the persuadability spectrum — toward mechanisms — your intervention depth has to increase. You have to specify more. You have to touch more of the system. But your payoff per unit of effort drops. Each additional gear you adjust gets harder and yields less.

As you move right — toward persuadable systems — your intervention can be shallower. One well-chosen signal. One clearly stated goal. But the payoff is enormous. The system does the problem-solving. A good argument reaches a person and changes dozens of downstream behaviors automatically.

:::{figure} ../images/ch02-depth-leverage.png
:label: fig-ch02-depth-leverage
:alt: A graph with two crossing curves. The x-axis is the persuadability spectrum from left (mechanistic) to right (persuadable). One curve labeled "Required Intervention Depth" falls from left to right. A second curve labeled "Payoff per Unit Effort" rises from left to right. They cross in the middle.
:width: 80%
:align: center

Intervention depth and payoff run in opposite directions. The cell tier is near the crossing point — one signal can trigger enormous downstream computation. This is why bioelectric intervention is so interesting economically.
:::

This curve has a practical name in control theory: *minimum effective intervention*. You want to intervene at the *minimum depth that achieves the goal*. Going deeper than necessary wastes effort and — critically — removes the benefits of the system's own intelligence.

If the system is smart enough to figure out the path, let it. Your job is to give it a destination, not a turn-by-turn script.

:::{note}
**The cancer exception.** Cancer is a case where a cell's persuadability has dropped. A cancer cell was once part of a cooperative tissue — Tier 3 or higher. Its bioelectric connectivity to neighbors shrank. Its goal collapsed to "me, now." Levin's work shows that restoring bioelectric connectivity sometimes pulls cancer cells back into cooperative behavior without killing them. You are not fighting the cancer cell. You are persuading it to rejoin a higher-tier collective. This is Tier 2 intervention on what had been a Tier 3 participant.
:::

## Regenerative Medicine as a Control Problem

Oncology and regenerative medicine are, in this frame, control engineering problems.

The current model says: find the bad molecule, block it, or fix the gene. That's Tier 1 thinking. It works for some problems. It fails for complex morphological ones — why did the limb form wrong, why is the tissue the wrong shape — because those problems involve the tissue's internal goal state, not a single molecular defect.

The alternative: treat the tissue as a Tier 2 or Tier 3 system with a target shape it is trying to hit. Identify where the bioelectric signal is wrong. Fix the signal. The tissue handles the rest.

:::{figure} ../images/ch02-regen-medicine-flowchart.png
:label: fig-ch02-regen-medicine-flowchart
:alt: A two-column flowchart comparing "Old Model" and "New Model." Old Model: find defective gene → edit gene → specify repair cascade → verify outcome. New Model: identify target shape → deliver bioelectric signal → tissue runs its own program → verify convergence.
:width: 80%
:align: center

Two philosophies of regenerative medicine. The new model treats tissue as a goal-pursuing system. The intervention sets a target; the biology does the engineering.
:::

This is not speculative. In 2022, Levin's group induced frog tadpoles with damaged tails to regrow — by treating them briefly with a bioreactor that restored the bioelectric environment. The tadpoles' own cells did the construction. The bioreactor didn't specify a single protein. It gave the tissue a signal that said, roughly, *you are supposed to have a tail here*. The tissue agreed and built one.

:::{dropdown} Why this matters beyond medicine

The same logic applies anywhere you have a complex adaptive system. Cities. Ecosystems. Organizations. An urban planner who tries to specify every street, every building, every traffic pattern is doing Tier 1 control on a system that is closer to Tier 4. Overwhelmingly, cities that work are ones where people are given clear goals (zoning intent, economic incentives, safety standards) and then trusted to solve the details locally.

This is not a political argument. It is a control-theoretic one. The system has more information about its local state than any central planner does. Use that.

:::

## The Same Spectrum for AI Systems

Now apply all of this to building software.

You have an AI agent that is giving bad answers. You need to fix it. Four options, arranged by intervention depth:

:::{list-table} The AI Intervention Ladder
:header-rows: 1

* - Rung
  - What you do
  - What changes
  - When to use it
* - **Hardware** (Tier 1)
  - Patch the code, change architecture, swap models
  - The mechanism itself
  - Fundamental capability gap — the model can't do the task at all
* - **Weights** (Tier 1.5)
  - Retrain or fine-tune on new data
  - The model's internal representations
  - Consistent domain failure across many prompts; behavior pattern, not a knowledge gap
* - **Prompt** (Tier 2–3)
  - Rewrite the system prompt, add examples, change instructions
  - The model's input context
  - Most instruction-following and tone problems; role and format issues
* - **Tools and memory** (Tier 3)
  - Give the agent new tools, a retrieval system, a scratchpad
  - What the agent can access
  - Knowledge gaps, long-horizon failures, tasks requiring external state
* - **Goal** (Tier 4)
  - Define a clear objective; let the agent plan
  - What the agent is trying to do
  - Under-specified tasks where the agent is failing to make useful decisions
:::

Engineers, especially those with a systems background, default to Tier 1. They retrain. They fine-tune. Fine-tuning a model costs anywhere from a few hundred to several million dollars depending on scale, takes days or weeks, and breaks the moment requirements shift. And often — *very* often — the real problem was a bad system prompt that could have been fixed in twenty minutes.

:::{figure} ../images/ch02-ai-intervention-ladder.png
:label: fig-ch02-ai-intervention-ladder
:alt: A vertical ladder with five rungs. From bottom to top: "Patch code / swap model," "Retrain or fine-tune," "Rewrite system prompt," "Give tools and memory," "Set a clear goal." Each rung is labeled with intervention depth (high at bottom, low at top) and cost (expensive at bottom, cheap at top).
:width: 80%
:align: center

The AI intervention ladder. Most problems live on the upper rungs. Most engineers start on the lower rungs. The mismatch is expensive.
:::

Here is a concrete failure mode. A company builds a customer-service agent. It keeps apologizing too much and escalating too quickly. The team spends three weeks curating training data and runs a fine-tune. The agent is a little better. They run another fine-tune. Two months in, the agent is marginally improved and the team is exhausted.

The real problem: the system prompt said "always be helpful and escalate if you're unsure." The word "unsure" was doing enormous work. The agent was unsure about most things. One-sentence prompt change: "escalate only if the customer explicitly requests a human or the issue involves a refund above \$200." Problem solved. No fine-tuning needed.

That is over-specification — Tier 1 intervention on a Tier 4 system. You are treating the agent's policy as a gear to be moved, when the agent is capable of following a goal and making sensible decisions.

:::{figure} ../images/ch02-agent-debug-case.png
:label: fig-ch02-agent-debug-case
:alt: A split diagram. Left side labeled "What the team did" shows a long path through data curation, fine-tuning, testing, iteration. Right side labeled "What actually fixed it" shows a single box: one sentence in the system prompt. An arrow and label says "8 weeks vs 20 minutes."
:width: 80%
:align: center

This pattern repeats across teams and companies. The fix was a higher-rung intervention. The team went to the lowest rung by default.
:::

The opposite mistake also exists. Teams running agents on genuinely hard problems — multi-step research, code generation with external dependencies — sometimes rely entirely on prompting. They write longer and longer system prompts. At some point, the agent needs a tool. It needs a memory store. It needs to be able to search, to write to a file, to call an API. No amount of prompting compensates for a missing capability. You have moved past what language can fix.

When the system's current tier is too low for the task, the only real fix is to raise it. Give it tools. Give it memory. Give it a scratchpad. Then ask again.

:::{figure} ../images/ch02-failure-modes-matrix.png
:label: fig-ch02-failure-modes-matrix
:alt: A 2x2 matrix. X-axis: "Intervention Type" — Mechanistic (left) to Persuasive (right). Y-axis: "System's Actual Tier" — Low (bottom) to High (top). Top-left cell labeled "You're doing all the work." Bottom-right cell labeled "Magical thinking." Diagonal cells labeled "Match."
:width: 80%
:align: center

The same mismatch matrix applied to AI systems. Most engineering waste lives in the top-left quadrant: running Tier 1 interventions on Tier 3–4 systems.
:::

## Diagnosing the Tier

You need a way to figure out which tier a system is actually on. Here's a practical decision procedure.

:::{figure} ../images/ch02-decision-tree.png
:label: fig-ch02-decision-tree
:alt: A decision tree. First node: "Can the system produce different outputs for the same input?" No → Tier 1. Yes → second node: "Does it maintain state across time?" No → Tier 2. Yes → third node: "Can it generalize from examples it hasn't seen?" No → Tier 3 edge. Yes → fourth node: "Can it represent and reason about goals?" No → Tier 3. Yes → Tier 4.
:width: 80%
:align: center

A diagnostic decision tree for placing a system on the persuadability spectrum. Each branch has a real test. Don't assume — probe.
:::

Ask four questions, in this order:

**1. Can it produce different outputs for the same input?**
If no — reliably identical output every time — you have a mechanism. Tier 1. Fix the structure.

If yes, keep going.

**2. Does it maintain state across interactions?**
If no — every session starts fresh, nothing carries over — you're probably at Tier 2. Signals work. Training won't stick.

If yes, keep going.

**3. Can it generalize from examples it hasn't seen?**
Give it a new situation. Does it reason by analogy, or does it fail? True generalization — not just pattern-matching within a narrow distribution — puts you at Tier 3 or above.

**4. Can it represent goals and reason about them?**
Not just follow instructions. Can it explain *why* it's doing something? Can it notice when an instruction conflicts with a goal and flag the conflict? Tier 4.

Most current large language model agents sit somewhere between Tier 3 and Tier 4 depending on the task. They generalize impressively. Their goal-representation is real but patchy. They can reason about objectives in some domains and fail completely in others.

That is not a criticism. It is a calibration. Once you know where the system sits, you pick the right rung.

:::{dropdown} The over-attribution problem

Humans are extraordinarily good at seeing intelligence where there is none. We give names to Roombas. We apologize to chess computers. We attribute strategic thinking to markets.

This matters for the persuadability spectrum because it tempts you to apply Tier 4 interventions to Tier 2 systems. "I'll just tell the model what I want." If the model doesn't have the architectural capacity to represent goals and update them based on argument, the telling doesn't land. You're not being ignored. The system literally cannot process the input the way you intended.

Check your tier assignment against the four questions above, not against how sophisticated the system seems in casual interaction.

:::

## The Right Lever Is a Skill

Picking the right intervention level is not obvious. It requires knowing what the system actually is — not what you wish it were, not what it looks like in a demo.

A clock that runs fast is not confused. It does not need a conversation. You adjust the escapement.

A dog that bites is not evil. It is not malfunctioning mechanically. You reshape the association between trigger and response — through time, repetition, and consequence.

A person who keeps making the same mistake is not broken and not untrainable. They have a model of the world that produces that behavior. You need to change the model. That means argument, evidence, and sometimes trust.

A cell that builds the wrong shape is signaling a wrong goal state — and the right intervention is a bioelectric correction, not a gene edit, not a drug.

An AI agent that gives bad answers might need a better prompt, a new tool, or a clearer goal — not a fine-tune, not a model swap, not three months of data curation.

The skill is the diagnosis. Develop it first. Everything else follows.

Here is why this matters for everything that follows. The experiments in this book — the ones that ask whether AI systems habituate, whether a model changes from experience, whether a synthetic organism can generate its own goals — are all, underneath, asking where something sits on this spectrum. A system that only executes (Tier 1) cannot habituate. A system that only reacts (Tier 2) cannot learn. A system that trains (Tier 3) changes — but only within the goals it was given. The question the later chapters are trying to answer is whether any of our built systems have crossed into Tier 4: not just executing goals we specified, but representing goals flexibly enough that experience reshapes them. The spectrum is not a taxonomy. It is a diagnostic. And the chapters ahead are running the test.

## 🤔 Think About It

Here's a genuine puzzle with no clean answer.

A large language model is deployed as a homework-help tutor. Students are allowed to ask it anything, and it answers in detail. After a semester, test scores go up — but when students are tested without the AI available, their performance drops below the baseline from before the AI was introduced.

One interpretation: the AI has made students worse at thinking independently. You need a Tier 1 fix — restrict access, change the tool.

Another interpretation: the students have formed a dependency because the AI was always available, but the underlying skill is still there. You need a Tier 4 fix — have a conversation with students about when and how to use the tool.

A third interpretation: the AI is too good at tier-matching itself to whatever the student asks — it does the thinking *for* them because they are being persuasive at Tier 4, and the AI cooperates. The fix is changing the AI's goal: not "answer the question" but "help the student find the answer."

Which tier is the real problem at? Where does the intervention land — the student, the tool, or the goal given to the tool? And could the same behavior look like a bug in one frame and a feature in another?

Sit with it. There is something important in the discomfort of not having a clean answer.

## 💬 Discussion

**Choose a system you interact with daily — a piece of software, a team process, a physical device, or even a biological system like your own body.** Diagnose which tier it sits on using the four-question procedure from this chapter. Then describe one intervention that would be well-matched to its tier and one that would be mismatched. Explain what would happen with each.

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

## 🔬 Hands-On Lab: The Tier Detective

Pick any AI tool you have access to — a chatbot, a recommendation system, a writing assistant, a search engine, anything.

Run the four diagnostic questions on it. Document what you observe:

- What happens when you give it the exact same input twice?
- What carries over between conversations (if anything)?
- Give it a scenario it almost certainly has never seen. Does it generalize sensibly?
- Ask it to explain *why* it's doing something. What do you get?

Based on your findings, pick one real problem with the tool and propose an intervention at the correct tier. Not a hypothetical fix — an actual change you could make right now (rephrasing a prompt, adding a tool, changing a setting).

**Group Build:**
1. Use AI to identify a real problem in your own context.
2. Use AI to develop a solution to it.
3. Be ready to tell the class: what problem, how AI helped, what the solution looks like, and what the AI got right or missed.

## 🐍 Optional Advanced Lab: Mapping the Persuadability Spectrum
<a href="https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch02-lab-persuadability.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" style="margin-bottom: 1rem;"/>
</a>

You will build a simple scoring tool that takes a system description and outputs a tier estimate. You will probe a real AI API with identical prompts across sessions, with state manipulation, and with novel generalization tests — and plot where it falls on the spectrum.

## 🎯 In-Class Assignment: Tier Diagnosis and Intervention Design (10 pts)

**Details and instructions will be provided in class.**

**Points:** 10

## 📖 Glossary

:::{list-table} Chapter 2 Key Terms
:header-rows: 1

* - Term
  - Definition
* - **Persuadability spectrum**
  - A continuum from fully mechanistic systems (require physical intervention) to fully persuadable systems (respond to goals and arguments). Where a system sits determines which intervention type works.
* - **Mechanistic system**
  - A system whose output is fully determined by its structure. Intervention requires physically altering that structure. A gear is the clearest example.
* - **Reactive system**
  - A system with a sensorimotor loop — it senses input, computes internally, and responds. You can influence it by changing its environment. You cannot train it.
* - **Trainable system**
  - A system with associative memory that links stimuli to outcomes over time. Repeated paired signals gradually reshape its responses. Most vertebrates qualify.
* - **Persuadable system**
  - A system with a model of goals and the ability to update that model based on argument or evidence. Effective intervention presents objectives, not scripts.
* - **TAME framework**
  - Technological Approach to Mind Everywhere. Michael Levin's framework for studying goal-directed behavior at all scales, from cells to organisms to collectives, without requiring consciousness or neurons.
* - **Intervention depth**
  - How far into a system's structure an intervention must reach. High depth means changing physical structure or weights. Low depth means sending a signal or stating a goal.
* - **Intervention payoff**
  - The amount of behavioral change produced per unit of intervention effort. Persuadable systems have a high payoff: one clear goal changes many downstream behaviors automatically.
* - **Bioelectric signaling**
  - Communication between cells via ion flows and membrane voltage. Used to coordinate tissue-level behavior. Altering the bioelectric signal can redirect developmental programs without genome editing.
* - **Over-specification**
  - Applying a Tier 1 (mechanistic) intervention to a higher-tier system. The system is capable of solving the problem itself; the over-specifier does the work instead, losing the system's intelligence as a resource.
* - **Tier 1 (Mechanism)**
  - Systems with no internal goal. Output is a direct function of structure. Fix: alter the structure.
* - **Tier 2 (Reactive)**
  - Systems with sensorimotor loops but no persistent memory. Fix: change the environment or signal.
* - **Tier 3 (Trainable)**
  - Systems with associative memory and some generalization. Fix: repeated feedback over time.
* - **Tier 4 (Persuadable)**
  - Systems with goal models and the ability to reason about them. Fix: communicate objectives clearly.
* - **Cognitive light cone**
  - The range of space and time a system can represent in its goals. A bacterium has a tiny cone — here, now. A human has an enormous one — distant places, future decades. Introduced fully in [Chapter 3](#ch-03-the-circle-of-caring).
* - **Fine-tuning**
  - Adjusting a pre-trained model's weights using a new dataset. A Tier 1.5 intervention for AI systems. Expensive, slow, and fragile — often used when a prompt-level fix would suffice.
* - **System prompt**
  - The initial instructions given to an AI agent before user interaction begins. A Tier 2–3 intervention. The most underused and underestimated lever in AI engineering.
* - **Sensorimotor loop**
  - The cycle of sense → compute → act that is the minimum unit of goal-directed behavior. Even bacteria run one. Named after the motor and sensory systems in animals, but the concept applies to any feedback process.
:::

## 🔑 The Takeaway

- Intelligence is not a category. It's a dial.
- The dial position tells you what kind of intervention works — not what you prefer.
- Going too deep wastes effort and removes the system's intelligence as a resource.
- Going too shallow on a mechanism fails completely — signals don't reach it.
- Cells can be sent a signal and trusted to build an eye. The genome doesn't have to specify every step.
- Most AI engineering waste lives in one quadrant: Tier 1 interventions on Tier 3–4 systems.
- A bad system prompt causes more failures than bad model weights. Fix the prompt first.
- The diagnostic skill — placing a system on the spectrum before choosing a fix — is what separates thoughtful engineers from expensive ones.
