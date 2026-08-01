# Chapter 6 Quiz — Glue

---

## Multiple Choice

**1.** A gap junction is best described as:

- A) A chemical signal released by one cell to be received by a neighboring cell
- B) A direct protein channel connecting the cytoplasms of two adjacent cells
- C) A type of hormone that synchronizes organ function
- D) A physical gap between cells that prevents signal transfer

:::{dropdown} Answer
**B** — A gap junction is a direct tunnel between cytoplasms. Nothing passes through the extracellular space. This is what makes the coupling faster and more direct than chemical signaling.
:::

---

**2.** Which of the following best passes through a gap junction?

- A) Large proteins and organelles
- B) DNA and RNA strands
- C) Ions and small molecules like cyclic AMP
- D) Viruses and bacteria

:::{dropdown} Answer
**C** — Gap junctions are selective by size. Ions (sodium, potassium, calcium) and small signaling molecules pass through. Organelles, DNA, and large proteins do not.
:::

---

**3.** According to the chapter, what is the biological definition of individuality?

- A) Having a distinct cell membrane and nucleus
- B) The scope of shared information — agents that pool their state into one non-attributable memory form one individual
- C) Being able to reproduce independently
- D) Having a brain or central nervous system

:::{dropdown} Answer
**B** — Individuality is defined by shared information, not by membranes or brains. A collection of cells that continuously pool their state such that no one cell can attribute any given signal forms one individual.
:::

---

**4.** Why is state shared through a gap junction called "non-attributable"?

- A) The signal is too fast to measure
- B) Once a signal mixes in the shared pool, neither cell can identify whose signal it originally was
- C) Gap junctions remove all chemical markers from molecules as they pass through
- D) The receiving cell immediately destroys the signal

:::{dropdown} Answer
**B** — Non-attributable means there is no provenance tag. Once an ion passes from cell A to cell B, the state of both cells reflects the signal but neither can claim ownership of it. The shared pool belongs to both.
:::

---

**5.** Toshiyuki Nakagaki's 2000 experiment with Physarum polycephalum demonstrated:

- A) That slime mold has neurons that direct its movement
- B) That slime mold can solve a maze through coupling dynamics across its cytoplasmic network
- C) That gap junctions in slime mold are identical to those in vertebrates
- D) That slime mold learns through classical conditioning

:::{dropdown} Answer
**B** — Nakagaki showed that Physarum solves mazes by growing toward food and retracting from dead ends. No neuron is required. The decision emerges from flow dynamics across the whole network — a function of coupling, not central control.
:::

---

**6.** A lethal cardiac arrhythmia is an example of:

- A) Too little coupling in heart muscle cells
- B) Over-coupling — a corrupted electrical signal propagating perfectly with no local damping
- C) Gap junction failure leading to cell isolation
- D) Insufficient ion flow through connexon channels

:::{dropdown} Answer
**B** — Lethal arrhythmia is a pathology of over-coupling. The signal spreads perfectly because coupling is tight, with no local independence to absorb the error. The whole organ locks into a dysfunctional pattern.
:::

---

**7.** In the ant colony, bee colony, slime mold, heart muscle bandwidth ladder, which system has the tightest individuality?

- A) Bee colony
- B) Ant colony
- C) Physarum polycephalum
- D) Heart muscle patch

:::{dropdown} Answer
**D** — Heart muscle cells are coupled by gap junctions and share electrical state at millisecond timescales. This is the tightest coupling on the ladder and produces the strongest individuality — the patch acts as one.
:::

---

**8.** Three AI agents working on a shared task each read from and write to a shared scratchpad. According to the chapter, this configuration is analogous to:

- A) An ant colony communicating through pheromones
- B) An organism whose cells are directly coupled by gap junctions
- C) Three completely isolated individual organisms
- D) A single cell running all its processes internally

:::{dropdown} Answer
**B** — Shared scratchpad coupling is gap-junction-style. State is pooled, becomes non-attributable over time, and agents make decisions based on the full shared state. The team behaves as one organism.
:::

---

**9.** An AI team's shared scratchpad is cleared mid-task. According to the chapter's logic, what happens to the team?

- A) Nothing — each agent retains its individual memory and continues
- B) The orchestrator compensates by broadcasting all previous decisions
- C) One team effectively becomes many — agents lose shared state and revert to isolated operation
- D) The agents automatically rebuild the scratchpad from their tool call logs

:::{dropdown} Answer
**C** — Cut the glue and one team becomes many. The biological prediction maps directly: sever the shared channel and the agents lose the collective state that made them act as one. They fragment into isolated, uncoordinated operation.
:::

---

**10.** According to the chapter, the correct approach to coupling level in AI agent design is:

- A) Always maximize coupling for maximum coherence
- B) Always minimize coupling for maximum auditability
- C) Match coupling level to task interdependence and agent reliability — neither extreme is universally correct
- D) Use full state fusion for all multi-agent systems to ensure consistency

:::{dropdown} Answer
**C** — Coupling level is contextual. High-interdependence tasks need shared state. High-reliability agents tolerate tighter coupling. The biology makes the same prediction: coupling optimum depends on the noise environment and the coherence required.
:::

---

## Short Answer

**11.** A colleague argues: "Cells are just individual units — there's no such thing as a biological self above the single cell level. Each cell pursues its own goals." Using the gap junction evidence from this chapter, explain why this view is incomplete. What specific evidence would you cite, and what does it demonstrate?

:::{dropdown} Sample Answer
The gap junction evidence directly challenges this view. A gap junction creates a direct channel between cytoplasms so that ions and small molecules — including voltage changes — pass from cell to cell without entering extracellular space. Once a signal has passed through, neither cell can identify whose signal it originally was. The state is shared and non-attributable.

This matters because if the view "each cell pursues its own goals" were complete, we would expect coupled cells to maintain separate internal records. But in tightly coupled tissues like heart muscle, a voltage change propagates across the entire patch in milliseconds — every cell's internal state reflects every other cell's signal. There is no individual record. There is one pool.

The planarian manipulation experiments extend this: altering gap junction coupling before severing a worm changes what it regenerates into. Same genome. Different coupling. Different organism. If the individual were just the sum of its individual cells, coupling changes should not affect the outcome of regeneration. They do. The boundary of the self is a function of the channel, not just the cell membrane.
:::

---

**12.** You are building an AI system to help a hospital manage patient triage, staffing, and supply logistics simultaneously. Three sub-agents handle each domain. Describe the coupling architecture you would choose and why — specifically addressing: (a) whether you use a shared scratchpad, (b) what you do about hallucination propagation, and (c) what happens when the channel fails.

:::{dropdown} Sample Answer
(a) A shared scratchpad is appropriate here because the domains are interdependent. A triage decision affects staffing demand, which affects supply usage. If the triage agent does not know what the staffing agent has already committed to, it may make recommendations that are physically impossible. Shared context allows cross-domain correction — the staffing agent can flag that it has no available nurses for a proposed triage escalation.

(b) Hallucination propagation is a real danger. If the triage agent writes an incorrect patient count to the shared scratchpad, the staffing and supply agents will plan around a false reality. The solution is a verification layer between write and read: a lightweight validation agent that checks critical numerical claims against source data before they propagate. This is the biological equivalent of redundancy — requiring multiple confirming signals before the state updates. For particularly high-stakes entries (patient count, critical supplies), require two independent agent confirmations before the shared pool accepts the entry.

(c) When the shared channel fails — context cleared, database unreachable — the three agents fragment into isolated operation. This should be designed for explicitly: periodic snapshots of the shared state into a persistent store, so that agents can reload the last-known shared state after a failure. The system should also have a degraded-mode protocol: each agent falls back to its local domain with conservative defaults, minimizing cross-domain decisions until the shared channel is restored. Know which cuts are survivable. A context reset in the middle of a staffing shift is a survivable cut if each agent has a recent snapshot. A reset at the start of a mass casualty event without snapshots is not.
:::

---

**13.** The chapter says "the glue is not a metaphor." Explain what this means in two parts: (a) in what sense is the biological glue literally physical, and (b) in what sense is the engineering glue in AI agent systems also literal rather than metaphorical?

:::{dropdown} Sample Answer
(a) The biological glue is a protein structure — connexin proteins assemble into connexons, two connexons dock to form a gap junction channel, and ions physically travel from cytoplasm to cytoplasm through that channel. This is not a description of a tendency or a behavioral similarity. It is a nanoscale pipe made of real molecules. You can visualize it under electron microscopy. You can block it with pharmacological agents and measure the behavioral change. You can splice in mutant connexins and alter selectivity. The glue is physical in the same sense that a blood vessel is physical.

(b) The engineering glue is also literal. When three agents share a scratchpad, the shared state exists as actual data in actual memory — a database row, a section of a context window, a key in a shared dictionary. It is a real data structure with a real address. When you clear the scratchpad, you are making a physical change to the system — deleting data from memory. When you add a verification layer, you are adding real computational steps. The metaphor comparison (cells are "like" agents) is a conceptual bridge. But the glue itself — the channel through which state is shared — is physically real in both cases. That is why the failure modes map so precisely: they are both descriptions of what happens when a real physical channel for shared state is blocked, degraded, or severed.
:::
