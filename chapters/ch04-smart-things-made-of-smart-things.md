---
title: "Smart Things Made of Smart Things"
subtitle: "Every level says what, and lets the level below figure out how"
short_title: "Made of Smart Things"
description: "Your cells are a little smart. They build tissue that is smarter. That builds organs, then you. The newt proves it: give it giant cells and it uses fewer of them to build the same tube — and one enormous cell will curl around itself and build the tube alone. Nobody sent new instructions. This chapter is about multi-scale competency architecture, and why it is the design pattern for every agent system worth building."
label: ch-04-smart-things-made-of-smart-things
tags: [multi-scale-competency, hierarchy, newt, agents, TAME]
---

# Smart Things Made of Smart Things

:::{figure} ../images/ch04-infographic.png
:label: fig-ch04-infographic
:alt: Chapter overview infographic showing multi-scale competency architecture from molecules to organisms, with the newt tubule example and AI agent parallels.
:width: 100%
:align: center

Smart things are made of smart things. Every level of a living system sets a goal and hands the work downward. The newt, the immune system, and the modern AI agent stack all run on the same logic.
:::

A newt makes a kidney the same way every time. The tube at the center of each nephron — the part that filters your blood — comes out the same diameter, session after session, generation after generation.

Here is the strange part: the size of the cells doing the building does not matter.

Take a polyploid newt. Its cells are enlarged — twice, four times, even eight times the normal volume. A newt like that builds the same kidney tubule. It just uses fewer cells to do it. The tube stays the same. Only the cell count drops.

Push it further. Find a newt with cells large enough that you only need one to wall off the entire tube's circumference. That cell wraps around itself. It bends its own membrane into a circle and seals the lumen solo.

No new genes. No new instructions. Nobody told that cell: *you are the only one. Curl.*

Sit in that for a second before moving on. This is not a weird edge case. This is a clear window into how life actually builds things.

:::{figure} ../images/ch04-newt-tubule.png
:label: fig-ch04-newt-tubule
:alt: Three-panel diagram comparing normal-celled, polyploid-celled, and single-giant-celled newt kidney tubules all producing the same diameter lumen.
:width: 80%
:align: center

Three newts, three cell sizes, one tubule diameter. The genome did not change between them. What changed is how many cells answered the call. At the extreme right, one cell wraps around itself and forms the lumen alone — the most direct possible proof that cell count is not in the instructions.
:::

---

## What a Blueprint Cannot Do

Here is a mental model you probably carry: the genome is a blueprint. DNA tells cells where to go, what to be, how many to make. Body = blueprint + execution.

That model is wrong. The newt just killed it.

A real blueprint specifies positions. A floor plan says: wall here, door here, window here. If you change the size of your bricks, your building stops matching the plan. You'd have to rewrite every measurement.

The newt's genome did not get rewritten. Not one nucleotide changed between the regular newt and the giant-celled newt. The DNA didn't know the cells were bigger. It didn't need to know.

:::{figure} ../images/ch04-blueprint-vs-target.png
:label: fig-ch04-blueprint-vs-target
:alt: Side-by-side comparison: blueprint model with rigid position specifications that fails when cell size changes, versus target model where multiple paths reach the same outcome.
:width: 80%
:align: center

A blueprint encodes steps. A target encodes a destination. The newt experiment distinguishes them cleanly: the genome survives a 8-fold change in cell size without modification, which no blueprint could do.
:::

What the genome *does* specify is the target shape. The tubule's diameter. The lumen's presence. The correct topology of the structure. What it leaves completely open is *how many cells* accomplish that shape, or what path each cell takes to get there.

The cells aren't following a script. They're solving for an outcome.

That is a different kind of intelligence than most people picture when they think about genetics.

:::{prf:definition}
:label: def-target-morphology
**Target morphology** is the goal state a developing structure is working toward. Unlike a position blueprint, a target morphology can be achieved by different numbers of cells, different cell sizes, and different cell trajectories — as long as the final shape matches. The genome specifies target morphology, not execution path.
:::

:::{note}
The clearest published evidence for this comes from studies of polyploid salamander species, particularly work on *Triturus* and related genera. The kidney tubule result — same diameter, fewer larger cells — is one of the cleanest demonstrations that cell number is not what the genome is tracking.
:::

---

## The Ladder

The newt's tubule is not an exception. It is an example of a pattern that runs from the bottom of biology to the top.

Every living system is a nested stack of agents. Each level has its own goals. Each level monitors its own error signals. Each level has partial autonomy over how it achieves its outcome. And each level is built out of agents that are doing the same thing one rung down.

:::{figure} ../images/ch04-competency-stack.png
:label: fig-ch04-competency-stack
:alt: Vertical pyramid showing the multi-scale competency stack: molecular networks, cells, tissues, organs, organism, swarm or society — each level goal-directed and error-correcting.
:width: 80%
:align: center

The competency stack. Each rung is a goal-directed agent. It receives an outcome from above and delegates means to the level below. Remove any rung and the system adapts — not perfectly, but more than a rigid machine ever could.
:::

Start at the bottom. A protein network inside a single cell detects damage to DNA. It does not wait for instructions. It initiates repair. It has a goal — intact genome — and it pursues it through chemical gradients and feedback loops, with no cell nucleus telling it each step.

One rung up: the cell itself. It monitors its chemical environment, its mechanical neighbors, its position in a tissue. It makes decisions: divide, migrate, signal, die. A liver cell surrounded by healthy liver cells stays quiet. A liver cell in a wound edge proliferates. Same genome, different behavior, because the goal changed.

One rung up: tissue. A patch of skin knows it is supposed to be flat and sealed. A wound opens. The tissue does not wait for the brain to notice. Cells at the edge start migrating. Cells behind them divide. The patch closes and stops when the target is met.

One rung up: organ. A kidney regulates blood composition. It monitors dozens of parameters in parallel — pH, solute concentration, volume. It adjusts filtration rate. It talks to hormones. It has a setpoint and it defends it.

One rung up: organism. You wake up cold. You shiver. You reach for a blanket. You are running the same logic as every level below — goal, error signal, corrective action — just across a much wider range of possible goals.

One rung up: swarm, colony, society. A bee colony thermoregulates. Individual bees fan or cluster based on local temperature. No bee has the blueprint. The hive has the setpoint.

:::{prf:definition}
:label: def-mca
**Multi-scale competency architecture (MCA)** is the organizational pattern in which a system is built from nested layers of goal-directed agents, each layer specifying outcomes for the layer below while pursuing its own outcome for the layer above. First named and formalized by Michael Levin (Tufts University) as part of the TAME framework.
:::

The analogy breaks in one important place. Human organizational hierarchies often involve a boss who *could* do the subordinate's job if needed. In biological MCA, the organism cannot do the kidney's job directly. The levels are genuinely different in kind, not just scope. Keep that in mind when the metaphor gets tempting.

---

## How Levels Talk

The newt's giant cell did not receive new instructions. What did it receive?

The answer is something like a signal about the current state of the target. Neighboring cells send chemical gradients. Mechanical tension tells a cell whether a gap still exists. Bioelectric fields across a tissue encode something about the overall pattern — Michael Levin's lab has shown you can read and rewrite positional information through bioelectric manipulation alone.

:::{figure} ../images/ch04-information-flow.png
:label: fig-ch04-information-flow
:alt: Diagram showing outcome specification flowing downward through hierarchy levels, and status and constraint signals flowing upward — no micromanagement arrows cross more than one level.
:width: 80%
:align: center

Information flows in two directions. Outcomes and constraints move down. Status and error signals move up. Notice what is absent: no level issues step-by-step instructions to a level two rungs below.
:::

The information flowing *down* the hierarchy is sparse. Outcome. Constraint. Success signal. It is not a procedure manual. It is a destination address.

The information flowing *up* is equally sparse. Error magnitude. Current state. Whether the goal was met. Not a blow-by-blow account of every intermediate step.

This is the only way it can work at scale. A human brain has roughly 86 billion neurons. Your brain cannot track the behavior of each one individually. It specifies outcomes at a level of abstraction — *move my hand* — and trusts the motor cortex, the spinal cord, and eventually the muscle fiber networks to handle the details.

Micromanagement at scale is not just inefficient. It is physically impossible. The bandwidth does not exist.

:::{tip}
Here is a test for whether a hierarchy is MCA or just a relay chain: remove one level and observe what happens. In a relay chain, removing one link breaks communication entirely. In MCA, the adjacent levels renegotiate. They lose resolution — the gap is real — but they don't stop. Biology is full of this. Half a spinal cord can reorganize motor control. Half a brain in a young child can take over functions the missing half would have handled. A relay chain cannot do that.
:::

---

## What You Get

Why bother with this design? What does MCA buy that a rigid, fully specified system cannot deliver?

Robustness to novel conditions.

:::{figure} ../images/ch04-robustness-damage.png
:label: fig-ch04-robustness-damage
:alt: Comparison of a rigid designed system failing completely when one component is damaged versus an MCA system rerouting around the same damage to still achieve its goal.
:width: 80%
:align: center

Rigid systems fail at their weakest link. MCA systems have no single weakest link — the goal is distributed. This is not magic; it comes directly from the fact that subordinate levels pursue outcomes, not scripts.
:::

A designed system — a car engine, a circuit board, a traditional software pipeline — breaks when conditions fall outside its specification. The specifications were written by humans who imagined a range of conditions. Novel conditions outside that range break things.

An MCA system was never given a script to break. It was given a target. If the usual path to the target is blocked, the subordinate level searches for another path. It might not find one. It might find a bad one. But the default behavior is *try again differently*, not *halt*.

This is not theoretical. Consider:

**Planarian flatworms** cut in 279 pieces. Each piece regenerates a complete worm. The pieces were not designed to be standalone worms. They became worms because each fragment still contained cells that knew the target shape and could work toward it.

**Embryonic development** after cell splitting. Separate a human embryo at the four-cell stage. You can get four complete people from the cells of what would have been one. The cells were not individually programmed to be whole organisms. Each one still had the full target and the full competency.

**Limb regeneration** in axolotls. Remove the limb. The remaining tissue does not reference a "limb blueprint." It reconstitutes one from local signals and target-seeking behavior across weeks of coordinated cell activity.

None of these require new genetic information. They require a system that pursues outcomes rather than executing steps.

:::{dropdown} Why cancers and birth defects are also MCA consequences

MCA gives you robustness. It also gives you the conditions for things to go wrong in ways a blueprint system never could.

A cancer cell does not malfunction in the sense of "executing the wrong instructions." It de-integrates. It stops responding to the tissue-level goal signals. It runs its own cell-level goals — grow, divide, consume resources — without the tissue target to constrain it. The hierarchy loses a rung. The level above can no longer steer the level below.

Birth defects that involve extra or missing structures — extra digits, fused limbs, duplicated organs — often arise from miscalibrated targets, not wrong execution. The cells were competent. They hit their target. The target itself was set wrong. This is a different failure mode than a blueprint error and requires a different fix.

Levin's lab has demonstrated that you can *induce* specific birth defects by altering bioelectric signals before the standard developmental instructions run. You change the target. The cells hit the new target faithfully. This means, in principle, you can also fix targets — and some regenerative medicine approaches are beginning to work exactly this way.

:::

---

## What You Pay

MCA is not free.

:::{figure} ../images/ch04-cost-unpredictability.png
:label: fig-ch04-cost-unpredictability
:alt: Balance scale showing MCA gains on the left — robustness, adaptability, damage recovery — and MCA costs on the right — unpredictability, loss of direct control, emergent behaviors not planned for.
:width: 80%
:align: center

Every gain in MCA has a paired cost. Knowing both sides tells you when to use this design and when not to. A blood pressure cuff does not need MCA. A developing embryo does.
:::

You give up predictability. When you specify outcomes and delegate means, the level below picks the means. Sometimes it picks means you did not anticipate. Sometimes it picks means you actively dislike.

This is not a bug in MCA. It is the mechanism. The robustness comes from exactly the same place as the unpredictability: the subordinate level has genuine agency.

You also give up direct control. You cannot override a lower level with high precision, because the channel between levels carries sparse information. Your brain cannot individually command each motor neuron in your hand. You can say *grip* with different force levels. You cannot say *contract fiber 4,721 by 12 percent*.

And you give up accountability. When something goes wrong in an MCA system, it is often genuinely hard to say which level caused it. Was it the target specification from above? Was it the execution strategy from below? Was it the signal channel between them? The answer is sometimes all three, entangled.

:::{warning}
"Competency" is doing real work in this chapter. But it is also labeling mysteries. When we say a cell "knows" the target shape, we mean it behaves *as if* it does — it pursues that shape, corrects errors toward it, and stops when it arrives. We do not have a full account of the physical substrate of that "knowing" in most cases. The TAME framework is a description and a set of productive hypotheses, not a completed explanation. Keep that honest.
:::

---

## MCA and AI Systems

:::{figure} ../images/ch04-orchestrator-subagent.png
:label: fig-ch04-orchestrator-subagent
:alt: AI architecture diagram mapping orchestrator and sub-agents onto MCA levels, with outcome goals flowing down and results flowing up — mirroring biological hierarchy.
:width: 80%
:align: center

The orchestrator/sub-agent pattern is MCA. Most teams building these systems in 2025–2026 rediscovered it accidentally. The biology tells you what the failure modes are before you hit them.
:::

In 2025, teams building production AI systems converged on the same pattern from different directions. An orchestrator model breaks a task into sub-tasks. Specialist sub-agents handle each sub-task. Results flow back up. The orchestrator synthesizes.

That is MCA. They built it without naming it, because the engineering pressure toward it is the same pressure biology faces: you cannot fit the whole problem in one place, so you divide competencies across levels.

The biology tells you exactly what breaks next.

**Over-specification makes brittle sub-agents.** If you give a sub-agent a 40-step procedure instead of a goal, it follows the procedure. When step 14 fails — because the external API changed, or the document format shifted — the agent stops. It has no goal to fall back on. It only has a script that no longer works.

Here is the same task written both ways. Read the left one and find the step where it dies.

::::{tab-set}

:::{tab-item} Over-specified (brittle)
```text
Fetch open tickets from Product_Bug_Tracker via GET /v2/issues.
Filter to status=open.
Sort chronologically, oldest first.
For each ticket:
  1.  Open the ticket detail page.
  2.  Copy the description field.
  3.  Download every attachment to ./attachments/.
  4.  Open each attachment and read it.
  5.  Run sentiment analysis on the description.
  6.  Normalize the sentiment score to 0-1.
  7.  If score < 0.3, tag "urgent".
  8.  Post the tag back via PUT /v2/issues/{id}/tags.
  9.  Email the owner using the internal relay.
  10. Log the result to ./run.log.
Terminate when the list is exhausted.
```
**Step 3 fails.** The tracker moved attachments behind a signed URL last week. The agent has no goal to fall back on — only a script that no longer works. It stops, or worse, it continues and silently produces nothing.
:::

:::{tab-item} Outcome-specified (adaptive)
```text
Goal: every open bug report should carry an accurate urgency tag,
and the owner of anything urgent should know about it today.

Constraints:
  - Do not change ticket text or status.
  - Do not contact anyone outside the owner.
  - If you cannot read a ticket, flag it rather than guessing.

You have: the tracker API, the mail relay, and a sentiment model.
```
**Step 3 has no equivalent to fail.** Attachments were never the point. If the agent cannot open one, it still has the description, and it still knows what "done" means. It reroutes and finishes, or it flags what it could not read.
:::

::::

The difference is not prompt length. Both are about the same size. The difference is what the prompt encodes: a procedure or a destination.

**Under-specification makes unpredictable sub-agents.** Give a sub-agent only "do something useful about customer retention" and it has too much freedom. It might optimize a metric you did not mean to optimize. It might take an action outside the scope you intended. The biology has the same problem: tumor suppressor genes are part of the answer to keeping cells from running their own agenda without tissue-level constraint.

**The real tradeoff, in one sentence:** specify the outcome and the constraints, leave the method open.

That is harder than it sounds. You need to know which parts of the outcome are actually required and which parts you only think are required. Teams that get this wrong in one direction over-specify. Teams that get it wrong in the other direction lose control of what the agent does.

:::{figure} ../images/ch04-micromanagement-vs-delegation.png
:label: fig-ch04-micromanagement-vs-delegation
:alt: Two management approaches compared — micromanagement on left with cascading failures when conditions change, delegation on right with flexible adaptation to the same conditions.
:width: 80%
:align: center

Micromanagement is not just bad management. It is bad architecture. When the level below must check back for every step, you have not built a competent subordinate — you have built a slow relay.
:::

Biology handles the tension through three mechanisms that Chapter [](#ch-05-the-body-knows-its-own-shape) and Chapter [](#ch-06-glue) cover in detail: **setpoints** (what done looks like), **error signals** (how far from done right now), and **shared channels** (the medium through which levels stay coordinated). Those three together are what let the kidney pursue its goal without the brain micromanaging each nephron.

Your AI agent stack needs equivalents. Not as a metaphor — as a literal design question. What is the sub-agent's setpoint? What signal tells it when it has drifted? What channel do levels use to stay synchronized without the orchestrator reviewing every intermediate step?

If you cannot answer those three questions for a sub-agent you are deploying, you have not finished designing it.

:::{figure} ../images/ch04-undercompetent-subordinate.png
:label: fig-ch04-undercompetent-subordinate
:alt: Three diagnostic panels showing signatures of an under-competent subordinate agent — looping without progress, partial solutions, and the correct response of decomposing the goal further.
:width: 80%
:align: center

An under-competent subordinate has a diagnostic signature. It loops. It produces partial solutions. It asks for clarification repeatedly on the same point. The correct response is not to write better instructions — it is to shrink the goal until the agent's competency matches the scope.
:::

:::{figure} ../images/ch04-design-rubric.png
:label: fig-ch04-design-rubric
:alt: Design rubric table showing what to specify and what to leave open at each level — orchestrator, sub-agent, and tool — color coded for specify, optional, and do not micromanage.
:width: 80%
:align: center

A practical rubric for MCA-informed agent design. The hardest column is the middle one — the constraints. Too few and you lose control. Too many and you have written a procedure with extra steps.
:::

::::{tab-set}

:::{tab-item} Biology
**What biology specifies:** target shape, boundary conditions, success signal (gap closed, osmolarity balanced, temperature stable)

**What biology leaves open:** which cells move, how many cells participate, which molecular path achieves the target

**What happens when under-specified:** cancer, teratoma, uncontrolled growth — the subordinate level runs its own agenda

**What happens when over-specified:** development fails to adapt to novel conditions — the organism cannot regenerate after damage it was not pre-programmed for
:::

:::{tab-item} AI Engineering
**What you should specify:** the outcome (what done looks like), constraints (what actions are off-limits), success signal (how the orchestrator knows)

**What you should leave open:** the method (search strategy, API calls, intermediate steps), the sequence (let the agent decide what to do first)

**What happens when under-specified:** agent optimizes a proxy metric, takes out-of-scope actions, produces outputs that satisfy the letter of the goal but not the intent

**What happens when over-specified:** agent fails when any intermediate step meets an unexpected condition; cannot adapt; brittle against environment changes
:::

::::

---

## 🤔 Think About It

You are building a medical triage AI system. It takes a patient's symptoms and test results and routes them to the right specialist.

The engineering team is arguing about how to prompt the routing sub-agent.

Option A: give it a detailed decision tree. Chest pain + shortness of breath + elevated troponin → cardiology. Fever + elevated white count → infectious disease. And so on, for 200 conditions.

Option B: give it the goal. "Route this patient to the specialist who can best address the primary complaint given the urgency level. Err toward the more serious specialist when uncertain."

Option A fails when a patient presents with a condition not in the tree, or when two criteria conflict, or when the tree was built on population statistics that do not match this patient's demographics. Option B might route incorrectly in ways that are harder to audit and harder to defend legally.

Both failures are real. Neither option is obviously correct.

Now layer in the biological analogy: an MCA system that handles routine cases well but surprises you in novel ones. What is the tissue-level goal the routing system should hold? What is the cell-level goal of the sub-agent? What does the error signal look like when routing goes wrong — and who reads it?

There is no clean answer. But work through the failure modes for each option. Which one fails dangerously? Which one fails visibly? And is there a third design that borrows the "setpoint + error signal" structure from biology to get the best of both?

---

## 💬 Discussion

**Prompt:** Pick a system you interact with daily — a hospital, a school, a city government, an app. Describe one place where that system behaves like it is specifying outcomes and delegating means (working well), and one place where it behaves like it is issuing step-by-step procedures from the top (breaking down). Use the vocabulary from this chapter: goal, competency, error signal, level, setpoint. Do not use the word "hierarchy" as a substitute for thinking — say what the levels actually are.

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

---

## 🔬 Hands-On Lab: Build a Two-Level Agent

You do not need to write code. You need a browser and access to any AI assistant.

**Part 1 — Outcome specification.** Pick a task: plan a week of meals, outline a research paper, draft a project timeline. Write two prompts for the same task. The first is a step-by-step procedure (tell the AI exactly what to do in what order). The second specifies only the outcome and constraints (what done looks like, what is off-limits, nothing else). Run both. Compare the outputs.

**Part 2 — Stress-test.** Introduce a novel condition the procedure would not handle: "Oh, one person is allergic to gluten and we have no oven this week." Run both prompts again with the new constraint. Does the procedure-following version adapt? Does the outcome-specified version?

**Part 3 — Reflect.** Write one paragraph connecting what you observed to the newt tubule experiment. What is the genome analog in your prompt? What is the cell?

**Group Build:**
1. Use AI to identify a real problem in your own context.
2. Use AI to develop a solution to it.
3. Be ready to tell the class: what problem, how AI helped, what the solution looks like, and what the AI got right or missed.

---

## 🐍 Optional Advanced Lab: Simulating MCA in Python

<a href="https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch04-lab-mca-sim.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" style="margin-bottom: 1rem;"/>
</a>

You will build a simple two-level MCA simulation. A top-level "organism" agent holds a target value. A set of "cell" agents each observe local conditions and push values toward the target. The organism never tells any cell what to do — it only broadcasts the current error signal. You will observe how the system reaches the target, then damage one cell agent and watch the others compensate.

---

## 🎯 In-Class Assignment: Mapping Competency Levels (10 pts)

**Details and instructions will be provided in class.**

**Points:** 10

---

## 📖 Glossary

:::{list-table}
:header-rows: 1

* - Term
  - Definition
* - **Multi-scale competency architecture (MCA)**
  - The organizational pattern in which a system is built from nested layers of goal-directed agents, each specifying outcomes for the layer below while pursuing its own goal for the layer above.
* - **Target morphology**
  - The destination shape or state that a developing structure is working toward — distinct from a blueprint because it can be achieved by different cell numbers, sizes, and paths.
* - **Outcome specification**
  - Telling a subordinate level *what* to achieve, not *how* to achieve it. The defining feature of MCA-style communication between levels.
* - **Process specification**
  - Telling a subordinate level the exact steps to follow. Works when conditions are stable and predictable; breaks when they are not.
* - **Setpoint**
  - The target value a system is defending. A thermostat has a setpoint of 72°F. A kidney has a setpoint for blood pH. An AI sub-agent should have an explicit setpoint for what done looks like.
* - **Error signal**
  - The difference between the current state and the setpoint. Every MCA level monitors this and takes corrective action when it is non-zero.
* - **Polyploidy**
  - Having more than the standard two copies of each chromosome. Polyploid cells are larger than normal. The newt experiments exploit polyploid salamanders to produce enlarged cells with the same genome.
* - **Lumen**
  - The hollow interior of a tube-shaped structure. In the kidney tubule, the lumen is what must form — regardless of how many cells wall it off.
* - **Delegation**
  - Transferring an outcome goal to a subordinate level while leaving the method open. The opposite of micromanagement, and the signature of MCA.
* - **Robustness**
  - The ability of a system to achieve its goal across a wide range of conditions, including conditions it was not specifically prepared for.
* - **Orchestrator**
  - In an AI agent system, the top-level model that breaks a task into sub-tasks and assigns them to specialist sub-agents. The biological analog is the organism level in MCA.
* - **Sub-agent**
  - A specialist AI model that handles one sub-task within a larger system. The biological analog is an organ or tissue that pursues a specific goal within the whole organism.
* - **TAME framework**
  - Technological Approach to Mind Everywhere — Michael Levin's framework for applying cognition vocabulary (goal, error, memory, learning) to non-neural systems at all biological scales.
* - **Bioelectric signaling**
  - The use of voltage gradients and ion flows across cell membranes to encode positional and pattern information. A key channel through which levels in MCA communicate target morphology.
* - **De-integration**
  - The loss of responsiveness to higher-level goal signals. A cell that de-integrates pursues its own local goals without the tissue target to constrain it. Cancer is the clearest biological example.
* - **Competency level**
  - The scale at which a given agent pursues goals. A cell's competency level is its local chemical neighborhood. An organism's competency level spans its entire body and into its future.
* - **Regeneration**
  - The reconstruction of a lost structure by goal-seeking behavior at lower competency levels. Planarian regrowth, axolotl limb replacement, and wound healing all involve target-seeking without new instructions.
:::

---

## 🔑 The Takeaway

- A newt with giant cells builds the same kidney tubule. One enormous cell wraps around itself to form the tube alone. The genome did not change. The cell count was not in the instructions.
- The genome specifies target shapes, not execution paths. That is the only reading consistent with the evidence.
- Life is a nested stack of goal-directed agents. Each level pursues outcomes, delegates means, and monitors error signals. This is multi-scale competency architecture.
- The robustness of living systems comes directly from outcome specification. You cannot break a system that is pursuing a goal by changing the route — only by changing the goal or cutting the signal.
- The cost is real: you lose predictability and direct control. Cancer, teratoma, and misaligned AI agents are all MCA failure modes.
- Every orchestrator/sub-agent AI architecture is a rediscovery of MCA. The biology tells you what breaks before you hit it.
- Specify outcome and constraints. Leave method open. Verify the sub-agent has a setpoint, an error signal, and a channel. If you cannot answer those three questions, you have not finished the design.
