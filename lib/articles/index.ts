import type { BlogCategory } from "@/lib/constants";

export interface ArticleSource {
  title: string;
  journal: string;
  url: string;
}

export interface ArticleData {
  title: string;
  /**
   * Short form for the `<title>` tag. Budget is 44 characters, because the
   * layout template appends " | BHRT with Kim" (16 of the 60-char limit).
   *
   * Article headlines run long — the longest is 70 characters, which produced
   * an 86-character title tag that Google truncated mid-phrase. The headline
   * still renders in full as the page h1; this is only the SERP label.
   */
  titleSegment: string;
  /**
   * Meta description, 140–155 characters.
   *
   * Written explicitly rather than derived from `intro`. The intros run from
   * 134 to 180 characters, so no truncation rule could put all five in range —
   * truncating fixes the long ones and can do nothing for the short ones.
   */
  metaDescription: string;
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
      "Understanding Bioidentical Hormones: What They Are and How They Differ",
    titleSegment: "Understanding Bioidentical Hormones",
    metaDescription:
      "Bioidentical hormones are molecularly identical to the hormones the body produces naturally. What that means, and how it differs from conventional HRT.",
    category: "Hormones",
    date: "2026-03-15",
    readTime: "6 min read",
    intro:
      "Bioidentical hormones have the same molecular structure as the hormones the body produces. This article explains what that means, how it differs from older forms of hormone therapy, and what responsible prescribing involves.",
    image: "/images/articles/understanding-bhrt.webp",
    content: `
<h2>What makes a hormone "bioidentical"?</h2>
<p>The term <em>bioidentical</em> describes a hormone's molecular structure, not its source. Bioidentical estradiol has the same three-dimensional shape as the estradiol the ovaries produce. Structure matters because hormones act on receptors shaped to receive particular molecules, and the fit influences both how a hormone signals and how the body metabolizes it.</p>
<p>Conventional hormone replacement therapy (HRT) has historically relied on hormones that differ in structure from the body's own. Conjugated equine estrogens, derived from the urine of pregnant mares, and medroxyprogesterone acetate are functional analogs, not molecular matches. They bind the same receptors but produce somewhat different downstream effects.</p>

<blockquote>Bioidentical therapy is prescribed to the individual: hormone levels, symptoms and health history determine the plan, not a standard protocol.</blockquote>

<h2>How does bioidentical progesterone differ from synthetic progestins?</h2>
<p>The distinction with the most clinical weight is between micronized progesterone and synthetic progestins. The Women's Health Initiative (WHI), whose 2002 results raised widespread concern about hormone therapy, studied conjugated equine estrogens combined with medroxyprogesterone acetate. It did not test bioidentical hormones.</p>
<p>Later observational research, including the French E3N cohort, found different breast cancer risk associations for estrogen combined with micronized progesterone than for estrogen combined with synthetic progestins. Observational findings cannot establish cause, and The Menopause Society's 2022 position statement remains the most complete summary of how the evidence is weighed today.</p>

<h2>What is bioidentical hormone therapy used for?</h2>
<p>Bioidentical hormone therapy is most often used for symptoms of perimenopause and postmenopause, including:</p>
<ul>
  <li>Vasomotor symptoms (hot flashes and night sweats)</li>
  <li>Sleep disrupted by night sweats</li>
  <li>Vaginal dryness and other genitourinary changes</li>
  <li>Prevention of bone loss</li>
</ul>
<p>It is not appropriate for everyone, and candidacy depends on the individual's medical history. A thorough intake, baseline labs and an ongoing monitoring plan are the core of responsible prescribing, and the decision belongs with a provider who knows the whole picture.</p>

<h2>What does careful management look like?</h2>
<p>Management begins with baseline labs, typically including estradiol, progesterone, testosterone, DHEA-S and thyroid markers. Doses are individualized from lab values and symptom patterns, and levels are rechecked at intervals so that treatment is adjusted to the person, not left at a standard dose.</p>
<p>Response varies from person to person, which is why follow-up visits are part of the plan from the start. The aim is not to restore the hormone levels of a 25-year-old. It is to find the level at which symptoms are manageable while long-term health markers, such as bone density and cardiovascular indicators, are monitored.</p>
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
    ],
  },

  "anti-inflammatory-eating": {
    title: "The Anti-Inflammatory Plate: Eating for Hormonal Balance",
    titleSegment: "Eating for Hormonal Balance",
    metaDescription:
      "What women eat affects hormone levels directly. Which foods support balance during perimenopause, and which ones may be making symptoms worse.",
    category: "Nutrition",
    date: "2026-03-08",
    readTime: "5 min read",
    intro:
      "Diet influences how the body processes hormones. This article covers which foods have evidence behind them during perimenopause, and which may make symptoms harder to manage.",
    image: "/images/articles/anti-inflammatory-eating.webp",
    content: `
<h2>How does the gut affect hormones?</h2>
<p>The digestive system does more than absorb nutrients; it also helps process and excrete hormones. Part of the gut microbiome, sometimes called the estrobolome, produces an enzyme, beta-glucuronidase, that affects how much estrogen is recirculated instead of excreted. When the microbiome is disrupted by antibiotics, a poor diet or chronic stress, estrogen metabolism can change. This is an active area of research.</p>
<p>A diet with varied plant fiber, fermented foods and prebiotics supports a diverse microbiome. That is a dietary foundation, not a supplement protocol.</p>

<h2>Which foods have evidence behind them?</h2>
<p><strong>Cruciferous vegetables</strong> (broccoli, cauliflower, Brussels sprouts, kale) contain indole-3-carbinol and diindolylmethane (DIM), compounds the National Cancer Institute has described for their effects on estrogen metabolism.</p>
<p><strong>Flaxseed</strong> contains lignans, plant compounds that bind weakly to estrogen receptors and may compete with stronger estrogens. A tablespoon of ground flaxseed a day is a common, inexpensive way to include them.</p>
<p><strong>Fatty fish</strong> (salmon, sardines, mackerel) supply omega-3 fatty acids, which are associated with lower markers of systemic inflammation.</p>
<p><strong>Fiber-rich legumes</strong> help bind estrogen in the digestive tract so that more is excreted and less is reabsorbed.</p>

<h2>Why does blood sugar matter for hormones?</h2>
<p>Insulin is itself a hormone. Repeated spikes in blood sugar, from refined carbohydrates, sugary drinks or irregular meals, bring repeated spikes in insulin. Over time, high insulin lowers sex hormone-binding globulin (SHBG), leaving more estrogen and testosterone circulating unbound, which adds to the hormonal variability already present in perimenopause.</p>
<p>Several habits blunt post-meal glucose spikes and reduce demand for insulin: eating protein and fat with each meal, not eating carbohydrates on their own, not skipping breakfast, and walking for 10 to 15 minutes after meals.</p>

<h2>Which foods can make symptoms harder to manage?</h2>
<ul>
  <li><strong>Alcohol:</strong> impairs the liver's metabolism of estrogen. Even moderate drinking is linked to higher circulating estradiol in postmenopausal women.</li>
  <li><strong>Refined sugar and flour:</strong> drive the glucose and insulin spikes described above.</li>
  <li><strong>Trans fats:</strong> promote inflammation and are best avoided.</li>
</ul>

<h2>What does a hormone-supportive plate look like?</h2>
<p>A practical guide: half the plate non-starchy vegetables, especially cruciferous ones; a quarter protein, such as fish, poultry or legumes; and a quarter complex carbohydrates, such as sweet potato, quinoa or lentils. Add a tablespoon of olive oil, avocado or ground flaxseed. Eating at consistent times, with less grazing between meals, keeps insulin from staying elevated all day.</p>
<p>This is not a restrictive diet. It is a structure that supports the systems hormones depend on.</p>
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
    title:
      "Sleep and Hormones in Midlife: How Each Affects the Other",
    titleSegment: "Sleep and Hormone Health",
    metaDescription:
      "During deep sleep the body produces and regulates key hormones. Why disrupted sleep undermines other efforts to support hormone health in midlife.",
    category: "Lifestyle",
    date: "2026-02-28",
    readTime: "7 min read",
    intro:
      "Several key hormones are produced and regulated during deep sleep, and the hormonal changes of perimenopause can in turn disrupt sleep. This article explains the connection and the habits with evidence behind them.",
    image: "/images/articles/sleep-hormones.webp",
    content: `
<h2>What happens to hormones during sleep?</h2>
<p>Sleep is active biological maintenance. Several hormone systems run on a sleep-dependent cycle, and disrupted sleep has measurable effects on hormones ranging from thyroid hormones to reproductive hormones.</p>
<p>Growth hormone is released in its largest daily pulse during the first period of deep, slow-wave sleep. It supports tissue repair, fat metabolism, immune function and recovery, and poor sleep reduces its release.</p>

<blockquote>In perimenopause, when hormone levels are already fluctuating, poor sleep compounds the strain.</blockquote>

<h2>How do estrogen and progesterone affect sleep?</h2>
<p>Progesterone acts on the brain's GABA system, which promotes calm and helps with falling asleep. Progesterone often declines before estrogen in perimenopause, and many women notice more trouble falling asleep, more waking during the night and lighter sleep, sometimes before hot flashes begin.</p>
<p>Estrogen influences the serotonin system and other pathways involved in sleep. Night sweats, which follow falling estrogen, break up sleep even in women who fall asleep easily.</p>

<h2>What role does melatonin play?</h2>
<p>Melatonin is best known as the body's signal for sleep, and it also acts as an antioxidant with roles in immune and reproductive health. Production declines with age, and the decline is hastened by light at night, particularly from screens, by irregular sleep schedules and by chronic stress.</p>

<h2>Which sleep habits have evidence behind them?</h2>
<ul>
  <li><strong>Consistent sleep and wake times,</strong> including weekends, are the strongest anchor for the body clock.</li>
  <li><strong>Light in the first hour of the day,</strong> from daylight or a 10,000-lux light box in winter, sets the body clock and times melatonin release for the evening.</li>
  <li><strong>Less screen time before bed.</strong> Screen light delays melatonin release, even at low brightness.</li>
  <li><strong>A cool bedroom.</strong> Core body temperature has to fall for deep sleep to begin and continue, which matters more for women with night sweats.</li>
  <li><strong>Less alcohol in the evening.</strong> Alcohol helps with falling asleep but fragments the second half of the night by suppressing REM sleep and raising body temperature.</li>
</ul>

<h2>What if sleep problems persist?</h2>
<p>Sleep that stays poor despite consistent habits deserves evaluation. Night sweats, thyroid dysfunction and nighttime swings in blood sugar are among the contributors an evaluation looks for, and testing that includes a thyroid panel and reproductive hormones is a reasonable place to start when disrupted sleep is significant and long-standing.</p>
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
    title:
      "Endocrine Disruptors at Home: What They Are and Simple Swaps",
    titleSegment: "Hormone Disruptors at Home",
    metaDescription:
      "From plastics to cleaning products, everyday household items can interfere with the endocrine system. The biggest culprits, and simple replacements.",
    category: "Detox",
    date: "2026-02-20",
    readTime: "4 min read",
    intro:
      "Some chemicals in plastics, cosmetics and household products can interfere with the endocrine system. This article covers the best-studied examples and practical ways to reduce exposure.",
    image: "/images/articles/endocrine-disruptors.webp",
    content: `
<h2>What is an endocrine disruptor?</h2>
<p>An endocrine disruptor is a chemical that interferes with the body's hormone signaling, by mimicking a hormone (most often estrogen), blocking hormone receptors, or altering how hormones are made and broken down. The Endocrine Society defines them as "exogenous chemicals, or mixtures of chemicals, that interfere with any aspect of hormone action."</p>
<p>They are not confined to industrial sites. Many are present in everyday consumer products at levels that endocrinologists and toxicologists have flagged as a concern. For women going through the hormonal changes of perimenopause and menopause, reducing avoidable exposure is a reasonable, practical step.</p>

<h2>What are BPA and its substitutes?</h2>
<p>Bisphenol A (BPA) is a synthetic estrogen used to harden plastics and to line food and drink cans. It leaches into food and drink, especially when heated, and binds to estrogen receptors. U.S. biomonitoring through the National Health and Nutrition Examination Survey has detected BPA in the urine of more than 90% of adults tested.</p>
<p>Many "BPA-free" products use bisphenol S or bisphenol F instead, which appear to have similar estrogenic activity. Reducing plastic contact with food overall is more effective than switching to a different bisphenol.</p>
<p><strong>Swaps:</strong> glass, stainless steel or ceramic food storage; no microwaving in plastic; fresh or jarred food in place of canned where practical.</p>

<h2>What are phthalates?</h2>
<p>Phthalates are chemicals that make PVC flexible and carry fragrance in personal care products. They are anti-androgenic, interfering with testosterone and related hormone signaling. Common sources include vinyl flooring, food packaging film, nail polish, hair spray and synthetic fragrance.</p>
<p>The National Institute of Environmental Health Sciences classifies phthalates as endocrine-disrupting compounds, and research into their effects on reproductive hormones continues.</p>
<p><strong>Swaps:</strong> fragrance-free personal care products; products labeled phthalate-free; wood or tile flooring in place of vinyl where possible; glass or stainless steel in place of plastic wrap.</p>

<h2>What are parabens?</h2>
<p>Parabens (methylparaben, ethylparaben, propylparaben and butylparaben) are preservatives used in cosmetics, lotions and some foods. They are weakly estrogenic and absorbed through the skin. Published research has detected intact parabens in samples of breast tissue; that finding raised questions about their relevance to estrogen-sensitive conditions but did not show that they cause disease.</p>
<p><strong>Swaps:</strong> check cosmetic and personal care labels, since many brands now make paraben-free products. The Environmental Working Group's Skin Deep database lets products be searched by ingredient.</p>

<h2>Which pesticides act like estrogen?</h2>
<p>Organochlorine pesticides, including DDT and its breakdown products, lindane and chlordane, are persistent pollutants classed as xenoestrogens: chemicals that behave like estrogen in the body. Many are banned in the United States but remain in soil, water and body fat because they bind to fat.</p>
<p>Some pesticides in current use, including the fungicide vinclozolin and the herbicide atrazine, also have documented endocrine-disrupting activity. Washing produce thoroughly reduces dietary exposure, as does choosing organic versions of the crops with the highest residues, which the Environmental Working Group lists each year.</p>

<h2>Where is the best place to start?</h2>
<blockquote>The aim is not a chemical-free life. It is a lower overall exposure, reduced step by step where it matters most.</blockquote>
<p>Start with items used daily that have the most direct contact with the body: food storage, drinking containers, skin care and cleaning products. Small, consistent changes add up over months.</p>
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
    title:
      "Early Signs of Perimenopause: Seven Common Changes",
    titleSegment: "7 Early Signs of Perimenopause",
    metaDescription:
      "Perimenopause can begin years before periods stop. The subtle signals the body sends when hormones start shifting, and what is worth doing about them.",
    category: "Hormones",
    date: "2026-02-12",
    readTime: "5 min read",
    intro:
      "Perimenopause can begin years before periods stop. This article describes seven of the most common early changes, what drives each, and when an evaluation makes sense.",
    image: "/images/articles/perimenopause-signs.webp",
    content: `
<h2>When does perimenopause begin?</h2>
<p>Perimenopause, the transition leading up to menopause, usually begins in a woman's mid-to-late forties and can start in the late thirties. Menopause is defined clinically as 12 consecutive months without a menstrual period; the years of fluctuating hormones before that final period are perimenopause.</p>
<p>The STRAW+10 staging system (Stages of Reproductive Aging Workshop), developed by reproductive specialists and endorsed by major medical societies, describes the stages of this transition, based mainly on changes in the menstrual cycle and supported by hormone measurements.</p>

<h2>1. How do menstrual cycles change?</h2>
<p>Cycles often shorten first, as ovarian reserve declines and follicles develop earlier; a cycle that was 28 days may become 21 to 25 days. Over time cycles become more variable, some short, some long, some skipped. STRAW+10 marks the early menopausal transition by a persistent difference of seven days or more between consecutive cycles. Heavier bleeding is also common as the balance between estrogen and progesterone becomes erratic. A significant change in cycle pattern that lasts more than two to three months warrants evaluation; the red flags are covered on the irregular periods page.</p>

<h2>2. Why does sleep change?</h2>
<p>For many women, disrupted sleep is the first change that noticeably affects daily life, often before hot flashes begin. Progesterone has a calming effect on the nervous system through the brain's GABA system, and as it declines, that effect weakens. The result can be trouble falling asleep, waking in the early hours, and lighter sleep overall.</p>

<h2>3. Why do mood and anxiety change?</h2>
<p>Estrogen influences the serotonin, dopamine and GABA systems, all of which affect mood. In perimenopause estrogen does not fall in a straight line; it fluctuates erratically, and mood can fluctuate with it. Many women describe feeling more reactive, tearful or anxious than usual. Women with a history of premenstrual or postpartum mood changes appear more sensitive to these fluctuations. Persistent low mood or anxiety warrants care in its own right.</p>

<h2>4. What causes brain fog?</h2>
<p>Word-finding difficulty, short-term memory lapses and trouble concentrating are reported by up to 60% of women during the transition, according to the Study of Women's Health Across the Nation (SWAN). Estrogen supports blood flow and glucose use in the brain, and that support becomes inconsistent as levels fluctuate. Most research suggests cognitive function largely stabilizes once the transition is complete.</p>
<blockquote>Brain fog during perimenopause is a feature of the hormonal transition, and research to date does not link it to long-term cognitive decline.</blockquote>

<h2>5. When do hot flashes start?</h2>
<p>Hot flashes are the best-known symptom of menopause, but they often begin in perimenopause, well before periods stop. Falling estrogen narrows the temperature range the hypothalamus tolerates, so small changes in body temperature trigger a flush. Up to 75% of women in Western populations experience hot flashes or night sweats, and in SWAN they lasted a median of more than seven years.</p>

<h2>6. How do libido and vaginal comfort change?</h2>
<p>Declining estrogen and testosterone, which also falls considerably in the years around menopause, can reduce sexual desire, arousal and vaginal lubrication. Vaginal tissue becomes thinner and less elastic, part of what is now called genitourinary syndrome of menopause (GSM). Unlike hot flashes, which often ease with time, GSM tends to persist or progress without treatment; the options are covered on the vaginal dryness page.</p>

<h2>7. Is joint pain related?</h2>
<p>It can be. Estrogen has anti-inflammatory effects throughout the body, including in joints, and many women notice new or worsening aches in the hands, knees and hips around the transition. Higher inflammatory markers have been documented during perimenopause. Much midlife joint pain has other causes, including osteoarthritis, and the two can overlap, so persistent joint pain deserves its own evaluation.</p>

<h2>When is an evaluation worthwhile?</h2>
<p>When two or more of these changes are affecting sleep, mood or daily life, a hormone evaluation is a reasonable first step. A panel that may include estradiol, progesterone, testosterone, DHEA-S, FSH and thyroid markers gives a clearer picture of where someone is in the transition and whether any treatment is appropriate.</p>
<p>Perimenopause is not a disease. It is a biological transition, and it deserves attention, not just endurance.</p>
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
