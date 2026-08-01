# Chapter 4 Quiz — Smart Things Made of Smart Things

---

## Multiple Choice

**1.** A polyploid newt has cells that are much larger than normal. When it builds a kidney tubule, what happens?

- A) The tubule diameter grows proportionally larger
- B) The tubule diameter stays the same; fewer cells are used
- C) The tubule fails to form because the cells are too large
- D) The genome rewrites itself to account for larger cells

:::{dropdown} Answer
**B** — The tubule stays the same diameter. Fewer, larger cells wall it off. The genome specifies the target shape, not the cell count.
:::

---

**2.** Which of these best describes what the newt experiment rules out?

- A) The idea that genes control development
- B) The idea that cells communicate chemically
- C) The idea that the genome is a position-by-position blueprint
- D) The idea that polyploidy can occur in salamanders

:::{dropdown} Answer
**C** — A blueprint specifies positions. If cells double in size, a blueprint fails. The newt's tubule succeeds, which rules out the blueprint reading.
:::

---

**3.** In multi-scale competency architecture, what does a higher level send *down* to a lower level?

- A) Step-by-step instructions for every action
- B) Outcome specification and constraints
- C) Raw sensor data about the environment
- D) A complete map of available resources

:::{dropdown} Answer
**B** — The signal going down is sparse: what done looks like, and what is off-limits. How to get there is left to the lower level.
:::

---

**4.** What does a lower level send *up* to a higher level in MCA?

- A) A full log of every intermediate step
- B) Requests for permission at each decision point
- C) Error magnitude and current state
- D) The exact method it chose for each sub-task

:::{dropdown} Answer
**C** — Status and error signals flow up. The higher level does not receive a blow-by-blow account — it receives enough to know whether the goal is being met.
:::

---

**5.** The term "target morphology" refers to:

- A) The exact sequence of cell divisions during development
- B) The destination shape a structure is working toward, achievable by multiple paths
- C) The gene sequence that controls body plan
- D) The maximum size a tissue can reach before it stops growing

:::{dropdown} Answer
**B** — Target morphology is a destination, not a route. It can be reached by different cell counts, sizes, and paths — as the newt demonstrates.
:::

---

**6.** A cancer cell is best described in MCA terms as:

- A) A cell that has acquired too many extra genes
- B) A cell that has become hyper-responsive to tissue-level goal signals
- C) A cell that has de-integrated from the tissue-level goal and runs its own agenda
- D) A cell that has lost the ability to divide

:::{dropdown} Answer
**C** — Cancer is de-integration. The cell's local goals are intact. What breaks is its responsiveness to the tissue-level goal that used to constrain it.
:::

---

**7.** Which of the following best demonstrates the "robustness dividend" of MCA?

- A) A car engine that runs smoothly on the correct fuel
- B) A flatworm that regenerates a complete organism from any of 279 cut pieces
- C) A computer program that produces the same output every time it runs
- D) A muscle that contracts when a nerve fires

:::{dropdown} Answer
**B** — The flatworm pieces were not designed to be standalone organisms. They become organisms because each fragment still contains cells pursuing the target shape. That is goal-directed robustness, not script execution.
:::

---

**8.** An AI engineer gives a sub-agent a 40-step procedure instead of a goal. The API the agent relies on changes its output format at step 14. What MCA-informed prediction does the chapter make?

- A) The agent will adapt and find a new path to the outcome
- B) The agent will halt because it has no outcome to fall back on
- C) The agent will request human intervention and pause
- D) The agent will skip step 14 and continue from step 15

:::{dropdown} Answer
**B** — A procedure-following agent has no goal. When the procedure breaks, it stops. This is the over-specification failure mode MCA predicts.
:::

---

**9.** The "9th-grader test" mentioned in this book's style guide asks whether:

- A) The content includes enough technical vocabulary for advanced students
- B) A bright 14-year-old with no biology background could follow the argument
- C) The chapter has at least nine separate examples
- D) All claims are supported by peer-reviewed citations

:::{dropdown} Answer
**B** — Genuinely clear is different from dumbed down. The test checks whether concepts land without background knowledge, not whether vocabulary is simplified.
:::

---

**10.** According to the chapter, the three things every MCA level needs — and that every AI sub-agent needs an equivalent of — are:

- A) Memory, speed, and a user interface
- B) A setpoint, an error signal, and a shared channel
- C) A supervisor, a subordinate, and a communication API
- D) Goal clarity, resource access, and a feedback form

:::{dropdown} Answer
**B** — Setpoint (what done looks like), error signal (how far from done right now), and shared channel (how levels stay coordinated). If you cannot define these for a sub-agent, the design is incomplete.
:::

---

## Short Answer

**11.** Explain the newt kidney tubule experiment in three to five sentences using only plain language — no jargon. Your explanation should make it clear why this result is surprising and what it rules out.

:::{dropdown} Sample Answer
A newt builds the same kidney tube no matter how big its cells are. Larger-celled newts use fewer cells to build the same-diameter tube. In the extreme case, one giant cell wraps around itself to form the tube alone. Nothing in the newt's genes changed between normal and giant-celled versions. This is surprising because if the genome were a blueprint specifying exactly where each cell goes, a change in cell size would break the plan — but it does not.
:::

---

**12.** You are designing an AI agent to monitor a company's social media mentions and flag anything that needs a response. Write two versions of the agent's goal specification: one over-specified (procedure-style) and one outcome-specified. Then explain, using MCA vocabulary, which version is more likely to fail when the company launches a new product and gets ten times the usual mention volume.

:::{dropdown} Sample Answer
**Over-specified:** "Every hour, query the mentions API. Filter mentions with fewer than ten words. Assign a priority score using this formula. If the score is above 7, add it to the spreadsheet. Email the social media manager with the top five items. Repeat."

**Outcome-specified:** "Keep the social media team aware of any mention that could require a response within 24 hours. Flag anything that looks urgent or negative. Success means no important mention goes unnoticed."

The over-specified version will break under ten times the volume because it was built for a specific load, a specific formula, and a specific threshold that was calibrated at normal volume. The agent has a procedure, not a goal. When the procedure no longer fits the conditions — because the threshold is now wrong, or the API returns differently structured data — it stops producing useful output. The outcome-specified version has a setpoint (no important mention goes unnoticed) and an implicit error signal (something important slipped through). It can adapt its internal strategy as volume increases because the goal stays constant even when the environment changes.
:::

---

**13.** The chapter says "competency is doing real work in this chapter — but it is also labeling mysteries." What does this mean? Give an example of where the chapter uses "competency" or "knows" to describe something we genuinely understand at a mechanistic level, and an example of where it is still a label on something we do not fully understand.

:::{dropdown} Sample Answer
When we say a kidney cell "knows" its setpoint for osmolarity, we can point to real mechanisms: ion channel gradients, hormone receptors, and feedback loops that have been measured and mapped. The cell behaves as if it knows the target because it has physical machinery that detects deviation from it and corrects it. That is real mechanism, not metaphor.

When we say a developing tissue "knows" the target morphology of a complete organ — meaning it can work toward a shape even when the usual number of cells is not available — we are describing a real behavior (the behavior exists, the newt experiment proves it), but we do not have a complete mechanistic account of where that target is stored or how cells read it. Bioelectric fields are a candidate channel; gap junctions are another; gene regulatory networks are another. The behavior is established. The full physical substrate of the "knowing" is not. Calling it competency is accurate as a description and honest as a placeholder for what we have not yet fully explained.
:::
