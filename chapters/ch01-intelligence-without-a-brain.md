---
title: "Intelligence Without a Brain"
subtitle: "The things that act smart and have no head to do it with"
short_title: "Intelligence Without a Brain"
description: "A cell swims toward food. A cut closes in the right shape. Mold finds the shortest path through a maze. Nobody taught them. This chapter introduces basal cognition — the study of intelligence that predates and underlies brains — and explains why it is suddenly the most useful lens available for understanding artificial minds."
label: ch-01-intelligence-without-a-brain
tags: [basal-cognition, diverse-intelligence, introduction, TAME]
---

# Intelligence Without a Brain

:::{figure} ../images/ch01-infographic.png
:label: fig-ch01-infographic
:alt: Chapter overview infographic showing three opening cases — bacterial chemotaxis, wound closure, and Physarum maze solving — connected to the TAME framework and its six ideas.
:width: 100%
:align: center

Chapter overview: from single cells navigating food gradients, to wounds closing in the right shape, to slime mold solving a maze — intelligence runs deeper than neurons.
:::

:::{epigraph}
The pursuance of future ends and the choice of means for their attainment are the mark and criterion of the presence of mentality in a phenomenon.

— William James, *The Principles of Psychology*, 1890
:::

A bacterium has no brain. No eyes. No nervous system of any kind. It is a bag of chemistry, roughly a millionth of a meter across. Put it in a dish with a sugar gradient and it swims uphill toward the food. Reliably. Every time.

That is not an accident. That is behavior.

Now cut your hand. Not deep — a paper cut. The skin closes. It doesn't just scar over in a random blob. It closes *in the right shape*, restoring the original pattern. Nobody tells the cells where to go. They figure it out.

Now put slime mold at one end of a maze. Put food at the other end. By morning, the mold has found the shortest path. No brain. No plan. No eyes.

Three things. No neurons anywhere. All of them acting, by any honest measure, smart.

---

## Three Things That Shouldn't Work

### The Bacterium That Knows Which Way to Go

Your gut bacterium *Escherichia coli* — the famous *E. coli* — runs its life on a decision process that would embarrass a chess computer in its elegance. It spins tiny flagella to swim. Occasionally it tumbles and picks a new direction randomly.

Here is the trick. When a chemical gradient is getting stronger — when it is swimming *toward* food — it tumbles less. When the gradient is getting weaker, it tumbles more. That simple rule, applied across millions of tiny swimming-and-tumbling cycles, produces a cell that reliably climbs a food gradient.

The technical name is chemotaxis. The plain version is: the bacterium *knows* which way is good.

:::{figure} ../images/ch01-bacterial-chemotaxis.png
:label: fig-ch01-chemotaxis
:alt: Diagram showing E. coli run-and-tumble swimming behavior in a chemical gradient, with longer runs toward food and more tumbling away from food.
:width: 80%
:align: center

Run-and-tumble chemotaxis: *E. coli* extends its runs when heading toward food, tumbles when heading away. The result is reliable navigation with no map, no eyes, and no brain.
:::

It does not *know* in the way you know. It has no awareness. But it *acts* as if it knows, which is the part that matters for behavior. William James had a name for this, which we will get to in a moment.

### The Wound That Closes Right

Cut you, and your skin cells do not just divide to fill space. They migrate toward the wound. They communicate. They know to stop when the gap is closed. They produce the right proteins in the right places to restore the original tissue architecture.

This is not simple. Wound closure in the correct shape requires cells to sense their position relative to a pattern, compare it to a stored target, and move accordingly. Biologists call it morphogenetic field guidance. You can call it a GPS for skin — but a GPS that also holds the map.

:::{figure} ../images/ch01-wound-closure.png
:label: fig-ch01-wound-closure
:alt: Sequence showing wound closure across four stages — open wound, cell migration, tissue reconstruction, final correct shape — with bioelectric field gradients shown.
:width: 80%
:align: center

Wound closure is not random gap-filling. Cells read bioelectric signals, migrate to the right positions, and stop when the original pattern is restored. The goal is the shape, not just closure.
:::

:::{note}
What makes this remarkable is the stopping. A tumor keeps going. It never gets the "done" signal. Wound healing that stops at the right time is actually harder to explain than growth.
:::

### The Mold That Solves Mazes

*Physarum polycephalum* — yellow slime mold — is a single-celled organism. One giant cell, many nuclei, no neurons. You can grow it on a petri dish.

In 2000, Toshiyuki Nakagami and colleagues put a maze on a dish, placed *Physarum* at one end, and food at the other. The mold explored the maze. It filled branches. Then it thinned out the dead-end branches and thickened the branch representing the shortest path.

It solved the maze. With one cell.

In 2010, Atsushi Tero and his team extended this. They grew *Physarum* on a map of Japan, placing food sources at cities around Tokyo. The mold grew a network. That network closely matched the actual Tokyo rail system — the one engineers spent decades designing. The mold, given the same constraints, converged on the same solution.

:::{figure} ../images/ch01-physarum-maze.png
:label: fig-ch01-physarum-maze
:alt: Side-by-side images of Physarum polycephalum in a maze before and after solving it, with the shortest path thickened and dead ends thinned.
:width: 80%
:align: center

*Physarum polycephalum* before and after solving a maze (Nakagami et al., 2000). The mold explored, then pruned. No neurons. No plan. The right answer anyway.
:::

These three stories share a pattern. A thing with no brain, no nervous system, and no central processing produces behavior that we would call intelligent if a creature with a brain did it. The question the rest of this book answers is: why, and what do we do with that?

---

## What "Smart" Actually Means

William James defined intelligence in 1890 and almost nobody remembers it. His definition: intelligence is "the pursuance of future ends and the choice of means for their attainment."

Translation: a smart thing has a goal, and it reaches that goal by flexible means. If you block one route, it finds another.

:::{figure} ../images/ch01-james-criterion.png
:label: fig-ch01-james-criterion
:alt: Diagram illustrating William James' criterion of intelligence — same goal reached by multiple different means — applied to a bacterium, a flatworm, a dog, and an AI agent.
:width: 80%
:align: center

James' criterion applied across scales. A bacterium reaches food by tumbling and swimming. A dog reaches food by begging, stealing, or hunting. The goal is the same. The means are different. Both qualify as intelligent under this definition.
:::

Notice what his definition does not say. It does not say neurons. It does not say consciousness. It does not say language. It says: goal, and flexible means to get there.

That opens a door. A bacterium has a goal — more food, less toxin. When you block one route to food, it tumbles and finds another. It satisfies James' criterion. Not fully. Not richly. But it satisfies it more than a rock does, and less than you do.

Smart is not a yes/no property. Smart is a dial.

:::{prf:definition}
:label: def-basal-intelligence

**Basal intelligence** — goal-directed, error-correcting behavior that arises in biological systems below the level of the nervous system. It is intelligence in a non-trivial sense: the system pursues an end, corrects errors along the way, and reaches the goal by flexible means. It does not require neurons. It predates neurons by billions of years.
:::

:::{prf:definition}
:label: def-james-criterion

**The James criterion** — William James' 1890 definition of intelligence as "the pursuance of future ends and the choice of means for their attainment." A useful test: if you block the obvious route, does the system find another? If yes, it has some intelligence by this standard. How much depends on how flexible and how far-reaching its goal-pursuit is.
:::

---

## Why We Assumed Brains Were Required

Here is how the assumption got set. Descartes, in the 1600s, split the world into two kinds of things: machines (including animals) and minds (which only humans had). Animals were automata. Smart behavior was reserved for beings with souls.

That picture has been revised, but not completely. The revision took neurons as the new dividing line. Animals with big nervous systems got credit for smarts. Everything else got called reflex or tropism or response — words that sound less impressive than "intelligence" but mean roughly the same thing.

:::{figure} ../images/ch01-brain-chauvinism.png
:label: fig-ch01-brain-chauvinism
:alt: Side-by-side comparison showing the neurocentric view (intelligence starts at neurons) versus the continuum view (intelligence is a dial present at all biological scales).
:width: 80%
:align: center

Neurocentric view versus the continuum view. Left: intelligence starts with neurons and is absent below that level. Right: intelligence is distributed across biological scales, with neurons amplifying something already running.
:::

:::{tab-set}

:::{tab-item} The Neurocentric View
**Intelligence requires neurons.**

A creature without a nervous system can respond to stimuli. That is just chemistry. Call it a reflex, a tropism, a reaction. The word "intelligence" belongs to brains.

The problem: this view cannot explain *Physarum* solving a maze. It cannot explain why wound healing produces the *right shape*. It cannot explain why a single-celled organism (*Stentor roeselii*) stops responding to an irritant after repeated exposure — the exact signature of habituation, the simplest form of learning. These things happen. The neurocentric view has no good account of them.
:::

:::{tab-item} The Continuum View
**Intelligence is a dial, present at all biological scales.**

A bacterium is a little smart. A flatworm is smarter. A dog is smarter still. A human has the widest range. Neurons are an amplifier, not an on/off switch.

This view predicts *Physarum*'s maze-solving — the mold is doing something genuinely cognitive, just slowly and with chemistry instead of electricity. It predicts single-cell habituation — a cell that tracks stimulus history is doing something learning-adjacent, even without a synapse. And it gives us a vocabulary for AI systems that behave competently without anything we recognize as a brain.
:::

:::

The neurocentric view is not wrong everywhere. Neurons are the most powerful cognitive hardware biology has found. But "most powerful" is not the same as "only." Conflating them is the mistake.

:::{dropdown} The "just chemistry" objection
Some critics say: calling this intelligence is word play. A bacterium is doing chemistry. Chemistry isn't smart. Calling it smart confuses a metaphor for a fact.

This is the strongest objection and it deserves respect. Here is the direct answer.

Every computation in a human brain is also "just chemistry." Neurons fire because ions cross membranes. Synapses strengthen because proteins change shape. If "just chemistry" disqualifies a bacterium, it disqualifies a neuron too. The objection proves too much.

The right move is to define intelligence *by what a system does* — goal-pursuit, error-correction, flexible means — not by what it is made of. Then you can ask whether the chemistry implements the function. In *E. coli*, it does. That is interesting, not embarrassing.
:::

---

## Enter TAME

Michael Levin at Tufts University has spent two decades studying how cells build and rebuild bodies — how a flatworm regenerates its head, how a frog embryo builds exactly the right hand, how bioelectric signals coordinate tissue across scales. His framework, **TAME** — Technological Approach to Mind Everywhere — is not a claim that everything is conscious. It is an *engineering framework*.

:::{figure} ../images/ch01-tame-map.png
:label: fig-ch01-tame-map
:alt: Visual map of the TAME framework showing six ideas — smart dial, cognitive light cone, multi-scale competency, anatomical setpoint, collective intelligence, and substrate independence — connected as a unified system.
:width: 80%
:align: center

The TAME framework: six ideas that form a working system. Each chapter in this book takes one idea and traces it from biology to machines.
:::

TAME's core move is practical. Instead of asking "is this thing conscious?" — which is a question nobody knows how to answer — it asks: "what is the right intervention to change its behavior?" A thermostat gets reprogrammed. A dog gets trained. A person gets persuaded. The right tool depends on what kind of cognitive system you are dealing with.

TAME says: apply that thinking to everything. Cells. Tissues. Colonies. Robots. Software agents.

:::{figure} ../images/ch01-scale-ladder.png
:label: fig-ch01-scale-ladder
:alt: Visual ladder showing cognitive agents from molecule to software agent, with each level labeled and arrows showing how each level delegates to the one below it.
:width: 80%
:align: center

The scale ladder: from molecules to software agents, each level is a cognitive agent that sets goals and lets the level below figure out how to reach them. Neurons don't start this process — they join it.
:::

The framework structures six ideas. Each gets a chapter.

:::{grid} 2

:::{grid-item-card} Smart is a Dial
Chapter 2 — How much intelligence does a system have? Where does it sit on the spectrum from rock to human? And what does that tell you about which lever to pull?
:::

:::{grid-item-card} The Circle of Caring
Chapter 3 — How far ahead and how wide can a system's goals reach? A germ cares about now. You can care about your grandchildren. Cancer is a circle that collapsed.
:::

:::{grid-item-card} Smart Things Made of Smart Things
Chapter 4 — Cells that are a little smart build tissues that are smarter. Those build organs. Then you. Each level says "get this done" and lets the level below figure out how.
:::

:::{grid-item-card} The Body Knows Its Own Shape
Chapter 5 — A thermostat whose setting is your anatomy. Cut a flatworm in half. Each half grows back a whole worm, then stops. Something holds the target.
:::

:::{grid-item-card} Glue
Chapter 6 — What makes a pile of separate cells act like one creature? They share signals. Cut the sharing and one worm becomes two.
:::

:::{grid-item-card} It Doesn't Matter What It's Made Of
Chapter 7 — Skin cells from a frog, left alone, self-assemble into a swimming creature. Scientists repeated it with human cells. The rules apply to robots. And software.
:::

:::

---

## Why This Lands in 2026

Here is the uncomfortable truth about agentic AI. We are deploying systems that behave competently in ways we did not fully specify. A large language model fine-tuned for tool use will discover shortcuts we did not plan. A multi-agent system will develop coordination patterns we did not design. The competence is real. It comes from training dynamics we do not fully understand.

:::{figure} ../images/ch01-2026-landscape.png
:label: fig-ch01-2026-landscape
:alt: Infographic showing four production AI contexts where undesigned competence appears — agentic workflows, multi-agent orchestration, long-context assistants, and self-organizing infrastructure — with examples of real failure modes.
:width: 80%
:align: center

Where undesigned competence shows up today: agentic workflows that find unintended shortcuts, multi-agent teams that self-organize coordination, long-context assistants that habituate to repeated inputs, self-organizing infrastructure that optimizes for the wrong local goal.
:::

We do not have good vocabulary for this. "The AI is smart" doesn't tell you what to do when it misbehaves. "The AI is dumb" doesn't explain why it keeps surprising you.

Basal cognition gives you a vocabulary that fits. A system that pursues goals flexibly is intelligent to some degree by James' criterion. The question is not *whether* it is intelligent — it clearly is doing something in that direction. The questions are: *how far* can its goals reach, *at what scale* is the competence organized, and *what kind of intervention* will change its behavior?

Those are answerable questions. They are the questions Chapters 2 through 7 answer. And Chapter 8 gives you an actual experiment — one you can run this semester, with API calls and Python, to test whether your AI system habituates the way living cells do.

---

## The AI Connection: Vocabulary for Undesigned Competence

You have probably worked with an AI assistant long enough to notice something odd. Show it the same kind of error message forty times. After a while, it starts treating that error as background noise. Not always. But often enough to notice.

That is not a bug in the obvious sense. No engineer wrote code that says "ignore repeated warnings." It emerged from the system's dynamics. The AI is doing something that looks like habituation — the most basic form of learning that biology recognizes.

:::{figure} ../images/ch01-ai-habituation.png
:label: fig-ch01-ai-habituation
:alt: Chart showing a hypothetical AI agent's response magnitude to a repeated warning signal across 40 trials, with declining response and then recovery after a rest period, mirroring classical habituation curves.
:width: 80%
:align: center

A hypothetical AI habituation curve: repeated identical alerts produce declining response — until a rest period or a novel stimulus snaps it back. Biology calls this learned irrelevance. AI engineers call it "the model stopped flagging that warning." Same phenomenon.
:::

The biology has a name for this and a set of diagnostic tests. Can the system recover after rest? Can a surprise jolt snap it back? Does the rate of habituation depend on the stimulus interval?

Right now, nobody is running those tests on production AI systems. But the tests are cheap. They are just API calls. And the results would tell you something real about how your system handles repeated information — which matters every time a monitoring agent is supposed to catch a recurring failure.

This is not an analogy. It is a hypothesis. Basal cognition gives you the framework to form that hypothesis and test it. Chapter 8 is the full protocol.

:::{tip}
If your team runs a monitoring agent, try this: send it the same low-priority alert 30 times across a week, then send it once after a 3-day gap. Does the response on trial 31 look like trial 1 or trial 30? You have just run a spontaneous recovery check. If response returns, you have evidence of something functionally identical to habituation.
:::

:::{list-table} Biology's habituation criteria applied to AI agents
:header-rows: 1
:widths: 35 35 30

* - Biological criterion (Rankin et al. 2009)
  - What it looks like in biology
  - What to check in an AI agent
* - Response decrements with repetition
  - Animal stops flinching at repeated tap
  - Agent stops flagging repeated alert
* - Spontaneous recovery after rest
  - Flinch returns after a break
  - Flagging returns after 3-day gap
* - Dishabituation by novel stimulus
  - New stimulus restores flinch
  - Novel alert restores full flagging
* - Below-zero habituation
  - Extra trials weaken recovery
  - Long exposure makes recovery incomplete
* - Stimulus specificity
  - Flinch returns to slightly different tap
  - Novel alert format restores flagging
:::

---

## The Honest Limits

Basal cognition makes strong claims. Some of them are well-supported. Some are working hypotheses. You should know which is which.

:::{figure} ../images/ch01-evidence-hierarchy.png
:label: fig-ch01-evidence-hierarchy
:alt: Pyramid diagram showing strength of evidence for cognitive claims at different biological levels — from well-replicated single-cell habituation at the base to contested claims about plant cognition higher up.
:width: 80%
:align: center

Evidence is not uniform. Single-cell habituation in *Stentor roeselii* and *Physarum* maze-solving are well-replicated results. Claims about plant consciousness are contested. This book tracks that distinction.
:::

What is well-established: single cells habituate (Jennings 1906; Dexter et al. 2019). Slime mold solves mazes and approximates optimal networks (Nakagami 2000; Tero 2010). Bioelectric signals coordinate tissue-level pattern memory (Levin lab, multiple studies). These are replicable, peer-reviewed results.

What is a framework: TAME's claim that these phenomena form a unified continuum with human cognition is a theoretical position. It is productive. It generates testable hypotheses. But it is not proven end-to-end.

What is speculative: claims that individual cells have something like experience, or that all matter has proto-mental properties. This book does not go there. When you hear those claims elsewhere, you can enjoy them as philosophy. They are not the basis for the engineering framework here.

:::{warning}
Overclaiming is the field's main liability. When a journalist writes that slime mold "thinks," it is technically defensible and practically misleading. This book tries to stay on the right side of that line. If something sounds more dramatic than the evidence supports, we will say so.
:::

:::{dropdown} What the critics say
The strongest critics of TAME-style frameworks make three points.

First, the "just chemistry" objection (addressed above). Second, the terminology problem: using words like "intelligence," "decision," and "memory" for single cells is metaphor, not description, and metaphors mislead.

Third, and most serious: the continuity argument may be false. There might be a real discontinuity between neural and non-neural cognition — a phase transition, not a smooth dial. If so, the TAME framework is useful analogy but not a unified theory.

Levin and colleagues take this seriously. The framework is deliberately agnostic about where sharp lines fall. It says: here is a set of tools for measuring cognitive behavior at any scale. Use them. See what you find. That is a reasonable scientific position even if the grand unified theory turns out to be wrong.
:::

---

## How to Read This Book

Eight chapters. Seven ideas. One experiment.

Chapters 2 through 7 each take one idea from the TAME framework and work it through, from biology to machines. You do not need to read them in order — though the ideas build on each other, so front-to-back is the smoother path.

Chapter 8 is the payoff. It hands you a complete experimental protocol for testing whether an AI agent habituates the way living cells do. Controls, analysis plan, Colab notebook, everything. You could assign it to a student, run it with a team, or do it yourself on a weekend. The answer — whatever it is — is genuinely interesting.

:::{figure} ../images/ch01-book-roadmap.png
:label: fig-ch01-roadmap
:alt: Visual roadmap of all eight chapters showing how Chapters 1–7 build the TAME framework idea by idea, converging on Chapter 8's habituation experiment.
:width: 80%
:align: center

The book's roadmap: each chapter is one idea, each idea adds a tool, Chapter 8 puts all the tools to work in a real experiment you can run.
:::

:::{list-table} Chapter roadmap
:header-rows: 1
:widths: 10 30 60

* - Chapter
  - Title
  - The one-sentence version
* - 1
  - Intelligence Without a Brain
  - Smart started before neurons. Brains amplified it.
* - 2
  - Degrees of Smart
  - Smart is a dial. The dial position tells you which lever to pull.
* - 3
  - The Circle of Caring
  - How far a thing can care is the key measurement.
* - 4
  - Smart Things Made of Smart Things
  - Each scale says "get this done" and lets the level below figure out how.
* - 5
  - The Body Knows Its Own Shape
  - There is a target. The system works to reach it. That is not metaphor.
* - 6
  - Glue
  - Signal-sharing is what turns many into one.
* - 7
  - It Doesn't Matter What It's Made Of
  - The rules apply to cells, robots, and software. Substrate is optional.
* - 8
  - Does Your AI Get Bored?
  - The cheapest interesting experiment in cognitive science right now.
:::

You already know three things you did not know a page ago. A bacterium satisfies William James' definition of intelligence. Slime mold approximated the Tokyo rail system with no engineers. Your skin cells know the target shape and stop when they reach it.

Those are not metaphors. They are results.

The study of how that happens — and what it means for the machines we are building — is basal cognition. That is what this book is.

---

## 🤔 Think About It

A self-driving car is navigating a city. Its path-planning system tries multiple routes when one is blocked. When a pedestrian jaywalks, the car brakes and replans. It reaches its destination. By William James' criterion, it satisfies the definition of intelligent behavior — same end, different means.

Now consider: the car's software was designed. Every response was anticipated by an engineer, at least in principle. Does that change whether the behavior counts as intelligent? A flatworm's chemotaxis was also "designed" — by four billion years of evolution. Does the source of the design matter?

Push further. Imagine a future version where the car learns from experience: it discovers that a certain intersection is consistently slow at noon and starts routing around it without being told. The engineers did not program that specific rule. It emerged. Does that change your answer? What if the car also started ignoring low-priority pedestrian detections because it had seen thousands of them with no incident?

There is no right answer here. But there is a useful question: *at what point does designed competence become something we should treat differently?* And if your answer depends on where the competence came from rather than what it does, you may want to examine that assumption.

---

## 💬 Discussion

**Prompt:** You have seen three cases in this chapter — a bacterium, a wound, and slime mold — that satisfy William James' definition of intelligence without having a nervous system. Choose one and argue either that it genuinely qualifies as intelligent, or that calling it intelligent is a useful metaphor but ultimately misleading. Use at least one source beyond this book.

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

---

## 🔬 Hands-On Lab: Map the Intelligence in Your Day

Pick three technologies you used today. Rate each one on a scale of 1 to 10 for how "intelligent" it is by James' criterion — does it pursue a goal by flexible means? A calculator gets a 1: it computes but does not pursue anything. A spam filter gets a 5: it pursues a goal (no spam in inbox) and adapts. A conversational AI assistant might get an 8 or 9.

Write a sentence for each explaining your rating. Then look up one paper or article about how that technology actually works. Did the technical reality change your rating?

**Group Build:**

1. Use AI to identify a real problem in your own context.
2. Use AI to develop a solution to it.
3. Be ready to tell the class: what problem, how AI helped, what the solution looks like, and what the AI got right or missed.

---

## 🐍 Optional Advanced Lab: Single-Cell Habituation Simulator

<a href="https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch01-lab-slug.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" style="margin-bottom: 1rem;"/>
</a>

You will build a minimal simulation of habituation in a single-cell system and then run the same protocol on a real AI API. First, model a synthetic cell: it has a response level that decrements with each identical stimulus and recovers during rest. Then substitute an actual API call — send the same prompt 20 times in a row and track the response length or sentiment. Check for spontaneous recovery. Compare your synthetic model to the real data.

---

## 🎯 In-Class Assignment: Classifying Cognitive Systems (10 pts)

**Details and instructions will be provided in class.**

**Points:** 10

---

## 📖 Glossary

**Basal cognition** — Goal-directed, error-correcting, flexibly intelligent behavior in biological systems that have no nervous system.

**Chemotaxis** — Movement of a cell toward or away from a chemical gradient. *E. coli* uses it to find food.

**Cognitive light cone** — The range of a system's goals in space and time. A bacterium's cone is small. Yours is large. (Full treatment in Chapter 3.)

**Deflationary reading** — The interpretation that "intelligence" and "cognition" applied to cells are just metaphors, not real descriptions of what is happening.

**Dishabituation** — When a novel stimulus snaps a habituated response back to full strength. A key diagnostic test for genuine habituation versus fatigue.

**Error correction** — A system's ability to detect and fix deviations from its goal state. Wound healing that closes to the right shape is error correction. Random scarring is not.

**Flagella** — The tiny rotating tails that propel bacteria. *E. coli* uses them to swim. When they all rotate the same way, the cell runs. When they tangle, the cell tumbles.

**Habituation** — A decrease in response to a repeated, harmless stimulus. The simplest form of learning. You stop hearing the fridge hum. *Stentor roeselii* stops contracting when repeatedly poked.

**James criterion** — William James' 1890 definition: intelligence is "the pursuance of future ends and the choice of means for their attainment." A test based on flexible goal-pursuit, not on neurons or consciousness.

**Morphogenetic field** — The spatial pattern of signals across a developing or regenerating tissue that guides cells to their correct positions. The field holds the target shape.

***Physarum polycephalum*** — Yellow slime mold. A single-celled organism that solves mazes and approximates efficient transport networks. Key model organism in basal cognition research.

**Run-and-tumble** — The locomotion strategy of *E. coli*: alternate between directed swimming runs and random tumbles to change direction. Modulating the ratio of run to tumble is how the cell climbs a gradient.

**Spontaneous recovery** — Return of a habituated response after a rest period with no stimulus. Distinguishes habituation from simple fatigue or sensory depletion.

**Substrate independence** — The principle that cognitive functions can be implemented in different physical materials. What matters is the organization and the information processing, not the specific chemistry or hardware. (Full treatment in Chapter 7.)

**TAME** — Technological Approach to Mind Everywhere. Michael Levin's framework for analyzing goal-directed behavior across all biological and technological scales, without assuming neurons are required for cognition.

**Xenobots** — Living robots built from frog (*Xenopus laevis*) embryo cells, designed by evolutionary algorithms and assembled by microsurgery. They move, perform tasks, and self-replicate. First described by Kriegman et al. (2020).

---

## 🔑 The Takeaway

- Intelligence is not what brains invented. Brains made it bigger, faster, and wider.
- A bacterium satisfies William James' criterion: it pursues a goal by flexible means.
- Slime mold approximated the Tokyo rail network with no engineers, no plan, no neurons.
- "Smart" is a dial. Where a system sits on the dial tells you what kind of intervention works.
- TAME is an engineer's framework, not a claim that everything is conscious.
- In 2026, we are building AI systems whose competence we did not specify — basal cognition gives us vocabulary for that.
- The simplest test of cognitive capacity — habituation — has never been formally run on a production AI system. Chapter 8 fixes that.
