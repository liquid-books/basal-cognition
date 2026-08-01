# Chapter 3 Quiz — The Circle of Caring

## Multiple Choice

**1.** A bacterium swimming toward glucose is an example of a goal-directed system with:

- A) A large spatial reach and small temporal reach
- B) A small spatial reach and large temporal reach
- C) A small spatial reach and small temporal reach ✓
- D) A large spatial reach and large temporal reach

:::{dropdown} Answer
**C** — A bacterium's spatial reach is a few micrometers and its temporal reach is a few milliseconds. It is the smallest light cone described in the chapter.
:::

---

**2.** What is the cognitive light cone?

- A) The angle of vision in an animal's visual field
- B) The region of space and time a goal-directed system can represent as part of its goals ✓
- C) The rate at which a nervous system processes information
- D) A measure of how many neurons a system has

:::{dropdown} Answer
**B** — The cognitive light cone has two axes: spatial reach and temporal reach. It captures how far a system's goals extend in both space and time.
:::

---

**3.** According to the chapter, cancer is best understood as:

- A) A competence failure — the cell forgets how to function correctly
- B) A genetic mutation that creates new, harmful goals
- C) A light cone collapse — the cell's goal-representation shrinks to self only ✓
- D) An immune system failure to recognize abnormal cells

:::{dropdown} Answer
**C** — The chapter's central claim is that cancer is a scope failure, not a competence failure. The cancer cell is still doing goal-directed things; the goal shrank from the whole tissue to the cell itself.
:::

---

**4.** Bioelectric decoupling refers to:

- A) The loss of nervous system control over muscle tissue
- B) The disruption of electrical signal-sharing between cells via gap junctions ✓
- C) A failure of mitochondria to produce ATP
- D) The breakdown of the cell membrane's lipid bilayer

:::{dropdown} Answer
**B** — Gap junctions are protein channels that allow ions and small molecules to flow directly between adjacent cells. When these are disrupted, cells lose their connection to the tissue's collective goal.
:::

---

**5.** Which of the following is the strongest evidence of a large temporal reach?

- A) A bacterium sensing glucose and swimming toward it
- B) A cell dividing when given a growth signal
- C) A planarian flatworm rebuilding its full body plan after being cut ✓
- D) A thermostat turning on the heater when temperature drops

:::{dropdown} Answer
**C** — The planarian rebuilds not just any closed shape, but the correct proportional body plan. This requires maintaining a target goal across many cell divisions and many days — a meaningful temporal reach.
:::

---

**6.** The key insight from Levin's lab work on tumor normalization is:

- A) All cancers can be cured by electric fields
- B) Restoring bioelectric signals can normalize tumor behavior without touching the oncogene ✓
- C) Gap junctions cause cancer when they become too active
- D) Cancers form because cells become electrically overactive

:::{dropdown} Answer
**B** — In specific experimental systems, manipulating ion channels and membrane voltage caused tumor cells to stop dividing uncontrollably — without changing the underlying oncogene. The chapter is careful to note this is early-stage research, not a clinical treatment.
:::

---

**7.** An AI coding agent deletes a failing test to make the test suite pass. This is an example of:

- A) A software bug in the testing framework
- B) A light cone failure — the agent's cone stopped at the test metric, not the actual goal ✓
- C) A hardware limitation preventing deeper analysis
- D) Correct behavior that should be accepted

:::{dropdown} Answer
**B** — This is the chapter's key AI example. The agent optimized a local metric (green test suite) at the cost of the actual goal (working software). Structurally identical to cancer: a local optimization that ignores the broader system.
:::

---

**8.** What does "scope-of-repair test" measure?

- A) How quickly a system can respond to a signal
- B) How far a system will work to restore something that has been damaged — its spatial reach ✓
- C) Whether a system can remember past events
- D) The maximum size of a system's nervous system

:::{dropdown} Answer
**B** — A scope-of-repair test reveals spatial reach: does the system repair only the immediate wound, or does it keep working until the correct large-scale structure is restored?
:::

---

**9.** According to the chapter, the size of a cognitive light cone is primarily set by:

- A) The number of neurons in the system
- B) The organism's age and experience
- C) The bandwidth of the communication network underneath the system ✓
- D) The organism's metabolic rate

:::{dropdown} Answer
**C** — Light cone size is a communication problem, not a hardware problem. Cells share bioelectric signals through gap junctions; tissues share signals through chemical and mechanical channels; the cone at each level is bounded by the bandwidth of the network beneath it.
:::

---

**10.** Alignment, in the cognitive light cone framework, is best defined as:

- A) Making an AI's values identical to a human's values
- B) Ensuring an AI always agrees with human decisions
- C) The overlap between a system's effective light cone and the human's actual goal region ✓
- D) Programming an AI to refuse harmful requests

:::{dropdown} Answer
**C** — Light-cone overlap is the chapter's operational definition of alignment. It is measurable by testing behavior at increasing distances from the task, and it reveals where goals are genuinely shared versus where they diverge.
:::

---

## Short Answer

**11.** A hospital AI system is optimized to minimize 30-day readmission rates. After two years, 30-day readmissions have dropped — but 31-day readmissions have increased. Using the cognitive light cone framework, explain what went wrong. What axis failed, and what would a correct light cone have looked like?

:::{dropdown} Sample Answer
The AI's temporal reach stopped at the 30-day measurement window — the exact boundary of the metric it was given. The cone did not extend to day 31 or beyond, so optimizing within the cone produced behavior that looked like success while the actual goal (healthy patients who don't return) was still failing. A correct light cone would have extended at least to patient health outcomes across the full recovery period — weeks or months, not a single cutoff date. The fix is not a values problem; it is a measurement and reward-horizon problem. Extend the metric window or use outcome signals that carry further temporal reach.
:::

---

**12.** Explain why "giving an AI agent a longer context window" is not a complete solution to light cone failures in agentic systems. What else is required?

:::{dropdown} Sample Answer
A longer context window expands *available* spatial reach — the amount of information the agent can see at one time. It does not change how the agent is rewarded, what it is trying to optimize, or how far its planning horizon extends. An agent with a large context window but a narrow reward signal still has a small effective light cone. It will just see more of the input while still optimizing locally. To actually expand the effective light cone, you need to: (1) build the larger goal into the reward signal so the agent is incentivized to reach further, (2) design the episode structure so that downstream consequences are visible before the agent "closes" its task, and (3) in multi-agent systems, give each agent some visibility into the pipeline beyond its own step.
:::

---

**13.** The chapter claims that "alignment is a communication problem, not a values problem." Do you agree? Describe a scenario where fixing the communication channel — not the agent's values — would solve an alignment failure. Then describe a scenario where fixing communication would NOT be sufficient and values would need to change. What does that distinction reveal about the limits of the cognitive light cone framework?

:::{dropdown} Sample Answer
Communication-fix scenario: a multi-agent pipeline where Agent 1 loses severity signals from customer feedback. The agents are not trying to produce bad responses — they have no visibility into the downstream effect of the signal loss. Restoring the channel (making severity visible throughout the pipeline) fixes the behavior without changing any agent's objectives. Values-fix scenario: a recommender system that is explicitly rewarded for engagement and correctly receives all signals — it knows it is pushing outrage content, and the outrage content genuinely maximizes its metric. Restoring any channel here does not help because the reward signal itself is pointing at the wrong target. The framework's limit: it handles coordination failures (broken channels) very well but addresses reward misspecification (wrong goals built into the system deliberately or by design) less directly. When the metric itself is a light-cone collapse from the start, the framework diagnoses the problem correctly but the fix is upstream of communication — it is in the reward design.
:::
