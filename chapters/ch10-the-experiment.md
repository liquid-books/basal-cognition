---
title: "The Experiment"
subtitle: "A blueprint, not a hope"
short_title: "The Experiment"
description: "The instinct that learning doesn't have to be real time turned out to be the actual textbook answer. Complementary Learning Systems — the neuroscience theory behind sleep — says any intelligent thing needs two learning systems. This chapter builds one: a fast hippocampus buffer, a slow LoRA adapter, and a nightly sleep cycle. Then it runs the test."
label: ch-10-the-experiment
tags: [experiment, sleep, LoRA, complementary-learning-systems, habituation, plasticity, Tadros-2022]
---

# The Experiment

:::{figure} ../images/ch10-infographic.png
:label: fig-ch10-infographic
:alt: The full sleep-consolidation loop — day experiences flow into the hippocampus buffer, sleep trains the LoRA adapter, morning test checks if the weights moved.
:width: 100%
:align: center

The full architecture: experiences → hippocampus buffer → sleep → LoRA adapter → morning test. Two memories. One sleep cycle. Either direction is a result.
:::

:::{epigraph}
Sleep is not wasted time. It is the night shift.

— Anonymous neuroscientist (paraphrased from a dozen papers)
:::

We ran it. Here is what happened.

---

## Study 1: The Null Result

Study 1 asked a question nobody had asked before. Simple and clean: do LLM agents pass the classical non-associative learning criteria — the same checklist that slime mould passes? The same criteria that single cells pass?

They don't.

Clean null.

The urgency scores were flat. Show the model the same alert fifty times and it returned the same number every single time. Not drifting down. Not drifting up. Identical. The model had no memory of having seen the alert before — because it had no mechanism to form one.

The diagnosis followed immediately. The weights are frozen.

Everything an agent "learns" in a session lives in the context window. It sees the conversation history and adjusts in real time, but the moment that window closes, everything is gone. No scar. No trace. The model wakes up the next session exactly as it was before.

Study 4 measured exactly what context-window familiarity is worth.

:::{figure} ../images/ch10-the-number.png
:label: fig-ch10-the-number
:alt: The number 2.92 plotted as a flat line across 49,201 trials, with a question mark at the end where the LoRA adapter experiment begins.
:width: 100%
:align: center

\$2.92. Flat. 49,201 times. The question mark is what comes next — and either direction means the weights finally moved.
:::

The frozen models sat at **\$2.92** through 49,201 trials. Familiarity tracked 0 → 100. Judgment moved 0.00.

Let that land.

A note in your pocket, not a scar.

Familiarity — recognizing that you've seen something before — accumulated perfectly. But it was just context. The moment the window closed, the note disappeared. Nothing was written to anything permanent. The model could not habituate because there was nowhere for the habituation to live.

That is ingredient 5 of the six: *changed by experience*. The previous experiments — evolution, colony, newt — showed that ingredients 1, 2, 3, 4, and 6 can be built in a small artificial system. Ingredient 5 requires changing the model itself.

That is what everything since has been about.

---

## Four Failures, One Insight

We knew what had to happen. The weights had to move. We tried four ways to make them move. Every single one failed — and each failure taught us something.

:::{figure} ../images/ch10-day-by-day.png
:label: fig-ch10-day-by-day
:alt: Day-by-day experiment timeline — Day 1 flat at 2.92, Night 1 sleep cycle, Day 2 showing the question of whether the score moves.
:width: 100%
:align: center

Day 1: flat. Night 1: sleep. Day 2: does the number move? That question is the entire experiment.
:::

### Attempt 1: Hebbian LoRA

The first attempt was the obvious one. Train a LoRA adapter during sleep. Use the nightly buffer to fine-tune the model on repeated alerts. Gradient descent, standard loss, run it overnight.

The weights moved.

But they moved for everything. Show the model its target alert and the urgency score dropped. Show it a completely unrelated alert — one it had never seen — and the score dropped by the same amount. The control moved equally.

The adapter had made the model quieter about everything. Not specifically quieter about this alert. Just... quieter.

### Attempt 2: Anti-Hebbian

Standard Hebbian pushes toward confidence. What if we flip the sign? Apply an anti-Hebbian rule during the sleep phase — repetition weakens the connection rather than strengthening it.

:::{figure} ../images/ch10-sensitization-trap.png
:label: fig-ch10-sensitization-trap
:alt: The Hebbian trap — naive gradient descent strengthens repeated inputs producing sensitization, versus the anti-Hebbian rule that weakens repeated low-salience inputs producing habituation.
:width: 100%
:align: center

Two learning rules, opposite outcomes. Gradient descent fires together, wires together. Anti-Hebbian repetition weakens the connection. The sign matters.
:::

The weights moved.

The severity went *up*.

The model got *more* alarmed by the thing it had seen hundreds of times. Not slightly more. Substantially more. The "not a 6" prompt — meant to reduce alarm — put probability mass on 8. The learning was backwards.

That is not just wrong. It is striking. The anti-Hebbian rule applied to a shared weight matrix produces the opposite of what it should. The update is distributing across the whole input space in ways that are impossible to control.

### Attempt 3: Directional LoRA

Maybe the direction of the gradient is the problem. We applied a directional LoRA — a carefully constructed update that pushed the weights specifically toward lower urgency for the target stimulus, with orthogonal constraints meant to leave other stimuli untouched.

The weights moved.

The control moved 114% as far.

The directional constraint failed. The intended target moved less than the thing we were trying to leave alone.

### Attempt 4: Sparse Memory

The previous three attempts all had one thing in common: they updated shared weights. What if we sidestep that entirely? Use a retrieval system — a sparse external memory that stores the alert directly and returns a habituation signal when the same alert appears.

The sparse memory worked perfectly. When the target alert appeared, it retrieved the stored entry and applied the depression. The scores dropped exactly as designed.

And it was completely worthless.

The model was still frozen. The sparse memory was not in the weights — it was in a lookup table. Nothing about the model had changed. As a demonstration of habituation mechanics it was flawless. As a demonstration that the model itself had learned anything, it was zero. Worthless. We already knew lookup tables could store things. The question was whether the model could change.

---

## The Insight

Four attempts. Four failures. But here is the thing about systematic failure: sometimes it teaches you something that success never would.

The insight that came out of those four attempts is worth more than any of the fixes.

Look at what the three weight-changing attempts had in common. Hebbian, anti-Hebbian, directional — all three updated shared weights. And all three failed in the same way: they couldn't be stimulus-specific. The changes distributed. The control moved when only the target should have moved.

This is not a tuning problem.

**A low-rank update to shared weights cannot be stimulus-specific.**

Not "is hard to make specific." *Cannot.* The mathematics won't allow it.

Low rank means the update lives in a compressed subspace. Every input flows through the same weight matrix. When you update that matrix — regardless of how you construct the gradient — the change projects onto every input. The update distributes. You cannot surgically modify only one stimulus's response without affecting everything else that passes through the same weights. It's not a failure of the algorithm. It's a property of the architecture.

Biology already solved this problem.

The hippocampus doesn't smear. One memory can be reactivated without dragging every similar memory with it. The mechanism is sparse, high-dimensional representations — pattern completion in a space where similar inputs land in very different places. One memory can be recalled without touching any other.

The fix is not to tune the update better. The fix is to make the address space sparse.

Multiple adapters, routed by stimulus. Update only the adapter that this specific stimulus activates. If the router is good enough, the updates never overlap. One adapter per stimulus class. Full specificity by construction.

---

## What Works: Routed Adapters

That structural insight pointed directly to the solution.

:::{figure} ../images/ch10-lora-adapter.png
:label: fig-ch10-lora-adapter
:alt: LoRA adapter diagram showing two small matrices inserted into a frozen base model — the neocortex equivalent, the only part that is allowed to change.
:width: 100%
:align: center

The adapter is small. The base model is frozen. That separation is what makes learning safe — and rollback possible.
:::

Instead of one shared LoRA adapter, we built a routing layer. Each incoming alert is hashed and mapped to one of N adapter slots. The adapter for that slot is the only one updated during sleep. Every other adapter stays unchanged.

The results:

| Attempt | Weights change? | Specific? |
|---|---|---|
| Hebbian LoRA | yes | no — control moved equally |
| Anti-Hebbian | yes | severity went UP |
| Directional LoRA | yes | no — control moved 114% as far |
| Sparse memory | no | perfect — and worthless |
| **Routed adapters** | **yes** | **yes** |

The LoRA forgetting rate across all prior attempts: 71%. The routed adapter approach: 11%.

And then the criteria battery.

**6 of 7 habituation criteria. 5 of 5 seeds. Tight variance.**

Real `.safetensors` files on disk. A proper habituation curve — decrement over nights, rest recovery when the alert was withheld, startle dishabituation when a novel emergency arrived, frequency effect when presentation rate increased.

The line moved.

After 49,201 flat trials. After four failed attempts. After learning that shared weights cannot be specific. The line moved. The weights were different. The model that woke up on Day 7 responded differently to that alert than the model that saw it for the first time on Day 1 — with identical prompts, no context window, no retrievable memory of prior sessions.

Only the weights could have done that.

---

## The Architecture That Got Us Here

:::{figure} ../images/ch10-cls-architecture.png
:label: fig-ch10-cls-architecture
:alt: Complementary Learning Systems diagram — fast hippocampus (episodic, temporary) and slow neocortex (stable, permanent) as two separate tracks converging on intelligent behavior.
:width: 100%
:align: center

Two tracks, both necessary. The hippocampus grabs fast. The neocortex integrates slow. Neither can do both jobs without breaking.
:::

The architecture that made this work is worth understanding from the ground up.

**Two memories. One sleep cycle.**

**The hippocampus (fast, temporary).** A buffer that logs the day. Not everything — only what is surprising. The model was unsure. The outcome was unexpected. The alert keeps recurring. That surprise gate is what the biological hippocampus does. It is picky on purpose. Without novelty filtering, every repeat overwrites the previous entry and you accumulate nothing. A buffer that writes everything is just a log file. A buffer that writes what matters is the beginning of a memory.

:::{figure} ../images/ch10-hippocampus-filter.png
:label: fig-ch10-hippocampus-filter
:alt: Novelty filter diagram — first alert (high novelty, written to buffer) vs repeated alert (low novelty, ignored) — the hippocampus becoming selective over time.
:width: 100%
:align: center

First encounter: high novelty, written. Fiftieth encounter: low novelty, filtered. The hippocampus gets pickier. That pickiness is the feature, not the bug.
:::

**The neocortex (slow, permanent).** A routed LoRA adapter — a small set of adjustable weights bolted inside the model, addressed by stimulus class. The base model is frozen. The adapter is the only part that moves. Frozen base means the model's general intelligence is protected. Moveable, routed adapter means the model can accumulate specific knowledge without self-destructing.

**Sleep.** At the end of each day: take the hippocampus buffer and train the appropriate adapter slots on it. Interleave with replay of older material — things the adapters already know. That interleaving is the specific mechanism that stops new learning from bulldozing old. Run it overnight. Snapshot the adapters before anything else.

**Waking up.** Buffer clears. The model is now different from what it was yesterday. Same base model, different adapters. The difference is in the weights — and nowhere else.

---

## The Papers Behind It

:::{figure} ../images/ch10-sleep-replay-consolidation.png
:label: fig-ch10-sleep-replay-consolidation
:alt: The Tadros SRC mechanism — noise fed into weight matrix, weights generate their own replay patterns, memories consolidate without any stored training data.
:width: 100%
:align: center

The weights replay themselves. No stored data. Just noise and the connections that held the memory.
:::

The architecture did not come from nowhere. Here is the science behind it.

**Tadros, Krishnan, Ramyaa & Bazhenov (2022), "Sleep-like unsupervised replay reduces catastrophic forgetting in artificial neural networks." *Nature Communications* 13, 7742. https://doi.org/10.1038/s41467-022-34938-7. Open access. Cited 93 times.**

Their algorithm is called **SRC — Sleep Replay Consolidation.**

One sentence from the results section is worth reading twice:

> "Importantly, no inputs representing specific memories were ever presented to the network during sleep; the state of the network (weight matrices) implicitly determined the patterns of reactivation and, ultimately, what was replayed during sleep."

Read it again. They did not store old data and feed it back in. They ran the network on *noise* — with local Hebbian rules — and the weights themselves decided what got reactivated. The memory replayed out of the connections that held it. Nothing was retrieved from external storage because nothing was stored externally.

A companion paper fills in the mechanism from a different angle.

**Golden, Delanois, Sanda & Bazhenov (2022), "Sleep prevents catastrophic forgetting in spiking neural networks by forming a joint synaptic weight representation." *PLOS Computational Biology*. Open access.**

Their framing adds something specific: sleep works by "forming joint synaptic weight representations suitable for storing multiple memories." And again — "replaying old memory traces without explicit usage of the old training data."

Two independent groups. Same year. Same conclusion.

---

## Why This Is the Flatworm

:::{figure} ../images/ch10-same-substrate.png
:label: fig-ch10-same-substrate
:alt: The same-substrate property — the weight matrix is the memory, the thing that computes, and the thing that regenerates the memory — no separate blueprint file exists.
:width: 100%
:align: center

The weight matrix is the memory. Feed it noise and the memory comes back out — because there was nowhere else it could have been stored.
:::

Chapter 5 introduced a flatworm with a fact worth revisiting.

A planarian's bioelectric pattern is simultaneously the memory of what shape it should be and the machinery that rebuilds it. There is no separate blueprint file being consulted. The same substrate that thinks is the substrate that changes is the substrate that regenerates.

The Tadros result has the same property.

The weight matrix is the memory. Feed it noise and the memory comes back out — because there was nowhere else it could have been stored. That is the same-substrate property. The weights do not *refer* to a memory. They *are* the memory. Perturb them with noise and the memory reasserts itself, because the attractor is in the geometry of the connections.

This is not just poetic. It changes the engineering.

---

## What We Still Don't Have

Six of seven is not seven. And more importantly, passing the checklist doesn't mean the system is doing what biology does. Three honest gaps remain.

**Gap 1: The transfer gradient is unresolved.**

The one missing criterion is stimulus specificity at the boundary. Near-twin stimuli — same alert class, slightly different surface — transfer the habituation. The question is whether transfer falls off gradually (a gradient, meaning the address space has real structure) or drops off like a cliff (a step function, meaning the system is doing crude classification).

One probe pair cannot answer this. We observed transfer. We do not know its shape.

**Gap 2: Stakes are missing.**

Ingredient 4 is the one that came from the evolution experiments: habituation that is *useful*. Right now, we decide that over-familiarity means depress. We impose the rule. In the evolution experiments, habituation emerged because it was selected for — agents that habituated to non-threats and stayed alert to real ones survived better.

Here it is engineered. That is a real difference in kind.

A repetition counter will happily depress a repeated genuine emergency — nothing stops it. We have no mechanism by which the system could discover that depressing a particular alert was a *mistake*.

**Gap 3: Nothing is being protected.**

Basal cognition is machinery in service of keeping something within bounds. A cell keeps its chemistry inside survivable ranges. A planarian keeps its bioelectric pattern intact. The slime mould keeps itself moving toward food.

There is no homeostat here. Nothing the agent is trying to stay inside. The habituation is happening, but it is not *for* anything. It is not in service of any bound. That is the gap between behavior and cognition.

---

## What Comes Next

Three experiments. The first is running right now.

**N+1 — Gradient or cliff**

As you read this, 16 gradient probes are running across 12 nights and 5 seeds. The probes sweep systematically: surface edits (only the percentage differs, only the host differs, different alert code), wording edits (synonym, rephrase, passive voice), adjacent memory-family alerts (swap utilization, heap utilization, RSS), same host different resource (CPU, disk, queue, latency), unrelated subsystem (network packet retransmission, auth failures).

This maps the actual shape of transfer — not whether it exists but whether it falls off with distance or drops off a cliff. If the space is bimodal, that is a finding about the representation.

If the result is a gradient, the address space has real structure. Stimuli that are semantically close produce partial transfer. The system is not just classifying — it is representing similarity.

If the result is a step function, the router is doing crude classification. Transfer is all-or-nothing. That is still interesting — it tells you something about the granularity of the representation — but it means the address space is not geometrically rich.

Either is a result. The data is coming in now.

**N+2 — Close the loop: let outcomes decide what fades**

Replace the repetition counter with cost. Escalating a routine alert wakes a human — that costs something. Missing a real incident costs far more. Each night, replay weighted by the regret the agent actually incurred. Let the direction of plasticity fall out of outcomes instead of being imposed by a rule.

This buys the thing we cannot currently test: does it habituate to the *right* things?

Under outcome-weighted replay, depressing a genuine emergency becomes expensive. The cost of ignoring it never goes down. The system must discover that some alerts should not be depressed — not because a rule says so, but because the regret accumulates and the replay keeps surfacing them at high weight.

That is a harder version of criterion 6, and the first time the decrement would be *discovered* rather than *imposed*. Habituation would be earned, not engineered.

**N+3 — The homeostat: intelligence, not just cognition**

Give it something to protect with a real bound. Keep the service up. Keep human interruptions under N per week. Two costs in genuine conflict.

Now habituation stops being a behavioral quirk and becomes a *strategy* for staying inside the bounds. If the agent habituates to the right alerts, interruptions stay low. If it habituates to the wrong ones, an incident slips through and the service goes down. The system must learn which is which — not from a rule, but from whether it is hitting the bound.

Then the Levin question: damage it. Delete a slot. Scramble the index. Does it re-reach the goal by a different route?

That is the flatworm test on this substrate. Goal-directed recovery after damage, not through cells but through agents. If it can find another path to staying inside the bounds after part of its machinery is destroyed, that is where basal intelligence would actually begin.

---

## The Safety Gate

:::{figure} ../images/ch10-safety-gate.png
:label: fig-ch10-safety-gate
:alt: The rollback mechanism — capability benchmark runs after every sleep, automatic rollback to previous night's adapter snapshot if performance drops past threshold.
:width: 100%
:align: center

After every sleep: benchmark. If capability drops past threshold, roll back to last night's snapshot. The setpoint protecting itself.
:::

A model that is getting dumber also stops reacting. That is the problem.

If the adapter is degrading general capability — not just learning to treat disk alerts as less urgent, but actually becoming less coherent — the urgency scores will drop. It will look exactly like habituation on the surface metric. A false positive. The experiment appears to work and the model is actually breaking.

So after every single sleep, before recording anything, we run the model on completely unrelated tasks. Things it should still be able to do. Standard benchmarks. A small fixed suite that takes five minutes and catches the obvious cases. If general capability drops past a threshold — roll back automatically to the previous night's adapter snapshot. The night's learning is discarded. The adapter reverts.

That gate is what makes it safe to leave running unattended. Without it, you cannot trust any result you get.

And it is more than a safety feature.

This is ingredient one, from Chapter 9, running for real.

The model has a setpoint: *not dumber than yesterday*. The system is organized to protect it. The rollback is not a cautious engineering decision bolted on after the fact. It is the immune response. The homeostatic mechanism. The thing that keeps the inside stable while the outside changes.

That is the same shape as a cell keeping its internal chemistry within survivable bounds. The same shape as a planarian keeping its bioelectric pattern intact after amputation. The same shape as every example in this book — basal cognition at the most basic scale, running in a transformer adapter on an M4 Max, overnight, while no one is watching.

The flatworm regenerates because the pattern is maintained. The adapter rolls back because the capability is maintained. Different substrate. Same logic.

If you understand why the cell does it, you understand why the experiment needs the gate.

---

## What This Proves and What It Does Not

Getting the line to move was the first milestone. We got it to move.

It proves the architecture works — that a sleep-trained routed adapter can produce response changes that persist across independent sessions, with identical prompts, with no context carryover. It proves the weights can be updated in a direction that looks like learning, with specificity that four earlier attempts could not achieve.

It proves that the structural insight was correct. Low-rank updates to shared weights cannot be stimulus-specific. The mathematics forces the update to distribute. Routing is not a preference — it is a requirement for specificity.

Six of seven habituation criteria. Five seeds. Tight variance. That is a real result.

What it does not prove: that the model has phenomenal experience. That it "understands" the alert in any meaningful sense. That it settles the hard question from Chapter 3 about what constitutes genuine caring versus functional analog.

What it also does not yet prove: that the habituation is for anything. The system depresses repeated alerts because we told it to. Not because depressing them was useful. The difference between engineered behavior and discovered strategy is ingredient 4, and it is the target of the next two experiments.

The experiment is no longer a blueprint. It ran. The weights moved. The line bent.

What comes next is finding out whether the bend is in the right direction — and whether it can be made to serve something.

That experiment is running right now.
