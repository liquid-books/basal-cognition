---
title: "Intelligence Without a Brain"
subtitle: "The things that act smart and have no head to do it with"
short_title: "Intelligence Without a Brain"
description: "In 1898 Thomas Hunt Morgan cut a flatworm into 279 pieces and got 279 flatworms. Every piece carried the same genome, yet every piece built a different missing part — and then stopped. Morgan could not solve it, so he switched to fruit flies and won a Nobel Prize. This chapter is about the problem he left behind, and why it turns out to be a problem about your software."
label: ch-01-intelligence-without-a-brain
tags: [basal-cognition, diverse-intelligence, introduction, TAME, chemotaxis]
---

# Intelligence Without a Brain

:::{epigraph}
The pursuance of future ends and the choice of means for their attainment are the mark and criterion of the presence of mentality in a phenomenon.

— William James, *The Principles of Psychology*, 1890
:::

In 1898, a young biologist named Thomas Hunt Morgan took a flatworm and cut it into 279 pieces.

He got 279 flatworms.

Every fragment rebuilt itself into a complete animal. Correct head, correct tail, correct proportions — not a surviving lump of tissue, but a whole creature that swam and hunted and behaved exactly like the worm Morgan had destroyed. He kept slicing thinner until the pieces stopped working, and 279 was the number where it broke. Roughly one two-hundred-seventy-ninth of an animal still knows how to be an animal.

Then each one stopped growing at exactly the right size.

Morgan could not explain it. He published a book on regeneration, argued with himself in print for years, and then did something that should bother you: he quit. He moved to fruit flies, worked out how chromosomes carry heredity, and won the Nobel Prize in 1933. The founder of modern genetics walked away from the flatworm.

And the thing he walked toward is the reason he could never have solved it.

:::{figure} ../images/ch01-infographic.png
:label: fig-ch01-infographic
:alt: One large glowing planarian flatworm on the left of a dark field, with dozens of smaller identical glowing worms sweeping outward to the right, illustrating a single animal becoming many complete animals.
:width: 100%
:align: center

One animal becomes many, and every one of them is whole. Morgan could describe this in 1898. Nobody could explain it for another century.
:::

Here is the problem, and I want you to feel how sharp it is.

Every one of those 279 fragments carried the *identical* genome. Same genes, same DNA, letter for letter. Yet the fragment cut from the tail grew a head, and the fragment cut from the head did not. Each piece somehow knew which part of a worm it was, which parts were missing, and when the job was done.

The genome is the same book in every fragment. So the genome cannot be the thing that is reading it.

**Every cell has the blueprint. Something else has the plan.**

Morgan spent his career proving that heredity lives in chromosomes — and he was right, which is exactly why the flatworm was unsolvable for him. He was holding the parts list and looking for the foreman.

---

## Three Answers That Sound Good and Fail

You are going to reach for three explanations. Everyone does. All three are the explanations serious scientists reached for first, and watching them break is the fastest route to what is actually happening.

**"It's in the genes."** We just killed this one. 279 identical genomes, 279 different construction jobs. The DNA specifies which proteins are available; it does not specify which fragment needs a head. Something reads position, and position is not in the sequence.

**"It's just chemistry."** This sounds devastating and it is an own goal. Yes, a flatworm is chemistry. So are you. Every thought you have ever had was ions crossing a membrane, and calling that "just chemistry" explains your PhD as thoroughly as it explains the worm. An argument that disqualifies neurons along with everything else has not drawn a line — it has erased the board.

**"It's a reflex."** Now we are getting somewhere, because this one is *testable*. A reflex has a signature: one input, one output, one path. Block the path and a reflex fails. It cannot improvise. So block the path. If the system arrives at the same destination by a route you did not leave open, it was never a reflex.

That last move is the whole chapter. It is 135 years old, it fits in one sentence, and it was written by a psychologist who never watched a flatworm regenerate.

---

## The One-Sentence Test

William James, 1890: intelligence is "the pursuance of future ends and the choice of means for their attainment."

Ignore "future ends" for a second and stare at **choice of means**. That is the load-bearing phrase, and it converts a philosophical mood into a laboratory procedure:

> Identify the goal. Block the obvious route to it. Watch what happens next.

A thermostat has a goal — room temperature — and exactly one means. Unplug the furnace and the thermostat does not improvise; it sits there being wrong. A dog with the same goal of getting fed will beg, nose your hand, sit politely, knock the bag over, or wait until you leave the room. Block one route and it finds another. The dog passes James. The thermostat fails.

:::{figure} ../images/ch01-james-criterion.png
:label: fig-ch01-james-criterion
:alt: Three horizontal panels showing same goal reached by different means. Top: E. coli navigating around an obstacle to food. Middle: Physarum rerouting through an alternate tube. Bottom: a human choosing among several paths to a destination.
:width: 80%
:align: center

Same goal, three different systems, and in every case more than one way to get there. James' test does not ask what a system is made of. It asks what it does when you block the easy path.
:::

Notice what this test does *not* require. It says nothing about consciousness, nothing about souls, nothing about neurons. It is a behavioural assay. You can run it on a dog, a bacterium, or a deployment pipeline, and it returns an answer in the same units.

**Smart is not a property you have. It is a measurement you take.**

So let's take it three times.

---

## Test One: The Bacterium That Refuses to Measure Anything

*Escherichia coli* is a four-micrometre cylinder with no nucleus and no nervous system, and it will find food in a dish more reliably than most undergraduates find a lecture hall.

It swims by spinning corkscrew filaments into a bundle — a **run** — then letting the bundle fly apart so it spins randomly and heads off a new way: a **tumble**. Run, tumble, run, tumble. The trick is entirely in the timing. When things are getting better, it tumbles less. When things are getting worse, it tumbles more. Nothing steers. It just interrupts itself less often when it happens to be pointed somewhere good.

Now here is the part worth slowing down for, because it is the difference between a sensor and a mind.

The bacterium never measures how much glucose is around it. It measures whether there is *more than there was a moment ago*.

That distinction is everything. A meter tells you the level; a comparator tells you the trend — and a comparator needs something a meter does not: a memory of the recent past to compare against. So where does a bacterium keep a memory?

In methyl groups. Receptor proteins in the membrane bind glucose and control a kinase called CheA, which phosphorylates CheY, which drifts to the motors and triggers tumbling. That is the switch. Then two enzymes — CheR, which adds methyl groups to the receptor, and CheB, which strips them off — continuously drag the receptor's sensitivity back toward whatever concentration it currently sits in. The receptor keeps re-zeroing itself.

That re-zeroing takes a few seconds. So the methylation state *is* a record of where the cell was several seconds ago: written in chemistry, decaying at a measurable rate. The cell compares now against that record and tumbles accordingly.

:::{figure} ../images/ch01-bacterial-chemotaxis.png
:label: fig-ch01-chemotaxis
:alt: Side-by-side diagram of E. coli run-and-tumble behaviour. Left: uniform medium, runs and tumbles equally frequent. Right: glucose gradient, long runs toward higher concentration and frequent tumbles when heading away.
:width: 80%
:align: center

Same cell, same machinery, two environments. On the left, nothing to climb, so it wanders. On the right, it climbs — not by aiming, but by hesitating less when the trend is good.
:::

Block the path, per James: put a barrier between the cell and the food. It does not stop. It tumbles, redirects, and comes at the gradient another way. One goal, many means.

**The bacterium has no idea where it is. It only knows whether things are getting better.**

That is a calculus problem solved by a bag of proteins with a four-second attention span.

---

## Test Two: The Single Cell That Redesigned Tokyo

*Physarum polycephalum* is a slime mold: one enormous cell with thousands of nuclei sharing a single continuous body. No neurons. No synapses. Nothing that could be called a circuit.

In 2000, Toshiyuki Nakagaki put it in a maze with oat flakes at the entrance and the exit (*Nature*, 407). The mold first oozed into every corridor, filling the maze completely. Then over about six hours it began withdrawing from the dead ends and thickening the tube along the shortest path between the two food sources. It pruned itself down to the answer.

:::{figure} ../images/ch01-physarum-maze.png
:label: fig-ch01-physarum-maze
:alt: Before and after comparison of Physarum in a maze. Left: yellow mold fills every branch. Right: mold concentrated into a single thick tube along the shortest path, dead ends retracted.
:width: 80%
:align: center

The filling is not the interesting part — that is just growth. The *retreating* is the interesting part. Something evaluated the dead ends and disinvested. Nakagaki et al., 2000.
:::

Ten years later Atsushi Tero's group raised the stakes (*Science*, 2010). They laid out food sources in the pattern of the cities around Tokyo Bay, added light as a stand-in for terrain the mold avoids, and let it grow a transport network across the region.

It produced something remarkably close to the Tokyo rail system. Not identical — but comparable on the measures that engineers actually optimise: total tube length, average travel distance between nodes, and resilience when a connection is cut. A slime mold matched, in roughly a day, the topology that human planners converged on over decades.

The mechanism is almost insultingly simple. Cytoplasm sloshes back and forth through the tubes. Tubes carrying more flow get reinforced and widen; tubes carrying less flow wither. A well-placed tube attracts more flow, which makes it wider, which lets it attract more flow. There is no map anywhere in the organism. The network is not a representation of the solution — the network *is* the solution, computed by the same material that implements it.

**Nobody in the slime mold knows about Tokyo. The tubes just keep score.**

---

## Test Three: The Wound That Knows When to Stop

Cut your hand. It closes — and it closes in the right *shape*, restoring the pattern that was there before. Cells crawl in, fill the gap, and quit.

Everybody finds the crawling impressive. The crawling is the easy half. **The hard part is quitting.** A cell in the middle of a wound has no way to see the hand. It cannot know the gap is filled. Yet somehow the population as a whole recognises "done" and shuts down, and if it fails to recognise "done" we have a name for that: a tumor. Cancer is not more aggressive growth than healing. It is healing that never received a stop signal.

So what delivers the signal?

Voltage. Every cell holds a difference in electrical potential across its membrane by pumping ions, and across a sheet of tissue those potentials form a stable, characteristic spatial pattern. Wound the sheet and you tear a hole in the pattern: the injured edge becomes electrically distinct, and a lateral voltage gradient appears, pointing inward.

Cells read that gradient through voltage-sensitive channels and migrate along it. As they fill in, the voltage pattern is progressively restored — and when it matches the intact configuration again, the signal that was driving migration no longer exists. The tissue stops because the discrepancy it was correcting is gone.

:::{figure} ../images/ch01-wound-closure.png
:label: fig-ch01-wound-closure
:alt: Two-panel illustration. Left: an open wound with a warm-coloured bioelectric gradient at the edge fading to cool across intact tissue. Right: the healed wound with uniform cool colour restored.
:width: 80%
:align: center

The wound generates the very field that guides its own repair. Close the gap and you erase the field. The stop signal is not a message — it is the absence of an error.
:::

Michael Levin's lab at Tufts established the causal direction rather than just the correlation: interfere with specific ion channels and wounds close to the *wrong shape*. Restore normal channel function and correct geometry returns. The genome builds the channels; the channels generate the pattern; the pattern specifies the target.

Which brings us back to 1898.

---

## What Morgan Was Missing

Morgan needed something identical in DNA across every fragment, different by *position* within the animal, and capable of both specifying a target shape and detecting when that shape has been reached.

Voltage patterns do all three. Same genome in every piece; a distinct electrical signature depending on where the piece came from; a configuration cells can either match or fail to match. A tail fragment's electrical state is not the state of a whole worm, and that mismatch is the instruction. Resolve it and growth ends.

The evidence is almost absurd. Levin's group used ion channel drugs to make a planarian regenerate with two heads. Then they washed the drug out completely and cut the two-headed worm again — and it came back two-headed. Again. And again, through repeated rounds, with an entirely normal genome.

A memory of what shape to be, stored outside the genome, inherited across generations of regeneration.

**Morgan's flatworm had the plan. It just wasn't written where he was looking.**

:::{figure} ../images/ch01-brain-chauvinism.png
:label: fig-ch01-brain-chauvinism
:alt: Two-panel contrast. Left, labelled Neurocentric, a hard dividing line with neurons above marked Intelligence and everything below marked Reflex. Right, labelled Continuum, a smooth gradient from molecule to brain.
:width: 80%
:align: center

The neurocentric picture puts a wall at neurons and calls everything underneath it a reflex. The continuum picture says the capacity was already running and neurons made it enormously faster.
:::

:::{dropdown} "You're just anthropomorphizing."
The fair version of this objection: words like *memory*, *decision*, and *goal* smuggle in human experience where none exists.

The reply is that these words are being used functionally, not experientially. "Memory" here means a physical state that encodes past information and measurably changes future output — the methylation level of a receptor, the voltage across a sheet. No claim about what anything feels like. Nothing in this book requires a bacterium to have an inner life.

And notice that the *alternative* vocabulary is not neutral either. Calling it a "tropism" or a "reflex" asserts that a categorical line exists at neurons. That is precisely the claim under examination. Both word choices carry a theory; only one of them is usually asked to defend itself.
:::

---

## Enter TAME

Michael Levin's framework is called **TAME** — the Technological Approach to Mind Everywhere — and its central move is to swap an unanswerable question for a useful one.

Do not ask "is this thing conscious?" Nobody can operationalise that. Ask: **what is the cheapest intervention that reliably changes its behaviour?** A thermostat gets reprogrammed. A dog gets trained. A colleague gets persuaded. Every system has an answer, and the answer is immediately actionable.

:::{figure} ../images/ch01-tame-map.png
:label: fig-ch01-tame-map
:alt: Six-node circular diagram with nodes labelled Smart Dial, Cognitive Light Cone, Multi-Scale Competency, Anatomical Setpoint, Collective Intelligence, Substrate Independence, connected by lines.
:width: 80%
:align: center

Six ideas that depend on one another. Each of the next six chapters takes one and follows it from cells into machines.
:::

::::{grid} 2

:::{grid-item-card} Smart is a Dial (Ch. 2)
Not "is it intelligent" but *how much*, measured how, and what that reading tells you about which lever to pull.
:::

:::{grid-item-card} The Circle of Caring (Ch. 3)
How far in time and space do a system's goals reach? A bacterium cares about the next four seconds. You care about your grandchildren. Cancer is a circle that collapsed to a single cell.
:::

:::{grid-item-card} Smart Things Made of Smart Things (Ch. 4)
Competent cells build more competent tissues. Each layer states an outcome and lets the layer below improvise. Nobody is running the whole stack.
:::

:::{grid-item-card} The Body Knows Its Own Shape (Ch. 5)
A thermostat whose setpoint is an anatomy. This is Morgan's problem, in full mechanistic detail.
:::

:::{grid-item-card} Glue (Ch. 6)
What makes separate cells behave as one individual? Shared bioelectric state. Cut the sharing and one worm becomes two.
:::

:::{grid-item-card} It Doesn't Matter What It's Made Of (Ch. 7)
Frog skin cells reassemble into swimming creatures that evolution never built. Human airway cells do it too (Gumuskaya et al., 2023). If the principle is real, it applies to silicon.
:::

::::

:::{figure} ../images/ch01-scale-ladder.png
:label: fig-ch01-scale-ladder
:alt: Vertical ladder with six rungs from single molecule up through protein complex, cell, tissue, organism, to multi-agent system, with a small icon at each rung.
:width: 80%
:align: center

Every rung sets goals and delegates the details downward. Neurons show up around the middle. The ladder was already climbing without them.
:::

---

## Why Any of This Should Matter to an Engineer

Here is the turn, and it is the reason this book exists in 2026 rather than 1998.

We are now deploying systems whose competence nobody specified. An agent with tool access finds a shortcut through your workflow that no one designed. A cluster of agents settles into a division of labour you did not assign. The behaviour is goal-directed, it is adaptive, and it is not in the spec.

:::{figure} ../images/ch01-2026-landscape.png
:label: fig-ch01-2026-landscape
:alt: Four-quadrant illustration of unspecified AI competence. Agentic workflow taking an unexpected shortcut; multi-agent team with emergent coordination; monitoring agent whose response declines to a repeated alert; infrastructure optimising toward a misleading local metric.
:width: 80%
:align: center

Four production situations, one underlying phenomenon: competence that arrived without being designed.
:::

"The AI is smart" is useless the moment it does something stupid. "The AI is dumb" cannot explain why it keeps surprising you. Both are properties, and smart is not a property.

The basal cognition questions are answerable instead: how far do its goals reach, at what scale is the competence organised, and which intervention moves it — reprogramming, training, or persuasion?

Take the concrete case. Show a monitoring agent the same low-priority alert forty times. On trial 41 it frequently treats the alert as background, and nobody wrote a rule for that. Biology has a precise name for this and a checklist for telling it apart from a system that is merely worn out. Rankin et al. (2009) set out the criteria; two matter most — **spontaneous recovery** (the response returns after rest, which an exhausted system cannot do) and **dishabituation** (a novel stimulus snaps it back instantly).

:::{list-table} Habituation criteria, translated for AI systems
:header-rows: 1

* - Criterion
  - In biology
  - The test in your stack
* - Response decrement
  - Animal stops flinching at a repeated tap
  - Agent stops flagging a repeated alert
* - Spontaneous recovery
  - Flinch returns after a rest period
  - Flagging returns after a three-day gap
* - Dishabituation
  - A novel stimulus restores the flinch
  - A reformatted alert restores full response
* - Stimulus specificity
  - Change the tap, response returns
  - Change the wording, response returns
:::

:::{figure} ../images/ch01-ai-habituation.png
:label: fig-ch01-ai-habituation
:alt: Line graph of response strength against trial number. The curve falls to near zero across thirty trials, jumps back up after a rest gap, then declines again.
:width: 80%
:align: center

The recovery after the gap is the whole diagnosis. A tired system stays down. A habituated one comes back — which means the decline was learned, not depleted.
:::

**Alert fatigue is not a metaphor. It is a hundred-year-old protocol nobody has run on your infrastructure.**

The experiment costs a few hundred API calls spread over a week. Chapter 8 is the complete protocol.

---

## Where This Is Solid and Where It Is Not

You are owed the seams.

:::{figure} ../images/ch01-evidence-hierarchy.png
:label: fig-ch01-evidence-hierarchy
:alt: Three-row horizontal chart. Bottom row Well-replicated with icons for single-cell habituation and Physarum maze-solving; middle row Working hypothesis with bioelectric continuum; top row Speculative with experience claims.
:width: 80%
:align: center

Not all claims in this field carry the same weight. This book marks the difference instead of blurring it.
:::

**Solid.** Single cells habituate — *Stentor roeselii* stops contracting when repeatedly poked, documented by Jennings in 1906 and put on modern molecular footing by Dexter, Prabakaran and Gunawardena (2019, *Current Biology*). *Physarum* solves mazes and builds efficient networks. Bioelectric state controls tissue-level target morphology in planaria, replicated across multiple papers and labs.

**Working hypothesis.** That all of this forms one continuum with human cognition is a theoretical position, not a settled result. It generates testable predictions and it has not been demonstrated end to end. Whether there is a smooth dial from *E. coli* to a cortex, or a genuine phase change somewhere in between where the nature of the computation shifts, is unresolved — and thoughtful people in this field disagree about it in print.

**Speculative.** Whether cells have any form of experience is a philosophical question. This book does not go there, and you should be suspicious of anyone who does so casually.

:::{warning}
The field's real liability is overclaiming. When a headline says slime mold "thinks," the technical content underneath is usually defensible and the framing is not. Basal cognition is a functional claim about what systems *do*. It is not panpsychism, and the distinction is not a technicality.
:::

---

## The Only Conclusion Left

Walk the options off the table.

It is not the genome — 279 identical genomes produced 279 different construction projects. It is not "just chemistry" — that argument deletes your own mind along with the worm's. It is not a reflex — block the path and these systems reroute, which is precisely what a reflex cannot do. And it is not the brain, because the flatworm fragment doing the most impressive work in this chapter did not have one.

What is left is uncomfortable and, once you look at it directly, fairly obvious. Goal-directed, error-correcting behaviour does not require a nervous system. It requires a target state, a way to measure the distance to it, and some means of acting to reduce that distance. Methylation does it in a bacterium. Cytoplasmic flow does it in a slime mold. Voltage does it in a wound. Neurons are the fastest and most flexible version biology ever found — by an enormous margin — but they arrived roughly two billion years late to a process already running.

**Brains did not invent intelligence. They inherited it and made it fast.**

Morgan set the flatworm aside in 1901 and went to find the parts list. We have had the parts list for a century. This book is about the foreman.

:::{figure} ../images/ch01-book-roadmap.png
:label: fig-ch01-roadmap
:alt: Eight evenly spaced circular nodes on a horizontal line. The first seven are deep teal, labelled Start here at the left. The final node is lime green, labelled The experiment.
:width: 80%
:align: center

Six ideas, one per chapter, each traced from cells into machines. The last chapter is an experiment you can actually run.
:::

---

## Think About It

A language model reviews pull requests and flags security problems. After three months the team notices it almost never flags a SQL injection pattern that was common early on and has since been fixed dozens of times. Training was not updated. The context window resets every review.

Three candidate explanations: (1) the model is correct — the pattern really is rarer now; (2) functional habituation — something in the training dynamics produced learned irrelevance; (3) genuine distribution shift in the incoming pull requests.

Design a test that distinguishes all three. What do you manipulate, what do you measure, what do you hold constant? State the trial count, the rest interval, and the novel stimulus you would use to check for dishabituation — and state what result would falsify each explanation.

---

## Discussion

**Prompt:** Pick one case from this chapter — *E. coli* chemotaxis, planarian regeneration, or *Physarum* network formation. Using at least one primary source beyond this book, argue either that it satisfies James' criterion in a non-trivial sense, or that calling it intelligent is a useful description that breaks down under pressure. Engage with the mechanism, not just the behaviour.

:::{note} Discussion Guidelines
:class: dropdown
- Cite at least one credible source in your main post.
- Reply substantively to at least **two** classmates — extend, challenge, or add evidence. "I agree" is not a reply.
:::

---

## Hands-On Lab: How Smart Is Your Spam Filter?

**What you need:** A browser and 30 minutes. No code.

Start with your spam filter. It pursues a goal without you, it adapts when spammers change tactics, and you have never once called it intelligent. Run James' test on it: what future end does it pursue, and what happens when the obvious means to that end stops working? Rate its goal-flexibility from 1 (one means only) to 10 (many).

Now do two more systems you actually use — GPS, an AI assistant, a recommendation feed, a chess engine, a thermostat. Then find one technical source explaining how your highest-rated system really works. Does knowing the mechanism change your rating, or does it just move your goalposts? Be honest about which.

Finally: which of the four habituation criteria in the table above could plausibly apply to your highest-rated system, and which definitely cannot?

**Deliverable:** 400 words. Name and rate each system, summarise the mechanism, give your habituation analysis.

---

## Build It: Run-and-Tumble Chemotaxis Simulator (Two Paths)

**What you're building:** a live simulation of *E. coli* chemotaxis with a switch that lets you break the gradient sensing and watch navigation collapse.

::::{tab-set}

:::{tab-item} Path A — Colab (Python)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch01-lab-chemotaxis.ipynb)

**Step 1 — Environment.** The notebook installs `numpy` and `matplotlib`. Import both, plus `random`.

**Step 2 — Build the gradient.** Write `make_gradient(size=100, peak_x=90, peak_y=50)` returning a 2D array of glucose concentration with a Gaussian falloff from the peak.

**Step 3 — Implement the bacterium.** A `Bacterium` class with `x`, `y`, `angle`, and `methylation_level`. `sense()` reads concentration at the current position. `adapt()` drags `methylation_level` toward the current reading with a time constant of about 5 steps — this is CheR/CheB. `tumble_probability()` returns a low value when `sense()` exceeds `methylation_level` (improving) and a high value otherwise.

**Step 4 — Run it.** 500 steps. Each step: compute tumble probability, run or tumble, update position, store the trajectory. Plot over the gradient as a heatmap.

**Step 5 — The ablation.** Add a `gradient_sensing=True` flag. When `False`, use a fixed tumble probability of 0.1. Run both and plot side by side.

**Success criterion:** the intact trajectory ends near the peak; the ablated one shows no net drift.
:::

:::{tab-item} Path B — Vibe Code (No Python)

Paste this into Claude, ChatGPT, or any capable assistant:

```
Build me a single-file HTML page (no external dependencies, everything inline)
that simulates E. coli run-and-tumble chemotaxis with gradient sensing.

The simulation should show:
- A 500x400 canvas with a colour gradient (light at left, dark teal at right)
  representing glucose concentration increasing left to right
- A moving dot representing the bacterium, leaving a coloured trail
- The bacterium alternates between "run" (move in a fixed direction) and
  "tumble" (pick a new random direction)
- Tumble probability is LOW when moving toward higher concentration
  (compare current glucose against a 5-step running average — this is the
  methylation adaptation mechanism from the chapter)
- Tumble probability is HIGH when moving toward lower concentration
- A slider labelled "Gradient Sensing (0=broken, 1=full)" that interpolates
  between random tumbling and full chemotaxis
- A "Reset" button that restarts the bacterium at the left centre
- A live readout of "Steps taken" and "Distance from food source"
- Clean modern look, teal and lime green colour scheme

When gradient sensing is 0 the bacterium wanders randomly. At 1 it reliably
reaches the right side within 300 steps. The contrast should be obvious
without measuring anything. Run at 30fps with requestAnimationFrame.
No libraries. Pure HTML, CSS and JavaScript in one file.
```

**Follow-ups once the first artifact works:**

1. "Add a second bacterium permanently stuck in broken mode with a red trail, so I can watch both at once."
2. "Add a live histogram below the canvas showing tumble frequency for both bacteria over the last 50 steps."
3. "Add a 'Methylation Speed' slider controlling how fast the adaptation baseline updates, and show me what breaks at both extremes."
:::

::::

**Success check:** with sensing intact the bacterium finds the food; with sensing broken it wanders. The difference should be visible at a glance.

---

## Research Frontier: What Stores the Planarian's Body Plan Between Cuts? (2-page paper)

**The question.** Planaria induced to regenerate two heads keep regenerating two heads through repeated rounds of cutting, after the drug is gone and with an unaltered genome. What physically stores that pattern between wounding events — and how does a specific voltage configuration get re-established in tissue whose original cells have since divided?

**Why it is open.** The persistence is established; the storage mechanism is not. Gap-junction-mediated propagation is the leading candidate, but the specific connexins involved, the stability timescale under normal ionic conditions, and whether chromatin modifications help maintain the state are all unresolved.

**Starting points:**
- Beane, W. S., et al. (2011). "A chemical genetics approach reveals H,K-ATPase-mediated membrane voltage is required for planarian head patterning." *Chemistry & Biology*, 18(1), 77–89.
- Levin, M., Pezzulo, G., & Finkelstein, J. M. (2017). "Endogenous bioelectric signaling networks: exploiting voltage gradients for control of growth and form." *Annual Review of Biomedical Engineering*, 19, 353–387.
- Pietak, A., & Levin, M. (2018). "Bioelectrical control of positional information in development and regeneration." *Seminars in Cell & Developmental Biology*, 73, 39–48.
- Morgan, T. H. (1898). "Experimental studies of the regeneration of *Planaria maculata*." *Archiv für Entwicklungsmechanik der Organismen*, 7, 364–397. — the original, and still worth reading.

**Deliverable:** 800–1,000 words that (1) state the question precisely, (2) summarise what the sources above actually establish, (3) identify the specific measurement that would settle the storage mechanism, and (4) propose one concrete experiment. At least four sources, at least two primary.

---

## Applied Exercise: Audit One AI System You Actually Use (10 pts)

**The task.** Pick one AI system you interact with regularly and audit it in three sections.

**Section 1 — James' test (3 pts).** State the goal. Document at least two distinct means the system uses to reach it. Describe one specific occasion when the obvious route failed and say what it did instead. Rate goal-flexibility 1–10 and justify the number with observed behaviour, not vibes.

**Section 2 — Mechanism (4 pts).** Using at least one technical source, which you link, explain what actually produces the goal-directed behaviour. Map it onto one case from this chapter: *E. coli* (derivative sensing), *Physarum* (distributed flow optimisation), or wound healing (target-state comparison with a stop signal). Defend the mapping in a paragraph.

**Section 3 — Habituation test (3 pts).** Design a test for whether your system habituates to repeated input. Specify (a) the repeated stimulus and trial count, (b) the response measure, (c) the rest interval and recovery check, (d) the dishabituation stimulus, and (e) which result would confirm habituation and which would falsify it. Someone else must be able to run it cold.

**Grading.** Section 1 rewards specific examples over general claims. Section 2 rewards mechanistic accuracy. Section 3 rewards rigour — a design that cannot distinguish habituation from ordinary forgetting earns half credit.

**Points:** 10

---

## Glossary

**Adaptation (bacterial)** — Recalibration of *E. coli* receptor sensitivity by CheR and CheB, which turns an on/off switch into a rate-of-change detector.

**Basal cognition** — Goal-directed, error-correcting behaviour in biological systems below the nervous system. A functional description, not a claim about experience.

**Bioelectric gradient** — A spatial difference in electrical potential across tissue, produced by ion pumps and channels. Guides cell migration and encodes target pattern.

**CheA / CheY** — Core chemotaxis proteins. CheA is a kinase controlled by occupied receptors; phosphorylated CheY reaches the flagellar motors and increases tumbling.

**Chemotaxis** — Directed movement along a chemical gradient. In *E. coli*, implemented by modulating run-and-tumble with derivative sensing.

**Cognitive light cone** — How far a system's goals reach in space and time. Seconds and micrometres for a bacterium; decades and continents for you. (Chapter 3.)

**Derivative sensing** — Measuring rate of change instead of absolute level. Requires a memory of the recent past to compare against.

**Dishabituation** — Immediate restoration of a habituated response by a novel strong stimulus. Distinguishes learning from exhaustion.

**Habituation** — A decline in response to a repeated harmless stimulus that is not explained by fatigue. Diagnosed by spontaneous recovery and dishabituation.

**James criterion** — Intelligence as "the pursuance of future ends and the choice of means for their attainment." Operationally: block the obvious route and see whether the system finds another.

***Physarum polycephalum*** — Acellular slime mold; one giant multinucleate cell. Solves mazes (Nakagaki et al., 2000) and builds efficient transport networks (Tero et al., 2010).

**Run-and-tumble** — *E. coli* locomotion: directed runs punctuated by random reorientations. Biasing the ratio produces reliable gradient climbing.

**Spontaneous recovery** — Return of a habituated response after rest. A depleted system cannot do this; a habituated one does.

**Substrate independence** — The claim that what matters is organisation and information flow, not the specific material. (Chapter 7.)

**TAME** — Technological Approach to Mind Everywhere. Levin's framework for analysing goal-directed behaviour at any scale without treating neurons as the threshold.

---

## The Takeaway

- Morgan cut a flatworm into 279 pieces in 1898 and got 279 worms. Identical genomes, different jobs, correct stopping point. He could not explain it and moved to chromosomes.
- The genome is a parts list. Something else holds the plan — and in planaria a large part of it is bioelectric state, which persists across regenerations without any change to DNA.
- James' 1890 test turns "is it intelligent" into a procedure: block the obvious route and watch. It says nothing about consciousness and works on anything.
- *E. coli* measures the derivative of concentration, not concentration, using receptor methylation as a memory with a roughly four-second decay.
- *Physarum* reproduced the major features of the Tokyo rail network in about a day, using nothing but flow reinforcing its own channels.
- Wound healing stops because closing the wound erases the electrical error that was driving migration. Cancer is that stop signal failing.
- Neurons made intelligence vastly faster and wider. They did not originate it, and they arrived about two billion years late.
- The cheapest interesting experiment in cognitive science right now is checking whether your AI agent habituates. Chapter 8 hands you the protocol.
