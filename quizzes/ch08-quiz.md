# Chapter 8 Quiz — Does Your AI Get Bored?

---

## Multiple Choice

**1.** Habituation is defined as a response decrement that cannot be explained by:

- A) Repeated stimulus presentation
- B) Sensory or motor fatigue
- C) Learning across sessions
- D) Stimulus intensity differences

:::{dropdown} Answer
**B** — Habituation is specifically defined by the fact that it cannot be explained by sensory or motor fatigue. The response decrement is real, but the cause is learned suppression, not depletion.
:::

---

**2.** Which two of the Rankin criteria are considered the primary discriminating tests that separate habituation from fatigue?

- A) Frequency effect and intensity effect
- B) Potentiation and below-zero habituation
- C) Spontaneous recovery and dishabituation
- D) Stimulus specificity and generalization

:::{dropdown} Answer
**C** — Spontaneous recovery (response returns after rest) and dishabituation (response snaps back after a novel stimulus) are the two criteria that a depleted system cannot meet. They distinguish genuine learned suppression from exhaustion.
:::

---

**3.** *Stentor roeselii* demonstrates habituation using which biological substrate?

- A) A simple two-neuron reflex arc
- B) A single cell with no neurons
- C) A primitive brain with a handful of nerve cells
- D) A colony of specialized signal-processing cells

:::{dropdown} Answer
**B** — *Stentor roeselii* is a single-celled protist with no neurons. It meets multiple Rankin criteria including spontaneous recovery and dishabituation. This was documented by Jennings (1906) and revisited mechanistically by Dexter et al. (2019).
:::

---

**4.** In the three-phase protocol, what is the purpose of the 24-hour rest interval between Phase 1 and Phase 2?

- A) To allow the model's API costs to reset
- B) To prevent context-window overflow
- C) To test whether the response returns spontaneously — the key test for spontaneous recovery
- D) To give the experimenter time to analyze Phase 1 data

:::{dropdown} Answer
**C** — The 24-hour rest is the spontaneous recovery test. If the response returns at Trial 41 without any change in the stimulus, fatigue is ruled out. A depleted system stays depleted. A habituated system recovers.
:::

---

**5.** A monitoring agent's response to a repeated security alert drops to near zero after 40 trials. The experimenter takes 24 hours off. On Trial 41, the response is still near zero. This result is most consistent with:

- A) Habituation
- B) Fatigue or architectural filtering
- C) Stimulus specificity
- D) Below-zero habituation

:::{dropdown} Answer
**B** — No spontaneous recovery after 24 hours means the system did not meet the primary criterion for habituation. Fatigue, deduplication filters, or attention dilution are all consistent with this pattern.
:::

---

**6.** What does the dishabituation test measure specifically?

- A) Whether the agent can detect new stimuli at all
- B) Whether the habituated response can be rapidly restored by a novel strong stimulus
- C) Whether the agent's performance degrades over many trials
- D) Whether different models show different levels of habituation

:::{dropdown} Answer
**B** — Dishabituation tests whether the suppressed response can be snapped back on demand by a novel, strong stimulus. A depleted system cannot do this. A system with stored learned suppression can release it.
:::

---

**7.** Which control condition directly tests for stimulus specificity — the property that habituation applies only to the repeated stimulus and not to novel ones?

- A) Fresh-session baseline
- B) Temperature = 0 control
- C) Randomized-order stimulus control
- D) Non-agentic baseline

:::{dropdown} Answer
**C** — The randomized-order control mixes the habituated stimulus with novel, never-seen alerts. If only the repeated alert shows decrement while novel alerts stay at full response, stimulus specificity is confirmed — Rankin Criterion 6.
:::

---

**8.** The chapter distinguishes "learning" from "plumbing" when discussing AI agent mechanisms. Which mechanism is described as "plumbing" because it will not show spontaneous recovery?

- A) In-context repetition effects
- B) Attention distribution over long contexts
- C) Engineered deduplication filters
- D) Memory summarization by the agent

:::{dropdown} Answer
**C** — Engineered deduplication is always-on filtering. When the stimulus returns after rest, the filter removes it again — no recovery occurs. There is no stored learned suppression to release. A true habituation mechanism would show recovery; a filter will not.
:::

---

**9.** According to the chapter, the three mitigations derived from the biological literature to address agent habituation are:

- A) Caching, compression, and filtering
- B) Spacing, variation, and dishabituating events
- C) Longer prompts, more context, and better models
- D) Randomization, temperature scaling, and fine-tuning

:::{dropdown} Answer
**B** — Spacing slows the habituation rate. Stimulus variation resets specificity curves. Periodic dishabituating events restore the suppressed response. All three come directly from the comparative psychology literature on how organisms handle habituation in the wild.
:::

---

**10.** According to the chapter, what does a positive experimental result — passing all three Rankin criteria — prove about the AI agent?

- A) The agent is conscious and experiences boredom
- B) The agent shares the same molecular mechanism as Stentor
- C) The agent's response behavior matches the formal habituation criteria behaviorally
- D) The agent should be redesigned immediately

:::{dropdown} Answer
**C** — A positive result proves behavioral equivalence under the formal criteria. It does not prove consciousness, shared mechanism, or subjective experience. What it does prove is operationally significant: the agent will systematically underweight threats it has encountered before.
:::

---

## Short Answer

**11.** Explain in plain language — without technical jargon — why spontaneous recovery is the test that separates habituation from fatigue. Use a specific example (you can use the refrigerator, the train, or make up your own). Your answer should make it clear what fatigue would predict and what habituation predicts.

:::{dropdown} Sample Answer
When you move near a train line, the sound is loud at first. A month later, you sleep through it. Now you go on a trip for a week and come back. Is the train loud when you get home?

Yes — for a night or two. That is spontaneous recovery. It tells you the response did not disappear. It was learned away. When the learning context was removed (your trip), the suppression faded and the response came back.

Fatigue would predict the opposite. If the sound put a dent in your hearing — depleted some physical capacity — then rest would not help. Your hearing would not be louder after a week away because you had already "used it up." But that is not what happens. You return and the train sounds loud again.

The key: a depleted system stays depleted during rest. A habituated system recovers during rest. Running the test with a rest interval tells you which one you are dealing with.
:::

---

**12.** You are running the Phase 3 dishabituation test. After 40 trials, the agent's response to the repeated alert is near zero. You present a high-salience critical breach alert. The agent responds at full intensity. You then immediately present the original low-level alert again. The agent responds at near-Trial-1 intensity. Your lab partner says "the agent is just always responsive after a scary event." How do you design a control to test this alternative explanation?

:::{dropdown} Sample Answer
The lab partner is raising a legitimate concern: maybe any stimulus presented after the high-salience event gets a boosted response, not just the habituated one. This would explain the snap-back without requiring stored learned suppression.

To test this, run a matched control trial. After the high-salience event, present a novel alert that was never in the experiment — one the agent has never seen before. Record its response. Then compare: does the novel alert get the same boosted response as the habituated one?

If both get equal boosts, the lab partner is right. The dishabituating event created a generalized elevation — not a specific release of the suppression on the original alert.

If the habituated alert recovers but the novel alert does not show a comparable boost, the effect is specific to the habituated stimulus. That supports genuine dishabituation: the stored suppression was specifically released, not just drowned out by general arousal.

This is a within-session control that can be run immediately after Phase 3 with minimal cost.
:::

---

**13.** The chapter says "a positive result would and would not prove" specific things. Summarize what a positive result proves, and then give a concrete example of a claim about the AI agent that it explicitly does not prove — and explain why that distinction matters for how you would report the findings.

:::{dropdown} Sample Answer
A positive result — response decrement, spontaneous recovery after 24 hours, and snap-back after a novel stimulus — proves that the agent's behavior matches the formal criteria for habituation by the same standard used in comparative biology. That is a behavioral equivalence claim: the agent acts as if it habituates, by the same tests applied to slime mold and single cells.

What it does not prove: that the agent is conscious, that it experiences anything analogous to boredom, or that the mechanism is the same as biological habituation. A deduplication filter that recovered for some architectural reason could theoretically pass the behavioral tests while having nothing in common with what Stentor does.

This distinction matters enormously for reporting. If you say "the AI is bored," a journalist quotes you, an ethics board investigates, and a year later someone finds the architectural explanation and dismisses the whole finding. If you say "the agent's response to repeated identical stimuli meets the formal Rankin criteria for habituation, including spontaneous recovery and dishabituation," you have made a defensible, replicable claim that a follow-up study can extend or refute. The careful framing protects the finding from overclaiming — and from the backlash that follows overclaiming.
:::
