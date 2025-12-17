import 'dotenv/config';
import {createClient} from '@sanity/client';

if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_TOKEN) {
  console.error('❌ Missing SANITY_PROJECT_ID or SANITY_TOKEN in .env');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Helper to create portable text blocks
const pt = (text, style = 'normal') => ({
  _type: 'block',
  style,
  markDefs: [],
  children: [{_type: 'span', text, marks: []}],
});

async function seedContent() {
  console.log('🌱 Starting Sanity content seeding...\n');

  const documents = [
    // Site Settings
    {
      _id: 'siteSettings',
      _type: 'siteSettings',
      title: 'Newark AI Community',
      description: 'Empowering Newark residents with AI education through free town halls, workshops, and community learning.',
      organization: {
        name: 'Newark AI Community',
        email: 'hello@newarkai.community',
        phone: '(973) 555-0123',
        address: 'Newark, NJ 07102',
      },
      social: {
        discord: 'https://discord.gg/newark-ai-community',
        twitter: 'https://twitter.com/newark_ai',
        linkedin: 'https://linkedin.com/company/newark-ai-community',
        youtube: 'https://youtube.com/@newarkaicommunity',
      },
    },

    // Event 1: AI Basics Town Hall
    {
      _type: 'event',
      _id: 'event-ai-basics-town-hall',
      title: 'AI Basics Town Hall',
      slug: {_type: 'slug', current: 'ai-basics-town-hall'},
      excerpt: 'Join us for a beginner-friendly introduction to artificial intelligence. Learn what AI is, how it works, and how it\'s already part of your daily life. No tech background needed!',
      eventDate: '2026-01-15T18:00:00-05:00',
      location: 'Newark Public Library - Main Branch, 5 Washington Street, Newark, NJ 07102',
      locationType: 'in-person',
      content: [
        pt('Are you curious about artificial intelligence but don\'t know where to start? Join us for a welcoming, jargon-free introduction to AI designed specifically for Newark residents.'),
        pt('What You\'ll Experience', 'h2'),
        pt('This interactive town hall will demystify AI through simple explanations with everyday examples, live demonstrations of AI tools you can use right away, Q&A session with local AI experts, and free refreshments and networking.'),
        pt('Who Should Attend', 'h2'),
        pt('This event is perfect for small business owners looking to save time with AI, job seekers wanting to understand AI skills, parents curious about AI in education, and anyone interested in technology but intimidated by tech jargon.'),
        pt('What to Bring', 'h2'),
        pt('Just bring yourself and your questions! We\'ll provide free printed guide to AI basics, list of free AI tools to try at home, and access to our Discord community for ongoing support. No laptops required, but feel free to bring one if you\'d like to follow along with demos.'),
      ],
      learningOutcomes: [
        'Understand what AI is and how it differs from regular software',
        'Learn about real-world AI applications you use every day',
        'Explore how AI can help your small business or career',
        'Get answers to your questions about AI safety and privacy',
      ],
      capacity: 120,
      featured: true,
    },

    // Event 2: AI for Small Business
    {
      _type: 'event',
      _id: 'event-ai-for-small-business',
      title: 'AI for Small Business Workshop',
      slug: {_type: 'slug', current: 'ai-for-small-business'},
      excerpt: 'Hands-on workshop teaching Newark small business owners how to use free AI tools to save time on marketing, customer service, and daily operations.',
      eventDate: '2026-02-05T18:30:00-05:00',
      location: 'Zoom (link sent upon registration)',
      locationType: 'online',
      content: [
        pt('Running a small business means wearing many hats. Learn how AI can be your free assistant for marketing, design, and customer communication.'),
        pt('What You\'ll Learn', 'h2'),
        pt('In this 2-hour hands-on workshop, you\'ll write compelling social media posts in minutes using AI, design flyers, logos, and ads without hiring a designer, set up AI chatbots to answer customer questions 24/7, and use AI to understand your customers better.'),
        pt('Workshop Format', 'h2'),
        pt('This is a HANDS-ON workshop. You\'ll watch live demonstrations, try the tools yourself during breakout sessions, get one-on-one help from volunteer mentors, and leave with a personalized AI toolkit for your business.'),
        pt('What You Need', 'h2'),
        pt('Computer or tablet with internet, email address (to create free AI tool accounts), and your business information handy (for practice exercises).'),
        pt('Tools We\'ll Cover', 'h2'),
        pt('All tools are FREE or have generous free tiers: ChatGPT for writing, Canva AI for design, Tidio for customer chat, and Google Analytics AI insights.'),
      ],
      learningOutcomes: [
        'Use ChatGPT to write engaging social media posts and emails',
        'Create professional graphics for your business with AI design tools',
        'Automate repetitive tasks to save 5+ hours per week',
        'Find customers and grow your business with AI-powered marketing',
      ],
      capacity: 50,
      featured: true,
    },

    // Event 3: AI Privacy & Safety
    {
      _type: 'event',
      _id: 'event-ai-privacy-safety',
      title: 'AI Privacy & Safety Town Hall',
      slug: {_type: 'slug', current: 'ai-privacy-safety'},
      excerpt: 'Learn how to protect yourself and your family when using AI tools. Understand data privacy, bias in AI, and how to use AI safely and responsibly.',
      eventDate: '2026-02-20T18:00:00-05:00',
      location: 'NJIT Campus Center, Room 202, Newark, NJ 07102',
      locationType: 'hybrid',
      content: [
        pt('AI is powerful, but it\'s important to understand the privacy and safety considerations. Join us for an honest conversation about using AI responsibly.'),
        pt('Topics We\'ll Cover', 'h2'),
        pt('Privacy & Data: What information do AI tools collect? How is your data used and shared? Settings to protect your privacy. What to NEVER share with AI.'),
        pt('Bias & Fairness: How AI can inherit human biases. Real examples of AI bias affecting communities. What companies are doing to fix it. How to recognize and report biased AI.'),
        pt('Safe Usage: Teaching children about AI safety. Protecting your business data. Verifying AI-generated information. Recognizing AI scams and deepfakes.'),
        pt('Expert Panel', 'h2'),
        pt('Hear from a privacy lawyer explaining your rights, AI researcher from NJIT, community advocate discussing AI equity, and cybersecurity expert on data protection.'),
      ],
      learningOutcomes: [
        'Understand what data AI companies collect and how to protect your privacy',
        'Recognize bias in AI and how it might affect you',
        'Learn safe practices for using AI tools with personal information',
        'Know your rights regarding AI and data collection',
      ],
      capacity: 100,
    },

    // Blog Post 1: What is AI?
    {
      _type: 'post',
      _id: 'post-what-is-ai',
      title: 'What is AI? A Simple Explanation for Newark Residents',
      slug: {_type: 'slug', current: 'what-is-ai-simple-explanation'},
      description: 'Artificial intelligence doesn\'t have to be complicated. Learn what AI really is, how it works, and why it matters to you—explained in plain English without the tech jargon.',
      publishedAt: '2026-01-10T12:00:00-05:00',
      content: [
        pt('What is AI? A Simple Explanation', 'h2'),
        pt('You\'ve probably heard about artificial intelligence (AI) in the news, seen it in movies, or noticed "AI-powered" labels on products. But what exactly is AI, and why should you care? Let\'s break it down in plain English—no computer science degree required.'),
        pt('AI is Like Teaching a Computer to Learn', 'h2'),
        pt('Think of AI as teaching a computer to recognize patterns and make decisions, similar to how humans learn from experience. Example: A child learns what a dog is by seeing many dogs. Eventually, they can identify a dog even if they\'ve never seen that specific breed before. AI works the same way. You show a computer thousands of pictures of dogs, and it learns to recognize dogs in new pictures. That\'s it. That\'s the basic idea of AI.'),
        pt('AI is Already in Your Daily Life', 'h2'),
        pt('You might be using AI without realizing it: Phone voice assistants like Siri or Google Assistant, Netflix recommendations for what to watch next, Amazon suggesting products you might like, spam filters keeping junk out of your inbox, Google Maps predicting traffic and suggesting routes, and your phone organizing pictures by faces and places.'),
        pt('What AI Can Do (and Can\'t Do)', 'h2'),
        pt('AI is GOOD at: Finding patterns in huge amounts of information, making predictions based on past examples, automating repetitive tasks, recognizing images, speech, and text, and helping humans make faster decisions.'),
        pt('AI CANNOT: Think or feel like humans, understand context the way we do, be creative without human input, make truly ethical decisions on its own, or replace human judgment in complex situations.'),
        pt('Why You Should Care About AI', 'h2'),
        pt('AI is changing jobs (some tasks will be automated, but new jobs will be created), education (students learning with AI tutors), healthcare (doctors using AI to spot diseases earlier), and small business (free AI tools helping entrepreneurs compete with big companies).'),
      ],
      tags: ['AI Basics', 'Education', 'Getting Started'],
      featured: true,
    },

    // Blog Post 2: AI for Small Business
    {
      _type: 'post',
      _id: 'post-ai-for-small-business',
      title: 'How AI Can Help Your Small Business Save Time and Money',
      slug: {_type: 'slug', current: 'ai-help-small-business'},
      description: 'Discover free AI tools that can help your Newark small business with marketing, customer service, bookkeeping, and more—no tech skills required.',
      publishedAt: '2026-01-12T12:00:00-05:00',
      content: [
        pt('How AI Can Help Your Small Business', 'h2'),
        pt('Running a small business in Newark means wearing many hats—marketer, accountant, customer service rep, and everything in between. What if you had a free assistant who could handle some of those tasks for you? That\'s where AI comes in.'),
        pt('Free AI Tools for Marketing', 'h2'),
        pt('ChatGPT can write social media posts, email newsletters, and product descriptions in seconds. Canva\'s AI features help you design professional graphics without hiring a designer. Copy.ai generates marketing copy and ad text that actually converts.'),
        pt('Customer Service Made Easy', 'h2'),
        pt('Tidio and ManyChat create AI chatbots that answer common customer questions 24/7. Your customers get instant answers, even when you\'re closed. You save hours every week not answering the same questions repeatedly.'),
        pt('Streamline Your Operations', 'h2'),
        pt('Zapier\'s AI automates repetitive tasks like data entry and file organization. QuickBooks AI categorizes expenses and predicts cash flow. Google Workspace AI helps with email management and scheduling.'),
        pt('Getting Started', 'h2'),
        pt('Start small. Pick ONE task that takes up too much of your time. Find a free AI tool that handles it. Try it for a week. Most tools have free tiers perfect for small businesses. You don\'t need to be tech-savvy—if you can use a website, you can use these tools.'),
      ],
      tags: ['Small Business', 'AI Tools', 'Marketing', 'Entrepreneurship'],
    },

    // Blog Post 3: AI Privacy Guide
    {
      _type: 'post',
      _id: 'post-ai-privacy-guide',
      title: 'AI and Your Privacy: What You Need to Know',
      slug: {_type: 'slug', current: 'ai-privacy-guide'},
      description: 'A straightforward guide to protecting your privacy when using AI tools. Learn what data is collected, how it\'s used, and simple steps to stay safe.',
      publishedAt: '2026-01-14T12:00:00-05:00',
      content: [
        pt('AI and Your Privacy: What You Need to Know', 'h2'),
        pt('AI tools are incredibly useful, but they need data to work. Understanding what information you\'re sharing—and how to protect yourself—is crucial.'),
        pt('What Data Do AI Tools Collect?', 'h2'),
        pt('Most AI tools collect: the questions you ask and prompts you enter, your account information (email, name), how you use the tool (clicks, time spent), and sometimes your location and device information. This data helps AI learn and improve, but it also raises privacy concerns.'),
        pt('What You Should NEVER Share with AI', 'h2'),
        pt('Never enter: Social Security numbers, credit card or banking details, passwords or security codes, personal health information (unless using HIPAA-compliant medical AI), private business secrets or confidential information, or other people\'s personal information without permission.'),
        pt('Simple Steps to Protect Your Privacy', 'h2'),
        pt('Read the privacy policy (focus on "What data do we collect?" and "Do we share your data?"). Use AI tools that don\'t train on your data (ChatGPT Plus, Claude Pro have options for this). Create a separate email for AI tool accounts. Don\'t use real names in examples ("use Jane Doe instead of your real customer\'s name"). Review and delete your conversation history regularly.'),
        pt('Teaching Kids About AI Privacy', 'h2'),
        pt('If your children use AI for homework: supervise their usage, teach them not to share personal information, use school-approved AI tools when possible, and discuss what\'s safe to ask AI and what isn\'t.'),
        pt('Your Rights', 'h2'),
        pt('Under laws like GDPR and CCPA, you have the right to: know what data is collected about you, request your data be deleted, opt out of data selling, and correct inaccurate information. Most AI companies have a "Data Privacy Request" form on their websites.'),
      ],
      tags: ['Privacy', 'Safety', 'Security'],
    },
  ];

  console.log(`📦 Preparing to seed ${documents.length} documents...\n`);

  for (const doc of documents) {
    try {
      await client.createOrReplace(doc);
      console.log(`✅ Seeded: ${doc._type.padEnd(15)} → ${doc._id || doc.title}`);
    } catch (error) {
      console.error(`❌ Failed to seed ${doc._id}:`, error.message);
    }
  }

  console.log('\n🎉 Sanity content seeding complete!');
  console.log('\n📍 View your content at: http://localhost:3333');
  console.log('📍 Or visit: https://biz008kr.sanity.studio\n');
}

seedContent()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('\n❌ Seeding failed:', error);
    process.exit(1);
  });
