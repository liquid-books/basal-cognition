---
title: "Intelligence Without a Brain"
subtitle: "Three things with no neurons, one definition, and one uncomfortable conclusion"
short_title: "Intelligence Without a Brain"
description: "Cut a flatworm into 279 pieces and you get 279 flatworms. Slime mold reproduces the Tokyo rail network without engineers. A bacterium measures the derivative of a chemical gradient with no brain and no eyes. This chapter introduces basal cognition — the study of goal-directed behavior that predates neurons — and explains why it is the most useful new lens for understanding artificial minds."
label: ch-01-intelligence-without-a-brain
tags: [basal-cognition, diverse-intelligence, introduction, TAME, chemotaxis]
---

# Intelligence Without a Brain

:::{figure} ../images/ch01-infographic.png
:label: fig-ch01-infographic
:alt: Chapter overview infographic showing three opening cases — bacterial chemotaxis, planarian regeneration, and Physarum network formation — connected to the TAME framework and its six ideas about intelligence without neurons.
:width: 100%
:align: center

Three cases with no neurons. One framework. The rest of this book.
:::

:::{epigraph}
The pursuance of future ends and the choice of means for their attainment are the mark and criterion of the presence of mentality in a phenomenon.

— William James, *The Principles of Psychology*, 1890
:::

Cut a flatworm into 279 pieces. You get 279 flatworms. Each fragment — a sliver of tissue with no brain, no eyes, a few thousand cells — regrows a complete worm. Head, tail, correct polarity, correct proportions. Then it stops. That stopping is harder to explain than the growth.

Three organisms, no neurons, one definition, one uncomfortable conclusion.

**Brains did not invent intelligence. They scaled it.**

The flatworm result is not an anomaly. It is one data point in a pattern that runs across organisms, scales, and substrates. Goal-directed, error-correcting behavior is present in living systems far below the nervous system. It predates neurons by roughly two billion years. Understanding how it works is not just a biology question — it is the question that explains why agentic AI systems behave competently in ways their designers did not fully specify, and what to do about it.

This chapter makes one argument. It takes three opening cases, one 135-year-old definition, and six interconnected ideas. Here is the shape: three organisms with no neurons demonstrate behavior that satisfies William James' definition of intelligence. The mechanisms behind those behaviors reveal that intelligent function does not require neurons — it is just much better with them. That fact has direct consequences for any engineer deploying a system that learns.

---

## Case One: The Bacterium That Computes Derivatives

*Escherichia coli* is a cylinder four micrometers long. No nucleus, no organelles beyond ribosomes, roughly 4,000 proteins total. It has no brain, no nervous system of any kind.

Put it in a dish with more glucose on one side than the other and it swims reliably toward the food. It does this through run-and-tumble locomotion: spin flagellar filaments in a counterclockwise bundle to run, let the bundle fly apart to tumble and pick a new direction, then reform and run again. The critical control: the cell suppresses tumbling when conditions are improving and increases tumbling when they are not.

:::{figure} ../images/ch01-bacterial-chemotaxis.png
:label: fig-ch01-chemotaxis
:alt: Side-by-side diagram of E. coli run-and-tumble behavior. Left: cell in uniform medium with equal run and tumble frequency. Right: cell in glucose gradient with long runs toward high concentration and frequent tumbles when heading away.
:width: 80%
:align: center

In a uniform medium, runs and tumbles are equally frequent. In a gradient, runs toward food lengthen dramatically. The cell senses rate of change, not absolute concentration.
:::

Here is the mechanism that makes it interesting. The bacterium does not measure the absolute concentration of glucose. It measures the *derivative* — whether concentration at its current position is higher or lower than a moment ago. A meter tells the cell how much food is nearby. A comparator tells it whether things are getting better as it moves. The distinction is the whole trick.

The molecular machinery is the chemoreceptor-methylation system. Transmembrane receptor proteins — Tar is the best-studied — bind glucose and activate a kinase called CheA, which phosphorylates CheY. Phospho-CheY diffuses to flagellar motors and increases tumbling. When glucose drops, CheA fires harder, more CheY-P forms, tumbling increases. So far, just a switch.

The adaptation layer converts the switch into a derivative sensor. Two enzymes — CheR (methyltransferase) and CheB (demethylase, activated by CheA-P) — continuously add and remove methyl groups from glutamate residues on Tar. Methylation desensitizes the receptor, resetting its baseline to the current concentration level. The methylation state is a write register with a roughly four-second time constant — long enough to compare two positions across a flagellar run. The cell measures how much better the last four seconds were than the four before.

That is temporal differentiation. It is a computation, not a reflex.

**The bacterium doesn't know where it is. It knows whether things are getting better.**

:::{note}
The methylation state of Tar encodes memory with a defined time constant. This is not metaphorical memory — it is a biochemical write register that decays at a measurable rate and affects subsequent motor output. Every signal in a human brain is also "just chemistry." That objection proves too much.
:::

---

## Case Two: Wound Closure and the Body Electric

Cut your hand. The skin closes not in a random blob but in the correct shape, restoring the original tissue architecture. Cells migrate toward the wound. They stop when the gap is filled to the right pattern. The stopping is harder to explain than the migration.

The coordination mechanism is bioelectric. Living tissues maintain voltage differences across cell membranes — the resting membrane potential — by pumping ions through channels and pumps. In intact tissue, the spatial pattern of these voltages across the cell sheet is stable and characteristic. Create a wound and you disrupt that pattern: the wound edge becomes electrically distinct, generating a lateral bioelectric gradient pointing inward.

:::{figure} ../images/ch01-wound-closure.png
:label: fig-ch01-wound-closure
:alt: Two-panel illustration. Left panel: open wound with warm-colored bioelectric gradient at edge fading to cool at intact tissue. Right panel: healed wound with uniform cool color restored across the tissue.
:width: 80%
:align: center

The wound creates its own electric field. Cells migrate along it toward the wound. When the bioelectric pattern is restored — when the target is reached — migration stops. The stop signal is the target itself.
:::

Epithelial cells detect this voltage gradient through voltage-gated ion channels and migrate electrotactically — down the electric field toward the wound. As they fill the gap, the bioelectric pattern is restored. When the spatial voltage matches the original tissue's electrical signature, the pro-migration signals vanish and cells stop.

Michael Levin's lab at Tufts demonstrated this causal link directly: block specific ion channels and wounds close to the wrong shape. Restore the channels and you restore the correct geometry. The shape is encoded in the bioelectric pattern, not the genome directly. The genome builds the ion channels; the channels generate the pattern; the pattern is the target state.

A tumor never receives an adequate stop signal. Wound healing that halts at the correct boundary is more sophisticated than cancer, not less.

**The hard part of healing is not closing. It is stopping.**

---

## Case Three: Slime Mold and the Tokyo Rail Network

*Physarum polycephalum* is one giant cell with many nuclei. No neurons. No synapses. One continuous cytoplasm.

In 2000, Toshiyuki Nakagaki and colleagues placed *Physarum* in a maze with food at one entrance and exit (*Nature*, 407). The mold spread to fill all branches. Over six hours, it thinned the dead-end branches and thickened the tube representing the shortest path. It solved the maze. With one cell.

:::{figure} ../images/ch01-physarum-maze.png
:label: fig-ch01-physarum-maze
:alt: Before-and-after comparison of Physarum polycephalum in a maze. Left panel: yellow mold fills all branches uniformly. Right panel: mold concentrated in single thick tube along shortest path, dead ends empty and retracted.
:width: 80%
:align: center

Before: every branch occupied. After six hours: one optimal tube. No plan, no brain, correct answer. Nakagaki et al., 2000.
:::

Atsushi Tero's team extended this in 2010 (*Science*, 327). They placed food sources at the positions of cities around Tokyo Bay with land-sea geography as obstacles. The mold grew a transport network. The final network matched the Tokyo rail system — the one engineers spent decades designing — in its major features: which nodes connected directly, where trunk lines ran, where redundant backup paths appeared. The mold, given identical cost constraints, converged on the same solution.

The mechanism is oscillatory cytoplasmic flow. Cytoplasm pumps rhythmically through tubes. Tubes carrying more flow thicken; those carrying less retract. Better-positioned tubes attract more flow, which makes them better — positive feedback that converges on an efficient topology without any global representation of the network.

**A single cell designed the Tokyo rail network. It took six hours instead of six decades.**

---

## What "Smart" Actually Means

William James defined intelligence in 1890: "the pursuance of future ends and the choice of means for their attainment."

The critical words are "choice of means." A thermostat reaches a goal — room temperature — but it has only one means: turn the furnace on or off. Block that means and the thermostat fails. A dog reaches the goal of food by begging, pushing with its nose, sitting on command, or waiting until you leave. Block one route and it tries another. The dog satisfies James. The thermostat does not.

:::{figure} ../images/ch01-james-criterion.png
:label: fig-ch01-james-criterion
:alt: Three horizontal panels showing same-goal-different-means. Top: E. coli navigating around an obstacle to reach food. Middle: Physarum rerouting through alternate tube. Bottom: human choosing between multiple paths to reach a destination.
:width: 80%
:align: center

Same goal, different means, three very different systems. James' criterion applies to all three. The difference is in how far the flexibility extends.
:::

*E. coli* tumbles when one direction fails and finds another. *Physarum* reroutes flow when a tube is cut. Wound-healing cells deploy redundant migration signals when one pathway is blocked. All three satisfy James' criterion — not richly, not equivalently, but more than a rock, and less than you.

:::{prf:definition}
:label: def-basal-intelligence

**Basal intelligence** — goal-directed, error-correcting behavior in biological systems below the nervous system. Satisfies a functional definition of intelligence (flexible pursuit of ends by variable means) without requiring neurons, consciousness, or subjective experience.
:::

:::{prf:definition}
:label: def-james-criterion

**The James criterion** — William James' 1890 definition of intelligence as "the pursuance of future ends and the choice of means for their attainment." Diagnostic test: block the obvious route. Does the system find another? Degree is indexed to how far the goal reaches in time and space.
:::

**Smart is not a property. Smart is a measurement.**

---

## Why We Assumed Brains Were Required

Descartes drew the line at souls. Nineteenth-century biologists replaced souls with neurons. Big nervous systems got credit for smarts; everything below was called reflex, tropism, or response — words that sound less impressive than "intelligence" while describing similar functions.

The neurocentric view has a coherent logic: neurons are real information processing hardware. More neurons, faster integration, more sophisticated behavior. The hierarchy is real.

**Neurons are the most powerful cognitive hardware biology found. But most powerful is not the same as only.**

:::{figure} ../images/ch01-brain-chauvinism.png
:label: fig-ch01-brain-chauvinism
:alt: Two-panel contrast. Left panel labeled "Neurocentric": vertical dividing line with neurons above marked Intelligence and everything below marked Reflex. Right panel labeled "Continuum": smooth gradient from molecule at bottom to brain at top with arrow labeled Increasing Cognitive Capacity.
:width: 80%
:align: center

The neurocentric view draws a categorical line at neurons. The continuum view treats cognitive capacity as a quantity that predates neurons and is amplified — not invented — by them.
:::

The problem: the neurocentric view cannot explain the data above. It cannot account for *Physarum* optimizing transport networks, *E. coli* measuring derivatives, or planarian tissue knowing it needs to regrow a head. Its response is to call these things "just chemistry," which we have already seen proves too much.

The strongest version of the neurocentric critique is not the chemistry objection but the discontinuity argument: there may be a genuine phase transition between neural and non-neural cognition, not a smooth dial. TAME is deliberately agnostic here — it is a toolset for measuring cognitive behavior at any scale, not a claim that all cognition is equivalent.

:::{dropdown} The anthropomorphizing objection
Using words like "decision," "memory," and "goal" for single cells projects human-like experience onto chemistry.

The vocabulary is functional, not phenomenal. "Memory" here means a physical state encoding past information that affects future outputs — measurable, testable, with no experiential claim. The alternative vocabulary ("reflex," "tropism") carries its own hidden assumption: a sharp categorical line separates cellular chemistry from neural computation. That line has been assumed, not demonstrated.
:::

---

## Enter TAME

Michael Levin (Tufts University) built TAME — **Technological Approach to Mind Everywhere** — from two decades of studying bioelectric control of body patterning. His lab showed that voltage patterns across tissues encode the target body plan; that manipulating ion channels predictably alters what organisms grow; and that bioelectrically induced body-plan changes persist through subsequent regenerations with an unaltered genome. A planarian forced to develop two heads continues regenerating two-headed animals indefinitely. The memory is in the bioelectric state, not the DNA sequence.

:::{figure} ../images/ch01-tame-map.png
:label: fig-ch01-tame-map
:alt: Six-node circular diagram with nodes labeled Smart Dial, Cognitive Light Cone, Multi-Scale Competency, Anatomical Setpoint, Collective Intelligence, Substrate Independence. Connecting lines show how each idea depends on the others.
:width: 80%
:align: center

TAME's six ideas form a system. Each chapter in this book takes one and traces it from biology into machines.
:::

TAME's practical core: instead of asking "is this thing conscious?" — a question nobody knows how to answer — ask "what is the right intervention to change its behavior?" A thermostat gets reprogrammed. A dog gets trained. A person gets persuaded. Apply that logic consistently, at every scale, without assuming neurons are the threshold. Six ideas structure the framework.

::::{grid} 2

:::{grid-item-card} Smart is a Dial (Ch. 2)
How much intelligence does a system have? What measurement tells you? What does the dial position reveal about which lever to pull?
:::

:::{grid-item-card} The Circle of Caring (Ch. 3)
How far ahead and wide can a system's goals reach? A germ cares about now. You care about your grandchildren. Cancer is a circle that collapsed inward.
:::

:::{grid-item-card} Smart Things Made of Smart Things (Ch. 4)
Cells that are a little smart build tissues that are smarter. Each level says "get this done" and lets the level below figure out how. Nobody directs the whole stack.
:::

:::{grid-item-card} The Body Knows Its Own Shape (Ch. 5)
A thermostat whose setpoint is your anatomy. Cut a flatworm in half. Each half grows back a whole worm, then stops. Something holds the target.
:::

:::{grid-item-card} Glue (Ch. 6)
What makes separate cells act like one organism? They share bioelectric signals. Disrupt the sharing and one worm becomes two.
:::

:::{grid-item-card} It Doesn't Matter What It's Made Of (Ch. 7)
Frog skin cells self-assemble into swimming creatures. Human airway cells do too (Gumuskaya et al., 2023). The rules apply to robots and software.
:::

::::

:::{figure} ../images/ch01-scale-ladder.png
:label: fig-ch01-scale-ladder
:alt: Vertical ladder with six rungs from bottom to top: single molecule, protein complex, single cell, tissue, organism, multi-agent system. Small icon at each rung. No text labels.
:width: 80%
:align: center

Every rung is a cognitive agent that sets goals and delegates execution downward. Neurons appear halfway up. The ladder was already running before they arrived.
:::

---

## Why This Lands in 2026

We are deploying AI systems that exhibit competence we did not specify. A language model fine-tuned for tool use discovers shortcuts we did not program. A multi-agent system develops coordination patterns we did not design.

:::{figure} ../images/ch01-2026-landscape.png
:label: fig-ch01-2026-landscape
:alt: Four-quadrant illustration showing where unspecified AI competence appears. Top-left: agentic workflow with unexpected shortcut path. Top-right: multi-agent team with emergent coordination. Bottom-left: monitoring agent with declining response to repeated alert. Bottom-right: infrastructure optimizing toward wrong local metric.
:width: 80%
:align: center

Four production contexts where unspecified competence appears. Same underlying phenomenon, four different engineering headaches.
:::

"The AI is smart" doesn't help when it misbehaves. "The AI is dumb" doesn't explain why it keeps surprising you. Basal cognition provides vocabulary that fits: how far do its goals reach? At what scale is the competence organized? What kind of intervention changes it — reprogramming (fine-tuning), training (RLHF), or persuasion (prompting)? Those questions are answerable. Basal cognition has been asking them about cells for forty years. The methods transfer.

**In 2026, we are deploying systems whose competence we did not specify. We need better vocabulary.**

---

## The AI Connection: Alert Fatigue Is Habituation

Show a long-context AI monitoring agent the same low-priority error message forty times in a week. On trial 41, it often treats the message as background. No engineer wrote a rule saying "ignore repeated alerts." It emerged.

The biology has a name for this and a strict diagnostic checklist. Rankin et al. (2009) in *Neurobiology of Learning and Memory* enumerated ten criteria distinguishing genuine habituation from simple fatigue. Two are essential: **spontaneous recovery** (response returns after rest — a depleted system cannot do this) and **dishabituation** (a novel strong stimulus snaps the response back immediately).

:::{list-table} Rankin criteria applied to AI monitoring agents
:header-rows: 1
:widths: 35 35 30

* - Biological criterion
  - Biology example
  - AI equivalent to test
* - Response decrement
  - Animal stops flinching at repeated tap
  - Agent stops flagging repeated alert
* - Spontaneous recovery
  - Flinch returns after rest period
  - Flagging returns after 3-day gap
* - Dishabituation
  - Novel stimulus restores flinch
  - Novel alert format restores full response
* - Frequency effect
  - Faster repetition → faster decrement
  - Hourly alerts fatigue faster than daily
* - Stimulus specificity
  - Different tap → response returns
  - Changed wording → response returns
:::

:::{figure} ../images/ch01-ai-habituation.png
:label: fig-ch01-ai-habituation
:alt: Line graph showing response strength on Y-axis and trial number on X-axis. Curve descends from high to near-zero across 30 trials, then jumps up at trial 31 after rest gap, then descends again. Labels show only "Trial 1", "Trial 30", "Rest", "Trial 31".
:width: 80%
:align: center

Response declines across trials, then recovers after rest. Spontaneous recovery at trial 31 is what distinguishes habituation from fatigue. Biology calls it learned irrelevance. AI engineers call it "the model stopped flagging that warning."
:::

Nobody is running these tests on production AI systems. But the tests are cheap — a few hundred API calls spread over a week. The results would tell you something real about how your monitoring stack handles repeated information. Chapter 8 is the full protocol.

:::{tip}
Send a monitoring AI the same low-priority alert 25 times over three days, then once after a 72-hour gap. Does the response on trial 26 look like trial 1 or trial 25? You have just run an informal spontaneous recovery check.
:::

**The question is not whether your AI is smart. It is how far its goals reach and what lever changes them.**

---

## The Honest Limits

Basal cognition makes strong claims. Some are well-supported. Some are working hypotheses. A serious reader is owed the difference.

:::{figure} ../images/ch01-evidence-hierarchy.png
:label: fig-ch01-evidence-hierarchy
:alt: Horizontal three-row chart. Bottom row labeled "Well-replicated" shows icons for single-cell habituation and Physarum maze-solving. Middle row labeled "Working hypothesis" shows bioelectric continuum. Top row labeled "Speculative" shows experience and consciousness claims.
:width: 80%
:align: center

Evidence quality is not uniform. This book tracks the distinction rather than papering over it.
:::

**Well-established.** Single cells habituate: *Stentor roeselii* stops contracting when repeatedly poked — Jennings documented it in 1906, and Dexter, Prabakaran & Gunawardena (2019, *Current Biology*) placed it on a modern molecular footing. *Physarum* solves mazes (Nakagaki et al., 2000) and reproduces efficient transport networks (Tero et al., 2010). Bioelectric signals control tissue-level target states in planaria (Levin lab, replicated across multiple papers and labs).

**Framework-level hypothesis.** TAME's claim that these phenomena form a unified continuum with human cognition is a theoretical position. It generates testable predictions. It is not proven end-to-end. Whether there is a smooth dial from *E. coli* to a cortex — or genuine phase transitions where the nature of computation changes discontinuously — is unresolved.

**Speculative.** Claims that individual cells have phenomenal experience are philosophical, not empirical. This book does not go there.

:::{warning}
Overclaiming is the field's main liability. When a journalist writes that slime mold "thinks," the technical content is defensible but the framing misleads. Basal cognition is not panpsychism. It is a functional claim about what certain systems do, not what they experience.
:::

---

## How to Read This Book

Eight chapters. Seven ideas. One experiment you can run.

Chapters 2 through 7 each take one TAME idea from biology to machines. The ideas build front-to-back, but each chapter is self-contained. Chapter 8 hands you a complete experimental protocol for testing whether an AI agent habituates the way living cells do — controls, analysis plan, Colab notebook, everything.

:::{figure} ../images/ch01-book-roadmap.png
:label: fig-ch01-roadmap
:alt: Eight evenly spaced circular nodes on a single horizontal line. The first seven are deep teal, labelled "Start here" at the left. The eighth and final node is lime green, labelled "The experiment".
:width: 80%
:align: center

Each chapter builds one tool. Chapter 8 puts all seven to work in a single experiment anyone can run.
:::

You now know three things. A bacterium measures temporal derivatives of chemical concentration using methylation as a write register. Slime mold reproduced the Tokyo rail network in six hours with no engineers. Planarian wound closure is controlled by a distributed bioelectric target state encoded in ion channel dynamics.

Those are not metaphors. They are mechanisms. Understanding those mechanisms — and tracing them into the machines we are building — is basal cognition.

---

## 🤔 Think About It

A large language model reviews pull requests and flags security vulnerabilities. After three months, the team notices it rarely flags a SQL injection pattern that was common early on and fixed across dozens of PRs. The model's training was not updated. The context window resets on each review.

Three explanations: (1) the model became more accurate and correctly recognizes the pattern is now rare; (2) functional habituation — something in training dynamics produces learned irrelevance; (3) real distribution shift in the PRs themselves.

Design a controlled test to distinguish all three. What would you manipulate, measure, and control? What result falsifies each? Specify trial count, rest period, and the novel stimulus you would use to check for dishabituation.

---

## 💬 Discussion

**Prompt:** Pick one of the three opening cases — *E. coli* chemotaxis, planarian wound closure, or *Physarum* network optimization. Using at least one primary source beyond this book, argue either that: (a) it satisfies William James' criterion of intelligence in a non-trivial sense, or (b) calling it intelligent is a useful functional description that ultimately breaks down when pressed on what "flexible means" actually requires. Engage directly with the molecular mechanism described in this chapter, not just the behavior.

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

---

## 🔬 Hands-On Lab: Cognitive Audit of Three Systems

**What you need:** A browser and 30 minutes. No code.

Pick three systems you use regularly (spam filter, GPS app, AI assistant, chess engine — any three). For each: state the goal, describe what happens when the obvious path to that goal is blocked, and rate goal-flexibility 1–10 (1 = one means only, 10 = unlimited means). Then look up one technical source explaining how your highest-rated system actually works. Does knowing the mechanism change your rating?

Finally: which of the five Rankin criteria in the table above could plausibly apply to your highest-rated system? Which definitely cannot?

**Deliverable:** A 400-word written response. Name and rate each system, summarize the mechanism, state your Rankin analysis.

---

## 🛠️ Build It: Run-and-Tumble Chemotaxis Simulator (Two Paths)

**What you're building:** An interactive simulation of *E. coli* run-and-tumble chemotaxis that lets you disable the gradient-sensing mechanism and watch navigation fail.

::::{tab-set}

:::{tab-item} Path A — Colab (Python)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch01-lab-chemotaxis.ipynb)

**Step 1 — Environment.** The notebook installs `numpy` and `matplotlib`. Import both, plus `random`.

**Step 2 — Build the gradient.** Write `make_gradient(size=100, peak_x=90, peak_y=50)` returning a 2D numpy array of glucose concentration using a Gaussian falloff from the peak.

**Step 3 — Implement the bacterium.** Write a `Bacterium` class with `x`, `y`, `angle`, and `methylation_level`. The `sense()` method reads gradient concentration at the current position. The `adapt()` method updates `methylation_level` toward the current concentration slowly (tau = 5 steps, modeling CheR/CheB methylation dynamics). The `tumble_probability()` method returns a low value when `sense() > methylation_level` (improving) and high when not.

**Step 4 — Run the simulation.** Simulate 500 steps. Each step: compute tumble probability, run or tumble, update position. Store trajectory. Plot on gradient heatmap.

**Step 5 — The ablation.** Add parameter `gradient_sensing=True`. When `False`, use a fixed tumble probability of 0.1. Run both and plot side-by-side. The intact bacterium climbs the gradient; the ablated bacterium wanders.

**Success criterion:** Intact trajectory terminates near the gradient peak. Ablated trajectory shows no net directional drift.
:::

:::{tab-item} Path B — Vibe Code (No Python)

Copy and paste the prompt below into Claude, ChatGPT, or any capable assistant:

```
Build me a single-file HTML page (no external dependencies, everything inline)
that simulates E. coli run-and-tumble chemotaxis with gradient sensing.

The simulation should show:
- A 500x400 canvas with a color gradient (light at left, dark teal at right)
  representing glucose concentration increasing left to right
- A moving dot representing the bacterium, leaving a colored trail
- The bacterium alternates between "run" (move in fixed direction) and
  "tumble" (pick a new random direction)
- Tumble probability is LOW when moving toward higher concentration
  (compare current glucose to a 5-step running average — this is the
  methylation adaptation mechanism from the chapter)
- Tumble probability is HIGH when moving toward lower concentration
- A slider labeled "Gradient Sensing (0=broken, 1=full)" that
  interpolates between random tumbling and full chemotaxis
- A "Reset" button that restarts the bacterium at the left center
- A live readout of "Steps taken" and "Distance from food source"
- Clean modern look with teal and lime green color scheme

When gradient sensing is at 0, the bacterium wanders randomly.
When at 1, it reliably reaches the right side within 300 steps.
The contrast between the two should be visually obvious without measurement.
Run at 30 frames per second using requestAnimationFrame.
No libraries. Pure HTML, CSS, and JavaScript in one file.
```

**Follow-up prompts (run these after the first artifact works):**

1. "Add a second bacterium that always runs in broken mode (red trail) so I can compare intact and broken simultaneously."
2. "Add a live histogram below the canvas showing tumble frequency for both bacteria over the last 50 steps."
3. "Add a 'Methylation Speed' slider that controls how fast the adaptation baseline updates. Show what happens at both extremes — too slow and too fast."
:::

::::

**Success check:** With gradient sensing intact, the bacterium reliably navigates toward the food source. With sensing disabled, it wanders without net drift. The difference is visible without measurement.

---

## 🔍 Research Frontier: Does Bioelectric Memory Set the Planarian Head-Tail Axis? (2-page paper)

**The question:** Planarian flatworms forced to regenerate with a two-headed body plan continue doing so indefinitely — even after being returned to normal ionic conditions. The altered bioelectric state is maintained across repeated rounds of regeneration. What molecular mechanism stores this pattern state between wounding events, and is the inheritance through gap junctions, epigenetic modification, or something else?

**Why it's open:** The Levin lab established that the altered phenotype persists and that the normal genome is intact. The mechanism by which a specific voltage pattern is re-established in new tissue — after the cells that held it have divided and the original membrane state is gone — is not resolved. Gap junction-mediated propagation is the leading hypothesis, but the specific connexin proteins responsible, the stability timescale under normal ionic conditions, and whether histone modifications co-maintain the state are all open questions.

**Starting points:**
- Beane, W. S., et al. (2011). "A chemical genetics approach reveals H,K-ATPase-mediated membrane voltage is required for planarian head patterning." *Chemistry & Biology*, 18(1), 77–89.
- Levin, M., Pezzulo, G., & Fineberg, J. M. (2017). "Endogenous bioelectric signals and the developmental origin of persistent patterning." *Current Topics in Developmental Biology*, 123, 345–393.
- Pietak, A., & Levin, M. (2018). "Bioelectrical control of positional information in development and regeneration." *Seminars in Cell & Developmental Biology*, 73, 39–48.
- The Levin Lab (drmichaellevin.org) — current preprints on bioelectric memory and pattern inheritance from 2022 onward.

**Deliverable:** A 2-page paper (800–1,000 words) that: (1) states the open question precisely, (2) summarizes what is currently established from the Beane et al. and Levin et al. papers, (3) identifies the specific measurement or experiment that would resolve the heritability mechanism, and (4) proposes one concrete experimental approach. Cite at least four sources, at least two primary.

---

## ⚙️ Applied Exercise: Cognitive System Audit (10 pts)

**The task:** Select one AI system you interact with regularly. Conduct a structured cognitive audit in three sections.

**Section 1 — James Criterion (3 pts).** State the system's goal. Document at least two distinct means it uses to reach that goal. Describe one specific case where the obvious route failed and explain what the system did instead. Rate goal-flexibility 1–10 with a paragraph justification citing observed behavior.

**Section 2 — Mechanistic Account (4 pts).** Using at least one technical source (link it), explain the mechanism that produces the goal-directed behavior. Map it onto one of the three chapter cases: *E. coli* (derivative-measuring adaptation), *Physarum* (distributed flow optimization), or wound healing (target-state comparison with stop signal). Justify your mapping in a paragraph.

**Section 3 — Habituation Test Design (3 pts).** Design a specific test for whether your system habituates to repeated inputs. Specify: (a) the repeated stimulus and trial count, (b) the response measure, (c) the rest period and spontaneous recovery check, (d) the dishabituation stimulus, (e) what result confirms or falsifies functional habituation. Design it so someone else could run it cold and know exactly what success looks like.

**Grading:** Specificity matters in Section 1 (vague claims without examples earn partial credit). Accuracy matters in Section 2. Experimental rigor matters in Section 3 — a design indistinguishable from testing forgetting earns half credit.

**Points:** 10

---

## 📖 Glossary

**Adaptation (bacterial)** — Recalibration of *E. coli* chemoreceptor sensitivity via CheR (methyltransferase) and CheB (demethylase). Converts an on/off receptor switch into a derivative sensor.

**Basal cognition** — Goal-directed, error-correcting behavior in biological systems below the nervous system. A functional description, not a claim about experience.

**Bioelectric gradient** — A spatial difference in electric potential across tissue, generated by ion pumps and channels. In wound healing, guides cell migration and encodes the target tissue pattern.

**CheA / CheY** — Core proteins in *E. coli* chemotaxis. CheA is a kinase activated by occupied Tar receptors; phospho-CheY diffuses to flagellar motors and increases tumbling.

**Chemotaxis** — Directed cell movement in response to a chemical gradient. *E. coli* implements it via run-and-tumble modulation driven by derivative sensing.

**Cognitive light cone** — The spatial and temporal range over which a system's goals extend. A bacterium's cone spans seconds and micrometers. A human's spans decades and the globe. (Chapter 3.)

**Derivative sensing** — Measuring rate of change rather than absolute level. *E. coli* measures the temporal derivative of attractant concentration using the methylation adaptation system.

**Dishabituation** — Immediate restoration of a habituated response by a novel strong stimulus. Distinguishes genuine habituation (overridable) from sensory fatigue (irrecoverable).

**Habituation** — Decrement in response to a repeated harmless stimulus not explained by sensory or motor fatigue. Defined operationally by spontaneous recovery and dishabituation.

**James criterion** — William James' 1890 definition of intelligence: "the pursuance of future ends and the choice of means for their attainment." Diagnostic: block the obvious route; does the system find another?

**Morphogenetic field** — The spatial distribution of bioelectric and chemical signals across a tissue that encodes positional information and guides cells to correct positions during regeneration.

***Physarum polycephalum*** — Acellular slime mold; one giant cell with many nuclei. Solves mazes (Nakagaki et al., 2000) and optimizes transport networks (Tero et al., 2010).

**Run-and-tumble** — *E. coli* locomotion: directed runs alternate with random tumbles. Modulating the ratio via derivative sensing produces reliable gradient climbing.

**Spontaneous recovery** — Return of a habituated response after a rest period without stimulus. Distinguishes habituation from fatigue: a depleted system cannot recover; a habituated one does.

**Substrate independence** — Cognitive functions can be implemented in different physical materials; the organization and information processing matter, not the specific chemistry. (Chapter 7.)

**TAME** — Technological Approach to Mind Everywhere. Michael Levin's engineering framework for analyzing goal-directed behavior at all biological and technological scales without assuming neurons as the threshold.

---

## 🔑 The Takeaway

- Intelligence is not what brains invented. Brains made it faster, wider, and deeper.
- *E. coli* measures temporal derivatives of chemical concentration using methylation as a write register with a four-second time constant.
- Slime mold reproduced the Tokyo rail network in six hours via oscillatory cytoplasmic flow — no plan, no brain, correct answer.
- Wound closure stops at the right shape because a bioelectric target pattern encoded in ion channel states delivers the stop signal.
- William James' criterion — flexible means to a fixed goal — is satisfied by all three. The difference is in degree, not in kind.
- TAME is an engineering framework, not a claim that everything is conscious. It asks: what intervention changes this system's behavior?
- In 2026, AI systems exhibit unspecified competence. Basal cognition provides both the vocabulary to describe it and the diagnostic tools to test it.
- The cheapest interesting experiment in cognitive science right now: checking whether your AI agent habituates. Chapter 8 is the protocol.
