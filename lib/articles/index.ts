import type { BlogCategory } from "@/lib/constants";

export interface ArticleSource {
  title: string;
  journal: string;
  url: string;
}

export interface ArticleData {
  title: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  intro: string;
  image: string;
  content: string;
  sources: ArticleSource[];
}

export const ARTICLES: Record<string, ArticleData> = {
  "understanding-bhrt": {
    title:
      "Understanding Bioidentical Hormones: What They Are and Why They Matter",
    category: "Hormones",
    date: "2026-03-15",
    readTime: "6 min read",
    intro:
      "Bioidentical hormones are molecularly identical to the hormones your body produces naturally. Here's what that means for your health — and why it's different from conventional HRT.",
    image: "/images/articles/understanding-bhrt.png",
    content: `
<h2>What Makes a Hormone "Bioidentical"?</h2>
<p>The term <em>bioidentical</em> refers to the molecular structure of a hormone, not where it comes from. A bioidentical estradiol molecule has the exact same three-dimensional shape as the estradiol your ovaries produce. This matters because hormones work like keys fitting into locks — your cell receptors are shaped to receive specific molecular structures, and a precise fit affects how the hormone signals and how your body metabolizes it.</p>
<p>Conventional hormone replacement therapy (HRT), by contrast, has historically used hormones that are structurally different from your own. Conjugated equine estrogens (derived from pregnant mare urine) and medroxyprogesterone acetate are functional analogs, not molecular matches. They bind to your receptors but trigger slightly different downstream effects.</p>

<h2>FDA-Approved vs. Compounded Bioidenticals</h2>
<p>There is an important distinction to understand here. Several FDA-approved hormone therapies — including estradiol patches, gels, and micronized progesterone (Prometrium) — are bioidentical. They have been through rigorous clinical testing for safety, potency, and consistency.</p>
<p>Compounded bioidentical hormones are custom-mixed by a compounding pharmacy, often in forms like troches or creams, and are not FDA-approved as finished products. The North American Menopause Society (NAMS) acknowledges their potential value for patients who cannot tolerate standard preparations but notes that batch-to-batch variability and the absence of clinical outcome data are valid concerns.</p>
<blockquote>A qualified practitioner tailors bioidentical therapy to your specific hormone levels, symptoms, and health history — not to a one-size-fits-all protocol.</blockquote>

<h2>How Bioidentical Progesterone Differs from Synthetic Progestins</h2>
<p>One of the most clinically meaningful distinctions is between micronized progesterone and synthetic progestins. The Women's Health Initiative (WHI) trial, which raised alarm about HRT in 2002, used a combination of conjugated equine estrogen and medroxyprogesterone acetate. Subsequent re-analyses of the data and separate European studies found that when natural progesterone is used alongside estradiol, the breast tissue and cardiovascular risk profile appears more favorable.</p>
<p>The KEEPS trial (Kronos Early Estrogen Prevention Study) and the E3N cohort study from France both found different risk associations for bioidentical progesterone compared to synthetic progestins — a distinction the original WHI data could not make because it did not use bioidentical hormones.</p>

<h2>Who May Benefit</h2>
<p>Bioidentical hormone therapy is most commonly used to address symptoms of peri-menopause and post-menopause, including:</p>
<ul>
  <li>Vasomotor symptoms (hot flashes, night sweats)</li>
  <li>Sleep disruption</li>
  <li>Mood instability and anxiety</li>
  <li>Brain fog and memory changes</li>
  <li>Vaginal dryness and urogenital changes</li>
  <li>Loss of bone density</li>
</ul>
<p>Candidacy depends on individual health history. Women with certain hormone-sensitive cancers, uncontrolled cardiovascular disease, or active blood clots are typically not candidates. A thorough intake, baseline labs, and an ongoing monitoring plan are essential components of responsible BHRT practice.</p>

<h2>What to Expect from a Well-Managed Protocol</h2>
<p>A properly managed bioidentical hormone protocol begins with comprehensive baseline labs — typically including estradiol, progesterone, testosterone, DHEA-S, cortisol, and thyroid markers. Dosing is individualized based on lab values and symptom patterns, and levels are re-checked at regular intervals to ensure you are within a therapeutic range, not just on a standard dose.</p>
<p>Symptom improvement is gradual. Most patients begin to notice meaningful changes within four to twelve weeks as hormone levels stabilize. The goal is not to restore the hormone levels of a 25-year-old — it is to find a level where your symptoms resolve and your long-term health markers (bone density, cardiovascular indicators, cognitive function) are supported.</p>
    `.trim(),
    sources: [
      {
        title:
          "The 2022 Hormone Therapy Position Statement of The Menopause Society",
        journal: "Menopause (The Journal of The Menopause Society)",
        url: "https://www.menopause.org/docs/default-source/professional/ams-2022-hormone-therapy-position-statement.pdf",
      },
      {
        title:
          "Risks and Benefits of Estrogen Plus Progestin in Healthy Postmenopausal Women — WHI",
        journal: "JAMA, 2002",
        url: "https://pubmed.ncbi.nlm.nih.gov/12117397/",
      },
      {
        title:
          "Breast cancer risk in relation to different types of hormone replacement therapy in the E3N-EPIC cohort",
        journal: "International Journal of Cancer, 2005",
        url: "https://pubmed.ncbi.nlm.nih.gov/16220452/",
      },
      {
        title:
          "Kronos Early Estrogen Prevention Study (KEEPS): a randomized, double-blind, placebo-controlled trial",
        journal: "Climacteric, 2012",
        url: "https://pubmed.ncbi.nlm.nih.gov/23030218/",
      },
    ],
  },

  "anti-inflammatory-eating": {
    title: "The Anti-Inflammatory Plate: Eating for Hormonal Balance",
    category: "Nutrition",
    date: "2026-03-08",
    readTime: "5 min read",
    intro:
      "What you eat directly impacts your hormone levels. Learn which foods support balance and which ones may be making your symptoms worse.",
    image: "/images/articles/anti-inflammatory-eating.png",
    content: `
<h2>The Gut-Hormone Connection</h2>
<p>Your digestive system does more than absorb nutrients — it plays a direct role in how your body processes and excretes hormones. The gut microbiome contains a collection of bacteria called the estrobolome, which produces an enzyme (beta-glucuronidase) that affects estrogen recirculation. When the microbiome is disrupted — by antibiotic use, poor diet, or chronic stress — estrogen metabolism becomes imbalanced, contributing to conditions like estrogen dominance.</p>
<p>Feeding your microbiome with diverse plant fibers, fermented foods, and prebiotics helps regulate how your body handles its own hormones. This is not a supplement protocol — it is a dietary foundation.</p>

<h2>Foods That Support Hormonal Balance</h2>
<p><strong>Cruciferous vegetables</strong> (broccoli, cauliflower, Brussels sprouts, kale) contain indole-3-carbinol (I3C) and diindylmethane (DIM), compounds that support the liver's Phase I and Phase II detoxification pathways responsible for estrogen clearance. Research from the National Cancer Institute has documented their role in shifting estrogen metabolism toward less proliferative metabolites.</p>
<p><strong>Flaxseed</strong> contains lignans — phytoestrogens that bind weakly to estrogen receptors and appear to have a modulating effect, potentially competing with stronger estrogens at receptor sites. A tablespoon of ground flaxseed daily is a simple, evidence-supported addition.</p>
<p><strong>Fatty fish</strong> (salmon, sardines, mackerel) provide omega-3 fatty acids that reduce systemic inflammation. Since inflammation disrupts the HPA axis and affects cortisol output, anti-inflammatory eating has a downstream effect on multiple hormone systems.</p>
<p><strong>Fiber-rich legumes</strong> help bind excess estrogen in the digestive tract for excretion rather than reabsorption.</p>

<h2>Blood Sugar Is a Hormone Issue</h2>
<p>Insulin is a hormone, and blood sugar dysregulation is one of the most underappreciated drivers of hormonal symptoms. When blood sugar spikes repeatedly — from refined carbohydrates, sugary drinks, or erratic meal timing — insulin spikes with it. Over time, elevated insulin suppresses sex hormone-binding globulin (SHBG), which causes more free estrogen and testosterone to circulate unbound. In peri-menopause, this amplifies the hormonal volatility that is already underway.</p>
<blockquote>Stabilizing blood sugar is one of the highest-leverage things you can do for hormonal symptoms — often before any other intervention is needed.</blockquote>
<p>Practical strategies: eat protein and fat with every meal, avoid eating carbohydrates alone, do not skip breakfast, and consider walking for 10–15 minutes after meals. These habits blunt post-meal glucose spikes and reduce insulin demand.</p>

<h2>Foods That Worsen Hormonal Symptoms</h2>
<ul>
  <li><strong>Alcohol:</strong> Directly impairs the liver's ability to metabolize estrogen and raises estrogen levels. Even moderate consumption is linked to elevated circulating estradiol in post-menopausal women.</li>
  <li><strong>Refined sugar and flour:</strong> Drive insulin spikes, promote systemic inflammation, and feed pathogenic gut bacteria that disrupt the microbiome.</li>
  <li><strong>Conventionally farmed meat and dairy:</strong> May carry residual hormones and antibiotics that affect the microbiome and contribute to endocrine load.</li>
  <li><strong>Trans fats and seed oils:</strong> Promote inflammatory signaling that interferes with the body's sensitivity to its own hormones.</li>
</ul>

<h2>Building the Plate</h2>
<p>A practical framework for a hormone-supportive meal: fill half the plate with non-starchy vegetables (especially cruciferous), a quarter with quality protein (wild fish, pasture-raised poultry, legumes), and a quarter with complex carbohydrates (sweet potato, quinoa, lentils). Add a tablespoon of healthy fat — olive oil, avocado, or ground flaxseed. Eat within a consistent window and minimize grazing, which keeps insulin elevated throughout the day.</p>
<p>This is not a restrictive diet. It is a nutritional structure that supports the systems your hormones depend on.</p>
    `.trim(),
    sources: [
      {
        title:
          "Diet, gut microbiota and hormones — systematic review of their interplay",
        journal: "Nutrients, 2020",
        url: "https://pubmed.ncbi.nlm.nih.gov/33265948/",
      },
      {
        title:
          "Indole-3-carbinol and diindylmethane: safety, tolerability, and effects",
        journal:
          "NIH National Cancer Institute — Cancer Prevention Overview PDQ",
        url: "https://www.cancer.gov/about-cancer/causes-prevention/risk/diet/cruciferous-vegetables-fact-sheet",
      },
      {
        title: "Dietary lignans, phytoestrogens, and breast cancer",
        journal: "Journal of Clinical Endocrinology & Metabolism, 2004",
        url: "https://pubmed.ncbi.nlm.nih.gov/15140909/",
      },
      {
        title:
          "Alcohol consumption and endogenous estrogens and androgens in postmenopausal women",
        journal: "Cancer Epidemiology, Biomarkers & Prevention, 2004",
        url: "https://pubmed.ncbi.nlm.nih.gov/15486175/",
      },
    ],
  },

  "sleep-hormones": {
    title: "Why Sleep Is the Most Underrated Hormone Therapy",
    category: "Lifestyle",
    date: "2026-02-28",
    readTime: "7 min read",
    intro:
      "During deep sleep, your body produces and regulates key hormones. If you're not sleeping well, everything else you're doing for your health is fighting an uphill battle.",
    image: "/images/articles/sleep-hormones.png",
    content: `
<h2>Sleep Is When Hormonal Repair Happens</h2>
<p>Sleep is not rest in a passive sense — it is active biological maintenance. Multiple hormone systems operate on a sleep-dependent cycle, and disrupting that cycle has measurable downstream effects on everything from cortisol to thyroid function to reproductive hormones.</p>
<p>Growth hormone (GH) is secreted in its largest daily pulse during the first ninety minutes of deep, slow-wave sleep. GH is not just about muscle mass — it supports tissue repair, fat metabolism, immune function, and cognitive restoration. Poor sleep suppresses GH release, and this effect accumulates over time.</p>

<h2>Cortisol and the Sleep-Wake Axis</h2>
<p>Cortisol follows a diurnal rhythm: it rises sharply in the early morning (the cortisol awakening response), peaks around 8–9 AM, then declines steadily through the day, reaching its lowest point around midnight. This rhythm exists to prepare your body for waking and to regulate energy, immune activity, and metabolic function throughout the day.</p>
<p>Poor sleep disrupts this rhythm. Studies using cortisol saliva testing show that sleep restriction — even a few nights of less than six hours — flattens the cortisol curve, delays the morning rise, and elevates evening cortisol. Elevated evening cortisol directly suppresses melatonin production (which requires cortisol to be low), creating a feedback loop that makes both sleep and hormonal regulation harder.</p>
<blockquote>In peri-menopause, when the HPA axis is already under additional strain from fluctuating ovarian hormones, disrupted sleep accelerates the hormonal dysregulation that is already underway.</blockquote>

<h2>Estrogen, Progesterone, and Sleep Architecture</h2>
<p>Estrogen and progesterone have direct neurological effects on sleep quality. Progesterone is a natural GABA-agonist — it promotes calm, reduces anxiety, and supports sleep onset. As progesterone declines in peri-menopause (often before estrogen does), many women notice increasing difficulty falling asleep, waking in the night, and lighter, less restorative sleep — even before hot flashes begin.</p>
<p>Estrogen regulates the serotonin system and modulates the density of certain sleep-related receptors. Low estrogen is associated with reduced REM sleep, which is the phase involved in emotional processing and memory consolidation. Night sweats — which are a symptom of low estrogen — fragment sleep architecture even in women who fall asleep easily.</p>

<h2>Melatonin: More Than a Sleep Aid</h2>
<p>Melatonin is primarily known as a sleep signal, but it is also an antioxidant with roles in immune regulation and reproductive health. Melatonin production naturally declines with age, and this decline is accelerated by light exposure at night (particularly blue-spectrum light from screens), irregular sleep schedules, and chronic stress.</p>
<p>Low-dose melatonin (0.5–1 mg) is evidence-supported for improving sleep onset time and resetting circadian rhythm in older adults. Higher doses (3–10 mg, commonly sold) provide no additional benefit for most people and may cause morning grogginess by exceeding physiological signaling levels.</p>

<h2>Practical Sleep Hygiene for Hormonal Health</h2>
<ul>
  <li><strong>Consistent sleep and wake times</strong> — even on weekends — are the single most powerful circadian anchor. Irregular schedules are a primary driver of cortisol rhythm disruption.</li>
  <li><strong>Light exposure in the first hour of the day</strong> (natural sunlight, or a 10,000-lux light box in winter) sets the cortisol awakening response and primes melatonin production 14–16 hours later.</li>
  <li><strong>Eliminate blue light 90 minutes before bed.</strong> Screens suppress melatonin onset even at low brightness.</li>
  <li><strong>Cool sleeping environment.</strong> Core body temperature must drop to initiate and maintain deep sleep. Women experiencing hot flashes may benefit from cooling mattress technology (such as Chili Sleep or Ooler systems, which have clinical data supporting their use in menopause-related sleep disruption).</li>
  <li><strong>Alcohol and sleep:</strong> Alcohol induces sleep onset but fragments the second half of the night by suppressing REM sleep and elevating body temperature. It is not a sleep aid for women with hormonal sleep disruption.</li>
</ul>

<h2>When Sleep Problems Persist Despite Good Hygiene</h2>
<p>If sleep problems persist despite consistent sleep hygiene, this is often a signal that the underlying hormonal cause needs to be addressed directly. Progesterone deficiency, untreated thyroid dysfunction, cortisol dysregulation, and blood sugar instability at night are all treatable conditions that sleep hygiene alone will not resolve. Comprehensive lab testing that includes an evening cortisol, a thyroid panel, and reproductive hormones is a reasonable starting point when sleep disruption is significant and chronic.</p>
    `.trim(),
    sources: [
      {
        title:
          "Sleep and the endocrine system — the impact of sleep disruption on hormone secretion",
        journal: "Annals of the New York Academy of Sciences, 2007",
        url: "https://pubmed.ncbi.nlm.nih.gov/17332086/",
      },
      {
        title:
          "Sleep disturbances and menopause — epidemiology and clinical characteristics",
        journal: "Menopause, 2015",
        url: "https://pubmed.ncbi.nlm.nih.gov/25549164/",
      },
      {
        title:
          "Melatonin pharmacology, clinical use, safety, and toxicology — a review",
        journal: "Journal of Pineal Research, 2019",
        url: "https://pubmed.ncbi.nlm.nih.gov/31237124/",
      },
      {
        title:
          "Progesterone-induced sleep: a potential mechanism for treating hot flash-related insomnia",
        journal: "Sleep Medicine Reviews, 2011",
        url: "https://pubmed.ncbi.nlm.nih.gov/20673740/",
      },
    ],
  },

  "endocrine-disruptors": {
    title: "Hidden Hormone Disruptors in Your Home (And Simple Swaps)",
    category: "Detox",
    date: "2026-02-20",
    readTime: "4 min read",
    intro:
      "From plastics to cleaning products, everyday items can interfere with your endocrine system. Here are the biggest culprits and easy replacements.",
    image: "/images/articles/endocrine-disruptors.png",
    content: `
<h2>What Is an Endocrine Disruptor?</h2>
<p>An endocrine disruptor is a chemical that interferes with the body's hormone signaling — either by mimicking a hormone (particularly estrogen), blocking hormone receptors, or disrupting how hormones are synthesized and metabolized. The Endocrine Society defines them as "exogenous chemicals, or mixtures of chemicals, that interfere with any aspect of hormone action."</p>
<p>These compounds are not rare industrial pollutants — they are present in everyday consumer products at levels that have raised concern among endocrinologists and toxicologists. For women already navigating the hormonal changes of peri- and post-menopause, reducing unnecessary endocrine load is a reasonable, practical strategy.</p>

<h2>BPA and BPA Substitutes</h2>
<p>Bisphenol A (BPA) is a synthetic estrogen used to harden plastics and line food and beverage cans. It leaches into food and drink, particularly when heated. BPA binds to estrogen receptors and has been detected in the urine of over 90% of adults tested in U.S. biomonitoring studies (National Health and Nutrition Examination Survey).</p>
<p>Many products now labeled "BPA-free" use BPS (bisphenol S) or BPF, which appear to have similar estrogenic activity. The precautionary principle here is to reduce plastic contact with food overall, rather than simply switching to alternative bisphenols.</p>
<p><strong>Simple swaps:</strong> Glass, stainless steel, or ceramic food storage containers. Avoid microwaving in plastic. Choose jarred or fresh foods over canned goods when practical.</p>

<h2>Phthalates</h2>
<p>Phthalates are plasticizers used to make PVC flexible and to carry fragrance in personal care products. They are anti-androgenic — meaning they interfere with testosterone and other androgen signaling. They are found in: vinyl flooring, food packaging films, nail polish, hair spray, synthetic fragrances, and conventionally manufactured personal care products.</p>
<p>The NIH National Institute of Environmental Health Sciences (NIEHS) classifies phthalates as endocrine-disrupting compounds and notes ongoing research into their effects on reproductive hormones and developmental health.</p>
<p><strong>Simple swaps:</strong> Choose fragrance-free or naturally scented personal care products. Look for "phthalate-free" labels. Opt for solid wood or tile flooring over vinyl where possible. Prioritize glass or stainless steel over plastic food wraps.</p>

<h2>Parabens</h2>
<p>Parabens (methylparaben, ethylparaben, propylparaben, butylparaben) are preservatives used in cosmetics, lotions, and some food products. They are weak estrogenic compounds that are readily absorbed through the skin. Intact parabens have been detected in breast tissue samples in published research, raising questions about their relevance to estrogen-sensitive conditions.</p>
<p><strong>Simple swaps:</strong> Review your cosmetics and personal care labels. Many clean-beauty brands now formulate without parabens. The EWG Skin Deep database is a searchable resource for evaluating product ingredients.</p>

<h2>Pesticides and Xenoestrogens</h2>
<p>Organochlorine pesticides (including DDT and its metabolites, lindane, and chlordane) are persistent environmental pollutants classified as xenoestrogens — chemicals that behave like estrogen in the body. Though many have been banned in the U.S., they persist in soil, water, and fat tissue due to their lipophilic (fat-binding) nature.</p>
<p>Current-use pesticides, including certain fungicides (vinclozolin) and herbicides (atrazine), also have documented endocrine-disrupting activity. Washing produce thoroughly and choosing organic for the highest-pesticide crops (the EWG Dirty Dozen list) reduces dietary exposure.</p>

<h2>A Realistic Approach</h2>
<blockquote>Reducing endocrine disruptor exposure is not about achieving a toxin-free life — it is about reducing overall burden incrementally, in the places that matter most.</blockquote>
<p>Start with the items you use daily and that have the most direct contact with your body: food storage, drinking containers, skincare, and cleaning products. Small, consistent changes add up over months. No single swap will transform your hormonal health, but reducing total endocrine load supports the effectiveness of other hormonal interventions.</p>
    `.trim(),
    sources: [
      {
        title:
          "Endocrine-disrupting chemicals: an Endocrine Society Scientific Statement",
        journal: "Endocrine Reviews, 2009",
        url: "https://pubmed.ncbi.nlm.nih.gov/19502515/",
      },
      {
        title:
          "Bisphenol A (BPA) — NIEHS overview of health effects research",
        journal: "NIH National Institute of Environmental Health Sciences",
        url: "https://www.niehs.nih.gov/health/topics/agents/sya-bpa",
      },
      {
        title:
          "Concentrations of parabens in human breast tumours",
        journal: "Journal of Applied Toxicology, 2004",
        url: "https://pubmed.ncbi.nlm.nih.gov/14745841/",
      },
      {
        title: "EWG's Dirty Dozen — Shopper's Guide to Pesticides in Produce",
        journal: "Environmental Working Group",
        url: "https://www.ewg.org/foodnews/dirty-dozen.php",
      },
    ],
  },

  "perimenopause-signs": {
    title: "7 Early Signs of Peri-Menopause You Shouldn't Ignore",
    category: "Hormones",
    date: "2026-02-12",
    readTime: "5 min read",
    intro:
      "Peri-menopause can start years before your periods stop. These are the subtle signals your body sends when hormones begin shifting — and what to do about them.",
    image: "/images/articles/perimenopause-signs.png",
    content: `
<h2>The Peri-Menopause Window</h2>
<p>Peri-menopause — the transitional phase leading up to menopause — typically begins in a woman's mid-to-late forties, though it can start as early as the late thirties. Menopause is defined clinically as 12 consecutive months without a menstrual period; everything before that final period, while hormones are fluctuating, is peri-menopause.</p>
<p>The STRAW+10 (Stages of Reproductive Aging Workshop) staging framework, developed by leading reproductive endocrinologists and endorsed by major medical societies, describes the hormonal and cycle-based changes that characterize this transition. One of its key findings: hormonal changes begin years before cycles become irregular, making symptoms the earliest meaningful signal.</p>

<h2>1. Changes in Your Menstrual Cycle</h2>
<p>The first measurable change in peri-menopause is typically a shortening of the cycle by two to seven days. This is driven by declining ovarian reserve and earlier follicular development — cycles that were previously 28 days may shorten to 21–25 days. Over time, cycles become more variable: some short, some long, occasional skips. Heavier bleeding is also common as the balance between estrogen and progesterone becomes erratic. Any significant change in cycle pattern that persists for more than two to three months warrants evaluation.</p>

<h2>2. Sleep Disruption</h2>
<p>Many women notice sleep problems as the first significant quality-of-life symptom — often before vasomotor symptoms (hot flashes) begin. As progesterone declines, its calming, GABA-agonist effect on the nervous system diminishes. The result is difficulty falling asleep, waking between 2–4 AM, and lighter sleep overall. This is not anxiety — it is a neurological change tied directly to progesterone levels.</p>

<h2>3. Mood Instability and Increased Anxiety</h2>
<p>Estrogen modulates serotonin, dopamine, and GABA systems — all of which affect mood stability. During peri-menopause, estrogen levels fluctuate erratically (not simply declining in a straight line), causing corresponding fluctuations in mood. Many women describe feeling more reactive, tearful, or anxious in ways that feel unlike their baseline. Women with a history of PMS or post-partum mood changes appear more sensitive to these hormonal fluctuations, as the same neurological vulnerability is triggered.</p>

<h2>4. Brain Fog and Memory Changes</h2>
<p>Cognitive symptoms — word-finding difficulty, short-term memory gaps, trouble concentrating — are reported by up to 60% of women during the peri-menopause transition, according to research from the Study of Women's Health Across the Nation (SWAN). Estrogen supports cerebral blood flow and glucose metabolism in the brain. During peri-menopause, this support becomes inconsistent as estrogen fluctuates. Most research suggests cognitive function largely stabilizes after the transition is complete.</p>
<blockquote>Brain fog during peri-menopause is not a sign of cognitive decline — it is a symptom of hormonal transition. It is treatable.</blockquote>

<h2>5. Vasomotor Symptoms (Hot Flashes and Night Sweats)</h2>
<p>Hot flashes are the most recognized symptom of menopause, but they often begin in peri-menopause, well before periods stop. They are caused by a narrowing of the thermoneutral zone in the hypothalamus — triggered by declining estrogen — that makes the body overly sensitive to small temperature changes. Up to 75% of women in Western populations experience vasomotor symptoms; they can persist for a median of 7–10 years, per SWAN longitudinal data.</p>

<h2>6. Changes in Libido and Vaginal Comfort</h2>
<p>Declining estrogen and testosterone (which also falls significantly in the years around menopause) reduce sexual desire, arousal, and vaginal lubrication. Vaginal tissue becomes thinner and less elastic — a condition now termed Genitourinary Syndrome of Menopause (GSM). Unlike hot flashes, which often resolve over time, GSM is progressive without treatment. It responds well to local estrogen therapy, which is considered low-risk even for women who are not candidates for systemic hormone therapy.</p>

<h2>7. Joint Pain and Increased Inflammation</h2>
<p>Estrogen has anti-inflammatory effects throughout the body, including in joint tissue. As estrogen declines, many women notice new or worsening joint pain — particularly in the hands, knees, and hips — that does not have a clear musculoskeletal cause. Increased inflammatory markers have been documented in women during the peri-menopausal transition. This is distinct from osteoarthritis, though the two can overlap. Anti-inflammatory diet, resistance training, and omega-3 supplementation are all evidence-supported adjuncts.</p>

<h2>When to Seek Evaluation</h2>
<p>If you are experiencing two or more of the above symptoms — particularly if they are affecting your sleep, mood, or daily function — a hormone evaluation is a reasonable first step. A comprehensive panel including estradiol, progesterone, testosterone, DHEA-S, FSH, and thyroid markers will give a clearer picture of where you are in the transition and what, if any, intervention is appropriate.</p>
<p>Peri-menopause is not a disease. But it is a biological transition that benefits from attention, not just endurance.</p>
    `.trim(),
    sources: [
      {
        title:
          "Executive Summary of the Stages of Reproductive Aging Workshop +10 (STRAW+10)",
        journal: "Menopause, 2012",
        url: "https://pubmed.ncbi.nlm.nih.gov/22373843/",
      },
      {
        title:
          "Cognitive symptoms across the menopause transition — Study of Women's Health Across the Nation (SWAN)",
        journal: "Menopause, 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33512961/",
      },
      {
        title:
          "Duration of menopausal vasomotor symptoms over the menopause transition",
        journal: "JAMA Internal Medicine, 2015",
        url: "https://pubmed.ncbi.nlm.nih.gov/25686030/",
      },
      {
        title:
          "Genitourinary Syndrome of Menopause — The Menopause Society position statement",
        journal: "The Menopause Society (NAMS)",
        url: "https://www.menopause.org/for-women/sexual-health-menopause-online/changes-at-midlife/genitourinary-syndrome-of-menopause-gsm",
      },
    ],
  },
};
