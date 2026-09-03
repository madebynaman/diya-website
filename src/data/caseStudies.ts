export type ProjectTheme = 'jahota' | 'talktube' | 'nfhs' | 'tangible';

export interface StudyMedia {
  src: string;
  alt: string;
  caption: string;
  ratio?: string;
  fit?: 'contain' | 'cover';
  baseWidth?: number;
  srcset?: string;
}

export interface StudyPoint {
  title: string;
  body: string;
}

export interface StudyMetric {
  value: string;
  label: string;
}

export interface CardMedia {
  src: string;
  alt: string;
  width?: number;
}

export interface CaseStudyCard {
  title: string;
  facts: string[];
  primary: CardMedia;
  secondary: CardMedia;
  layout: 'forward' | 'reverse';
}

export interface StudySection {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  metrics?: StudyMetric[];
  points?: StudyPoint[];
  bullets?: string[];
  media?: StudyMedia[];
  mediaLayout?: 'single' | 'pair' | 'triptych';
  note?: string;
}

export interface CaseStudy {
  slug: string;
  theme: ProjectTheme;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  summary: string;
  scope: string[];
  hero: StudyMedia;
  overview: string[];
  metrics?: StudyMetric[];
  sections: StudySection[];
  card: CaseStudyCard;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'jahota-rural-ai',
    theme: 'jahota',
    title: 'Salesforce × Jahota: Integrating AI in rural India',
    shortTitle: 'Rural AI in Jahota',
    category: 'Field research · AI systems',
    year: '2025',
    summary:
      'A field-led service system that embeds AI support into the workflows of frontline health and administrative workers—without disrupting the communities they serve.',
    scope: ['Primary research', 'Systems mapping', 'Interaction design', 'Pilot testing'],
    card: {
      title: 'AI that fits rural workflows—not the other way around.',
      facts: ['7 days of on-ground research', 'Healthcare · education · governance'],
      primary: {
        src: '/images/jahota-system.webp',
        alt: 'AI-assisted rural healthcare system shown across a tablet, training sheets, and information brochure',
        width: 1024,
      },
      secondary: {
        src: '/images/jahota-field.webp',
        alt: 'Field research photographs from schools, health centres, and community spaces in Jahota',
        width: 1100,
      },
      layout: 'forward',
    },
    hero: {
      src: '/images/jahota-system.webp',
      alt: 'HCDS tablet, training sheets, and an information brochure presented as one rural service system',
      caption: 'The proposed HCDS tablet and fieldworker training system',
      ratio: '1.2 / 1',
      fit: 'contain',
      baseWidth: 1024,
    },
    overview: [
      'This project explored how AI could support rural service delivery without intervening directly in villagers’ daily practices. The opportunity was not to add another tool for citizens, but to reduce the administrative load carried by the frontline workers they already trust.',
      'The proposed system places AI-assisted support inside existing PHC and Anganwadi workflows: one point of data entry, clearer supervision, structured training, and a feedback path from the field back into the system.',
    ],
    metrics: [
      { value: '7 days', label: 'of on-ground research in Jahota' },
      { value: '3 sectors', label: 'healthcare, education, and governance' },
      { value: '50+', label: 'causal loops used in synthesis' },
    ],
    sections: [
      {
        id: 'research',
        eyebrow: 'Context',
        title: 'Start with the village, not the technology.',
        intro: [
          'Jahota, in Jaipur district’s Amber Tehsil, was selected for its established governance and sustainability systems. It is recognised as Rajasthan’s first ODF-Plus village, a UNICEF Model Village practising all 19 Local SDGs, and a planned growth centre in the Jaipur Development Authority Master Plan.',
          'Across seven days, semi-formal interviews, observation, and shadowing revealed how healthcare, education, and local governance actually operate—and where the burden of fragmented tools lands.',
        ],
        media: [
          {
            src: '/images/jahota-field.webp',
            alt: 'A collage of visits to schools, health centres, and community spaces in Jahota',
            caption: 'Field visits across public services in Jahota',
            ratio: '1.18 / 1',
            fit: 'cover',
          },
        ],
        points: [
          {
            title: 'Infrastructure shapes trust',
            body: 'Gaps in public schools and Anganwadis—from unreliable utilities to missing labs—push families toward private services even when the cost is higher.',
          },
          {
            title: 'Paperwork displaces care',
            body: 'Anganwadi workers maintain nearly 26 registers, leaving less time for child engagement, caregiving, and educational activity.',
          },
          {
            title: 'Healthcare records are fragmented',
            body: 'ANMs move between apps and physical registers, repeating documentation while trying to maintain continuity of care.',
          },
          {
            title: 'Availability changes behaviour',
            body: 'Restricted public-provider hours and perceived differences in responsiveness influence where villagers seek care.',
          },
        ],
      },
      {
        id: 'synthesis',
        eyebrow: 'Synthesis',
        title: 'Map the feedback loops behind the visible friction.',
        intro: [
          'Actor and relationship maps made dependencies across the village visible. More than 50 causal loops were then used to trace how policy, infrastructure, service reliability, trust, and frontline workload reinforce one another.',
          'A recurring cycle emerged: unreliable public services drive people toward private alternatives; reduced public usage further weakens trust and resources; and compliance-heavy administration leaves frontline workers with even less time for service delivery.',
        ],
        media: [
          {
            src: '/images/case-studies/jahota-system-map.webp',
            alt: 'A causal-loop map connecting service reliability, motivation, documentation, trust, and public-system use',
            caption: 'One synthesis view from the wider set of causal loops',
            ratio: '1.69 / 1',
            fit: 'contain',
          },
        ],
      },
      {
        id: 'opportunity',
        eyebrow: 'Opportunity',
        title: 'Reduce repetition while restoring a path for field insight.',
        points: [
          {
            title: 'Repetitive data entry',
            body: 'Capture information once and reuse it across records instead of asking workers to maintain overlapping systems.',
          },
          {
            title: 'Digital confidence',
            body: 'Introduce the workflow through familiar writing behaviours, low-friction interactions, and deliberate training.',
          },
          {
            title: 'Transparent monitoring',
            body: 'Make operational status visible without turning reclaimed time into another layer of surveillance or reporting.',
          },
          {
            title: 'Bottom-up feedback',
            body: 'Give frontline workers a structured way to flag issues and send local knowledge back to supervisors.',
          },
        ],
      },
      {
        id: 'concepts',
        eyebrow: 'Exploration',
        title: 'Move from isolated features to one service system.',
        intro: [
          'Early concepts explored supervisory support, public transparency, hybrid documentation, training, and assistive interfaces. Reviewing them as a connected system—not a list of features—led to a single fieldworker workflow supported by a tablet, training materials, and supervisor views.',
        ],
        media: [
          {
            src: '/images/case-studies/jahota-ideation.webp',
            alt: 'A wide page of hand-drawn concepts for rural service tools, training, and feedback',
            caption: 'Initial concepts across service, training, and interface touchpoints',
            ratio: '16 / 9',
            fit: 'contain',
          },
        ],
      },
      {
        id: 'solution',
        eyebrow: 'Final solution',
        title: 'One field entry. One shared source of truth.',
        intro: [
          'The proposed Healthcare Data Collection System (HCDS) tablet becomes the single point of data entry for fieldworkers. Its portable form supports village visits, while a larger screen and stylus retain the familiarity of writing on paper.',
          'Entries save and sync into a central system, auto-populate the records that previously required duplicate work, and become visible to ANMs and supervisors through unified dashboards.',
        ],
        points: [
          {
            title: 'From three entries to one',
            body: 'A single input replaces the repeated documentation spread across paper and digital systems.',
          },
          {
            title: 'Familiar interaction',
            body: 'Stylus input and a tablet-sized canvas bridge established writing habits with a digital workflow.',
          },
          {
            title: 'Shared visibility',
            body: 'Fieldworkers, ANMs, and supervisors work from the same synced information rather than separate records.',
          },
        ],
        media: [
          {
            src: '/images/jahota-tablet.webp',
            alt: 'The HCDS interface running on a tablet in a protective field case',
            caption: 'Portable tablet format for village visits',
            ratio: '1.29 / 1',
            fit: 'cover',
          },
          {
            src: '/images/case-studies/jahota-home-screen.webp',
            alt: 'Annotated HCDS home screen with health-service categories and task entry points',
            caption: 'A category-led home screen',
            ratio: '16 / 9',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/jahota-field-entry.webp',
            alt: 'Annotated HCDS form showing handwriting input, progress, and field verification',
            caption: 'Writing-first field entry and review',
            ratio: '16 / 9',
            fit: 'contain',
          },
        ],
        mediaLayout: 'triptych',
        note: 'The interface screens were AI-generated for rapid prototyping after the system concept and interaction direction were finalised.',
      },
      {
        id: 'testing',
        eyebrow: 'Pilot testing',
        title: 'The first test exposed a review problem.',
        intro: [
          'A pilot session with users similar to the intended fieldworker group tested whether the concept and flow were understandable. Participants tended to enter a response and move straight to “Next,” rarely pausing to review it.',
        ],
        points: [
          {
            title: 'Review was easy to miss',
            body: 'The flow assumed a verification habit that participants did not naturally demonstrate.',
          },
          {
            title: 'Input and preview felt too similar',
            body: 'The distinction between where to write and where to confirm needed stronger hierarchy and language.',
          },
        ],
        media: [
          {
            src: '/images/case-studies/jahota-testing.webp',
            alt: 'Two participants testing the HCDS interface on tablets',
            caption: 'Pilot navigation tests with representative users',
            ratio: '2.97 / 1',
            fit: 'cover',
          },
        ],
      },
      {
        id: 'adoption',
        eyebrow: 'Adoption',
        title: 'A new workflow needs a learning bridge.',
        intro: [
          'A seven-day programme introduces change gradually: paper simulations first, then the device and stylus, followed by guided digital practice and finally complete mock interviews on the tablet.',
          'The system is completed by an ANM dashboard for reviewing field entries, monitoring supplies, and flagging issues—so the new process supports supervision as well as capture.',
        ],
        bullets: [
          'Day 0: orient workers to the change and its purpose',
          'Days 1–2: practise the digital sequence on paper with dummy data',
          'Days 3–5: learn the tablet, stylus, and guided entry flow',
          'Days 6–7: complete peer interviews entirely in the digital workflow',
        ],
        media: [
          {
            src: '/images/case-studies/jahota-training.webp',
            alt: 'A trifold field guide and a stack of training practice sheets',
            caption: 'Training materials that mirror the digital flow',
            ratio: '2.82 / 1',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/jahota-dashboard.webp',
            alt: 'Annotated ANM dashboard for monitoring supplies, field entries, and issues',
            caption: 'A unified view for ANM supervision',
            ratio: '16 / 9',
            fit: 'contain',
          },
        ],
        mediaLayout: 'pair',
      },
      {
        id: 'scale',
        eyebrow: 'Scalability',
        title: 'The model travels further than healthcare.',
        intro: [
          'The core model—single-point entry, portable documentation, supervisor visibility, and structured digital-literacy training—can be adapted for Anganwadi nutrition and growth records or for government-school attendance, meals, assessments, and resource monitoring.',
          'The fields and interface would change by context; the transferable principle is to remove duplicate work without erasing the judgement and trust already present at the frontline.',
        ],
      },
    ],
  },
  {
    slug: 'talktube',
    theme: 'talktube',
    title: 'TalkTube: Designing a conversation-first language-learning experience',
    shortTitle: 'TalkTube',
    category: 'Product concept · Language learning',
    year: '2024',
    summary:
      'A video-led mobile concept that helps learners understand unfamiliar words in context, then practise using them—shifting the goal from lesson completion to conversation.',
    scope: ['Product discovery', 'Primary research', 'Concept development', 'Mobile UI'],
    card: {
      title: 'A conversation-first way to learn a language.',
      facts: ['Video-led learning', 'Context before correctness'],
      primary: {
        src: '/images/talktube-system.webp',
        alt: 'Three TalkTube mobile screens for choosing a language, practising speech, and entering the app',
        width: 1024,
      },
      secondary: {
        src: '/images/talktube-context.webp',
        alt: 'TalkTube mobile screens showing real-world video discovery and contextual word learning',
        width: 1100,
      },
      layout: 'reverse',
    },
    hero: {
      src: '/images/talktube-system.webp',
      alt: 'TalkTube mobile screens for language selection, speaking practice, and onboarding',
      caption: 'TalkTube’s conversation-first mobile experience',
      ratio: '4 / 3',
      fit: 'contain',
      baseWidth: 1024,
    },
    overview: [
      'Many language-learning apps emphasise grammar frameworks, isolated vocabulary, and predefined lesson paths. Learners can memorise words yet still struggle to follow or join a real conversation.',
      'TalkTube proposes a different sequence: watch real-world video, mark unfamiliar words in context, understand them after the video, and reinforce them through short recall activities that require active sentence formation.',
    ],
    metrics: [
      { value: '77%', label: 'of surveyed users said boredom made them stop learning' },
      { value: '63%', label: 'used movies or cartoons to practise a language' },
      { value: '50%', label: 'actively thought in the target language' },
    ],
    sections: [
      {
        id: 'problem',
        eyebrow: 'Problem discovery',
        title: 'Knowing words is not the same as joining a conversation.',
        intro: [
          'The initial hypothesis was that current platforms do not provide a realistic conversation-learning experience. Their typical flow introduces isolated words, repeats them through meaning exercises, then jumps to complete sentences without enough context or scaffolding.',
          'The resulting gap is not only comprehension. Learners become hesitant to speak, lose motivation when lessons feel detached from daily life, and struggle to transfer progress from an app into an actual exchange.',
        ],
        media: [
          {
            src: '/images/case-studies/talktube-affinity-map.webp',
            alt: 'An affinity map of interview observations grouped into learner themes',
            caption: 'Research notes organised into recurring learner themes',
            ratio: '1.45 / 1',
            fit: 'contain',
          },
        ],
      },
      {
        id: 'insights',
        eyebrow: 'Research themes',
        title: 'Context and small wins build confidence.',
        points: [
          {
            title: 'Fear changes participation',
            body: 'Misunderstanding and group settings create anxiety; communication feels safer when correctness is not treated as the only goal.',
          },
          {
            title: 'Rigid lessons create fatigue',
            body: 'Long, lecture-like paths are hard to fit into daily routines and give learners little control over what they practise.',
          },
          {
            title: 'Real conversation self-corrects',
            body: 'Repeated informal exchanges let learners infer meaning and adjust naturally through context.',
          },
          {
            title: 'Familiar media lowers effort',
            body: 'Everyday video and low-pressure practice feel more relevant than isolated, artificial sentences.',
          },
        ],
      },
      {
        id: 'framing',
        eyebrow: 'Framing',
        title: 'Design for the point where motivation begins to slip.',
        intro: [
          'The working persona, Riya, starts with the practical goal of speaking a local language more confidently. Early streaks feel promising, but grammar-heavy lessons fail to translate into real-world confidence. Missing a few days becomes disengagement and eventually the belief that language learning is simply too difficult.',
          'The design question became: how might an existing habit—watching video—turn into lightweight language practice without making every session feel like a formal lesson?',
        ],
      },
      {
        id: 'concepts',
        eyebrow: 'Concept exploration',
        title: 'Three ideas clarified what the product should not become.',
        points: [
          {
            title: 'Object and voice translation',
            body: 'Contextual in the moment, but still focused on isolated vocabulary and required too much interruption during real interactions.',
          },
          {
            title: 'Prompt-based audio conversations',
            body: 'Mixed-language responses reduced immersion and gave learners too few chances to form their own sentences.',
          },
          {
            title: 'Preference-based learning modes',
            body: 'Choice was useful, but mode switching fragmented the experience and quizzes measured recall more than conversation.',
          },
        ],
        media: [
          {
            src: '/images/case-studies/talktube-scan-concept.webp',
            alt: 'Mobile concept screens for scanning an object and seeing its translation',
            caption: 'Object-based translation',
            ratio: '1.44 / 1',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/talktube-voice-concept.webp',
            alt: 'Mobile concept screens for prompting and receiving a short audio conversation',
            caption: 'Prompt-based audio practice',
            ratio: '1.44 / 1',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/talktube-modes-concept.webp',
            alt: 'Mobile concept screens for choosing learning modes and reviewing flagged words',
            caption: 'Preference-based modes',
            ratio: '1.44 / 1',
            fit: 'contain',
          },
        ],
        mediaLayout: 'triptych',
      },
      {
        id: 'proposition',
        eyebrow: 'Value proposition',
        title: 'Use video as the context layer, not the reward after a lesson.',
        intro: [
          'TalkTube does not position itself as another sequence of lessons. It helps people notice and understand new words while watching content they already care about, then asks them to use those words in small, focused activities.',
          'The model keeps practice portable, reduces the need for long dedicated sessions, and makes sentence formation—not passive recall—the active part of the loop.',
        ],
      },
      {
        id: 'experience',
        eyebrow: 'Final experience',
        title: 'Watch. Mark a doubt. Practise the words that mattered.',
        points: [
          {
            title: 'Calibrate the starting point',
            body: 'Capture known languages, the target language, and current proficiency so the experience avoids needless repetition or overload.',
          },
          {
            title: 'Choose relevant video',
            body: 'Browse by interest or recommendation rather than following one rigid lesson sequence.',
          },
          {
            title: 'Keep context attached',
            body: '“Ask a Doubt” lets learners mark unfamiliar words during a video, review their meaning afterward, and use them in a follow-up activity.',
          },
        ],
        media: [
          {
            src: '/images/case-studies/talktube-onboarding.webp',
            alt: 'TalkTube onboarding screens for known language, target language, and proficiency',
            caption: 'Language and proficiency setup',
            ratio: '1.45 / 1',
            fit: 'contain',
          },
          {
            src: '/images/talktube-context.webp',
            alt: 'TalkTube screens for browsing videos, filtering content, and marking a word while watching',
            caption: 'Interest-led discovery and Ask a Doubt',
            ratio: '1.46 / 1',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/talktube-practice.webp',
            alt: 'TalkTube practice screens for recalling a word, checking meaning, and using it in a sentence',
            caption: 'Short recall and sentence-building activities',
            ratio: '1.45 / 1',
            fit: 'contain',
          },
        ],
        mediaLayout: 'triptych',
      },
      {
        id: 'next',
        eyebrow: 'Next iteration',
        title: 'Make the loop adapt without making it heavier.',
        bullets: [
          'Adjust difficulty in response to learner performance',
          'Recommend videos and exercises from progress and interests',
          'Add richer examples and usage context to Ask a Doubt',
          'Make progress visible without relying only on streak pressure',
        ],
      },
    ],
  },
  {
    slug: 'nfhs-fieldwork-system',
    theme: 'nfhs',
    title: 'Reimagining NFHS: A human-centred field-research system',
    shortTitle: 'NFHS fieldwork system',
    category: 'Service design · Connected fieldwork',
    year: '2025',
    summary:
      'A unified fieldwork ecosystem that connects an adaptive questionnaire, a tablet-first CAPI interface, IoT-enabled biomarker tools, and reporting in one continuous workflow.',
    scope: ['Field research', 'Service design', 'Product UI', 'Connected hardware'],
    card: {
      title: 'One connected fieldwork system for NFHS.',
      facts: ['CAPI + IoT biomarker tools', 'Designed around fieldworker reality'],
      primary: {
        src: '/images/nfhs-system.webp',
        alt: 'Redesigned NFHS fieldwork dashboard displayed on a tablet',
        width: 1024,
      },
      secondary: {
        src: '/images/nfhs-field.webp',
        alt: 'A fieldworker taking a biomarker measurement during an in-home health survey',
        width: 1100,
      },
      layout: 'forward',
    },
    hero: {
      src: '/images/nfhs-system.webp',
      alt: 'A redesigned NFHS task dashboard displayed on a tablet',
      caption: 'The proposed tablet-first CAPI dashboard',
      ratio: '1.67 / 1',
      fit: 'contain',
      baseWidth: 1024,
    },
    overview: [
      'Large-scale surveys such as the National Family Health Survey depend on reliable data collection, but the current workflow asks fieldworkers to coordinate multiple tools, lengthy questionnaires, manual biomarker handling, and delayed supervision.',
      'This project treats those frictions as one system problem. The proposal connects a redesigned CAPI interface with adaptive survey logic, IoT-enabled biomarker instruments, a thermal printer, and embedded communication—reducing hand-offs without compromising fieldworker judgement or data quality.',
    ],
    sections: [
      {
        id: 'current-flow',
        eyebrow: 'Current fieldwork',
        title: 'Every hand-off adds cognitive and physical load.',
        intro: [
          'The move from PAPI (Pen and Paper Personal Interview) to CAPI (Computer Assisted Personal Interview) digitised core survey entry, but supporting communication, quality checks, biomarker tracking, and reference material remained fragmented.',
          'Fieldworkers still move between devices, external messaging, manual handling, and memory. Data reaches supervisors at the end of the day, while central quality checks can take several more days.',
        ],
        media: [
          {
            src: '/images/nfhs-field.webp',
            alt: 'A fieldworker taking a biomarker measurement during an in-home NFHS visit',
            caption: 'Biomarker collection inside a respondent’s home',
            ratio: '1.38 / 1',
            fit: 'cover',
          },
          {
            src: '/images/case-studies/nfhs-current-system.webp',
            alt: 'Diagram of the current CAPI workflow split across software, questionnaires, instruments, and informal messaging',
            caption: 'Current information flow and its disconnected modules',
            ratio: '2.75 / 1',
            fit: 'contain',
          },
        ],
        mediaLayout: 'pair',
      },
      {
        id: 'research',
        eyebrow: 'Primary research',
        title: 'Observe the survey across institutions and inside the home.',
        intro: [
          'Field visits and stakeholder interviews across key institutions in Jaipur covered national, state, and public-sector perspectives as well as the on-ground realities of survey execution. The research exposed constraints in coordination, infrastructure, device reliability, and day-to-day usability.',
        ],
        points: [
          {
            title: 'Delayed visibility',
            body: 'End-of-day transfer and multi-day quality checks slow feedback, corrections, and field decisions.',
          },
          {
            title: 'Unreliable devices',
            body: 'Overheating, hanging, and malfunctioning interrupt interviews and undermine confidence in the system.',
          },
          {
            title: 'Fieldworker fatigue',
            body: 'Long hours, heavy workloads, and physically demanding environments compound into lower motivation and higher error risk.',
          },
          {
            title: 'Rigid questionnaires',
            body: 'Limited skip logic, repetitive questions, and no qualitative notes extend interviews and remove context.',
          },
          {
            title: 'Outdated software',
            body: 'Numeric question codes, weak hierarchy, unclear errors, and English-only response categories increase translation and navigation effort.',
          },
          {
            title: 'Lost flexibility',
            body: 'Compared with paper, the digital flow makes notes, quick review, and physical verification harder.',
          },
        ],
      },
      {
        id: 'problem',
        eyebrow: 'Problem framing',
        title: 'Top-down digitisation did not become an integrated workflow.',
        intro: [
          'Rigid hierarchies limit bottom-up communication, so field conditions and feedback reach decision-makers slowly. At the same time, the technology introduced from the top does not adequately reflect local workflows, constraints, or user capabilities.',
          'The result is a system where software, questionnaire logic, biomarker procedures, and communication each add friction—and where operational fatigue can directly affect the quality and reliability of collected data.',
        ],
      },
      {
        id: 'ecosystem',
        eyebrow: 'System proposal',
        title: 'Turn CAPI into the hub for software, hardware, and communication.',
        intro: [
          'The proposed ecosystem replaces manual hand-offs with end-to-end integration. Questionnaires, updates, protocols, field communication, and quality assurance sit inside one software layer. Connected biomarker instruments send measurements directly to CAPI, while a thermal printer produces reports, labels, and pamphlets from the same workflow.',
        ],
        media: [
          {
            src: '/images/case-studies/nfhs-unified-system.webp',
            alt: 'Diagram of a unified CAPI ecosystem connected to biomarker instruments, a printer, questionnaires, protocols, and quality assurance',
            caption: 'The proposed unified digital ecosystem',
            ratio: '2.6 / 1',
            fit: 'contain',
          },
          {
            src: '/images/nfhs-kit.webp',
            alt: 'System diagram connecting the CAPI tablet, biomarker instruments, and a thermal printer',
            caption: 'Connected hardware inside the fieldwork loop',
            ratio: '1.78 / 1',
            fit: 'contain',
          },
        ],
        mediaLayout: 'pair',
      },
      {
        id: 'software',
        eyebrow: 'CAPI redesign',
        title: 'Make the next task obvious before adding more data.',
        intro: [
          'A tablet-first form factor is better suited to in-home visits where space, power, and mobility are limited. The interface uses modular sections and a task-first dashboard, bringing interviews, schedules, feedback, resources, and settings into one place.',
          'Readable question text replaces numeric-only references, contextual errors explain what needs attention, progress becomes visible, and local-language switching reduces real-time translation effort.',
        ],
        media: [
          {
            src: '/images/case-studies/nfhs-legacy-interface.webp',
            alt: 'The legacy CSPro interface with dense controls and an out-of-range error',
            caption: 'Before: dense CSPro entry and unclear feedback',
            ratio: '1.94 / 1',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/nfhs-questionnaire.webp',
            alt: 'The redesigned tablet questionnaire with a list of readable questions and completion states',
            caption: 'After: readable, modular questionnaire entry',
            ratio: '1.67 / 1',
            fit: 'contain',
            srcset:
              '/images/case-studies/nfhs-questionnaire-1200.webp 1200w, /images/case-studies/nfhs-questionnaire.webp 1800w',
          },
          {
            src: '/images/case-studies/nfhs-software-detail.webp',
            alt: 'Annotated redesigned CAPI interface with interview navigation, response input, and review states',
            caption: 'Integrated interview and review workflow',
            ratio: '2.4 / 1',
            fit: 'contain',
          },
        ],
        mediaLayout: 'triptych',
      },
      {
        id: 'hardware',
        eyebrow: 'Connected hardware',
        title: 'Redesign the stadiometer around setup, transport, and transfer.',
        intro: [
          'The existing stadiometer requires time-consuming assembly and disassembly. The proposal uses a telescopic form that collapses for transport, then extends and locks quickly inside a respondent’s home.',
          'An ultrasonic sensor calculates height, “Lock Height” freezes the reading, and “Send to CAPI” transfers it directly into the interview—removing manual re-entry.',
        ],
        points: [
          {
            title: 'Extend',
            body: 'Pull the telescopic structure from its collapsed state to full height.',
          },
          {
            title: 'Position',
            body: 'Lift and lock the sensor plate parallel to the floor.',
          },
          {
            title: 'Measure',
            body: 'Calculate height from the sensor-to-head distance and the known device height.',
          },
          {
            title: 'Transfer',
            body: 'Lock the reading and send it directly to CAPI.',
          },
        ],
        media: [
          {
            src: '/images/case-studies/nfhs-existing-stadiometer.webp',
            alt: 'Annotated existing NFHS stadiometer with separate pieces and transport case',
            caption: 'Existing field stadiometer',
            ratio: '1.37 / 1',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/nfhs-proposed-stadiometer.webp',
            alt: 'Exploded and assembled views of the proposed telescopic IoT-enabled stadiometer',
            caption: 'Proposed telescopic form and controls',
            ratio: '1.56 / 1',
            fit: 'contain',
          },
        ],
        mediaLayout: 'pair',
      },
      {
        id: 'questionnaire',
        eyebrow: 'Adaptive questionnaire',
        title: 'Shorten the interview without removing fieldworker judgement.',
        intro: [
          'Auto-skip logic, grouped subcategories, and prioritised questions adapt the flow to each respondent while maintaining data integrity. Multilingual responses reduce translation overhead; manual skips and qualitative notes return some of the flexibility that was lost in the shift away from paper.',
        ],
        media: [
          {
            src: '/images/case-studies/nfhs-questionnaire-map.webp',
            alt: 'A branching questionnaire map showing skip logic across household and individual survey sections',
            caption: 'Adaptive logic across questionnaire branches',
            ratio: '2.11 / 1',
            fit: 'contain',
          },
        ],
      },
      {
        id: 'flow',
        eyebrow: 'Proposed fieldwork flow',
        title: 'One continuous path from introduction to report.',
        intro: [
          'The proposed interviewer flow places household selection, interview entry, biomarker initialisation, measurement capture, review, and output inside one connected sequence. The goal is not only fewer screens—it is fewer moments where a fieldworker has to remember which tool owns the next step.',
        ],
        media: [
          {
            src: '/images/case-studies/nfhs-fieldwork-flow.webp',
            alt: 'Storyboard of a fieldworker conducting an NFHS visit using the connected tablet and biomarker workflow',
            caption: 'The proposed end-to-end fieldwork sequence',
            ratio: '1.41 / 1',
            fit: 'contain',
          },
        ],
      },
      {
        id: 'learnings',
        eyebrow: 'Key learnings',
        title: 'Integration only works when it survives field conditions.',
        points: [
          {
            title: 'Design decisions meet physical reality',
            body: 'Space, power, time, and connectivity make portability, offline capability, and low setup effort fundamental—not edge cases.',
          },
          {
            title: 'Operational friction becomes data risk',
            body: 'Context switching and fatigue increase errors; simplifying the workflow supports both wellbeing and accuracy.',
          },
          {
            title: 'Automation needs an escape hatch',
            body: 'System logic improves speed, but manual skips, qualitative notes, and clear feedback remain essential to trust.',
          },
        ],
      },
    ],
  },
  {
    slug: 'tangible-data',
    theme: 'tangible',
    title: 'Tangible data representation',
    shortTitle: 'Tangible data',
    category: 'Data storytelling · Material craft',
    year: '2024',
    summary:
      'A dataset about marriage in urban Odisha translated into crochet, using Sambalpuri-inspired colour and pattern to make social differences visible through material and touch.',
    scope: ['Data analysis', 'Narrative design', 'Visual encoding', 'Crochet'],
    card: {
      title: '522 data points. 1,820 stitches. One tactile story.',
      facts: ['10 hours of crocheting', 'Data translated into colour + stitch'],
      primary: {
        src: '/images/tangible-object.webp',
        alt: 'Black, white, and red crocheted cushion translating marriage data into a tactile pattern',
        width: 1300,
      },
      secondary: {
        src: '/images/tangible-language.webp',
        alt: 'Concept board connecting crochet references to the final red, black, and white pattern system',
        width: 1100,
      },
      layout: 'reverse',
    },
    hero: {
      src: '/images/tangible-object.webp',
      alt: 'A black, white, and red crocheted cushion encoding marriage data in its pattern',
      caption: 'The completed hand-crocheted data artefact',
      ratio: '1.13 / 1',
      fit: 'cover',
      baseWidth: 1300,
    },
    overview: [
      'The brief asked for a dataset to be translated into a physical form through metaphorical storytelling rather than a conventional chart. The selected data covered age at marriage, literacy, marital duration, gender, and marital status in urban Odisha.',
      'Crochet provided both a personally familiar making process and a tactile encoding system. Sambalpuri-inspired pattern and colour grounded the artefact in the region represented by the data.',
    ],
    metrics: [
      { value: '522', label: 'data points translated' },
      { value: '1,820', label: 'crochet stitches made by hand' },
      { value: '10 hours', label: 'spent crocheting the final artefact' },
    ],
    sections: [
      {
        id: 'data',
        eyebrow: 'Understanding the data',
        title: 'Reduce the dataset to the variables the story needs.',
        intro: [
          'The dataset was cleaned in Microsoft Excel, retaining variables relevant to differences in marital outcomes: age group at marriage, gender, literacy level, duration, marital status, and urban residence within Odisha.',
          'The analysis focused on the literate population. It found the highest number of marriages for men at ages 24–25 and for women at ages 18–19, then compared outcomes at those peak ages.',
        ],
        media: [
          {
            src: '/images/case-studies/tangible-dataset.webp',
            alt: 'A spreadsheet view of the cleaned marriage dataset used in the project',
            caption: 'The source data after cleaning and selection',
            ratio: '2.25 / 1',
            fit: 'contain',
          },
        ],
        note: 'The source case study records 6,128 men in the 24–25 peak group and 1,713 women in the 18–19 peak group.',
      },
      {
        id: 'narrative',
        eyebrow: 'Building the narrative',
        title: 'Use a local material language without making the data decorative.',
        intro: [
          'Because the dataset represents urban Odisha, the visual language draws from Sambalpuri pattern—an established and recognisable craft tradition of the region. Crochet turned that reference into a physical system of repeatable units.',
          'Material constraints required some values to be rounded, but the translation was checked so the overall relationships and trends remained legible.',
        ],
        media: [
          {
            src: '/images/tangible-language.webp',
            alt: 'A concept board connecting crochet references with the final red, black, and white pattern system',
            caption: 'From material references to a culturally grounded pattern language',
            ratio: '1.78 / 1',
            fit: 'contain',
          },
        ],
      },
      {
        id: 'encoding',
        eyebrow: 'Conceptualisation',
        title: 'Let colour and stitch carry the categories.',
        intro: [
          'Data points were colour-coded, then translated into stitch counts. Black and white encode outcomes within the female group, while red and white encode outcomes within the male group. The repeated motifs let each side remain distinct while still belonging to one artefact.',
        ],
        media: [
          {
            src: '/images/case-studies/tangible-female-encoding.webp',
            alt: 'Diagram showing how black and white crochet stitches encode female marriage outcomes',
            caption: 'Female-group encoding',
            ratio: '1.55 / 1',
            fit: 'contain',
          },
          {
            src: '/images/case-studies/tangible-male-encoding.webp',
            alt: 'Diagram showing how red and white crochet stitches encode male marriage outcomes',
            caption: 'Male-group encoding',
            ratio: '1.55 / 1',
            fit: 'contain',
          },
        ],
        mediaLayout: 'pair',
      },
      {
        id: 'outcome',
        eyebrow: 'Outcome',
        title: 'A chart you can hold.',
        intro: [
          'The final cushion brings 522 data points into 1,820 hand-made stitches. What would normally sit behind axes and legends becomes visible as weight, repetition, contrast, and texture—turning a statistical difference into an object that invites closer looking.',
        ],
        media: [
          {
            src: '/images/tangible-object.webp',
            alt: 'The finished crocheted cushion viewed straight on against a neutral backdrop',
            caption: 'The completed tactile data representation',
            ratio: '1.13 / 1',
            fit: 'cover',
            baseWidth: 1300,
          },
        ],
      },
    ],
  },
];

export const caseStudyBySlug = new Map(caseStudies.map((study) => [study.slug, study]));

export const projectPath = (slug: string) => `/projects/${slug}`;
