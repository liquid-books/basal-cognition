# Chapter 2 Quiz — Degrees of Smart

*Ten multiple-choice questions and three short-answer questions. Answers are in dropdowns.*

---

## Multiple Choice

**1.** A bacterium swims toward food when you add a nutrient gradient to the water. Which tier does this place the bacterium on?

A. Tier 1 — Mechanism  
B. Tier 2 — Reactive  
C. Tier 3 — Trainable  
D. Tier 4 — Persuadable  

:::{dropdown} Answer
**B. Tier 2 — Reactive.** The bacterium runs a sensorimotor loop — it senses the gradient and responds — but has no persistent memory and cannot be trained by repeated stimuli. You influence it by changing its environment, not by persuading it.
:::

---

**2.** You want to fix a production server that is using too much memory. You add more dashboards and send the team more alerts. This is an example of:

A. A correct Tier 2 intervention  
B. A correct Tier 4 intervention  
C. Magical thinking — persuasive intervention on a mechanistic system  
D. Over-specification — mechanistic intervention on a persuadable system  

:::{dropdown} Answer
**C. Magical thinking.** The server has no goal-representation and cannot read dashboards as information. It is a Tier 1 mechanism. The fix is to change the code — a mechanistic intervention.
:::

---

**3.** Michael Levin's lab induced eye formation in tadpoles by applying bioelectric signals to flank tissue, without editing the genome. This demonstrates:

A. That genomes are irrelevant to development  
B. That cells are Tier 1 mechanisms requiring full specification  
C. That cells can act as Tier 2 reactive systems — responding to a goal-state signal and executing the program internally  
D. That tadpoles are Tier 4 persuadable systems that understood the request  

:::{dropdown} Answer
**C.** The cell is a reactive system with a built-in developmental program. The signal set a goal state; the cell ran its own algorithm to reach it. No specification of every step was needed. The genome was unchanged — the intervention was to the bioelectric environment, not the DNA.
:::

---

**4.** According to the persuadability spectrum, which intervention type has the *highest* leverage per unit of effort?

A. Replacing a physical component  
B. Editing the genome  
C. Retraining a model on new data  
D. Stating a goal clearly to a Tier 4 system  

:::{dropdown} Answer
**D.** Persuadable systems do the problem-solving themselves once given a destination. One clearly stated goal changes many downstream behaviors automatically — the system's own intelligence multiplies your input. This is why leverage rises as you move right on the spectrum.
:::

---

**5.** An AI agent keeps over-apologizing and escalating too quickly. After two months of data curation and fine-tuning, the problem is marginally better. The real issue turns out to be a single word in the system prompt. This is an example of:

A. Magical thinking  
B. Over-specification — Tier 1 intervention on a Tier 3–4 system  
C. Correct Tier 2 intervention  
D. Correct Tier 3 intervention  

:::{dropdown} Answer
**B. Over-specification.** The team went to the lowest (most expensive) rung of the AI intervention ladder — fine-tuning — when the problem was a prompt-level instruction issue. The model was capable of following a corrected goal; it didn't need its weights changed.
:::

---

**6.** Which of the following is the correct order of the persuadability spectrum, from least to most persuadable?

A. Dog → bacterium → thermostat → human  
B. Thermostat → bacterium → dog → human  
C. Human → dog → bacterium → thermostat  
D. Bacterium → thermostat → dog → human  

:::{dropdown} Answer
**B. Thermostat → bacterium → dog → human.** The thermostat is fully mechanistic — no sensorimotor loop, no goal-model. The bacterium has a sensorimotor loop but no memory. The dog has associative memory and can be trained. The human has a model of goals, future states, and other minds.
:::

---

**7.** Cancer, in the TAME framework, is best described as:

A. A Tier 1 mechanism that has mutated  
B. A Tier 4 cell that has become over-persuadable  
C. A formerly cooperative Tier 3 cell whose circle of caring has collapsed to self-only  
D. A new organism operating independently on the spectrum  

:::{dropdown} Answer
**C.** A cancer cell was once part of cooperative tissue — it maintained bioelectric contact with its neighbors and pursued tissue-level goals. When that connectivity breaks, its effective goal shrinks to immediate self-replication. Levin's research shows that restoring bioelectric connectivity can sometimes pull cancer cells back into cooperative behavior.
:::

---

**8.** The "9th-Grader Test" described in the chapter style brief refers to:

A. Testing whether an AI agent can pass a 9th-grade exam  
B. Whether a bright 14-year-old with no biology background can follow the explanation  
C. A formal benchmark for measuring intelligence tier  
D. A quiz at the end of each chapter  

:::{dropdown} Answer
**B.** The test is about clarity of explanation. If the idea requires prior biology knowledge to follow, the explanation isn't good enough yet. Genuine clarity is not the same as being dumbed down.
:::

---

**9.** Which diagnostic question, according to the four-step procedure in the chapter, would distinguish a Tier 3 system from a Tier 2 system?

A. Can it produce different outputs for the same input?  
B. Does it maintain state across interactions?  
C. Can it generalize from examples it hasn't seen?  
D. Can it represent and reason about goals?  

:::{dropdown} Answer
**C. Can it generalize from unseen examples?** Tier 2 reactive systems do not have persistent memory or associative learning — they cannot generalize. Tier 3 trainable systems can. The question separates the two tiers. (Question D would distinguish Tier 3 from Tier 4.)
:::

---

**10.** Giving an AI agent a retrieval system, a scratchpad, and the ability to call external APIs is an intervention at which rung of the AI intervention ladder?

A. Hardware — model swap  
B. Weights — fine-tuning  
C. Prompt — system instructions  
D. Tools and memory  

:::{dropdown} Answer
**D. Tools and memory.** Adding capabilities the agent can *use* — rather than changing what it knows or how it's instructed — is a Tier 3 intervention. It raises the system's effective tier by expanding what it can access and do. This is the right fix for long-horizon failures and knowledge gaps.
:::

---

## Short Answer

**SA-1.** A hospital wants nurses to follow a new hand-washing protocol consistently. One administrator proposes laminating a 12-step poster for every room. Another proposes explaining to nurses exactly why hand-washing at each moment reduces infection risk, and letting nurses decide when and how to do it. Using the persuadability spectrum, evaluate both proposals. Which is more likely to work in novel situations (like a new kind of equipment) the protocol didn't anticipate? Why?

:::{dropdown} Sample Answer
Nurses are Tier 4 persuadable systems. The 12-step poster is a Tier 1 intervention — it tries to specify every action in a rigid script. In familiar situations it may work. In novel situations (new equipment, unusual patient layout) it fails, because the new situation isn't on the poster. The nurse either improvises without guidance or freezes.

The second approach — explaining the *why* — is a Tier 4 intervention. It gives nurses a goal (reduce infection risk at the right moment) and trusts them to apply it. Because they understand the goal, they can generalize to situations the protocol never anticipated. Tier 4 intervention on a Tier 4 system produces adaptive behavior. That's the right match.
:::

---

**SA-2.** A researcher argues: "We should always try the shallowest (highest-rung) intervention first — prompting before fine-tuning, signaling before gene editing." Describe one situation where this order would be correct and one where it would waste time. What determines which situation you're in?

:::{dropdown} Sample Answer
The order is correct when the system's current tier is high enough to respond to shallow intervention. An LLM that follows instructions well just needs a clearer prompt. A cell that holds a developmental program just needs the right bioelectric signal. The system already has the competence to reach the goal — you just need to give it a better target.

The order wastes time when the system lacks the underlying capability. If a model has a fundamental knowledge gap — it simply doesn't know a domain — no amount of prompting fills that gap. You need fine-tuning or retrieval. If tissue lacks the gene sequence required for regeneration, a bioelectric signal can't conjure that program from nothing.

What determines which situation you're in: run the four diagnostic questions. Does the system have the capability already, but apply it poorly or to the wrong target? Shallow intervention. Does the system lack the capability at all? Deeper intervention first.
:::

---

**SA-3.** The chapter argues that over-specification — applying Tier 1 interventions to higher-tier systems — "removes the benefits of the system's own intelligence." Give a specific example (it can be biological, social, or in AI/software) and explain exactly what intelligence is lost and at what cost.

:::{dropdown} Sample Answer
Example: A manager who writes a 50-step script for customer service representatives and requires them to follow it verbatim. The reps are Tier 4 — they can model the customer's emotional state, anticipate questions, and adapt their tone. The script converts them into Tier 1: they read, the customer responds, they read the next line. 

Intelligence lost: the rep's ability to notice that a customer is frustrated before it escalates, to skip irrelevant steps, to offer a solution the script didn't anticipate, and to build rapport that makes the customer actually satisfied rather than technically processed.

Cost: customer satisfaction drops in exactly the situations that matter most — non-standard cases. These require adaptive intelligence, and the script has eliminated it. The manager is now doing all the cognitive work that 50 trained reps used to do — except the manager can't be on every call. The organization is slower, more brittle, and more expensive to run.
:::
