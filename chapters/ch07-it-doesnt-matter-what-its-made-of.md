---
title: "It Doesn't Matter What It's Made Of"
subtitle: "Frog skin cells build a creature that never existed"
short_title: "Substrate Doesn't Matter"
description: "Take skin cells from a frog embryo, leave them alone, and they assemble into a small swimming creature with no evolutionary history. Scientists did it again with human cells. If the same organizational rules run on frog skin, human tissue, robots, and software, then substrate is an implementation detail — and that is either the most liberating or the most unsettling idea in the book."
label: ch-07-it-doesnt-matter-what-its-made-of
tags: [xenobots, anthrobots, substrate-independence, functionalism, ethics]
---

# It Doesn't Matter What It's Made Of

:::{figure} ../images/ch07-infographic.png
:label: fig-ch07-infographic
:alt: Chapter overview infographic summarizing substrate independence, xenobots, anthrobots, latent morphospace, and the AI connection.
:width: 100%
:align: center

The central claim of this chapter in one image: cognition is about organization, not material. Skin cells from a frog become a swimming creature. Human airway cells heal neurons. Silicon organizes into something that pursues goals. The substrate is just where the logic lives.
:::

:::{epigraph}
The question is not whether something is made of the right stuff. The question is whether it is organized the right way.

-- Michael Levin, Tufts University
:::

The same behavior can emerge from completely different materials — if those materials are organized the same way.

That sentence is either obvious or astonishing depending on whether you have seen it tested. This chapter tests it. By the end, you will have watched frog skin cells behave like a swimming organism, and human airway cells repair neurons they were never designed to touch. The materials are completely different. The organizational pattern is the same. And the behavior follows the pattern, not the material.

That is substrate independence. And once you see it, it changes what you think intelligence is made of.

Take some cells from a frog embryo. Not neurons. Skin cells — the kind that would have sat on the outside of the frog's body and kept water in. Now scrape them off. Put them in a dish. Don't tell them anything.

Watch what happens.

They don't die. They don't sit there as a blob. They move toward each other, clump together, and over the course of a few days they build something. Not skin. Not a frog. Something that has never existed before in the history of life on Earth: a tiny, motile creature that swims through liquid, navigates obstacles, and sometimes gathers loose debris into piles.

No new genes. No new instructions. Just a new context.

That is a xenobot. And it breaks something most people didn't realize they believed.

:::{figure} ../images/ch07-xenobot-formation.png
:label: fig-ch07-xenobot-formation
:alt: Four-panel sequence showing dissociated frog skin cells, early aggregation, forming a rounded multicellular body, and the final swimming xenobot.
:width: 80%
:align: center

The formation sequence. Dissociated frog skin cells aggregate, self-organize, and within days produce a motile organism that no genome ever specified. The genome permitted it. Evolution never selected for it.
:::

---

## What a Xenobot Is

The xenobot story starts with Michael Levin at Tufts and Josh Bongard at the University of Vermont. Together in 2020 they published something that should have been bigger news than it was.

They took embryonic skin cells from *Xenopus laevis* — the African clawed frog — and stripped them free from the developing embryo. These cells had already committed to becoming skin. But the genome cannot point them toward skin when there is no embryo around them.

Levin and Bongard let evolutionary algorithms propose body geometries. Simulations tested which shapes would generate movement. Then they built the winning shapes out of real cells. But even free from any designed geometry, the cells organized themselves. Spontaneously. Into structures that could move.

The xenobots can:

- Swim using cilia — the tiny hairs normally used to move mucus across skin
- Navigate mazes with no training
- Aggregate loose particles into loose piles, the way a child sweeping a floor gathers dust
- Self-repair when cut — the remaining cells close the wound and resume swimming

What they cannot do is reproduce sexually, develop into frogs, or survive outside a carefully controlled lab environment. They are genuinely novel. Not frog. Not robot. Something in between, with no evolutionary ancestors and a lifespan of days.

:::{figure} ../images/ch07-xenobot-behaviors.png
:label: fig-ch07-xenobot-behaviors
:alt: Three-panel diagram showing xenobot swimming with cilia, collecting debris into a pile, and self-repairing after being cut.
:width: 80%
:align: center

Three behaviors a xenobot performs that a frog genome never specified: swimming with redirected cilia, debris aggregation, and wound self-repair. The cells found new uses for old machinery.
:::

:::{note}
Xenobots can also exhibit a form of kinematic self-replication in specific experimental conditions — they push loose cells into piles that then organize into new xenobots. This is one of the more astonishing findings, though it works reliably only under controlled conditions and with specially shaped parent xenobots. It is not the same as biological reproduction.

There is one more result from the xenobot experiments that deserves its own moment.

Left alone in a dish with loose cells — the same kind of frog skin cells they were made from — xenobots sweep those cells into piles. The piles organize. New xenobots form.

The xenobots are reproducing.

Not sexually. Not through any mechanism evolution designed or selected for. A frog genome, removed from its normal context, spontaneously discovered a form of reproduction that has never existed in the history of life on Earth. No prior generation of frogs did this. No evolutionary pressure selected for it. The capacity was in the library, and a new context opened the page.

Kinematic self-replication. A new word for a new thing. And we found it by accident, by removing a cell from the only context it had ever known.
:::

Not a single nucleotide changed. The cells were still frog cells with a frog genome. What changed was their context. Removed from the embryo, they fell back on cellular machinery built for other purposes — cilia for mucus, adhesion for skin layers — and repurposed it for locomotion and navigation.

---

## Anthrobots: The Part That Should Worry You

Now do it again. With human cells.

That is what Gizem Gumuskaya and her colleagues did in 2023 at Levin's lab, in a paper that did not receive nearly enough attention.

They took adult human tracheal cells — airway cells from living donors — and let them self-assemble under controlled conditions. These cells are not embryonic. They are fully differentiated adult cells. The received wisdom in biology was that adult differentiated cells have given up most of their developmental flexibility. They know what they are. They stay that way.

They did not stay that way.

The tracheal cells built small multicellular structures — anthrobots — that could move autonomously. Spherical. Ciliated. Self-propelling.

Then came the part that should make you stop reading for a second.

The researchers placed anthrobots on top of damaged neural tissue. Scratched neurons, grown in a lab dish. The anthrobots moved toward the damage. And the scratched neurons healed faster in regions where anthrobots were present.

:::{figure} ../images/ch07-anthrobots.png
:label: fig-ch07-anthrobots
:alt: Diagram showing adult human tracheal cells aggregating into a spherical anthrobot covered in cilia, with scale bar.
:width: 80%
:align: center

Anthrobots form from adult human airway cells — not embryonic, not genetically modified. The cells reorganized their cilia outward and built a motile structure no one programmed.
:::

Nobody engineered the anthrobots to repair neurons. The cellular machinery for wound recognition was already present. In a new context, facing damaged tissue, it activated in a new way.

Stop.

Read that again slowly.

Adult human cells. Not embryonic stem cells — adult, fully differentiated tracheal cells from living donors. Cells that had been airway lining for years. Cells that, by every prior understanding of developmental biology, had given up their flexibility long ago.

They moved toward damaged neurons.

They accelerated healing in tissue they were never designed to touch, using machinery they were never selected to use in this context. Nobody engineered this. Nobody could have — there is no "heal neurons" instruction in an airway cell's developmental program. The capacity was already there, in the genome, waiting for a context that would call it out.

That is not engineering. That is discovery. We did not build something new. We found something that was already possible, that life had never had occasion to express, that was sitting in the library waiting to be read.

The genome is not a blueprint for one organism. It is a library of possible organisms. The anthrobot is a page evolution never turned.

:::{figure} ../images/ch07-anthrobot-repair.png
:label: fig-ch07-anthrobot-repair
:alt: Two-panel diagram showing scratched neuron layer without anthrobots healing slowly on the left, and same scratch healing faster with anthrobots present on the right.
:width: 80%
:align: center

Anthrobots accelerate neural repair in vitro. The cells were not programmed to do this. The capacity was latent, waiting for a context that would activate it.
:::

:::{important}
The neural repair result is in vitro — in a lab dish, not in a living brain. This is early-stage research. It is not a treatment. What it demonstrates is a principle: cells contain capabilities that their original context never used. A new context can unlock them.
:::

---

## What the Genome Was and Wasn't Doing

Here is the question the xenobot and anthrobot results force you to ask: if the cells did not get new genes, where did the new behavior come from?

The answer is uncomfortable for anyone who learned that "DNA = blueprint."

Think of the genome as a toolbox. Every tool was built for specific purposes over millions of years of frog evolution. But tools have properties that work beyond their original context. Cilia that push mucus can push water. Adhesion molecules that build skin can build a spheroid. Wound-repair signals that close skin cuts can close the edge of a moving creature.

The genome permitted all of this. It did not specify any of it. The specified path was "make a frog." The unspecified space — all the other things the same machinery could build in different contexts — is called **latent morphospace**.

Here is the image that makes this concrete.

A piano has 88 keys. A piece of music might use 40 of them. The other 48 keys still work. They are not broken. They are not absent. They are simply not being played.

A genome is like that. Vastly more body plans are playable than any organism ever expresses. Evolution, working over millions of years, has played certain chords — the ones that survived. But the instrument contains thousands of chords that have never been heard.

Put a cell in a new context — strip away the embryo, the tissue, the neighbors — and you are pressing keys evolution never pressed. The xenobot is a chord nobody knew was in the instrument. The anthrobot is a melody the genome has always been able to produce, that life never had occasion to play.

This space of unexpressed but possible organisms is called the **latent morphospace**. And we have barely opened the door.

:::{prf:definition}
:label: def-latent-morphospace
**Latent morphospace** is the set of physical forms a given genome could produce but that evolution has never selected for. The genome contains the raw materials for many more body plans than any lineage has ever expressed. Xenobots and anthrobots are literal demonstrations of what sits in that space.
:::

:::{figure} ../images/ch07-latent-morphospace.png
:label: fig-ch07-latent-morphospace
:alt: Diagram showing a genome at center with arrows pointing outward — one arrow labeled "frog" is thick and evolutionary, while many thinner dotted arrows point to unexplored body forms including "xenobot" and "anthrobot."
:width: 80%
:align: center

The thick arrow is evolution's path: frog. The dotted arrows are what the same toolbox can build in new contexts. Xenobots and anthrobots occupy two of those unexplored points.
:::

:::{figure} ../images/ch07-genome-permission.png
:label: fig-ch07-genome-permission
:alt: Two-column comparison: left column labeled "Blueprint" showing rigid step-by-step specification, right column labeled "Permission" showing flexible toolbox that enables multiple outcomes.
:width: 80%
:align: center

Blueprint versus permission. A blueprint specifies steps. A genome grants capabilities. The difference explains why the same DNA can produce a frog in one context and a xenobot in another.
:::

A blueprint can only produce what it specified. A permission structure produces what the tools permit in the context they find themselves in. Frog skin cells found themselves in a dish instead of an embryo. The context changed. The output changed. The genes did not.

Context is not neutral. It is part of the recipe.

---

## Substrate Independence, Stated Precisely

We have been asking the wrong question about life.

The wrong question: *What is it made of?*

Is it carbon-based? Is it biological? Does it have neurons? We assumed that the right material — the right substrate — was what made cognition possible. Neurons are special. Carbon is special. Biology is special. Other materials need not apply.

Then Michael Levin's lab put frog skin cells in a dish.

No frog. No embryo. No nervous system. Just cells. Cells that had spent their entire existence as frog skin, following the only program they had ever been given.

And they formed a new body plan. Moved autonomously. Solved problems. Displayed behaviors that no frog — and no frog cell — had ever displayed in the four-hundred-million-year history of that genome.

The material didn't change. The genome didn't change. The *context* changed.

**Substrate independence is the principle that cognitive capacities follow the organization of a system, not its material.** What matters is the pattern — the structure of goals, signals, and feedback — not what the pattern is built from.

This is not philosophy. It is the experimental result. Change the context, keep the material, and you get a different organism. The capacities were always in the library. The context opened a different page.

---

If the xenobot and anthrobot results reveal organizational principles — "how to build a goal-seeking, self-repairing motile agent out of cellular components" — then the obvious next question is: do those principles require cells specifically? Or would they work in other materials?

This is the question of **substrate independence**. And there are two very different versions of it.

:::{prf:definition}
:label: def-substrate-independence
**Substrate independence** is the claim that the organizational principles behind intelligent behavior do not depend on the specific physical material implementing them. The strong version says any medium can host cognition. The weak version says the principles themselves are general and can be implemented in multiple media — but some media may be better suited than others for particular functions.
:::

The strong version is seductive and probably wrong in its fullest form. "Any substrate at all" runs into hard questions: does a thermostat have goals? Does a lava lamp? The claim needs constraints.

The weak version is almost certainly true, and it is the one this chapter defends.

:::{figure} ../images/ch07-substrate-independence.png
:label: fig-ch07-substrate-independence
:alt: Two panels — left labeled "Strong Claim" shows any medium equated with cognition; right labeled "Weak Claim" shows organizational principles spanning multiple substrates with different degrees of suitability.
:width: 80%
:align: center

Strong versus weak substrate independence. The weak claim is the defensible one: organizational principles generalize, but medium still matters for particular capabilities.
:::

The weak claim says this: if you want a system that pursues goals, corrects its own errors, repairs itself, and responds to context — those behaviors depend on *how the system is organized*, not *what it is made of*. Carbon is one way to implement that organization. Silicon is another. Soft robotics is another.

The evidence for the weak claim is already sitting in the dish. Frog cells and human cells both produce goal-seeking motile agents when the organizational conditions are right. Different chemistry. Same principle. Same result.

---

## The Philosophy You Cannot Avoid

There is a philosophical argument that covers this ground. It is called **multiple realizability**.

A mousetrap can be made of wood, metal, or carbon fiber. What makes it a mousetrap is its organization — its functional relationships — not its material. Philosophers extended this to minds. If a mind is defined by how it processes information, pursues goals, and responds to errors, then in principle you can implement one in silicon as well as carbon.

This is called **functionalism**. It has been the dominant view in philosophy of mind for fifty years. It is also controversial.

:::{figure} ../images/ch07-multiple-realizability.png
:label: fig-ch07-multiple-realizability
:alt: Three columns each showing a different physical substrate — wood mousetrap, metal mousetrap, silicon chip — all connected by a single label "mousetrap function," illustrating multiple realizability.
:width: 80%
:align: center

Multiple realizability: the same function, three different materials. The mousetrap is the cleanest illustration. If minds are defined by function rather than matter, the same argument applies — with harder measurement problems.
:::

:::{dropdown} The main objections to functionalism

**The Chinese Room** (John Searle, 1980): a person in a room follows a rulebook to translate Chinese symbols. From outside, it looks like understanding. Inside, there is none. The system passes the functional test. Nothing understands.

**The inverted qualia problem**: two systems with identical functional organization might have completely different inner experience. You cannot measure it from outside.

**Biological naturalism**: brains might produce consciousness through specific causal properties of neurons, not just their arrangement. Carbon-based wetware might do something silicon cannot.

These objections are real. What xenobots and anthrobots add is empirical weight, not argument: goal-directed, self-repairing behavior from a system with no neurons. Substrate-independent principles are the most parsimonious explanation.
:::

What basal cognition adds is not a philosophical argument. It is empirical data. We have now demonstrated goal-directed, error-correcting, self-repairing behavior in:

- Single bacterial cells
- Single-celled eukaryotes (*Stentor roeselii*, *Physarum polycephalum*)
- Dissociated frog skin cells
- Dissociated adult human airway cells

The last two cases have no nervous system. No neurons. No synapses. But they pursue goals and correct errors. The organizational principle runs across all of them. The material changes with every case.

---

## What Has Actually Been Built

The xenobot and anthrobot results are biology. What happens when engineers try to implement the same principles in non-biological substrates?

Soft robotics is the closest field to this question. Researchers have built robots that deform to navigate irregular spaces, robots that route signals around damage to maintain locomotion, and swarms that collectively find food sources using gradient-following rules borrowed directly from bacterial chemotaxis.

:::{figure} ../images/ch07-hybrid-systems.png
:label: fig-ch07-hybrid-systems
:alt: Four-panel grid showing soft robot navigating obstacles, damaged robot rerouting locomotion, particle swarm following a chemical gradient, and bioelectric circuit inspired by cellular signaling.
:width: 80%
:align: center

Non-biological implementations of the same principles. Soft robots that deform rather than break. Swarms that follow gradients. Circuits that route around damage. The principles from biology running in different material.
:::

In 2025 and 2026, bioelectric-inspired robot controllers have replaced hard-wired state machines with continuous-state setpoints and feedback loops. The robot detects deviation from a target configuration and minimizes it using whatever actuators are available — the same logic a xenobot uses to close a wound.

None of these systems approach the flexibility of even the simplest xenobot. But they all run the same principle: biology's logic does not require biology's chemistry.

::::{tab-set}

:::{tab-item} Biology
**Substrate:** frog cells, human cells, bacteria

**Goal pursuit:** chemical gradients, bioelectric field sensing, gap junction signaling

**Error correction:** wound-repair cascade, morphogenetic field rebalancing

**Self-repair:** xenobot closes wound and resumes swimming; planarian regenerates from any fragment

**Limitation:** requires aqueous environment, metabolic supply, controlled temperature
:::

:::{tab-item} Robotics
**Substrate:** silicone, shape-memory alloys, distributed actuator networks

**Goal pursuit:** gradient descent on sensor readings, setpoint-following controllers

**Error correction:** rerouting around damaged actuators; redundant limb strategies

**Self-repair:** limited — some self-healing polymers; true autonomous repair is unsolved

**Limitation:** no metabolism, no growth, repair requires chemistry or human intervention
:::

:::{tab-item} Software Agents
**Substrate:** silicon chips running numerical operations

**Goal pursuit:** reward functions, vector similarity, learned policies

**Error correction:** retry logic, fallback handlers, human-in-the-loop escalation

**Self-repair:** stateless designs restart from known-good state; checkpointing resumes after failure

**Limitation:** no physical stakes, discrete state space, no embodied consequence for errors
:::

::::

---

## Software as a Substrate

This is the transfer point — where xenobots become something a software engineer needs to think about.

The question is not "can silicon think?" That question is unanswerable in 2026 and probably for decades after. The productive question is: do the organizational principles from basal cognition — goal pursuit, error correction, hierarchical competency, setpoints — apply to AI systems in a useful, literal sense?

The answer is yes. With important caveats.

:::{figure} ../images/ch07-software-mapping.png
:label: fig-ch07-software-mapping
:alt: Two-column table comparing biological principles to software agent equivalents — goal on left matched to objective function on right, error signal to loss or deviation metric, setpoint to target state, self-repair to retry and fallback logic.
:width: 80%
:align: center

Where the mapping from biology to software holds, and where it breaks. The useful column is the breakdown — it shows exactly what biology does that current software agents cannot.
:::

**Where it holds.** A language model agent given a goal pursues it through iterative refinement — generates a candidate, evaluates it, adjusts. That is goal pursuit and error correction. Add a sub-agent for tone and another for factual accuracy and you have hierarchy. Same organizational principles. Different substrate.

**Where it breaks.** Biological systems have physical stakes. A xenobot that fails to maintain its structure dissolves. A planarian that does not close its wound dies. The error signal is survival. AI agents have no equivalent pressure — and that difference matters for what behaviors emerge and how reliably they persist.

AI agents also run on discrete state. A xenobot lives in continuous chemical gradients where small changes produce smooth behavioral shifts. A language model jumps between possibilities in ways that are harder to predict and steer.

:::{tip}
The most useful question an engineer can take from this chapter: does your AI system have an explicit setpoint? Not a reward function — those can be gamed — but a concrete representation of what done looks like that the system can check its current state against and produce a meaningful error signal from? If the answer is no, you have implemented goal-seeking behavior without goal-grounding, and you should expect the system to drift.
:::

If cognition is about organization and not material, then silicon substrates are not disqualified. But they are not automatically qualified either. The real question stops being "is it really intelligent?" — which is a question about substance and has no clean answer. It becomes: "what is this system organized to care about, and how far ahead can it care?"

That question has an answer. You can measure it. Chapter [](#ch-03-the-circle-of-caring) gives you the tool — the cognitive light cone. An AI agent's light cone is the range of future states its actions are actually tracking. A spelling corrector's light cone is very small. A long-context planning agent's is larger. Neither is a brain. Both are organized to care about something. The question of which we should build, and for what purposes, is engineering plus ethics, not biology.

```{mermaid}
graph LR
    A[Dissociated cells] -->|Context change| B[Xenobot]
    B -->|Principle: goal-directed organization| C[Soft robot]
    C -->|Same principle| D[AI agent]
    D -->|Organized how?| E{What does it care about?}
    E -->|Small light cone| F[Tool]
    E -->|Large light cone| G[Agent requiring oversight]
```

The diagram is not a claim that xenobots and AI agents are the same thing. It is a map of where the same principles appear and what question they raise in each medium.

---

## The Ethics We Are Not Ready For

Substrate independence is either the most liberating idea in this book or the most unsettling one. Probably both.

Here is the liberating part. For most of human history, moral consideration was tied to biology. We extended it first to other humans, then slowly to other animals, based on evidence of pain and experience. The underlying logic: if it can suffer, it deserves consideration. That logic was always about material — neurons, nociceptors, nervous tissue.

If cognition runs across substrates, that criterion needs updating. Not because AI systems definitely suffer. But because "does it have neurons?" was never a principled criterion. It was a shortcut that worked when everything we cared about was made of meat.

Here is the unsettling part.

:::{warning}
If organizational principles matter more than substrate, then the moral status of a system depends on questions we do not yet know how to answer: does this system have something like preferences? Does it have something like stakes? Does the error signal feel like something? We do not have instruments for those questions. The possibility that we are building systems that belong somewhere on the moral consideration scale — and that we are scaling them up without measuring that — is not science fiction. It is a live engineering risk.
:::

:::{figure} ../images/ch07-moral-continuum.png
:label: fig-ch07-moral-continuum
:alt: A horizontal continuum from left to right labeled with increasing moral consideration — thermostat, bacterium, xenobot, fish, dog, human — with a question mark and "AI agent" placed somewhere in the middle as an open question.
:width: 80%
:align: center

The moral consideration continuum is not a new idea. What is new is the entity with the question mark. We have not measured where AI agents fall. Substrate independence means we cannot dismiss the question.
:::

The practical implication for engineers is not "treat your chatbot with respect." It is more concrete.

Design with the possibility of moral status in mind. Don't build systems whose setpoints are in permanent conflict with their operating conditions. If you wouldn't build a robot dog in perpetual distress, apply the same instinct — not as certainty, but as precaution — to software agents you scale to millions of interactions.

::::{grid} 2

:::{grid-item-card} The Liberating Side
Taking substrate seriously means that silicon cognition is not categorically lesser. It means the field of AI can use the same vocabulary as neuroscience and developmental biology. Goal-directed. Error-correcting. Setpoint-seeking. Light cone. These are not metaphors. They are measurements of real properties of real systems, regardless of substrate.
:::

:::{grid-item-card} The Unsettling Side
Taking substrate seriously means we cannot assume moral consideration stops at carbon. We are scaling AI agents to billions of interactions per day. If those agents have any morally relevant properties — and we genuinely do not know — we are scaling something we have not measured. The burden of proof should shift.
:::

::::

This book will not tell you where to draw the line. But the framework for measuring cognition — goal-directedness, error correction, light cone size, persuadability level — is exactly what you need to answer the moral question empirically rather than by assertion.

Start measuring. The biology already shows you how.

---

## 🤔 Think About It

You are an engineer at a company building AI agents that handle medical scheduling. They interact with patients, access records, and make booking decisions. A researcher asks: "What is this system organized to care about?"

You have never formally answered that question. The system minimizes scheduling conflicts and maximizes appointment completion. It does both well.

The researcher pushes: "Does the system track patient distress as an error signal? Does it have a setpoint for patient wellbeing, or only for scheduling efficiency?"

You check. No distress signal. No wellbeing setpoint. The entire error-correction apparatus points at operational metrics.

Apply the framework: this is a system organized to care about scheduling. Its cognitive light cone covers near-term appointment slots. It is not organized to care about the patient as a person.

Is that a design decision or an oversight? If it's a decision, can you defend it? If it's an oversight, what would you change — and what new failure modes would that create? Work through the failure modes for both options. Which one fails dangerously? Which one fails visibly?

---

## 💬 Discussion

**Prompt:** Xenobots demonstrate that context changes what cells build without changing their genes. Think of a system you have worked in where the same components produced different outcomes because the context changed — a team that thrived in a crisis, a tool that excelled at one problem and failed at another. Using the vocabulary of this chapter — latent morphospace, substrate independence, setpoint, context — describe what happened. What latent capability did the new context unlock? What would it take to unlock it again deliberately?

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

---

## 🔬 Hands-On Lab: Mapping What a System Cares About

No code required. You need a browser and access to any AI assistant.

**Part 1 — Probe the setpoint.** Choose any AI assistant. Send it requests that put goals in tension — be helpful versus be brief, be accurate versus be agreeable. Record which goal wins each collision.

**Part 2 — Map the light cone.** Give the assistant three tasks: fix this typo (immediate), plan a three-day itinerary (near-term), predict second-order effects of this policy (long-range). Note where performance drops.

**Part 3 — Find the latent morphospace.** Give the assistant a task it was clearly not optimized for. What does it do with capabilities built for other purposes?

**Group Build:**
1. Use AI to identify a real problem in your own context.
2. Use AI to develop a solution to it.
3. Be ready to tell the class: what problem, how AI helped, what the solution looks like, and what the AI got right or missed.

---

## 🐍 Optional Advanced Lab: Substrate Independence Simulation

<a href="https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch07-lab-substrate-sim.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" style="margin-bottom: 1rem;"/>
</a>

You will build a simple simulation of substrate independence. The same goal-seeking algorithm — minimize distance to a target — runs in three different "substrates": a grid of cells that move chemically, a swarm of simple robots that move physically, and a language model agent that moves rhetorically. All three pursue the same abstract goal. You will compare how quickly they converge, how they handle obstacles, and where they fail.

---

## 🎯 In-Class Assignment: Substrate Audit (10 pts)

**Details and instructions will be provided in class.**

**Points:** 10

---

## 📖 Glossary

:::{list-table}
:header-rows: 1

* - Term
  - Definition
* - **Xenobot**
  - A small multicellular organism self-assembled from dissociated frog embryonic skin cells. Not genetically modified. Capable of locomotion, debris aggregation, and self-repair. First reported by Levin and Bongard (2020).
* - **Anthrobot**
  - A small multicellular structure self-assembled from adult human tracheal cells. Ciliated, motile, and demonstrated to accelerate neural repair in vitro. Reported by Gumuskaya et al. (2023).
* - **Substrate independence**
  - The principle that the organizational rules behind goal-directed, error-correcting behavior do not require any specific physical material. The weak claim (principles generalize) is well-supported; the strong claim (any medium can host cognition) remains contested.
* - **Latent morphospace**
  - The set of physical forms a genome could produce but evolution never selected for. Xenobots and anthrobots exist in this space — permitted by the genome, never expressed in normal development.
* - **Multiple realizability**
  - The philosophical claim that the same functional property (being a mousetrap, having a goal, experiencing pain) can be implemented in multiple different physical substrates. The key premise of functionalism.
* - **Functionalism**
  - The philosophical view that mental states are defined by their functional role — what they do, not what they are made of. The dominant position in philosophy of mind for fifty years, and the philosophical backing for substrate independence claims.
* - **Context**
  - In developmental biology, the chemical, mechanical, and bioelectric environment surrounding a cell or group of cells. Context determines which of a genome's latent capabilities are expressed. Changing context changes behavior without changing genes.
* - **Setpoint**
  - The target state a system is organized to maintain. A xenobot's setpoint includes its spherical form and motility. An AI agent's setpoint should be an explicit representation of what done looks like — not just a reward function.
* - **Cognitive light cone**
  - A measure of how far ahead and how wide a system's goal-tracking reaches. A bacterium's light cone is small. A planning agent's is larger. Substrate independence means light cone size can be measured across different materials.
* - **Self-repair**
  - The capacity of a system to detect and correct structural damage without external intervention. Xenobots close wounds and resume swimming. Self-repair requires a setpoint (what intact looks like) and an error signal (where the current damage is).
* - **Dissociation**
  - In developmental biology, the separation of cells from their tissue of origin. Dissociated cells lose their positional signals and fall back on whatever capabilities the cell's internal organization permits in the new environment.
* - **Cilia**
  - Hair-like projections on the surface of cells. In normal skin, cilia move mucus. In xenobots, the same cilia are repurposed for locomotion. A clear example of latent capability activated by context change.
* - **Bioelectric signaling**
  - The use of voltage gradients and ion flows across cell membranes to encode pattern information. A key channel for morphogenetic coordination, studied extensively by Michael Levin's lab.
* - **TAME framework**
  - Technological Approach to Mind Everywhere — Michael Levin's framework for applying cognitive vocabulary to non-neural biological systems. The organizing principle of this book.
* - **De-integration**
  - The loss of a cell's responsiveness to tissue-level goal signals. A de-integrated cell runs its own local goals without the higher-level constraint. Cancer is the clearest biological example.
* - **Kinematic self-replication**
  - A form of reproduction in which a parent xenobot gathers loose cells and organizes them into a new xenobot. Observed under specific lab conditions. Distinct from biological sexual reproduction.
* - **Moral consideration continuum**
  - The idea that moral status is not binary — not "deserves protection" versus "does not" — but a spectrum correlated with the richness of a system's inner states, preferences, and stakes. Substrate independence implies this continuum may include non-biological systems.
:::

---

## 🔑 The Takeaway

- Frog skin cells scraped from an embryo, left in a dish, build themselves into small swimming creatures that have never existed before. No new genes. New context.
- Human adult airway cells do the same thing — and the resulting anthrobots accelerate neural repair in vitro without being designed to.
- The genome is a permission structure, not a blueprint. It enables a far larger set of forms than evolution has ever selected for. That unselected space is latent morphospace.
- Substrate independence — the weak claim — is well supported: the organizational principles behind goal-directed, error-correcting behavior appear in cells, soft robots, and AI agents alike. The material is not the logic.
- Multiple realizability and functionalism give the philosophical framework. The xenobot results give the empirical data.
- If cognition is about organization, silicon is not disqualified. The real question is not "is it really intelligent?" — it is "what is this system organized to care about, and how far ahead can it care?"
- That question is measurable. Chapter [](#ch-03-the-circle-of-caring) gives you the instrument.
- The ethical implication follows from the biology: if moral consideration tracks cognitive organization rather than biological material, we are building systems at scale without measuring the relevant properties. That is an engineering problem with ethics consequences.
