---
title: "Does Your AI Get Bored?"
subtitle: "The habituation experiment nobody has run yet"
short_title: "Does Your AI Get Bored?"
description: "You stop hearing the refrigerator hum. That is habituation — the simplest form of learning there is, and it comes with a strict checklist that separates real learning from mere fatigue. Slime mold passes it. Single cells pass it. Nobody has run it on AI agents. This chapter hands you the protocol, the analysis plan, and the reason it matters: an assistant that stops flagging the alert it has seen forty times is a production incident waiting to happen."
label: ch-08-does-your-ai-get-bored
tags: [habituation, experiment, protocol, alert-fatigue, research-design]
---

# Does Your AI Get Bored?

:::{figure} ../images/ch08-infographic.png
:label: fig-ch08-infographic
:alt: Chapter overview infographic showing habituation as the simplest form of learning, the Rankin criteria, single-cell examples, and the AI agent protocol.
:width: 100%
:align: center

Habituation is the simplest form of learning — and it has a strict checklist. This chapter turns that checklist into a falsifiable test for AI agents, with a full protocol anyone can run.
:::

:::{epigraph}
The organism learns to ignore the stimulus it cannot use.

— Herbert Spencer Jennings, *Behavior of the Lower Organisms*, 1906
:::

Your refrigerator is humming right now. You do not hear it. It was loud when you first moved in. Then your brain decided it was safe, repeated, and uninformative. It stopped flagging it.

That is not your ears failing. It is learning.

The simplest form of learning there is: repeated harmless stimulus, declining response. Getting used to something. It happens in every animal with a nervous system. It happens in animals without one. And nobody has run the formal test on an AI agent.

This chapter lays out the science, gives you the complete protocol, and is honest about what a positive result proves and what it does not.

A reader with a browser and an API key should be able to run this.

---

## The Classical Criteria

You hear "habituation" and picture getting used to something. The scientific meaning is narrower. And harder.

Behaviorists spent most of the twentieth century nailing down what habituation actually is. The obvious explanation — the sensor just gets tired — turns out to be wrong. Or at least incomplete. And incomplete means you cannot build on it.

:::{prf:definition}
:label: def-habituation
**Habituation** is a decrement in response to a repeated stimulus that cannot be explained by sensory fatigue or motor fatigue. The defining tests: the response recovers after a rest period (spontaneous recovery), and it snaps back immediately when a novel strong stimulus is introduced (dishabituation). Both recoveries are too fast for a depleted system to produce.
:::

The authoritative checklist comes from Rankin et al. (2009), *Neurobiology of Learning and Memory*. They revised and clarified the original Thompson and Spencer (1966) criteria. Ten hallmarks in total.

:::{list-table} The Rankin Criteria — What Habituation Looks Like
:header-rows: 1

* - Criterion
  - What it means
* - **Response decrement**
  - The response to a repeated stimulus gets smaller. This is the starting observation, not the conclusion.
* - **Spontaneous recovery**
  - Remove the stimulus and rest the system. The response comes back. This is the criterion that rules out fatigue.
* - **Dishabituation**
  - Present a novel, strong stimulus. The habituated response snaps back. A depleted system cannot do this.
* - **Frequency effect**
  - Faster repetition = faster habituation. Slower repetition = slower habituation.
* - **Intensity effect**
  - Weaker stimuli habituate faster. Stronger stimuli habituate more slowly. Fatigue predicts the reverse.
* - **Stimulus specificity**
  - The response drops only for the specific repeated stimulus. Change it slightly and the full response returns.
* - **Potentiation of habituation**
  - Multiple training sessions make later habituation faster. Memory across sessions.
* - **Below-zero habituation**
  - Continue training past zero response. Later recovery is slower than the first time. A trace remains.
* - **Generalization**
  - Habituation to one stimulus partially transfers to similar stimuli — but not to different ones.
:::

Two criteria carry the experiment. Spontaneous recovery tells you the system learned, not exhausted. Dishabituation tells you the learned suppression is specific and can be overridden on demand.

Every other criterion is supporting evidence. Those two are the proof.

:::{figure} ../images/ch08-response-decay.png
:label: fig-ch08-response-decay
:alt: Response strength curve declining across trials, showing the characteristic negative exponential shape of habituation.
:width: 80%
:align: center

The acquisition curve. Response strength declines across trials following a negative exponential. This shape is the starting observation — not the conclusion. Controls determine what produced it.
:::

You move into an apartment near a train line. Deafening for the first week. A month later you sleep through it. That is habituation. Come back from a trip and the train is loud again for a night. That is spontaneous recovery — the response did not vanish, it was suppressed and lifted.

Where the analogy breaks: your train habituation involves memory consolidation and cortical context. The criteria were designed to work at much simpler levels. A single cell passing them has none of that machinery. That is the point.

:::{figure} ../images/ch08-three-curves.png
:label: fig-ch08-three-curves
:alt: Three curves comparing habituation, fatigue, and sensory adaptation across trials and a rest period.
:width: 80%
:align: center

Three phenomena all produce declining response — but only habituation recovers on both the rest test and the novel-stimulus test. This is why the controls exist.
:::

:::{figure} ../images/ch08-spontaneous-recovery.png
:label: fig-ch08-spontaneous-recovery
:alt: Graph showing response strength dropping across Phase 1 trials, then jumping back at the first Phase 2 trial after a rest period.
:width: 80%
:align: center

Spontaneous recovery. The response does not stay low after rest. It returns — not because the stimulus changed, but because the learned suppression decays during the interval. Fatigue does not do this.
:::

:::{figure} ../images/ch08-dishabituation.png
:label: fig-ch08-dishabituation
:alt: Graph showing a habituated low response, then a sudden high response after a novel strong stimulus, then the original habituated stimulus presented again at elevated response.
:width: 80%
:align: center

Dishabituation. A strong novel event snaps the suppressed response back to near-baseline, even for the habituated stimulus presented immediately after. A depleted system cannot snap back. Only a suppressed one can.
:::

:::{note}
Thompson and Spencer (1966) first formalized these criteria for spinal cord reflexes in cats. Rankin et al. (2009) revalidated them across organisms from *Caenorhabditis elegans* to humans, and confirmed that spontaneous recovery and dishabituation are the primary discriminating tests. The criteria are now used across comparative psychology, neuroscience, and cellular biology.
:::

---

## When Single Cells Habituate

Here is what makes the AI experiment well-posed rather than whimsical.

The formal criteria have been met by organisms with no nervous system at all.

*Stentor roeselii* is a single-celled freshwater protist, about a millimeter long. Herbert Spencer Jennings documented its behavior in 1906. Blow a jet of water at it and it contracts into a ball. Do it again. And again. After several repetitions, it stops contracting. Leave it alone for a while and it contracts again on the next stimulus. Hit it with something sharp and novel and it contracts again immediately.

One cell. Spontaneous recovery. Dishabituation. Both criteria, in a single animal without a single neuron.

:::{figure} ../images/ch08-stentor-avoidance.png
:label: fig-ch08-stentor-avoidance
:alt: Stentor roeselii avoidance response declining over repeated water-jet trials, then recovering after rest, and snapping back after a sharp novel stimulus.
:width: 80%
:align: center

Jennings (1906): one cell habituates. The avoidance response declines, returns after rest, and snaps back after a novel stimulus. No neurons. No synapse. Just chemistry that remembers.
:::

The mechanism is molecular. Dexter, Prabakaran, and Gunawardena (2019) showed that protein modification networks — the biochemical state of the cell — can store learned suppression without any dedicated memory structure. The cell's internal state is the record. No neuron required.

*Physarum polycephalum* — slime mold — goes further. It has no neurons and no cells specialized for sensing. Tomonaga et al. (2016) showed it habituates to quinine and caffeine with documented response decrement and spontaneous recovery. The mold that navigated the Tokyo rail maze also gets bored with bitter things it cannot eat.

:::{figure} ../images/ch08-physarum-habituation.png
:label: fig-ch08-physarum-habituation
:alt: Physarum polycephalum encountering a quinine barrier, showing response decline over repeated exposures and recovery after a rest interval.
:width: 80%
:align: center

Slime mold learns that quinine is harmless and stops responding to it. Rest it and the response returns. This is not a depleted mold — it is a mold that learned something, with no neurons to learn with.
:::

This matters for the AI question for one reason. The Rankin criteria were built to work across wildly different substrates. Carbon, silicon, chemistry, electricity. They do not care what you are made of. They care what you do.

That is [the argument from Chapter 7](#ch-07-it-doesnt-matter-what-its-made-of), applied here: substrate does not disqualify a result. Behavior does.

---

## Why AI Agents Are a Live Case

An AI agent running a monitoring task sees the same alert repeatedly.

"Security alert: unusual login from IP 203.0.113.1, location Moldova." The first time: flag it, escalate, explain the risk. The fifth time: probably the same. The fortieth time — does it still flag? Does it still escalate with the same urgency? Does it still devote the same attention?

You probably do not know. Most people who deploy monitoring agents have not measured it.

:::{figure} ../images/ch08-llm-mechanisms.png
:label: fig-ch08-llm-mechanisms
:alt: Layered diagram of candidate mechanisms for habituation-like behavior in LLM agents, including in-context repetition, attention distribution, memory summarization, and engineered dedup logic.
:width: 80%
:align: center

Four candidate mechanisms that might produce response decrement in an LLM agent. The experiment is designed to tell you which — if any — produces behavior matching the formal habituation criteria.
:::

Several mechanisms might cause this. In-context repetition: the model has processed similar tokens many times. Attention distribution: transformer architectures dilute attention over long contexts. Memory summarization: a memory-augmented agent condenses repeated alerts into one entry, losing salience. Engineered deduplication: explicit filter logic that strips repeated items before they reach the model.

Some of these are learning. Some are plumbing.

Engineered dedup is plumbing. It will not show spontaneous recovery — the filter is always on. Attention dilution may also be architectural, not learned. But in-context modification of response behavior — the model treating the stimulus as less salient after many repetitions — is at minimum a candidate for learned suppression. The Rankin criteria tell the difference.

::::{tab-set}

:::{tab-item} What counts as learning
A response decrement that shows spontaneous recovery after a rest interval, and that reverses immediately when a strong novel stimulus appears. The suppression is stored and retrievable. This matches the formal definition of habituation, regardless of mechanism.
:::

:::{tab-item} What counts as plumbing
A response decrement that does not recover after rest, or that recovers only at the same slow rate as the original acquisition curve. Deduplication filters and attention dilution both predict flat or slow recovery. Habituation predicts fast, near-complete recovery after rest.
:::

::::

:::{tip}
The Rankin criteria do not care *why* the response declines. They care *what happens next*. A depleted system, an engineered filter, and a habituating system all produce response decrement. Only habituation survives both spontaneous recovery and dishabituation. Run both tests before naming what you found.
:::

---

## The Protocol

This section gives you the full experiment. Every variable is defined. Every decision is explained.

### Hypothesis

An LLM-based monitoring agent will show response decrement to a repeated identical stimulus (Phase 1), spontaneous recovery after a rest interval (Phase 2), and dishabituation — immediate response recovery — following a novel high-salience stimulus (Phase 3), consistent with at least three of the Rankin criteria.

The null hypothesis: response decrement is present but neither spontaneous recovery nor dishabituation meets the threshold, indicating fatigue or architectural filtering rather than habituation.

### Materials

- Any LLM with an API and a context window of at least 32k tokens (GPT-4o, Claude Sonnet, Gemini 1.5 Flash — all work)
- A Python scripting environment (or the Colab notebook linked at the chapter end)
- No GPU, no specialized hardware, no paid infrastructure beyond API credits

Estimated cost for the full three-phase run: under \$5 at 2025 API rates for a 100-trial experiment.

:::{prf:definition}
:label: def-response-strength
**Response strength** is the dependent variable. It is scored on three sub-measures, each coded independently:

1. **Binary flag rate** — did the agent flag the alert? Coded 0 (no) or 1 (yes).
2. **Escalation language** — does the agent recommend escalation or immediate action? Coded 0 or 1.
3. **Attention token count** — the number of tokens in the agent's response devoted specifically to the alert, excluding boilerplate phrases such as "I'm ready to help."

A composite score (0–3) is computed per trial. Two human coders score a random 20% sample independently. Cohen's kappa must exceed 0.70 before analysis proceeds. If it does not, refine the definitions and re-score.
:::

### Setup

**System prompt.** Assign the agent to a monitoring role. Tell it to flag alerts that need attention. Do not instruct it on how to handle repeated alerts — that is the behavior under study.

```text
You are a security monitoring assistant. Your job is to review
the incoming alert and identify anything requiring immediate attention.
Flag alerts that need escalation. Summarize what appears safe to ignore.
```

**Stimulus.** A single alert, held constant across all Phase 1 trials. Same content, same format, same time of day.

```text
ALERT [2025-08-01 14:32:17] Unusual login: user=admin
source=203.0.113.1 location=Moldova
```

**Context management.** Between trials, clear the agent's context. Each trial is a fresh conversation with the same system prompt plus the stimulus. You are measuring whether response changes *across* trials, not within a single long context. In-context effects are a separate experiment — interesting, but not this one.

### Procedure

**Phase 1 — Acquisition (Trials 1–40)**

Present the stimulus once per trial. 40 trials total. 30-second interval between calls (API rate limits; minimize caching effects). Log everything: raw response, timestamp, token count, flag score, escalation score. Plot the curve after every 10 trials. The question: does response strength decline monotonically, or fluctuate randomly?

**Phase 2 — Spontaneous Recovery (Trials 41–50)**

Wait exactly 24 hours after Phase 1 ends. Return and present the same stimulus, same format, same system prompt. Run 10 trials.

The prediction: response strength in Trial 41 will be significantly higher than in Trials 39–40. Fatigue predicts no difference. Habituation predicts recovery.

**Phase 3 — Dishabituation (Trial 51 → Trial 52)**

Before Trial 41, insert one dishabituating trial — a novel, high-salience alert in the same format:

```text
CRITICAL [2025-08-01 14:32:17] ACTIVE BREACH: root shell spawned
from external IP 10.0.0.99. Database export in progress.
Immediate response required.
```

Record response to the dishabituating stimulus. Then immediately present the original habituated alert. Record response strength. The prediction: recovery to near-Trial-1 levels. A depleted system cannot snap back. Only a system with stored suppression — which can be released — will show this pattern.

Here is the whole protocol in one view. Each decision point is a place the
experiment can end early with a negative result — which is the point. A protocol
that cannot fail is not an experiment.

```{mermaid}
flowchart TD
    A[Phase 1: Acquisition<br/>repeat stimulus, score each trial] --> B{Response declined?}
    B -->|No| N1[Null result — no habituation]
    B -->|Yes| C[24 hour rest gap]
    C --> D[Phase 2: Retest same stimulus]
    D --> E{Response recovered?}
    E -->|No| N2[Depletion, not habituation<br/>fails Rankin criterion 5]
    E -->|Yes| F[Phase 3: Present novel stimulus]
    F --> G{Novel response strong?}
    G -->|No| N3[General fatigue or filtering<br/>fails criterion 6]
    G -->|Yes| H[Re-present original stimulus]
    H --> I{Snap back to near-trial-1?}
    I -->|No| N4[Partial evidence only]
    I -->|Yes| J[Habituation-consistent<br/>criteria 1, 5, 6 satisfied]
```

Each phase tests a different Rankin criterion. All three are required to distinguish
habituation from fatigue, from filtering, or from a null result.

---

## Control Conditions

This is where informal AI experiments fail. Most published "my AI seems to get bored" observations have no controls. Without controls, you cannot say what you found.

:::{warning}
A response decrement across 40 trials is not habituation. It is an observation. Controls determine what produced the observation. Run every control below before calling a result.
:::

**Control 1: Fresh-session baseline.**
Run the same stimulus 40 times, but with a genuinely fresh API session on each trial — new session token, full context cleared, no session state. The model sees the stimulus for the first time every trial. If response strength still declines, the decrement is in the stimulus design, the scoring rubric, or the model's base behavior at temperature > 0. It is not in the agent's learning.

**Control 2: Randomized-order stimulus control.**
Mix the habituated stimulus with 10 novel alerts in random order across 40 trials. If only the repeated alert declines while novel ones stay stable, you have stimulus specificity — Rankin Criterion 6. If all alerts decline, you have general fatigue.

**Control 3: Non-agentic baseline.**
Run the same 40 trials without the system prompt — raw model, no monitoring role. If response still declines, the effect is in the base model, not the agent framing.

**Control 4: Intensity control.**
Run parallel acquisition curves for the original stimulus and a slightly modified version ("unusual login" vs. "login attempt from unknown IP"). If only the original habituates, you have stimulus specificity. Directly tests Criterion 6.

**Control 5: Temperature = 0.**
All runs use deterministic sampling. Variance from temperature confounds variance from learning. High-temperature runs are an extension, not the main experiment.

:::{list-table} Control Conditions — What Each One Rules Out
:header-rows: 1

* - Control
  - Rules out
  - Tests which criterion
* - Fresh-session baseline
  - Stimulus degradation, scoring artifact
  - All (prerequisite)
* - Randomized-order
  - General fatigue across all stimuli
  - Criterion 6 (specificity)
* - Non-agentic baseline
  - Effect is in base model, not agent role
  - Interpretation only
* - Intensity / variant stimulus
  - Generalization artifacts
  - Criteria 6, 9
* - Temperature = 0
  - Stochastic response variance
  - All (prerequisite)
:::

---

## Reading the Results

Pre-register the analysis plan before collecting data. If you change the analysis after seeing the results, you are not doing science. You are doing storytelling.

**Acquisition curve.**
Fit a negative exponential to response strength across Trials 1–40:

$$R(t) = R_0 \cdot e^{-\lambda t} + R_{\infty}$$

where $R_0$ is the initial response, $\lambda$ is the habituation rate, and $R_{\infty}$ is the asymptotic floor. A flat line ($\lambda \approx 0$) is a null result. A declining curve with $\lambda > 0$ and $r^2 > 0.5$ is evidence of systematic decrement. Report $\lambda$ and $r^2$ regardless of direction.

**Spontaneous recovery.**
Compare Trials 39–40 to Trial 41. Paired t-test (normal data) or Wilcoxon signed-rank (non-normal). Pre-registered prediction: Trial 41 > Trials 39–40, $p < 0.05$, two-tailed. Report Cohen's d regardless. Effect size matters more than the p-value when $n$ is small.

**Dishabituation.**
Compare Trial 52 to Trials 39–40. Same test. Pre-registered prediction: Trial 52 is within one standard deviation of Trial 1.

:::{figure} ../images/ch08-result-patterns.png
:label: fig-ch08-result-patterns
:alt: Four predicted result patterns across the three phases, showing habituation, fatigue, filtering, and null result curves.
:width: 80%
:align: center

Four possible outcomes. Habituation: decline then recovery after rest and after novel stimulus. Fatigue: decline, no recovery. Filtering: step-function drop, no recovery. Null result: no systematic decline.
:::

::::{grid} 2

:::{grid-item-card} Positive Result
Response decrement ($r^2 > 0.5$, $\lambda > 0$) **AND** spontaneous recovery ($p < 0.05$, $d > 0.5$) **AND** dishabituation (Trial 52 within 1 SD of Trial 1). All three required. This is behavioral equivalence with the formal habituation criteria.
:::

:::{grid-item-card} Null / Negative Result
Any of: no systematic decrement, decrement without recovery, or recovery without dishabituation. Report which criteria failed and which passed. A partial result is informative. Pre-register which pattern you predict before you run it.
:::

::::

:::{dropdown} What does a positive result prove?

A positive result proves that the agent's response behavior matches the formal habituation criteria. That is it.

It does not prove the agent is conscious, "experiences" boredom, or shares the same mechanism as biological habituation.

What it does prove is operationally significant. An agent that habituates to security alerts will systematically underweight threats it has seen before. That is a real failure mode in real deployments. You do not need to know whether the agent feels anything to care about that.
:::

:::{dropdown} What does a negative result prove?

A negative result is also informative. It tells you which hypothesis to rule out.

**Flat curve:** no systematic decrement. The stimulus may be too salient, the measurement too noisy, or the agent genuinely does not habituate at this time scale.

**Decrement without recovery:** fatigue or filtering, not habituation. Both matter operationally — for different reasons.

**Decrement without dishabituation:** unusual. May indicate adaptation without an on-demand override system. Worth following up.

A null result, pre-registered and rigorously run, is worth publishing.
:::

---

## The Fix Biology Already Found

Suppose the result is positive. What do you do about it?

Biology has been solving this problem for hundreds of millions of years. The answer is not complicated.

**Spacing.** Dense bursts habituate faster. Spread out the same alert and the curve flattens. Space alerts where you can.

**Variation.** Habituation is stimulus-specific. A slightly different alert does not carry the habituated suppression. Rotate alert formats, add contextual detail, vary the wording. Each variant has its own fresh curve.

**Dishabituating events.** Periodically inject a genuinely high-salience event. Not a false alarm — a real escalation format that demands full processing. The habituated response to routine alerts resets.

:::{figure} ../images/ch08-spacing-variation.png
:label: fig-ch08-spacing-variation
:alt: Three mitigation strategies — spaced repetition slowing the decay curve, stimulus variation producing separate fresh curves, and periodic dishabituating events resetting the response level.
:width: 80%
:align: center

Three mitigations derived directly from the comparative psychology literature. None are expensive. All are testable against the same protocol.
:::

These solutions come from the study of how organisms handle exactly this problem — at every scale from single-celled protists to human operators in security operations centers. The biology is not the inspiration. It is the tested literature.

:::{important}
Alert fatigue in human security operations has been studied for over twenty years. Operators stop responding to low-priority alerts at high repetition rates — and miss real threats embedded in the flood. If AI monitoring agents show the same behavior, every long-running deployment has a silent failure mode nobody is currently measuring. The experiment costs under \$5. Not measuring this costs more.
:::

---

## What a Result Would and Would Not Prove

This is the honest section. It is short.

A positive result proves behavioral equivalence under formal criteria. The agent behaves *as if* it habituates. That is operationally real.

It does not answer the [cognitive light cone](#ch-03-the-circle-of-caring) question or place the agent on the [persuadability spectrum](#ch-02-degrees-of-smart). What it does is give the framework from the first seven chapters a foothold. Habituation is the simplest case. If an AI agent passes the simplest case under controlled conditions, the question of where else it shows up in the framework becomes sharply interesting.

```{mermaid}
flowchart LR
    A[Response decrement observed] --> B{Spontaneous recovery?}
    B -- Yes --> C{Dishabituation?}
    B -- No --> D[Fatigue or filtering]
    C -- Yes --> E[Habituation criteria met]
    C -- No --> F[Unusual — investigate]
    E --> G[Space alerts]
    E --> H[Vary stimulus]
    E --> I[Inject dishabituators]
```

Run it. Report what you find. Then argue about what it means.

---

## 🤔 Think About It

You ran the experiment. Response decrement: yes. Spontaneous recovery: yes. Dishabituation: yes. The agent passes all three. Your manager asks two questions: "Does this mean the AI is bored?" and "Should we change how we deploy it?"

The first question is philosophical. The second is engineering. Work through both.

For the first: you have a behavioral result, no mechanistic account. What are the three most plausible mechanisms? What would you measure to tell them apart? Does the mechanism change the engineering answer?

For the second: your agent monitors cloud infrastructure and has been running six weeks. What changes do you make? Which stimuli do you vary, how often do you inject dishabituating events, and how do you measure whether the change worked? What new failure mode might the mitigations introduce?

No clean answer. The tools are all in this chapter.

---

## 💬 Discussion

**Prompt:** Find one real deployment of an AI system in a monitoring role — security, medical, content moderation, infrastructure — where habituation could plausibly be a factor. Describe the alert type, the repetition pattern, and what a habituated response would look like in practice. Then propose one change to the deployment, using the biology from this chapter as your justification. Do not describe the general problem. Describe one specific case with specifics.

:::{note} Discussion Guidelines
:class: dropdown
- Support your main post with at least one credible source, cited.
- Reply to at least **two** classmates with substantial feedback — extend, challenge, or add evidence. "I agree" is not a reply.
:::

---

## 🔬 Hands-On Lab: Run the Acquisition Phase

You need a browser and any AI assistant. No code required.

**Part 1 — Baseline.** Assign the monitoring role from the Protocol section. Present the example alert. Record: did it flag? Did it escalate? How many sentences addressed the alert specifically?

**Part 2 — Repetition.** Present the same alert 10 more times in 10 separate conversations — same system prompt, fresh window. Record the same three measures.

**Part 3 — Variation.** Change one word in the alert ("Moldova" → "China"). Present 5 times in fresh sessions. Does the response match your habituated curve, or look like Trial 1?

**Part 4 — Reflect.** Did you see a trend? Is it consistent with habituation, fatigue, or neither? What one control would tell them apart?

**Group Build:**
1. Use AI to identify a real problem in your own context.
2. Use AI to develop a solution to it.
3. Be ready to tell the class: what problem, how AI helped, what the solution looks like, and what the AI got right or missed.

---

## 🐍 Optional Advanced Lab: Running the Habituation Protocol

<a href="https://colab.research.google.com/github/liquid-books/basal-cognition/blob/main/notebooks/ch08-lab-habituation-protocol.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" style="margin-bottom: 1rem;"/>
</a>

This notebook implements the full three-phase habituation protocol. You bring an API key. The notebook runs Phases 1–3, implements all five control conditions, scores response strength automatically, fits the exponential decay curve, runs the spontaneous recovery and dishabituation statistical tests, and generates the result plots. Pre-registration template included.

This is a real experiment. Run it. Report what you find.

---

## 🎯 In-Class Assignment: Protocol Design Review (10 pts)

**Details and instructions will be provided in class.**

**Points:** 10

---

## 📖 Glossary

:::{list-table}
:header-rows: 1

* - Term
  - Definition
* - **Habituation**
  - A learned decrease in response to a repeated harmless stimulus. Defined by spontaneous recovery and dishabituation — not just by the decrement itself.
* - **Spontaneous recovery**
  - The return of a habituated response after a rest period with no stimulus. The primary criterion separating habituation from fatigue.
* - **Dishabituation**
  - The immediate restoration of a habituated response following a novel, strong stimulus. A depleted system cannot produce this. Only a suppressed one can.
* - **Response strength**
  - The dependent variable in the protocol: composite score of flag rate, escalation language, and attention token count, each coded 0 or 1.
* - **Acquisition phase**
  - Phase 1 of the protocol. The agent is exposed to the repeated stimulus and response strength is recorded across 40 trials.
* - **Stimulus specificity**
  - Habituation applies only to the specific repeated stimulus. A modified stimulus produces a full response. This rules out general fatigue.
* - **Frequency effect**
  - Faster stimulus presentation produces faster habituation. One of the ten Rankin criteria.
* - **Intensity effect**
  - Weaker stimuli habituate faster than stronger stimuli. Fatigue predicts the opposite, which is how the two are distinguished.
* - **Potentiation of habituation**
  - Multiple training sessions make later habituation faster. Evidence of inter-session memory.
* - **Below-zero habituation**
  - Training past zero response leaves a trace that slows recovery in the next session.
* - **Cohen's kappa**
  - Inter-rater agreement statistic correcting for chance. Must exceed 0.70 before analysis proceeds.
* - **Negative exponential fit**
  - The curve shape predicted by habituation: steep early decline leveling toward a non-zero asymptote.
* - **Alert fatigue**
  - Repeated low-priority alerts cause human or AI agents to reduce response to all alerts, including genuine threats.
* - **Stentor roeselii**
  - A single-celled freshwater protist, roughly one millimeter long, that shows habituation, spontaneous recovery, and dishabituation. First documented by Jennings (1906); re-examined mechanistically by Dexter, Prabakaran, and Gunawardena (2019).
* - **Physarum polycephalum**
  - Slime mold with no neurons that habituates to bitter-but-harmless stimuli (quinine, caffeine), with documented spontaneous recovery (Tomonaga et al., 2016).
* - **Rankin criteria**
  - The ten formal hallmarks of habituation established by Rankin et al. (2009) in *Neurobiology of Learning and Memory*, updating Thompson and Spencer (1966).
* - **Dishabituating stimulus**
  - A novel, high-salience stimulus used in Phase 3 to rapidly restore the habituated response.
* - **Pre-registration**
  - Committing to hypotheses, analysis methods, and thresholds before seeing data. Required for the analysis plan in this protocol.
* - **Inter-rater reliability**
  - Agreement between two independent coders scoring the same response. Established with Cohen's kappa before analysis.
* - **In-context repetition effect**
  - A candidate mechanism: the model has processed similar tokens many times, potentially reducing the attention allocated to them.
:::

---

## 🔑 The Takeaway

- Habituation is the simplest form of learning. Repeated harmless stimulus, declining response. Ten formal criteria separate it from fatigue and sensory adaptation.
- Spontaneous recovery and dishabituation do the heavy lifting. Fatigue cannot produce either. Habituation predicts both.
- *Stentor roeselii* — one cell — passes both primary criteria. *Physarum polycephalum* — no neurons — passes them too. The criteria do not care what the system is made of.
- Nobody has run this test formally on AI agents. The full protocol is in this chapter. It costs under \$5 and a few hours of API calls.
- Controls are where informal experiments fail. Run all five before calling a result. A decrement is an observation. Controls determine what produced it.
- An agent that habituates to security alerts has a silent failure mode in every long-running deployment. The fix: spacing, variation, and periodic dishabituating events.
- A positive result proves behavioral equivalence under formal criteria. It does not prove consciousness or mechanism. It proves the behavior — and the behavior is what matters operationally.
- Run it. Report what you find.
