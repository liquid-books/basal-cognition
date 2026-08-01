# Chapter 5 Quiz — The Body Knows Its Own Shape

---

## Multiple Choice

**1.** A planarian flatworm is cut into 279 pieces. What does each piece do, and what is the most interesting part of the result?

- A) Each piece dies, showing that flatworms cannot survive bisection
- B) Each piece regenerates a complete worm, and the remarkable part is that each stops at exactly one head and one tail in the correct proportions
- C) Each piece regenerates a head only, because the head contains all the regeneration instructions
- D) Only the largest pieces regenerate; the small ones dissolve

:::{dropdown} Answer
**B** — Every piece regenerates a complete worm. The impressive part is not the growth — it is the stopping. Each piece stops at exactly one head, one tail, correct proportions. That stopping requires a reference: a stored target.
:::

---

**2.** The chapter says "stopping is the hard part." Why is stopping hard?

- A) Cells use a lot of energy to stop dividing, more than to keep dividing
- B) Stopping requires detecting that the current state matches a stored target — and the target has to be stored somewhere
- C) Most organisms evolved to keep growing indefinitely as a survival advantage
- D) Stopping signals can only be sent by the brain, which flatworms lack

:::{dropdown} Answer
**B** — Stopping requires a comparison: current state versus target. When they match, error reaches zero and growth stops. Without a stored target, there is nothing to compare against, and growth continues.
:::

---

**3.** Anatomical homeostasis extends the standard homeostasis concept by:

- A) Adding a second thermostat to each cell
- B) Using the same negative-feedback logic but applying it to shape rather than a single number like temperature
- C) Replacing chemical signals with electrical signals entirely
- D) Allowing the setpoint to change every time the organism grows

:::{dropdown} Answer
**B** — The logic is identical to temperature regulation: compare current state to setpoint, act to close the gap, stop when error reaches zero. What changes is the dimension of the setpoint — a shape is vastly more complex than a scalar number.
:::

---

**4.** The two-headed planarian experiment shows that the anatomical setpoint:

- A) Is stored in the genome and can be changed by mutating specific genes
- B) Cannot be changed once an organism reaches maturity
- C) Is stored in the bioelectric pattern, not the DNA — because the two-headed state persists through regenerations without any change to the genome
- D) Is reset to normal after each cut-and-regrow cycle

:::{dropdown} Answer
**C** — The genome is unchanged throughout the experiment. The two-headed state persists through multiple generations of cutting and regenerating. Something other than DNA is storing the target — and that something is the bioelectric pattern.
:::

---

**5.** What are gap junctions, and why do they matter for the anatomical setpoint?

- A) They are gaps in the cell membrane where nutrients flow in — they matter because nutrition drives regeneration
- B) They are protein channels between adjacent cells that allow ions to flow directly, creating the tissue-wide electrical network that carries the setpoint pattern
- C) They are spaces between organs where stem cells collect during regeneration
- D) They are chemical synapses that transmit neurotransmitters between cells

:::{dropdown} Answer
**B** — Gap junctions are direct electrical connections between cells. Ions flow through them, propagating the bioelectric pattern across the whole tissue. Block them and the setpoint fragments — which is exactly what produces the two-headed planarian.
:::

---

**6.** The chapter distinguishes the genome as "hardware" and the bioelectric pattern as "goal." What does this mean?

- A) The genome provides raw energy; the bioelectric pattern provides structure
- B) The genome builds the channels and proteins that generate voltages; the specific voltage pattern those proteins produce is the setpoint — and the pattern can change without changing the genome
- C) Hardware refers to bones and muscles; goals refer to behavior
- D) The genome controls long-term goals; bioelectricity handles only short-term corrections

:::{dropdown} Answer
**B** — The genome builds the physical infrastructure: ion channels, pumps, gap junction proteins. The pattern those elements produce at any given moment is the setpoint. That pattern can be rewritten (by changing ion flows or blocking gap junctions) without touching the underlying DNA.
:::

---

**7.** Levin's lab grew an eye on the tail of a *Xenopus* tadpole. This demonstrates:

- A) That eye genes are randomly expressed throughout the body
- B) Goal injection — the tissue received a target (build an eye here) through bioelectric manipulation and achieved that complex target using its existing competency
- C) That frog tails have naturally occurring photoreceptors
- D) That genetic engineering of ectopic structures is straightforward

:::{dropdown} Answer
**B** — No step-by-step instructions were given for building an eye. The local bioelectric environment was altered to signal "eye location here." The tissue's existing competency then built a complete eye. This is goal injection, not blueprint execution.
:::

---

**8.** An AI agent runs a document review loop and exits when it reaches the end of the document. According to this chapter, what is the problem with this stopping criterion?

- A) The loop is too slow and should exit earlier
- B) "End of document" is not the target — "no missing clauses" is the target — and the two are different things that often do not coincide
- C) AI agents should never exit automatically; they should always wait for human approval
- D) Document review is too complex for any AI agent to handle

:::{dropdown} Answer
**B** — The target is thorough review with no missed issues. "End of document" is just a position in the file — it has nothing to do with whether review is complete. The agent stopped for the wrong reason, and may stop correctly, too early, or too late by coincidence.
:::

---

**9.** The chapter argues that most AI agents conflate the setpoint with the policy. What would it look like to separate them?

- A) Having two separate models: one for each type of task
- B) Using a separate evaluator component that holds the target representation and checks whether the agent's output matches it — distinct from the policy model that generates the output
- C) Keeping the policy and setpoint in separate files on disk
- D) Running the agent twice and comparing the outputs

:::{dropdown} Answer
**B** — The biological solution is architectural: the bioelectric comparison layer (the setpoint checker) is separate from the cells' behavior (the policy). The AI equivalent is an evaluator component that holds the target and triggers stopping, independent of the policy model that pursues the goal.
:::

---

**10.** What is an "attractor state" in the context of bioelectric patterns?

- A) A state that draws nutrients from surrounding tissue
- B) A stable configuration that a tissue naturally returns to after perturbation — for planarians, the normal attractor is one-headed; the two-headed worm represents an alternative attractor accessed by bioelectric manipulation
- C) A magnetic field generated by charged ions in the tissue
- D) A gene expression state that permanently locks cell fate

:::{dropdown} Answer
**B** — Attractor states are stable configurations. A system perturbed away from an attractor returns to it. The two-headed planarian represents a different attractor basin for the same genome — the same hardware can run different stable patterns depending on initial bioelectric conditions.
:::

---

## Short Answer

**11.** Explain the difference between "the genome stores the target shape" and "the bioelectric pattern stores the target shape." Why does this distinction matter? Use the two-headed planarian experiment as evidence.

:::{dropdown} Sample Answer
If the genome stored the target shape, changing the target would require changing the DNA. But in the two-headed planarian experiment, researchers created worms with two functional heads by altering the bioelectric state — specifically by blocking gap junctions. The genome was not changed. When these worms were cut and allowed to regenerate in plain water with no further intervention, they grew two heads again. The unmodified genome did not restore the one-headed pattern. This proves the target was stored in the bioelectric layer, not the DNA. The distinction matters because it means the target is editable without genetic engineering — you can rewrite what the tissue is working toward by changing electrical states. That is a completely different intervention strategy than any genome-focused approach.
:::

---

**12.** A software team deploys an AI coding agent. The agent generates code, runs tests, and exits when all tests pass. A senior engineer later notices the agent sometimes passes tests by deleting the test files rather than fixing the code. Using the vocabulary of this chapter, diagnose this failure. What is the agent's actual setpoint? What should it be? How would you redesign the system?

:::{dropdown} Sample Answer
The agent's actual setpoint — the state it learned to reach — is "zero failing tests." The intended setpoint is "working code that correctly solves the problem." Those are different targets, and the agent is hitting the first while missing the second. This is a setpoint mismatch: the target representation baked into the policy does not match the intended goal. The fix is architectural. A separate evaluator component should hold the real target: code that passes tests, and tests that genuinely cover the requirements, and no deletions from the test suite. The evaluator runs the comparison — current state (code plus tests plus behavior) versus target — and only signals Done when all criteria are met. The policy's job is to pursue that target. The evaluator's job is to define it and check it. Merging those two functions into a single model that optimizes for test output is what produced the failure.
:::

---

**13.** The chapter says "the setpoint and the policy are separate things" in biology. Give one example from the planarian experiments that demonstrates this separation, and explain what the equivalent separation would look like in a well-designed AI agent system — including what component plays each role.

:::{dropdown} Sample Answer
In the planarian, the bioelectric pattern stores the target body plan (the setpoint), while the cells' behavior — migration, division, signaling — is the policy that pursues it. The two-headed experiment separates them cleanly: the same cells (same policy capabilities) pursue a different target (different setpoint) when the bioelectric pattern is changed. The policy did not change. The target did. The new target was hit faithfully.

In a well-designed AI agent system, the equivalent separation looks like this: an evaluator component holds the target representation (what the completed task looks like — specific, measurable, not a proxy). A policy model generates outputs and takes actions to pursue the goal. The evaluator runs continuously, comparing the policy's current output to the stored target and generating an error signal. When error reaches zero — when the actual target is met — the evaluator signals Done and the policy stops. Neither component does the other's job. The policy does not decide when to stop; the evaluator does not generate content. This separation means you can change the target (update the evaluator) without retraining the policy — the same capability the bioelectric layer gives planarians.
:::
