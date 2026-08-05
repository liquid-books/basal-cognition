---
title: "The Body Knows Its Own Shape"
subtitle: "A thermostat, but the setting is you"
short_title: "The Body Knows Its Shape"
description: "Cut a flatworm in half and each half rebuilds a whole worm — then stops. Stopping is the hard part. Something in there holds a representation of what done looks like and works until reality matches it. This chapter is about the anatomical setpoint, the bioelectric memory that stores it, and what it means to build a system that knows when it is finished."
label: ch-05-the-body-knows-its-own-shape
tags: [morphogenesis, setpoint, planaria, bioelectricity, homeostasis]
---

# The Body Knows Its Own Shape

:::{figure} ../images/ch05-infographic.png
:label: fig-ch05-infographic
:alt: Chapter overview infographic showing the anatomical setpoint concept — planarian regeneration sequence, bioelectric memory layer, the two-headed planarian experiment, and AI termination criteria as setpoints.
:width: 100%
:align: center

The body knows its own shape. Cut it, and it rebuilds. The interesting part is not the rebuilding — it is the stopping. Something stores a target, tracks the error, and calls it done. This chapter is about that something.
:::

:::{epigraph}
The body is not built once. It is maintained continuously against everything the world throws at it.

— Michael Levin
:::

Cut a planarian flatworm in half. Both halves survive. Within two weeks, the head piece grows a new tail. The tail piece grows a new head. You now have two complete worms.

Everyone finds that impressive. Here is what nobody talks about: both worms are exactly the right size when they stop. Not approximately right. Not close enough. The proportions are correct — head-to-body ratio, eye spacing, pharynx position. Each worm stops at exactly one head and one tail, in the right places, at the right scale.

That is the harder miracle. Growth that does not know when to quit has a name: cancer. Stopping correctly requires something to stop against. A reference. A picture of what done looks like.

The flatworm has one. It compares current anatomy to the stored picture, closes the gap, and stops when they match. This chapter is about that picture — where it lives, how it works, and what it means to rewrite it.

:::{figure} ../images/ch05-planarian-sequence.png
:label: fig-ch05-planarian-sequence
:alt: Three-panel sequence showing a planarian flatworm being cut, then both pieces regrowing into complete worms of correct proportions, then both halves stopped at completion.
:width: 80%
:align: center

Cut, regrow, stop. Each step is interesting. The stopping is the one that requires an explanation.
:::

---

## The Stopping Problem

Growth without a reference does not stop. It consumes.

A planarian cut into 279 pieces produces 279 worms. Each piece is missing most of the animal. Each piece regenerates. This is remarkable, but it is not the interesting part. What matters is that each piece produces *exactly one* head. Not zero. Not two. One — in the correct position, facing the correct direction, at the correct scale for the fragment's size.

That is precision. Precision requires a reference.

:::{figure} ../images/ch05-stopping-vs-no-stopping.png
:label: fig-ch05-stopping-vs-no-stopping
:alt: Two side-by-side panels — left shows controlled regeneration that stops at the correct endpoint, right shows uncontrolled growth that keeps expanding past it. The word Stop appears at the correct endpoint on the left.
:width: 80%
:align: center

Growth without a reference does not stop. The difference between a healing wound and a tumor is not the speed of growth — it is whether the growth is tracking a target.
:::

Think about how your arm heals a cut. Skin cells divide and migrate to close the wound. When the gap is sealed, they stop. Not because they run out of energy. Not because some timer fired. Because the error signal went to zero. The current state matched the target state. Done.

What would happen if they forgot the target? They would keep going. They would pile up. That is exactly what a benign tumor is — cells that lost the signal telling them the gap was closed.

The target has to be stored somewhere. The cells doing the closing do not carry it individually. A single skin cell does not know what your whole hand looks like. Something coordinates across the tissue.

:::{important}
The question is not how the worm *grows*. The question is how the worm knows when to *stop*. Regeneration without a stopping criterion is just cancer that happens to be shaped like an animal. The stored target is what separates them.
:::

---

## Homeostasis, Expanded

Your body is doing this right now.

Not occasionally. Not when you are sick or injured. Continuously, every second, while you read this sentence, it is running thousands of comparison loops in parallel — checking current state against stored target, generating error signals, issuing corrections.

The obvious ones: temperature, blood sugar, blood pressure. You have heard of these.

The one nobody mentions: shape. The number of fingers on your hand. The position of your eyes relative to your ears. The length of your left arm compared to your right. These are not built once and left alone. They are actively maintained. Defended. Every day.

Same mechanism. Same logic. Vastly different dimension.

You have heard of homeostasis. Your body keeps its temperature near 37°C. It keeps blood glucose in a narrow band. It keeps blood pH between 7.35 and 7.45. Drift outside those ranges and cells start to fail.

The mechanism is always the same: compare the current state to a setpoint, act to close the gap, stop when the error goes to zero. Negative feedback. The thermostat model.

Levin's move — the one that matters for this chapter — is to extend that logic to *shape*.

Your body does not just hold a target temperature. It holds a target anatomy. The number of fingers on your hand. The position of your eyes. The length of your limbs relative to your trunk. These are setpoints too. They are defended continuously, not built once and abandoned.

:::{figure} ../images/ch05-thermostat-vs-anatomy.png
:label: fig-ch05-thermostat-vs-anatomy
:alt: Two parallel diagrams side by side. Left: a simple thermostat loop — sensor reads temperature, compares to 72 degrees, heater corrects. Right: anatomical loop — tissue reads current shape, compares to target anatomy, cells correct. Labels: Sensor, Compare, Correct, Stop.
:width: 80%
:align: center

Same logic, vastly different dimension. A thermostat defends one number. An anatomical setpoint defends a high-dimensional shape target — tens of millions of parameters in parallel.
:::

The difference is dimensionality. Temperature is one number. Shape is not. Shape encodes position, proportion, topology, and orientation across three dimensions. Defending a shape requires comparing the current configuration of millions of cells against a stored reference and generating targeted corrective signals across the whole tissue simultaneously.

That is a staggeringly complex computation. It happens in worms. In frogs. In your skin, right now.

::::{tab-set}

:::{tab-item} Temperature Homeostasis
**Setpoint:** 37°C (one number)

**Error signal:** current temperature minus setpoint

**Corrective action:** shiver, sweat, dilate or constrict blood vessels

**Done signal:** temperature within acceptable range
:::

:::{tab-item} Anatomical Homeostasis
**Setpoint:** target body plan (position, proportion, topology)

**Error signal:** mismatch between current tissue configuration and target

**Corrective action:** directed cell migration, division, apoptosis, differentiation

**Done signal:** tissue configuration matches target — no further mismatch
:::

::::

:::{prf:definition}
:label: def-anatomical-setpoint
**Anatomical homeostasis** is the process by which a living system detects deviations from its target body plan and takes corrective action until the target is matched. It runs on the same negative-feedback logic as temperature or glucose regulation, but the setpoint is a high-dimensional shape rather than a scalar quantity.
:::

---

## The Anatomical Setpoint

Here is the 5-step treatment of the central idea.

**Step 1 — Something you already know.** Your home thermostat has a setting. Say it is 72°F. When the room drops to 68°F, the heater turns on. When it hits 72°F, the heater turns off. The setting is the target. The difference between current and target is the error. When error reaches zero, action stops.

**Step 2 — The bridge.** A healing wound works the same way. The target is sealed skin in the right configuration. The error is the gap. Cells migrate and divide to close it. When the target is matched, they stop.

**Step 3 — The name.** The target the body is defending is called the *anatomical setpoint*. Like the thermostat's temperature setting, it is a reference value the system works to achieve. Unlike the thermostat, the setpoint is a shape.

**Step 4 — Where the analogy breaks.** A thermostat's setting is a number you dial in from outside. The anatomical setpoint is stored inside the tissue itself, distributed across millions of cells. There is no engineer who encoded it. It emerged from evolution and is maintained by the same cells doing the building.

**Step 5 — Why it matters.** If the anatomical setpoint is a real, physical thing — stored somewhere, readable, writable — then it can be edited. Change the thermostat setting and the heater pursues a new temperature. Change the anatomical setpoint and the cells pursue a new shape. That is not science fiction. We have done it. That is what this chapter builds to.

:::{note}
Michael Levin's lab at Tufts University has been the primary source of experimental evidence for anatomical homeostasis as a setpoint process. The two-headed planarian result (covered below) is the clearest demonstration that the setpoint is real, physical, and separable from the genome.
:::

---

## Where the Setpoint Lives

The genome does not store the setpoint. This is worth saying clearly.

The two-headed planarian proves it. You can create a planarian with two heads by altering its bioelectric state — specifically, by blocking a class of proteins called gap junctions that connect cells electrically. The worm grows two heads. Both are fully functional. Both are anatomically correct. You have not changed a single letter of the worm's DNA.

Here is the crucial part: cut that two-headed worm in half. Regenerate it in plain water, with no intervention. It grows two heads again.

Cut it again. Two heads.

The genome is unchanged. The edited setpoint persists through regeneration after regeneration. Something other than the DNA is storing the target.

That experiment has a detail that deserves its own moment.

After they washed out the drug — after the chemistry was gone, after every molecule of the original intervention had cleared the system — they cut the worm again.

Two heads.

The worm had never been told to be two-headed. Its genome had never changed. But something in the tissue remembered. The electrical pattern that the drug had established had been passed to new cells, which passed it to their daughters, none of whom had experienced the original drug.

A memory, inherited without DNA. Passed down through pure electrical topology.

We do not have a complete account of how this is possible. We have the experiment. And the experiment is unambiguous.

:::{figure} ../images/ch05-two-headed-planarian.png
:label: fig-ch05-two-headed-planarian
:alt: Diagram showing a normal planarian, then a two-headed planarian created by bioelectric intervention, then successive cuts and regenerations all producing two-headed worms. A label reads DNA Unchanged at each step.
:width: 80%
:align: center

The two-headed planarian. The genome is not changed. The bioelectric pattern is changed. The new pattern persists across every subsequent regeneration — proof that the setpoint is stored in the bioelectric layer, not the DNA.
:::

That storage layer is bioelectric.

Here is the image that makes this click.

A television screen doesn't store a picture in any single pixel. The picture is in the *pattern* of all the pixels together. Scramble the pattern and you lose the image, even though every individual pixel still works perfectly. Restore the pattern and the image returns.

Your tissue works the same way. Your hand's shape is not stored in any single cell. It is in the electrical pattern across all of them — a voltage map that every cell in the tissue participates in holding. Wound the tissue and you tear a hole in the pattern. The injured edge becomes electrically distinct from the surrounding cells. That mismatch — between the current pattern and the intact one — is what drives repair. Close the gap, restore the pattern, and the signal that was driving repair no longer exists.

The stop signal is not a message. It is the absence of an error.

Every cell in your body maintains a voltage difference across its membrane — inside is more negative than outside. In neurons, we call this the resting potential, and we understand it well. But voltage gradients exist across all cells, not just neurons. In tissues, these gradients form patterns across the whole surface. Neighboring cells compare their voltages through structures called gap junctions — protein channels that let ions, and therefore electrical signals, flow between cells directly.

:::{figure} ../images/ch05-bioelectric-membrane-map.png
:label: fig-ch05-bioelectric-membrane-map
:alt: A tissue surface showing cells with varying membrane voltages color-coded from blue (low) to red (high), forming a gradient pattern. Gap junction connections between cells shown as small bridges.
:width: 80%
:align: center

Membrane voltage maps across a tissue. Cells with different voltages are color-coded. Gap junctions allow ions to flow between neighbors, creating tissue-wide patterns that encode positional information.
:::

Those tissue-wide voltage patterns encode positional information. Not in any one cell — in the pattern across all of them. A photo is not in any one pixel; it is in the arrangement.

:::{prf:definition}
:label: def-bioelectric-memory
**Bioelectric pattern memory** is the storage of positional and target-state information in the distribution of membrane voltages across a tissue. Unlike genetic memory, bioelectric patterns are read and written rapidly, exist at the tissue level rather than the cell level, and can be edited independently of the DNA sequence. They are the physical substrate of the anatomical setpoint.
:::

The genome builds the hardware: channels, pumps, proteins that create and maintain voltage gradients. The pattern those elements produce — the specific voltage map across a tissue — is the setpoint. It can be rewritten without touching the hardware.

:::{figure} ../images/ch05-genome-vs-bioelectric.png
:label: fig-ch05-genome-vs-bioelectric
:alt: Layered diagram with DNA at the bottom labeled Hardware, above it a layer of ion channels and gap junctions labeled Infrastructure, and above that a voltage pattern map labeled Goal. Arrows show the genome builds the hardware but the pattern is what stores the target.
:width: 80%
:align: center

The genome builds the channels. The channels produce voltage gradients. The gradient pattern stores the target. These are three separate layers, and the top layer can be edited without changing the bottom one.
:::

:::{figure} ../images/ch05-gap-junctions-network.png
:label: fig-ch05-gap-junctions-network
:alt: A network diagram showing cells as nodes connected by gap junctions as edges, with electrical signals flowing between them. The overall pattern forms a tissue-wide communication grid.
:width: 80%
:align: center

Gap junctions form a tissue-wide communication network. Ions flow through them directly from cell to cell. The resulting electrical pattern across the tissue is what coordinates regeneration toward the correct target.
:::

---

## Editing the Setpoint

If the setpoint is stored in the bioelectric pattern, you can change the setpoint by changing the pattern. Not by editing genes. By changing the electrical state.

The two-headed planarian is the clearest example. But Levin's lab has produced stranger ones.

Here is the experiment that should stop you cold.

Levin's lab used small-molecule drugs — chemicals that alter ion channel behavior, nothing more — to change the bioelectric map of a developing frog tadpole. No gene editing. No surgery. Just voltage.

The tadpole grew an eye on its gut.

A fully-formed, functional eye. In a place where no eye has grown in the four-hundred-million-year history of vertebrates. The eye had a lens. It had a retina. It connected to the nervous system and responded to light.

They did not touch a single gene. They changed the voltage map, and the genome — already containing every instruction needed to build an eye — expressed those instructions in a new place, because the positional signal said *here.*

The genome does not decide where to build eyes. The bioelectric map does. The genome is the library. The map is the reading list.

Tadpoles of *Xenopus laevis* normally grow eyes on the face. Researchers transplanted eye tissue to the gut or tail and manipulated the bioelectric environment there. Eyes formed. The animals could perceive light through their belly or tail.

:::{figure} ../images/ch05-xenopus-ectopic-eye.png
:label: fig-ch05-xenopus-ectopic-eye
:alt: A frog tadpole diagram showing normal eye position on the face and an ectopic eye induced on the tail region. Labels: Normal Eye, Ectopic Eye, Bioelectric Induction.
:width: 80%
:align: center

An eye grown in the wrong place on a *Xenopus* tadpole. The tissue received a goal — build an eye — through bioelectric manipulation of its local environment. It achieved that goal without being told how.
:::

This is what Levin calls *goal injection*. You are not constructing an eye step by step. You are telling the tissue what the target is. Traditional biological engineering specifies steps — add this gene, activate this pathway. Goal injection sets the target and lets the tissue's competency close the gap.

:::{dropdown} What ectopic eyes teach us about abstraction

An eye is not a simple structure. It is a lens, a retina, a vitreous chamber, correctly wired to the optic nerve. Building it requires hundreds of coordinated steps.

The transplanted tissue received none of those steps as instructions. It received a signal about its local bioelectric environment — roughly, *here is where an eye should be*. It then produced the full structure.

The tissue works at the abstraction level of "eye as a whole target," not "step 73 of 247." This is the same logic as the newt tubule from Chapter [](#ch-04-smart-things-made-of-smart-things): the goal is abstract, the execution is local.

:::

---

## Gap Junctions and the Communication Network

The bioelectric pattern does not maintain itself in isolation. It requires a network.

Gap junctions are the network. They are protein channels between adjacent cells through which ions move directly. A signal in one cell propagates to its neighbors, then to their neighbors, and so on across the tissue.

Each cell reads its local voltage. That voltage is shaped by its neighbors through gap junctions, who are shaped by their neighbors. The result is a coordinated electrical state across millions of cells, maintained in real time.

Block gap junctions — as in the two-headed planarian experiment — and you cut the communication channel. The setpoint cannot propagate. Local regions fall into separate attractor states. Two head-attractors form instead of one.

:::{tip}
The gap junction experiment is clean causation. Block communication: setpoint breaks. Restore it: setpoint reforms. That distinguishes real mechanism from correlation.
:::

The genome, again, does not change in any of this. The genes encoding gap junction proteins are identical between normal worms and two-headed worms. What changes is whether those proteins are active. The hardware is the same. The software running on it is different.

---

## Does Your AI Know What "Done" Looks Like?

This is the payoff section. It is also the part where the biology stops being interesting biology and becomes a tool for diagnosing something that is currently going wrong in real production systems.

Agents fail in two directions. They stop too early. Or they never stop.

An agent that stops too early has a termination condition that triggers before the goal is actually achieved. "Draft complete" fires when the document exists, not when it is good. "Task finished" fires when the loop exits, not when the output is correct. The agent halted. The work is not done.

An agent that never stops is running without a reference. It has a policy — a set of actions it can take — but no representation of what done actually looks like. It generates. It revises. It queries. It loops. It will not stop because it cannot compare its current output to a target it was never given.

:::{figure} ../images/ch05-agent-termination.png
:label: fig-ch05-agent-termination
:alt: Three panels side by side. Left: an agent with a clear target representation stopping at the correct point labeled Done. Center: an agent with a bad termination condition stopping too early labeled False Done. Right: an agent with no target looping without stopping labeled No Stop.
:width: 80%
:align: center

Three agent termination failure modes. Left: correct — the agent stops when it matches the target. Center: premature — a cheap proxy triggers "done" before the goal is met. Right: runaway — no target representation means no stopping criterion.
:::

The planarian does not have this problem. It has a setpoint. It runs a continuous comparison between current anatomy and the target. When the mismatch reaches zero, behavior stops. Not a timer. Not a step count. A comparison.

The biological insight translates directly.

**The setpoint and the policy are separate things.** A planarian's bioelectric pattern stores what the target looks like. The cells' behavior — migration, division, signaling — is the policy that pursues it. You can change the setpoint without changing the policy. This is what the two-headed planarian proves: same cells, same behavior repertoire, different target, different outcome.

Most AI agents conflate these. The target is baked into the policy. A model fine-tuned to "produce a complete report" has some notion of "complete" mixed into its weights — you cannot separate it, inspect it, or edit it without retraining. You cannot just update the setpoint.

:::{figure} ../images/ch05-setpoint-vs-policy.png
:label: fig-ch05-setpoint-vs-policy
:alt: Two layered architecture diagrams. Left labeled Biology — Bioelectric Setpoint layer on top, Cell Behavior Policy layer below, arrow between them labeled Compare. Right labeled AI — combined single layer where target and behavior are merged, with a red X and label Cannot Edit Separately.
:width: 80%
:align: center

Biology separates the target from the behavior. Most AI agents merge them. The separation is what makes the two-headed planarian experiment possible — and what makes goal-injection engineering tractable.
:::

**A concrete failure mode, right now.** Multi-step AI agents — coding agents, research agents, document pipelines — are routinely deployed without an explicit success criterion. The loop runs until a token limit or time-out fires. Neither of those is the target. When the agent "finishes," nobody checked whether the output matches what done actually looks like. The system stopped. The goal may not be met.

**The fix is architectural, not prompt-level.** You need a separate component — an evaluator, a critic, a verifier — that holds a representation of the target state and runs the comparison. The agent's policy pursues the goal. The evaluator checks whether the current state matches it. Stopping is triggered by the evaluator, not the policy. That is exactly the planarian: cells pursue the target, and the bioelectric comparison layer stops them when the mismatch reaches zero.

::::{grid} 2

:::{grid-item-card} What Biology Gets Right
The setpoint is stored separately from the behavior policy. Editing the setpoint (bioelectric manipulation) changes the outcome without changing the cells' capabilities. The stopping criterion is the actual target, checked continuously.
:::

:::{grid-item-card} What AI Systems Typically Get Wrong
The target is embedded in the policy (mixed into weights or prompts). Stopping is triggered by token limits, exception handlers, or time-outs — none of which represent goal completion. No evaluator runs the comparison.
:::

::::

:::{warning}
This is not about making agents smarter. An agent with a great policy and no stopping criterion is dangerous, not just inefficient. It is the biological equivalent of a tissue that heals correctly but never stops healing. The work it does past the goal can undo the work it did before.
:::

:::{figure} ../images/ch05-evaluator-architecture.png
:label: fig-ch05-evaluator-architecture
:alt: System architecture diagram showing an AI agent policy layer feeding outputs to an evaluator component that holds the target representation, which generates an error signal fed back to the policy, with a Stop output when error reaches zero.
:width: 80%
:align: center

The evaluator architecture. The policy generates outputs. The evaluator holds the target and runs the comparison. Stopping is triggered by the evaluator — not by the policy exhausting itself. This is how the planarian works; it is not how most current agents are built.
:::

```{mermaid}
flowchart LR
    A[Current State] --> B[Comparison Layer]
    C[Target Setpoint] --> B
    B -->|Error > 0| D[Policy: Take Action]
    D --> A
    B -->|Error = 0| E[Stop]
    style E fill:#2ecc71,color:#fff
    style C fill:#3498db,color:#fff
```

The architecture above is what planarian regeneration runs. The current anatomy is A. The bioelectric target pattern is C. The comparison fires continuously at B. The cells act at D. When error reaches zero, they stop at E.

Your agent stack needs this architecture. Literally. Not as a metaphor.

---

## 🤔 Think About It

You are building a document review agent for a law firm. The agent reads contracts, flags missing clauses, and marks a document "complete" when review is done.

The current implementation uses a loop: the agent reads sections, flags issues, and exits when it reaches the end of the document. "End of document" is the stopping criterion.

A senior partner notices that the agent consistently misses issues in complex nested clauses — the kind that appear in sections 12 through 17 of large commercial contracts. The agent flags nothing there and exits cleanly.

Here is the problem: "end of document" is not the target. The target is "no missing clauses that a competent reviewer would catch." Those are different things.

Now think through this using the biology. What is the equivalent of the planarian's bioelectric setpoint in this system? What would an evaluator component look like — the thing that holds a representation of "done" and checks whether the current state matches it? How would you separate the agent's review policy from the completion criterion? And what does "error signal" mean in this context — how would the system know the review is still incomplete, and how far from done it is?

There is no clean answer. But work through the architecture. What would you build on Monday to get closer to a system that stops for the right reasons?

---

## 💬 Discussion

**Prompt:** The two-headed planarian experiment shows that you can rewrite a biological goal without changing the underlying hardware. Pick a real AI system you interact with — a search engine, a recommendation algorithm, a writing assistant — and describe what you think its implicit "setpoint" is. What does it seem to be optimizing toward? How would you know if someone had changed that target without changing the underlying model? What signals would you look for?

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

---

## 🔬 Hands-On Lab: Does Your Agent Know When to Stop?

You need a browser and access to any AI assistant.

**Part 1 — The unlimited loop.** Give an AI assistant an open-ended task with no termination condition: "Improve this paragraph." Paste any paragraph. Let it respond. Then say "improve it again." Repeat five times. Observe: does the system ever indicate it has reached a finished state? Does it stop on its own? What is it using as a "done" signal?

**Part 2 — An explicit setpoint.** Repeat the exercise, but this time give the agent an explicit target: "Revise this paragraph until it meets these criteria: sentences are under 15 words on average, no passive voice, and no jargon. When all three criteria are met, say DONE and stop revising." Observe: does the agent stop sooner? Does it stop correctly? Does it ever stop too early (claiming DONE when criteria are not met)?

**Part 3 — Reflect.** Write one paragraph describing which version of the agent behaved more like a planarian and which behaved more like uncontrolled growth. What would the evaluator component look like for a real production version of this task?

**Group Build:**
1. Use AI to identify a real problem in your own context.
2. Use AI to develop a solution to it.
3. Be ready to tell the class: what problem, how AI helped, what the solution looks like, and what the AI got right or missed.

---

## 🐍 Optional Advanced Lab: Anatomical Setpoint Simulation

<a href="https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch05-lab-setpoint-sim.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" style="margin-bottom: 1rem;"/>
</a>

You will build a grid-based simulation of anatomical homeostasis. A tissue grid holds a bioelectric pattern. A target pattern is defined. Cells compare their local voltage to the target and take corrective action each step. You will observe convergence to the target, then test what happens when you scramble part of the grid mid-run. Does the system recover? How does convergence speed change when you reduce gap-junction connectivity between cells?

---

## 🎯 In-Class Assignment: Mapping the Setpoint (10 pts)

**Details and instructions will be provided in class.**

**Points:** 10

---

## 📖 Glossary

:::{list-table}
:header-rows: 1

* - Term
  - Definition
* - **Anatomical homeostasis**
  - The process by which a living system detects deviations from its target body plan and acts to correct them, using the same negative-feedback logic as temperature or glucose regulation but with a shape as the setpoint.
* - **Anatomical setpoint**
  - The target body configuration a tissue or organism is working toward. Like a thermostat setting, but encoding a high-dimensional shape rather than a single number.
* - **Bioelectric pattern memory**
  - The storage of positional and target-state information in the distribution of membrane voltages across a tissue. This layer can be read and rewritten independently of the DNA sequence.
* - **Gap junctions**
  - Protein channels connecting adjacent cells that allow ions — and therefore electrical signals — to flow directly between cells. They form the communication network through which bioelectric patterns propagate across a tissue.
* - **Membrane voltage**
  - The electrical potential difference across a cell's outer membrane. In neurons this is called the resting potential; in all cells it encodes information about the cell's state and position within the tissue.
* - **Setpoint**
  - The target value a feedback system is defending. A thermostat's setpoint is a temperature. A kidney's setpoint is blood pH. A tissue's setpoint is a shape.
* - **Error signal**
  - The measured difference between the current state and the setpoint. When error is non-zero, corrective action continues. When error reaches zero, action stops.
* - **Negative feedback**
  - The loop structure in which a system detects deviation from a target and takes action that reduces the deviation. Homeostasis depends on negative feedback.
* - **Planarian**
  - A flatworm of the class Turbellaria, famous for its regenerative ability. A planarian cut into hundreds of pieces will produce a complete worm from each piece.
* - **Two-headed planarian**
  - A planarian whose bioelectric state has been manipulated to produce two head-attractor poles. The two-headed state persists through subsequent regenerations without any change to the genome.
* - **Goal injection**
  - The technique of specifying a target outcome to a tissue through bioelectric manipulation, rather than specifying the steps needed to build it. The tissue's existing competency closes the gap.
* - **Ectopic organ**
  - An organ that forms in a location other than its normal position, typically as a result of bioelectric manipulation of the local cellular environment.
* - **Xenopus laevis**
  - The African clawed frog, a model organism widely used in developmental biology. Levin's lab has induced ectopic eyes on the gut and tail of *Xenopus* tadpoles through bioelectric manipulation.
* - **Termination criterion**
  - The condition that causes an agent or process to stop. A termination criterion that does not match the actual target (e.g., "end of document" rather than "no missing clauses") produces premature or incorrect stopping.
* - **Evaluator**
  - In AI system design, a component that holds a representation of the target state and checks whether the agent's current output matches it. The biological analog is the bioelectric comparison layer.
* - **Policy**
  - The set of actions an agent can take to pursue a goal. In biology, the cells' behavioral repertoire. In AI, the model's learned behavior. The key insight of this chapter: the policy and the target (setpoint) should be stored and editable separately.
* - **Attractor state**
  - A stable configuration that a system naturally returns to after perturbation. In bioelectric pattern terms, "one-headed worm" is the normal attractor for planarian tissue; "two-headed worm" is an alternative attractor accessible through bioelectric manipulation.
* - **TAME framework**
  - Technological Approach to Mind Everywhere — Michael Levin's framework applying cognition vocabulary (goal, error, memory, learning) to non-neural biological systems at every scale.
:::

---

## 🔑 The Takeaway

- Stopping correctly is harder than growing correctly. Controlled regeneration requires a reference — something to stop against.
- Anatomical homeostasis is homeostasis where the setpoint is a shape. It runs the same negative-feedback logic as temperature regulation, at vastly higher dimension.
- The anatomical setpoint is stored in the bioelectric pattern across a tissue — not in the genome. The genome builds the hardware. The pattern is the goal.
- Gap junctions are the network that makes tissue-wide coordination possible. Cut them, and the setpoint fragments. The two-headed planarian is what that fragmentation looks like.
- Editing the bioelectric pattern rewrites the setpoint without touching the DNA. The two-headed planarian regenerates two-headed forever, with an unchanged genome. The target was rewritten. The hardware was not.
- Most AI agents conflate the target with the policy. Biology keeps them separate. Separation is what makes goal injection and setpoint editing possible.
- If your agent stops because of a token limit, a time-out, or an end-of-loop, it stopped for the wrong reason. The stopping criterion should be the actual target, checked by a comparison layer. Build the evaluator.
