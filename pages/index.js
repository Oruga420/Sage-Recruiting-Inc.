import Head from 'next/head';
import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const summaryText =
  'AI Solutions Architect with a strong background in Python, Cloud Infrastructure (GCP, AWS, Vercel), and Agentic Workflows. Experienced in taking complex GenAI products from concept to production in regulated environments, having architected over 120 GenAI applications and 90+ chatbots. Proven track record of driving AI adoption from 47% to 97% and saving over $1M USD and 20,000 man-hours through automation and RAG-based systems. Passionate about mentoring developers and translating ambiguity into technical direction.';

const expertise = [
  'Python',
  'Next.js',
  'SQL',
  'Salesforce Development',
  'Generative AI',
  'LLMs (OpenAI, Anthropic, Gemini)',
  'RAG Pipelines',
  'LangChain',
  'Vector Databases',
  'Agentic Workflows',
  'MCP Servers',
  'GCP',
  'AWS',
  'Vercel',
  'CI/CD',
  'QA Engineering',
];

const roles = [
  {
    title: 'AI Solutions Architect',
    company: 'Assent',
    dates: 'Feb 2025 - Present',
    points: [
      'Spearheaded the architecture of a secure GenAI stack for a regulated compliance platform using Python, GCP, AWS, and models like OpenAI and Anthropic.',
      'Developed Agentic Workflows and custom MCP servers that automate complex multi-step processes, achieving over 20,000 man-hours in savings within one year.',
      'Drove internal AI adoption from 47% to 97% by building tools that integrate seamlessly into existing workflows (Salesforce, Zapier).',
      'Implemented live RAG connections to compliance data, ensuring auditability and safety in high-stakes environments.',
    ],
  },
  {
    title: 'AI Solutions Architect',
    company: 'Sesh | Ai Solutions',
    dates: 'Nov 2021 - Present',
    points: [
      'Designed the architecture for over 120 GenAI applications and 90 chatbots across 30+ different clients, ensuring all moved to productive stages.',
      'Generated over $1M in savings for clients by replacing manual man-hours with GenAI automations and agentic workflows.',
      'Mentored a community of 100+ members on AI adoption, delivering technical webinars for groups like Latinas in Tech and Somos Latinos in Tech.',
      'Built full-stack AI-ready websites using Vercel and Python backends, wired for immediate data capture and automation.',
    ],
  },
  {
    title: 'Salesforce Consultant (AI Focus)',
    company: 'Online Business Systems',
    dates: 'Jun 2024 - Nov 2024',
    points: [
      'Configured AI assistants and Copilot-style experiences using Agentforce, defining use cases and prompt engineering for scalable deployments.',
      'Bridged the gap between business requirements and technical implementation for high-volume Salesforce environments.',
    ],
  },
  {
    title: 'Salesforce Manager & AI Lead',
    company: 'Globalization Partners',
    dates: 'Nov 2018 - Nov 2023',
    points: [
      'Transitioned from Administrator to Manager, overseeing a Salesforce org with 1,000+ licenses and leading early GenAI initiatives.',
      "Developed 'GIA', an internal chatbot, and established 'vibe coding' patterns using LLMs to support development teams.",
      'Managed complex integrations and automation workflows, ensuring data integrity and governance across sales and operations.',
    ],
  },
];

const education = [
  {
    degree: 'B.S. Systems Engineering (Ingenieria en Sistemas)',
    school: 'Universidad Marista de MAcrida',
    dates: '2004 - 2007',
  },
];

export default function Home() {
  return (
    <div className={`${fredoka.className} page`}>
      <Head>
        <title>Alejandro De La Mora | AI Solutions Architect</title>
        <meta
          name="description"
          content="AI Solutions Architect resume for Alejandro De La Mora, focusing on GenAI, cloud, and agentic workflows."
        />
      </Head>

      <div className="bg-bubbles" aria-hidden="true">
        <span className="bubble b1" />
        <span className="bubble b2" />
        <span className="bubble b3" />
        <span className="bubble b4" />
      </div>

      <main className="sheet">
        <header className="header">
          <div>
            <h1 className="name">Alejandro De La Mora</h1>
            <p className="role">(AI Solutions Architect)</p>
          </div>
          <div className="contact-card">
            <p>+1 437 243 3693</p>
            <p>
              <a href="mailto:alex@seshwithfriends.org">alex@seshwithfriends.org</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/amorac" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://www.eloruga.com/about/index.html" target="_blank" rel="noreferrer">
                Website
              </a>
            </p>
            <p>
              <a href="https://github.com/Oruga420" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
        </header>

        <section className="section summary">
          <h2>Professional Summary</h2>
          <p>{summaryText}</p>
        </section>

        <section className="section expertise">
          <h2>Areas of Expertise</h2>
          <div className="tags">
            {expertise.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section work">
          <h2>Work Experience</h2>
          <div className="experience-grid">
            {roles.map((role) => (
              <article className="job-card" key={`${role.company}-${role.dates}`}>
                <div className="job-header">
                  <div>
                    <h3>{role.title}</h3>
                    <p className="company">{role.company}</p>
                  </div>
                  <p className="dates">{role.dates}</p>
                </div>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section education">
          <h2>Education</h2>
          {education.map((school) => (
            <div className="edu-card" key={school.school}>
              <div>
                <h3>{school.degree}</h3>
                <p className="company">{school.school}</p>
              </div>
              <p className="dates">{school.dates}</p>
            </div>
          ))}
        </section>

        <div className="actions">
          <button className="print-btn" onClick={() => window.print()}>
            Download as PDF
          </button>
        </div>
      </main>
    </div>
  );
}
