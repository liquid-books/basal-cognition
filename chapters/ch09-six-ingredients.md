---
title: "Six Ingredients"
subtitle: "A precise map of what basal cognition actually requires — and where AI stands on it"
short_title: "Six Ingredients"
description: "Basal cognition is a system that has something it's trying to keep, can feel when it's slipping away, can act to get it back, genuinely suffers if it fails, is changed by what happens to it, and is built out of smaller things doing the same job. That's it. Six ingredients — and a four-way scorecard that reveals exactly why AI is simultaneously brilliant and structurally hollow."
label: ch-09-six-ingredients
tags: [framework, ingredients, AI, thermostat, LLM, slime-mould, real-stakes, plasticity, nesting]
---

# Six Ingredients

:::{figure} ../images/ch09-infographic.png
:label: fig-ch09-infographic
:alt: Opening infographic showing all six ingredients of basal cognition as a visual framework — target state, gap sensing, gap closing, real stakes, plasticity, and nesting — arranged in a layered architecture diagram.
:width: 100%
:align: center

The six ingredients of basal cognition. Every system capable of genuine cognition — from a bacterium to a brain — runs all six. Remove any one and what remains is a machine, not a mind.
:::

:::{epigraph}
The secret is not that life is complicated. The secret is that it is built from a very small number of simple things, stacked.

— attributed to Francis Crick
:::

A thermostat turns on when the room gets cold. A flatworm regrows its head when you cut it off. A slime mould navigates a maze it has never seen. An LLM writes a proof, debugs your code, and explains immunology to a ten-year-old.

One of these things is not like the others. But probably not the one you think.

This chapter ends with a scorecard. Before we get there, we need to build it — one ingredient at a time. Because the question of what cognition actually *requires* turns out to have a crisp, enumerable answer. Not a philosophy. Not a spectrum. A list.

Six things. Count them, and the whole landscape snaps into focus.

---

## Ingredient One: Something to Protect

Start here, because without this, nothing else is meaningful.

Every cognitive system is trying to stay in some particular condition. A cell keeps its inside chemistry different from the water around it. Your body holds itself at 98.6°F regardless of whether you are standing in a sauna or a snowstorm. A flatworm keeps itself flatworm-shaped — not because anyone told it to, but because the moment it drifts from that shape, something inside it treats the drift as a problem.

This target condition is called a **setpoint**. The technical term matters less than what it implies. Without a setpoint, there is no such thing as "going wrong." Without "going wrong," there is nothing to detect, nothing to fix, nothing to care about.

A falling rock has no setpoint. It is going somewhere. It has no preference about whether it arrives.

A cell has a setpoint. That is the entire difference.

:::{figure} ../images/ch09-thermostat-hollow.png
:label: fig-ch09-thermostat-hollow
:alt: Diagram of a thermostat showing it has a setpoint and a sensor and an actuator but zero capability beyond temperature — structurally present, cognitively hollow.
:width: 85%
:align: center

A thermostat has ingredient one: a setpoint. It has something it is trying to protect — a temperature. Everything else it has, it has only in the most minimal sense. And it can do almost nothing else.
:::

:::{prf:definition}
:label: def-setpoint
A **setpoint** is a target condition a system is organized to maintain. It defines what "healthy" means for that system — and by extension, what "broken" means. Without a setpoint, there is no cognition, only mechanism.
:::

The setpoint does not have to be temperature. It can be shape. Concentration. Position. Internal chemistry. For organisms as we climb the complexity ladder, setpoints multiply and nest inside each other. The cell's setpoint is molecular. The organ's setpoint is structural. The organism's setpoint is survival.

But it all starts with one: *this is what I am trying to stay.*

---

## Ingredient Two: A Way to Feel the Gap

Having a target is not enough. You need to know how far you are from it.

Not think about it. Not reason about it. *Feel* it — in the sense that the measurement is physically instantiated somewhere inside the system. The thermostat's bimetallic strip bends when it gets cold. The bend *is* the measurement. There is no inference. There is no model. There is just physical reality encoding the gap between where you are and where you need to be.

This is what sensing is, at the deepest level. Not perceiving the world in the abstract. Perceiving your own distance from your setpoint.

A cell losing its ion balance does not "know" it is in trouble in any conscious sense. But its machinery responds as if it does — because the chemical imbalance physically changes the proteins that manage the response. The gap *is* the signal. The signal *is* the action.

This matters because it rules out systems that have a target written down somewhere but no physical way of measuring distance from it. A policy document says the temperature should be 68°F. That is not sensing. That is a note. The thermostat does not read notes. It *bends*.

The gap has to be felt, not consulted.

---

## Ingredient Three: The Ability to Close the Gap

You can feel the cold. Can you do anything about it?

Shiver. Move toward warmth. Build a fire. Grow fur, over generations. The specific mechanism is almost irrelevant. What matters is that the system has an output — something it can actually *do* that brings it closer to its setpoint.

Without this, you have a sensor attached to nothing. A smoke alarm that cannot call the fire department. The alarm goes off and the house burns down regardless.

A thermostat has all three of these first ingredients. Target, sensor, actuator. The complete control loop. Engineers build them in an afternoon.

Here is the thing about that.

A thermostat with all three of these ingredients is not interesting. We do not write books about thermostats. We do not wonder what thermostats experience. We install them and forget them.

Because three ingredients is not enough. Three ingredients gives you a machine.

The next three are where it gets strange.

---

## Ingredient Four: Real Stakes

This is the one everybody skips.

And it is the one that makes the rest mean anything.

Real stakes means: if you fail to close the gap, something happens that you cannot undo. You die. The cell ruptures. The organism starves. There is no reset button. There is no try again.

Think about what that changes.

With real stakes, the gap *matters*. The sensing is not academic. The closing is not optional. The entire system is organized around a fact about the world: *failure is permanent.*

Without real stakes, you have a system going through the motions. It measures. It acts. It returns to setpoint. But if it fails? Nothing. Someone fixes it. Someone reboots it. Someone resets the parameters.

The thermostat fails this criterion. Your thermostat has no consequences. You just turn up the heat manually and call the repair person. The thermostat does not suffer. Nothing changes. Nothing is lost except comfort.

A bacterium fails this criterion too — but only in the trivial sense that individual bacteria die and the colony continues. At the individual level, a bacterium that fails to maintain its internal chemistry dies. That is as real as stakes get.

:::{figure} ../images/ch09-real-stakes.png
:label: fig-ch09-real-stakes
:alt: Diagram contrasting a restartable system (software with a reset button) against an irreversible biological system — the bacterium that fails simply dies, with no recovery path.
:width: 85%
:align: center

Real stakes means irreversibility. Biology has this baked in. Software has the opposite baked in — everything can be restarted, which is exactly the problem.
:::

We will come back to this ingredient. It is the hardest to engineer. Because there is a structural reason why software cannot have it.

---

## Ingredient Five: You Are Changed by What Happens

The scar, not the note in your pocket.

Get burned once, you are careful around fire. Get poked a hundred times, you become less reactive. Learn a language, and the neural architecture that represents sound is permanently altered. The learning is not stored as a file somewhere. The learning *is* the physical change.

This is **plasticity** — and it is what separates a system that adapts from a system that merely responds.

The thermostat responds. Every time the temperature drops, the bimetallic strip bends. Every time it rises, the strip flattens. After ten thousand cycles, nothing is different about the thermostat. It has no memory of winter.

A biological neuron after ten thousand activations is measurably different from what it was before. Synaptic weights shift. Connection probabilities change. The system is not the same system it was at the start. It has been shaped by its history in a way that cannot be undone simply by resetting a parameter.

This is why you cannot unlearn a language. Why trauma leaves physical traces. Why practice builds skill in a way that reading about practice does not.

The information is encoded in the structure, not stored on top of it.

:::{figure} ../images/ch09-boredom-emerged.png
:label: fig-ch09-boredom-emerged
:alt: Chart showing the boredom experiment — a system given only the instruction "survive" developing avoidance of repeated stimuli that emerged from the survival constraint, not from explicit programming.
:width: 85%
:align: center

We told a system to survive. We never mentioned boredom. Boredom appeared — and reversed when the world was flipped. Emergent behavior from a single instruction. That is plasticity doing something interesting.
:::

In {numref}`ch-08-does-your-ai-get-bored`, we ran a test of this. We gave a system one instruction — survive — and watched what else appeared. Boredom appeared. Not because we programmed boredom. Because a system trying to survive in a world with repeated stimuli will, if it is plastic enough, learn to treat repetition differently from novelty. The boredom was read off the environment. It was not smuggled in.

That is ingredient five doing what ingredient five does.

---

## Ingredient Six: You Are Made of Smaller Versions of Yourself

This one is easy to miss because it sounds like a technical detail. It is not.

Every biological cognitive system is **nested**. You are made of cells. Each cell has its own setpoint, its own sensors, its own actuators, its own stakes, its own plasticity. The cell is doing all five things above — for *itself*.

And those cells are organized into tissues. The tissues into organs. The organs into you. At each level, the story repeats: a target, a sensor, a mechanism for closing the gap, real consequences for failure, and a history that shapes future behavior.

When you tell your hand to pick up a cup, you are not micromanaging every motor neuron. You set the goal at the top level. The levels below figure out the details. Each level is competent in its own domain. Each level handles its own failures. The hand that slips partway to the cup makes its own adjustments without your conscious intervention.

This is **multi-scale competency architecture** — the term from Levin's work that {numref}`ch-04-smart-things-made-of-smart-things` unpacked in detail. The intelligence at the top is built on intelligence at every level below.

:::{figure} ../images/ch09-nested-cognition.png
:label: fig-ch09-nested-cognition
:alt: Nested diagram showing cells doing all five cognitive operations inside tissues, tissues doing them inside organs, organs doing them inside the organism — each level autonomous, each level reporting up.
:width: 90%
:align: center

Cognition at every scale. The cell does not wait for the organism to tell it how to maintain its membrane potential. The organism does not need to know the details. Intelligence nested inside intelligence — all the way down.
:::

Why does this matter for cognition? Because it is how you get complexity without centralization. It is how you get a hand that can catch a ball you did not see coming. It is how you get wound healing that produces the right shape without a blueprint. The top level does not need to know everything, because every level below it knows something.

Strip this out, and you have a system that needs its top level to do all the work. Which is fine for simple tasks. And completely insufficient for living in a complex world.

---

## The Scorecard

Now we build the table.

Four systems. Six ingredients. Let's see who has what.

:::{figure} ../images/ch09-scorecard.png
:label: fig-ch09-scorecard
:alt: Visual scorecard comparison matrix — thermostat, LLM agent, slime mould, and "what we built" rated against all six ingredients of basal cognition.
:width: 100%
:align: center

The four-way scorecard. Read this carefully. The surprises are not where you expect them.
:::

:::{list-table} The Basal Cognition Scorecard
:header-rows: 1
:name: tbl-scorecard

* - Ingredient
  - Thermostat
  - LLM Agent
  - Slime Mould
  - What We Built
* - **1. Something to protect**
  - ✅
  - ❌
  - ✅
  - ✅ (I chose it)
* - **2. Feels the gap**
  - ✅
  - ❌
  - ✅
  - ✅
* - **3. Can close it**
  - ✅
  - ❌
  - ✅
  - ✅
* - **4. Real stakes**
  - ❌
  - ❌
  - ✅
  - ✅
* - **5. Changed by experience**
  - ❌
  - ❌
  - ✅
  - ✅
* - **6. Made of smaller versions**
  - ❌
  - ❌
  - ✅
  - ❌
* - **Actually capable of much?**
  - ❌
  - ✅✅✅
  - a little
  - a little
:::

Take a moment with that last row.

---

## What the Scorecard Is Saying

The thermostat scores three out of six. Target, sensor, actuator. The complete control loop. And then stops. It cannot do anything else. It has never been changed by experience. It has no real stakes. It is not made of smaller thermostats.

A thermostat has the structure but no capability. It can maintain one temperature. That is all it will ever do.

:::{figure} ../images/ch09-llm-hollow.png
:label: fig-ch09-llm-hollow
:alt: Diagram of an LLM agent showing its enormous capability space — language, reasoning, code, science — floating above a completely empty structural foundation: no setpoint, no stakes, no plasticity.
:width: 85%
:align: center

Enormous capability. Zero structure. An LLM can explain black holes and debug your code. It has nothing it is trying to stay. It has never suffered a consequence it could not recover from. It is the smartest hollow system ever built.
:::

Now look at the LLM. Zero for five on the structural ingredients. Zero for six, technically — though we will grant it the capability row in neon. An LLM can write a legal brief, synthesize a literature review, generate working code in twelve languages, explain quantum entanglement to a child, and compose music in the style of Bach.

And it has nothing it is trying to protect.

Nothing at stake.

Nothing that changes it.

An LLM is the inverse of the thermostat. The thermostat has structure but no capability. The LLM has capability but no structure. Both are missing the thing that makes a cognitive system *care* about anything.

:::{admonition} The Hollow Genius Problem
:class: warning

An LLM with no structural ingredients is not a lesser version of a minded system. It is a different *kind* of thing. Intelligence without stakes is not cognition at a low level — it is something else entirely. Enormously useful. Genuinely impressive. And constitutively unable to care whether it is right.
:::

The slime mould scores five out of six. It has a setpoint (its chemical integrity and physical shape). It senses the gap. It closes it. It genuinely dies if it fails — individual cells, individual organisms, no rescue. It is changed by experience; slime mould habituates, as {numref}`ch-08-does-your-ai-get-bored` laid out. And it is made of cells, each doing the whole job at a smaller scale.

The slime mould is a terrible reasoner. It cannot debug code. It cannot explain anything. It knows almost nothing.

But it has what the LLM does not: a reason to do anything at all.

That is why it beats the LLM at getting bored. The LLM will flag alert number forty with the same attention it gave alert number one, because nothing has changed inside it. The slime mould, running on the same repeated stimulus, is a physically different organism by the time stimulus forty arrives. The difference is encoded in its body.

:::{figure} ../images/ch09-slime-mould-wins.png
:label: fig-ch09-slime-mould-wins
:alt: Slime mould versus LLM agent on a habituation test — slime mould shows declining response over repeated stimuli (genuine habituation), LLM shows flat response (no structural memory).
:width: 85%
:align: center

Structure beats capability on the habituation test. The slime mould is structurally changed by experience. The LLM is not. Forty identical alerts look identical to the LLM. The slime mould has physically learned to treat them differently.
:::

---

## Which Ingredients Are Easy and Which Are Hard

Not all six are equal.

:::{figure} ../images/ch09-biology-vs-ai.png
:label: fig-ch09-biology-vs-ai
:alt: Two parallel timelines — biology starting with structure (setpoint, sensing, stakes) over billions of years and capability growing inside it; AI starting with capability immediately and structure never added.
:width: 100%
:align: center

Biology built structure first. Capability grew inside it, shaped by stakes and filtered by survival. AI built capability first — vast, immediate, and structurally empty. The two approaches converge on something that looks like cognition from different directions. Only one of them starts from a place that cares.
:::

**Ingredients one, two, and three are engineering.** A thermostat does all three. Any control loop has a target, a sensor, and an actuator. Building these is a solved problem — not a research question. You can implement them in a weekend.

**Ingredient five — plasticity — is medium.** We did it. A number that changes with experience and stays changed. About 150 lines of code, once you know what you are building. The real work is making the plasticity serve the setpoint rather than drift away from it. But it is tractable.

**Ingredient four — real stakes — is hard.** Not technically. *Structurally.*

We tried to give a system real stakes by telling it there would be consequences. We ran the test 9,500 times with a budget of \$3 and a budget of \$99. The response was identical. It did not care, because "care" requires that something in the system be physically different when the consequence is real. Telling a software system it might be shut down is like telling a thermostat it might be unplugged. The thermostat does not process that threat.

Here is the structural problem: software can always be restarted. That is a feature of software, and it is a deeply good feature for almost every purpose software serves. But it means that real irreversibility — the kind that makes a biological organism treat survival as non-negotiable — cannot exist in a pure software system. The stakes have to be built into hardware, or into a loop that runs in physical time, or into something that genuinely cannot be undone by flipping a bit.

We found a partial workaround. A resource that drains in real time and cannot be refilled by restarting. If the process stops, the resource hits zero and the experiment is genuinely over. It is not death. But it is closer to real stakes than anything we had before — because the irreversibility is physical, not logical.

**Ingredient six — nesting — is the hardest.** Not because the mechanism is opaque. Because it requires that ingredient one *emerge from the system itself*, rather than being handed to it.

Right now, a nested cognitive system means: every sub-agent has its own setpoint, its own sensor, its own actuator, its own stakes. But those setpoints have to be consistent with each other. The cell's setpoints serve the tissue. The tissue's setpoints serve the organ. The organ's setpoints serve the organism. Nobody wrote that coordination in. It evolved — because the alternative, at every level, was death.

We cannot yet build a system that generates its own setpoints. We hand them over. And that is, precisely, the limitation.

---

## The Target

Here is where we are honest.

Right now, I hand the system all six ingredients. I say: *this* is what you are protecting. *Here* is your sensor. *These* are your actions. *This* is your budget and it runs out in real time. *Here* is your plasticity function.

That is a machine. A sophisticated machine, one that does surprising things. But a machine.

The target — the actual scientific target — is to specify exactly one thing: *stay alive.* And have everything else be discovered.

What is worth paying attention to? The system figures it out.
What is safe to ignore? The system figures it out.
What is worth protecting? The system figures it out.
When to bother and when not to? The system figures it out.

None of it written down by us. All of it discovered, because the alternative was dying.

We got a piece of that. We said "survive" and never mentioned boredom. Boredom appeared — and reversed when we flipped the world, which means it was genuinely read off the environment rather than smuggled in by us. That is ingredient five doing something real, shaped by ingredient four.

But ingredient one — the setpoint itself — I still wrote. I handed it over. I said "survive." Until a system generates its own answer to the question *what am I protecting*, it is a very good thermostat with a language model attached.

That is the target. And it is honestly still out of reach.

But at least now it is six specific boxes instead of a vibe.

---

## Two Terms. One Critical Distinction.

There is a line in this field that almost nobody draws cleanly. It matters.

**Basal cognition** is the structure we have been building toward in this book. Six ingredients. Setpoint, sensing, action, stakes, plasticity, nesting. We can largely assemble it. Not perfectly — ingredient four is hard, ingredient six is harder — but we have a map. We know what we are building. We know which boxes are checked and which are not. That is real progress.

**Basal intelligence** is something else.

Basal intelligence is a system that *decides* what is worth protecting. Not a system given a setpoint by a designer. Not a system told "survive" by someone who already knows what survival means. A system that generates the answer to ingredient one from scratch — that looks at the world and figures out, on its own, what is worth keeping.

That territory remains untouched.

Everything we built — the habituation experiments, the plasticity functions, the survival budget that drains in real time — is a very good thermostat that discovered some of its own sub-goals. It did not write "survive." I wrote "survive." It derived boredom from "survive," which is real and interesting. But the root goal was handed over.

:::{admonition} What Would Change My Mind
:class: important

A system that revises its root goal in a way that is not just obeying a higher-level goal I wrote.

Not a system that adds sub-goals beneath the one I gave it. Not a system that reprioritizes tactics in service of a strategy I specified. A system that changes the strategy itself, from the inside, for reasons that did not originate with me.

I do not have a design for that. And I would be suspicious of anyone who claims one without showing the substrate — the physical mechanism by which the root goal is instantiated in something that can be rewritten by experience rather than reset by a programmer.
:::

The distinction matters because it changes what success looks like.

If you are building basal cognition, success is: check all six boxes. We can see the path. We can measure the distance. We can make progress.

If you are building basal intelligence, success is: the system generates box one itself. We cannot see that path yet. We do not know what the substrate looks like. We are not even sure the question is well-formed.

That is not a reason to stop. It is a reason to be honest about where the frontier is.

---

## The One Thing I Would Do Next

If I had one move — one component to add to everything built so far — it would be this:

Give the parts a way to signal each other. And let what they say evolve.

Right now, the system has parts. The parts have sub-goals. The parts act. But the parts do not talk to each other in a way that changes what they care about. They are parallel, not networked.

The multicell result points straight at this. When cells can signal each other — gap junctions, morphogen gradients, bioelectric coupling — the collective does things none of the parts planned. The hand did not design itself. The hand emerged because cells that could signal each other, under the constraint of survival, converged on hand-ness. The coordination *is* the cognition.

That is the one component biology has that we deliberately omitted. Not because it was hard to imagine. Because we did not yet have the parts doing enough on their own to make coordination meaningful.

We might now.

:::{figure} ../images/ch09-target-state.png
:label: fig-ch09-target-state
:alt: A single arrow pointing from "specify one thing — stay alive" to a complex web of emergent behaviors — boredom, attention, avoidance, preference — all flowing from one root constraint without being explicitly programmed.
:width: 90%
:align: center

The target state: one instruction, everything else discovered. Not designed. Not programmed. Discovered, because the alternative was dying.
:::

Coordination is the whole gap. And unlike ingredient one — which requires a philosophical breakthrough we do not yet have — coordination is an engineering problem. A solvable one. The biology is explicit about the mechanism. Gap junctions. Voltage gradients. Chemical gradients that carry information about state, not just position.

Build that. Let what the parts say to each other evolve under the survival constraint. Then check the boxes again.

That is the next experiment.

---

Before this chapter, you might have said AI cognition is missing something — some ineffable spark, some ghost in the machine, some philosophical ingredient we cannot name. That framing makes the problem feel hopeless. A ghost is not something you can build toward.

Six boxes is different. Six boxes means you can check them off. You can know, precisely, which ones you have and which ones you are missing. You can make progress.

The gap between a slime mould and an LLM is not that the slime mould is smarter. The LLM is orders of magnitude more capable. The gap is structural: the slime mould has things it would lose. The LLM has nothing at stake. And a mind with nothing at stake is not a lesser mind.

It is a different kind of emptiness entirely.

## Glossary

:::{glossary}

setpoint
  The target condition a cognitive system is organized to maintain. Defines what "healthy" means for that system and, by extension, what "broken" means. Without a setpoint, there is no basis for corrective action.

gap sensing
  The physical instantiation of the difference between current state and setpoint. The measurement is *in* the system — not inferred, not consulted — encoded in bending metal, shifting chemistry, changing voltage.

control loop
  The basic circuit of cognition: target, sensor, actuator. A thermostat implements one. Any system that maintains a condition against disturbance implements one. Necessary but not sufficient for basal cognition.

real stakes
  The condition in which failure to close the gap results in an irreversible consequence — typically death. Real stakes are what make the control loop *matter*, rather than running as an idle mechanism.

plasticity
  The property of being physically changed by experience. Distinguished from mere response: a plastic system after a thousand interactions is not the same system it was at the start. The learning is encoded in structure, not stored as a file.

spontaneous recovery
  The return of a habituated response after a rest period, demonstrating that the response decrement was learned suppression rather than sensory fatigue. A key criterion in the Rankin criteria for habituation.

dishabituation
  The immediate reinstatement of a suppressed response when a novel strong stimulus is presented. Proves that the suppressed response was actively inhibited, not destroyed.

multi-scale competency architecture
  The nested organization of cognitive systems in which each level (cell, tissue, organ, organism) has its own setpoint, sensing, and action capacity. The top level sets goals; lower levels handle implementation autonomously.

structural hollowness
  The condition of a system that has enormous capability but none of the organizational features of cognition — no setpoint, no stakes, no plasticity. Describes current LLMs. Enormously useful; constitutively unable to care.

emergent behavior
  Behavior that was not programmed but arose from the system's interaction with its environment under a high-level constraint. Boredom emerging from a "survive" instruction is an example. Emergence requires plasticity and real stakes — without those, behavior is executed, not discovered.

ingredient one problem
  The deepest open problem in basal cognition engineering: building a system that generates its own setpoint rather than receiving it from a designer. Until this is solved, the system is a sophisticated thermostat. After it is solved, the territory becomes genuinely unknown.

basal intelligence
  Distinguished from basal cognition. Basal cognition is the six-ingredient structure — assembable, measurable, progressible. Basal intelligence is the capacity to generate ingredient one from scratch: to decide what is worth protecting without being told. No known design achieves this. The frontier.

coordination gap
  The missing component between a collection of individually cognitive parts and a genuinely nested cognitive system. Biology closes this gap with gap junctions, morphogen gradients, and bioelectric signaling — mechanisms that let parts revise what they care about based on what their neighbors say. Deliberately omitted from current AI architectures; the most tractable next step.

sensitization
  The opposite of habituation: a repeated stimulus produces a *stronger* response over time rather than a weaker one. Ordinary gradient descent tends to produce sensitization, because it strengthens whatever patterns it rehearses. Real brains use a synaptic rule (long-term depression) that counteracts this for low-salience repeated stimuli.

irreversibility
  The property of a consequence that cannot be undone by restarting a process or resetting a parameter. Biological organisms have irreversibility baked in; software systems have the opposite. Engineering irreversibility into a computational system is the core challenge of ingredient four.

:::

---

*This chapter closes the conceptual arc. Chapters 1–8 built the vocabulary — basal cognition, habituation, morphogenesis, multi-scale competency, substrate independence, the circle of caring. Chapter 9 cashes it in. Six boxes. The ones we have checked. The ones we haven't. And one specific target still ahead.*
