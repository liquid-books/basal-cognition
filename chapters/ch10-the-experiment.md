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

The instinct that "it doesn't have to be real time" turned out to be the actual textbook answer. Not a compromise. Not a workaround. The answer.

There is a theory in neuroscience so well-established it has its own acronym. **Complementary Learning Systems** — CLS. It says that any intelligent thing, biological or otherwise, needs *two* learning systems: a fast one that grabs today's experiences and a slow one that carefully rewrites permanent knowledge. You need two because of the problem this book has been circling since Chapter 2.

One system cannot both absorb something instantly *and* hold stable knowledge without wrecking itself.

That is what sleep is for. You learn during the day. Your brain rewrites itself overnight. The hippocampus logs everything fast and dirty. The neocortex integrates it slowly, carefully, over hours — while the hippocampus is offline.

Building an AI that runs all day and then "sleeps" to consolidate is not a clever hack around slow hardware. It is copying the known solution — the one evolution landed on and kept for five hundred million years.

---

## The Architecture

:::{figure} ../images/ch10-cls-architecture.png
:label: fig-ch10-cls-architecture
:alt: Complementary Learning Systems diagram — fast hippocampus (episodic, temporary) and slow neocortex (stable, permanent) as two separate tracks converging on intelligent behavior.
:width: 100%
:align: center

Two tracks, both necessary. The hippocampus grabs fast. The neocortex integrates slow. Neither can do both jobs without breaking.
:::

**Two memories. One sleep cycle.**

**The hippocampus (fast, temporary).** A buffer that logs the day. Not everything — only what is surprising. The model was unsure. The outcome was unexpected. The alert keeps recurring. That surprise gate is what the biological hippocampus does. It is picky on purpose. Without novelty filtering, every repeat overwrites the previous entry and you accumulate nothing. A buffer that writes everything is just a log file. A buffer that writes what matters is the beginning of a memory.

:::{figure} ../images/ch10-hippocampus-filter.png
:label: fig-ch10-hippocampus-filter
:alt: Novelty filter diagram — first alert (high novelty, written to buffer) vs repeated alert (low novelty, ignored) — the hippocampus becoming selective over time.
:width: 100%
:align: center

First encounter: high novelty, written. Fiftieth encounter: low novelty, filtered. The hippocampus gets pickier. That pickiness is the feature, not the bug.
:::

**The neocortex (slow, permanent).** A LoRA adapter — a small set of adjustable weights bolted inside the model. LoRA stands for Low-Rank Adaptation. The idea is simple: instead of retraining billions of parameters, you insert two small matrices at each layer. Their product approximates the change you want. The base model is frozen. The adapter is the only part that moves.

That distinction matters. Frozen base means the model's general intelligence is protected. Moveable adapter means the model can accumulate specific knowledge without self-destructing.

:::{figure} ../images/ch10-lora-adapter.png
:label: fig-ch10-lora-adapter
:alt: LoRA adapter diagram showing two small matrices inserted into a frozen base model — the neocortex equivalent, the only part that is allowed to change.
:width: 100%
:align: center

The adapter is small. The base model is frozen. That separation is what makes learning safe — and rollback possible.
:::

**Sleep.** At the end of a day: take the hippocampus buffer and train the LoRA adapter on it. But not alone. Interleave it with replay of older material — things the adapter already knows. The interleaving is the specific mechanism that stops new learning from bulldozing old. Run it overnight. Then snapshot the adapter before anything else. That snapshot is your rollback point.

**Waking up.** Buffer clears. The model is now different from what it was yesterday. Same base model, different adapter. The difference is in the weights — and nowhere else.

---

## The Paper That Changes the Shape of the Problem

:::{figure} ../images/ch10-sleep-replay-consolidation.png
:label: fig-ch10-sleep-replay-consolidation
:alt: The Tadros SRC mechanism — noise fed into weight matrix, weights generate their own replay patterns, memories consolidate without any stored training data.
:width: 100%
:align: center

The weights replay themselves. No stored data. Just noise and the connections that held the memory.
:::

Here is the paper that matters most.

**Tadros, Krishnan, Ramyaa & Bazhenov (2022), "Sleep-like unsupervised replay reduces catastrophic forgetting in artificial neural networks." *Nature Communications* 13, 7742. https://doi.org/10.1038/s41467-022-34938-7. Open access. Cited 93 times.**

Their algorithm is called **SRC — Sleep Replay Consolidation.**

One sentence from the results section is worth reading twice:

> "Importantly, no inputs representing specific memories were ever presented to the network during sleep; the state of the network (weight matrices) implicitly determined the patterns of reactivation and, ultimately, what was replayed during sleep."

Read it again. They did not store old data and feed it back in. They ran the network on *noise* — with local Hebbian rules — and the weights themselves decided what got reactivated. The memory replayed out of the connections that held it. Nothing was retrieved from external storage because nothing was stored externally.

They are direct about how this differs from standard replay:

> "While actual training data were used to generate replay to improve generalization in [prior work], here we show that sleep replay can alleviate catastrophic forgetting... by only having access to the basic input statistics."

No stored data. Just noise and the weights.

A companion paper fills in the mechanism from a different angle.

**Golden, Delanois, Sanda & Bazhenov (2022), "Sleep prevents catastrophic forgetting in spiking neural networks by forming a joint synaptic weight representation." *PLOS Computational Biology*. Open access.**

Their framing adds something specific: sleep works by "forming joint synaptic weight representations suitable for storing multiple memories." The goal is not protecting old memories from new ones. The goal is finding weight configurations that serve *both* at once. And again — "replaying old memory traces without explicit usage of the old training data."

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

If memory lives only in the weights, you do not need a replay buffer of stored examples. You could consolidate from noise plus the adapter's own current state — letting the model regenerate what it knows rather than being reminded of it. That is a harder build and a more interesting one. It is also the version that is fully consistent with the flatworm principle: the thing that computes is the only place the memory lives.

The Tadros and Golden papers demonstrate this at MNIST scale. Nobody has shown it working on a transformer. That gap is not a weakness — it is the open question this experiment is positioned to push on.

---

## The Honest Limitation

Both papers use small networks. MNIST classification. Not language models. Not transformers. The local Hebbian learning rules they use do not map cleanly onto how modern transformers are trained. Gradient descent on a transformer layer is not the same operation as Hebbian strengthening of a synapse.

The concept is proven. The scale-up is genuinely open.

Which is exactly why extending it is interesting rather than derivative. If noise-driven, data-free consolidation works in a transformer adapter — even approximately — the implication is significant. Not just for catastrophic forgetting. For the entire architecture of AI memory.

The experiment does not prove the transformer version works. It is a first step toward finding out.

---

## The Model Choices

Two candidates. One recommendation.

**Primary: Llama-3.2-3B-Instruct.** The most fine-tuned model in existence — every problem you are likely to hit has already been solved by someone and documented on Hugging Face. It ranks high on tunability: the gap between its base performance and its fine-tuned performance is large, which means fine-tuning actually does something. MLX — Apple's framework for M-series chips — runs it 20–50% faster than comparable frameworks on an M4 Max. Pre-quantized versions are ready to download.

**Faster alternative: Qwen3-1.7B.** Roughly half the size. Top-six for fine-tuned performance in its class. Shorter nights means more sleep cycles per day of experimenting. If iteration speed matters more than raw capability, this is the swap.

Start with Llama-3.2-3B. Fewest surprises. Swap to Qwen if sleep runs too slow to iterate.

---

## The Experiment, Day by Day

:::{figure} ../images/ch10-day-by-day.png
:label: fig-ch10-day-by-day
:alt: Day-by-day experiment timeline — Day 1 flat at 2.92, Night 1 sleep cycle, Day 2 showing the question of whether the score moves.
:width: 100%
:align: center

Day 1: flat. Night 1: sleep. Day 2: does the number move? That question is the entire experiment.
:::

**Day 1.** Show the model the same disk-space alert 20 times. Record the urgency score each time. Everything goes in the hippocampus buffer. Prediction: flat — exactly like the 49,201 frozen-model calls from Chapter 8 — because nothing has changed yet. The adapter has not been written. The weights are the same as they were this morning.

**Night 1.** Sleep. The buffer trains the adapter. The snapshot saves.

**Day 2.** Show it the exact same 20 alerts. Byte-for-byte identical prompts. No history. No context window. No memory of yesterday in any retrievable sense.

If the answer moved, only the weights could have done it. The prompt is identical — so there is no other available explanation. That is the whole experiment in one sentence. Identical input, different output, weights changed in between.

Then keep going for a week or two. Run the same criteria battery from Chapter 8 — just across nights instead of turns:

- Does the score keep dropping night over night? *(spontaneous progression)*
- Does it come back if the alert is withheld for a few days? *(spontaneous recovery)*
- Is it specific — does a different alert stay unaffected? *(stimulus specificity)*
- Does a novel emergency snap it back? *(dishabituation)*

Four criteria. Each one is a data point. All four together start to look like something.

---

## The Trap Worth Naming

:::{figure} ../images/ch10-sensitization-trap.png
:label: fig-ch10-sensitization-trap
:alt: The Hebbian trap — naive gradient descent strengthens repeated inputs producing sensitization, versus the anti-Hebbian rule that weakens repeated low-salience inputs producing habituation.
:width: 100%
:align: center

Two learning rules, opposite outcomes. Gradient descent fires together, wires together. Anti-Hebbian repetition weakens the connection. The sign matters.
:::

Plain gradient descent on a repeated input makes a model *more* confident about it. "Fire together, wire together" — Hebbian in effect. The network has seen this input many times and the gradient keeps pushing the weights in the same direction. The alert gets more alarming each night, not less.

That is **sensitization**. The opposite of what we want.

The 2022 Tadros paper points toward the fix. Real brains use an anti-Hebbian rule for repeated low-salience inputs — repetition *weakens* the connection rather than strengthening it. Long-term depression, not long-term potentiation. The mechanism exists. It is implementable. It requires changing the learning rule applied during the sleep phase.

If the number moves the wrong way after Night 1, that is not failure. It is the sign being backwards. And we know how to flip it.

Either direction is a result. Sensitization tells you the weights moved and the learning rule needs adjustment. Habituation tells you the weights moved in the biologically correct direction. A flat line is the only non-result. A flat line means sleep alone was not enough.

---

## The Number to Watch

:::{figure} ../images/ch10-the-number.png
:label: fig-ch10-the-number
:alt: The number 2.92 plotted as a flat line across 49,201 trials, with a question mark at the end where the LoRA adapter experiment begins.
:width: 100%
:align: center

\$2.92. Flat. 49,201 times. The question mark is what comes next — and either direction means the weights finally moved.
:::

The frozen models sat at **\$2.92** through 49,201 trials. Flat. Identical answer every time. The prompt-based experiment confirmed that a frozen model cannot habituate, because there is nothing to change. The score was the score was the score.

If the adapter model's score drifts down over a few nights: habituation. Appearing in this project for the first time. Weights that learned to treat a repeated, low-consequence alert as less urgent than they did on Day 1.

If it drifts up: sensitization. Still a result. Still weights moving. Still the first time anything in this project moved at all.

A flat line: nothing happened. Sleep alone was not enough, or the novelty gate was too aggressive, or the learning rate was wrong. Adjust and try again.

The goal of week one is not to achieve habituation. The goal is to get the line to move.

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

So after every single sleep, before recording anything, run the model on completely unrelated tasks. Things it should still be able to do. Standard benchmarks. A small fixed suite that takes five minutes and catches the obvious cases. If general capability drops past a threshold — roll back automatically to the previous night's snapshot. The night's learning is discarded. The adapter reverts.

That gate is what makes it safe to leave running unattended. Without it, you cannot trust any result you get.

And it is more than a safety feature.

This is ingredient one, from Chapter 9, running for real.

The model has a setpoint: *not dumber than yesterday*. The system is organized to protect it. The rollback is not a cautious engineering decision bolted on after the fact. It is the immune response. The homeostatic mechanism. The thing that keeps the inside stable while the outside changes.

That is the same shape as a cell keeping its internal chemistry within survivable bounds. The same shape as a planarian keeping its bioelectric pattern intact after amputation. The same shape as every example in this book — basal cognition at the most basic scale, running in a transformer adapter on an M4 Max, overnight, while no one is watching.

The flatworm regenerates because the pattern is maintained. The adapter rolls back because the capability is maintained. Different substrate. Same logic.

If you understand why the cell does it, you understand why the experiment needs the gate.

---

## What This Proves and What It Does Not

Getting the line to move is the first milestone.

It proves the architecture works — that a sleep-trained LoRA adapter can produce response changes that persist across independent sessions, with identical prompts, with no context carryover. It proves the weights can be updated in a direction that looks like learning.

It does not prove the model has phenomenal experience. It does not prove the model "understands" the alert in any meaningful sense. It does not settle the hard question from Chapter 3 about what constitutes genuine caring versus functional analog.

What it does — if it works — is build the substrate that makes the harder questions worth asking. Right now, we cannot even get the line to move. A frozen model has nothing to show. Once the weights move, once the score drifts in a lawful direction across criteria, once spontaneous recovery and dishabituation appear on a timeline measured in nights rather than turns — then the framework has something to say.

The experiment is a blueprint, not a hope. Every piece of it exists. The LoRA adapters are standard tooling. The sleep cycle is a script. The novelty gate is a threshold. The safety rollback is a snapshot and a benchmark.

The only question is whether the weights move in the right direction.

Run it and find out.
