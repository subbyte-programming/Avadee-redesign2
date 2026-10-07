(function () {
  const pages = {
    about: {
      title: "About Avadee Counseling",
      eyebrow: "Meet your therapist",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "Two women having a thoughtful conversation",
      content: `
        <p class="page-intro">Ava D. Phillips, MS, LMFT, is a California-licensed Marriage and Family Therapist who has served the community in mental health for more than 20 years.</p>
        <div class="story-feature">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;crop=faces&amp;w=900&amp;h=1000&amp;q=85" alt="A warm, welcoming portrait" loading="lazy" />
          <div><p class="eyebrow">Care shaped around you</p><h2>A supportive place to find your next step</h2><p>Care is shaped around each person's needs, strengths, and goals. Sessions can offer a safe, respectful place to explore what feels difficult, recognize patterns, and practice ways to move forward.</p><p>Ava's work focuses on support for anxiety and depression, with a collaborative approach that values empathy, clarity, and practical coping strategies. Therapy is not one-size-fits-all; your concerns and priorities help guide the work.</p></div>
        </div>
        <div class="page-card">
          <h2>What to expect</h2>
          <p>You'll have room to talk openly, ask questions, and decide together what kind of support may be useful. You do not need to have everything figured out before reaching out.</p>
        </div>
        <div class="page-actions"><a class="button button-primary" href="appointment-request.html">Request an appointment</a><a class="button button-outline" href="services.html">Explore therapy services</a></div>`
    },
    services: {
      title: "Your Therapy",
      eyebrow: "Counseling services",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A quiet moment for reflection and wellbeing",
      content: `
        <p class="page-intro">Therapy provides a supportive setting to understand concerns, identify strengths, and work toward personal or relationship goals. The approach is tailored to the people and needs involved.</p>
        <div class="page-grid">
          <section class="page-card page-card-image"><img class="card-photo" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&amp;fit=crop&amp;w=800&amp;h=500&amp;q=85" alt="A peaceful space for mindfulness and emotional wellbeing" loading="lazy" /><div class="card-copy"><p class="eyebrow">Find a little more ease</p><h2>Anxiety &amp; Depression</h2><p>Explore patterns of worry, low mood, stress, or feeling stuck. Counseling can help you notice how thoughts and feelings affect daily life and practice tools that support meaningful change.</p></div></section>
          <section class="page-card page-card-image"><img class="card-photo" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&amp;fit=crop&amp;w=800&amp;h=500&amp;q=85" alt="Family spending time together outdoors" loading="lazy" /><div class="card-copy"><p class="eyebrow">Strengthen connection</p><h2>Relationships &amp; Family</h2><p>Work toward clearer communication and healthier connection. Family sessions offer a neutral space to understand different perspectives and discuss practical next steps.</p></div></section>
          <section class="page-card page-card-image"><img class="card-photo" src="img/photo-2.jpg" alt="Soft white flowers in a calm setting for reflection" loading="lazy" /><div class="card-copy"><p class="eyebrow">Values-led support</p><h2>Christian Counseling</h2><p>For clients who want it, faith and personal values can be part of the conversation and inform the counseling approach. Care is guided by your preferences and goals.</p></div></section>
          <section class="page-card page-card-image"><img class="card-photo" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&amp;fit=crop&amp;w=800&amp;h=500&amp;q=85" alt="Soft morning light over a peaceful landscape" loading="lazy" /><div class="card-copy"><p class="eyebrow">Your pace, your goals</p><h2>A collaborative approach</h2><p>Sessions focus on your concerns, strengths, and hopes. Together, you and your therapist can identify goals and revisit what is or is not helping as you go.</p></div></section>
        </div>
        <p class="notice-card">Counseling is not emergency or crisis care. If you are in immediate danger, call 911 or go to the nearest emergency department.</p>
        <div class="page-actions"><a class="button button-primary" href="appointment-request.html">Ask about getting started</a><a class="button button-outline" href="rates-and-insurance.html">View rates &amp; insurance</a></div>`
    },
    faq: {
      title: "Frequently Asked Questions",
      eyebrow: "Getting started",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A supportive group conversation",
      content: `
        <p class="page-intro">It is normal to have questions before beginning therapy. Here are a few starting points; contact the practice for details about your own situation.</p>
        <details><summary>Does asking for help mean I am weak?</summary><p>No. Reaching out can be a thoughtful way to respond when familiar ways of coping are no longer enough. Therapy can help you recognize strengths and consider new ways forward.</p></details>
        <details><summary>How is therapy different from talking with a friend?</summary><p>A therapist brings professional training and a confidential setting, with limited legal and safety-related exceptions. Friends can be important supports too, but therapy is structured around your goals and wellbeing.</p></details>
        <details><summary>Do I need to take medication?</summary><p>Medication is a personal healthcare decision. Therapy and medication may be used separately or together depending on individual needs; discuss medication questions with a qualified prescriber.</p></details>
        <details><summary>What happens during a session?</summary><p>Sessions are guided by your concerns and goals. You can talk through what is happening, consider patterns, and collaborate on strategies that feel relevant to your life.</p></details>
        <details><summary>How long does therapy take?</summary><p>There is no universal timeline. The length of care depends on your goals, circumstances, and how you and your therapist decide to proceed.</p></details>
        <details><summary>How can I get the most from therapy?</summary><p>Sharing what feels useful or unhelpful, asking questions, and practicing agreed-upon strategies between sessions can support your progress. Your pace and comfort matter.</p></details>
        <details><summary>What are the rates and insurance options?</summary><p>See the <a href="rates-and-insurance.html">Rates &amp; Insurance page</a>, then contact the practice to confirm current details and your coverage.</p></details>
        <div class="page-actions"><a class="button button-primary" href="contact.html">Contact the practice</a></div>`
    },
    "rates-and-insurance": {
      title: "Rates & Insurance",
      eyebrow: "Fees and payment",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A notebook and calculator for planning",
      content: `
        <p class="page-intro">Please contact the practice to confirm current fees, availability, and whether a service is appropriate for your needs.</p>
        <div class="page-card"><h2>Rates</h2><ul><li>Initial psychological evaluation (80 minutes): $180</li><li>Individual therapy (50 minutes): $160</li><li>Family therapy (50 minutes): $200</li><li>No sliding-scale fee is listed.</li></ul></div>
        <h2>Insurance</h2>
        <p>Inland Empire Health Plan (IEHP) and Kaiser are listed as accepted plans. For other plans, a Superbill may be available for you to submit to your insurer; reimbursement depends on your specific plan.</p>
        <p>Before starting, contact your insurer to ask about mental-health benefits, deductibles, session limits, and referral or authorization requirements. Please verify coverage directly with your plan and the practice.</p>
        <h2>Payment &amp; cancellations</h2>
        <p>Cash, debit, and major credit cards are listed as payment options. Please give at least 24 hours' notice if you need to cancel; late cancellations may be charged the full session rate.</p>
        <div class="page-actions"><a class="button button-primary" href="mailto:avadeecounseling@gmail.com?subject=Rates%20and%20insurance">Ask about fees or coverage</a><a class="button button-outline" href="appointment-request.html">Appointment request</a></div>`
    },
    "appointment-request": {
      title: "Appointment Request",
      eyebrow: "A first conversation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A person reaching out using a laptop",
      content: `
        <p class="page-intro">The practice offers a free, brief telephone consultation as a first step. Reach out by phone or email to ask about availability and arrange a time to talk.</p>
        <div class="page-grid">
          <section class="page-card"><h2>Call</h2><p>For a brief telephone consultation, call the practice.</p><a class="button button-primary" href="tel:+19095365866">(909) 536-5866</a></section>
          <section class="page-card"><h2>Email</h2><p>Send a short note with your name and a good way to reach you. Please do not include sensitive health details in email.</p><a class="button button-primary" href="mailto:avadeecounseling@gmail.com?subject=Telephone%20consultation">Email the practice</a></section>
        </div>
        <p class="notice-card">If you are in immediate danger or need urgent support, call 911 or go to your nearest emergency department. In the U.S., call or text 988 for the Suicide &amp; Crisis Lifeline.</p>
        <div class="page-actions"><a class="button button-outline" href="rates-and-insurance.html">Review rates &amp; insurance</a><a class="button button-outline" href="faq.html">Read FAQs</a></div>`
    },
    contact: {
      title: "Contact Avadee Counseling",
      eyebrow: "Get in touch",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A caring, supportive conversation",
      content: `
        <p class="page-intro">For questions about counseling, fees, or a brief telephone consultation, contact Avadee Counseling in Claremont, California.</p>
        <div class="page-grid">
          <section class="page-card"><h2>Call</h2><p>Speak with the practice by phone.</p><a class="button button-primary" href="tel:+19095365866">(909) 536-5866</a></section>
          <section class="page-card"><h2>Email</h2><p>Please avoid sending private or sensitive health information by email.</p><a class="button button-primary" href="mailto:avadeecounseling@gmail.com">avadeecounseling@gmail.com</a></section>
        </div>
        <p>Location: Claremont, California. Please contact the practice to confirm current service availability and visit arrangements.</p>
        <div class="page-actions"><a class="button button-outline" href="appointment-request.html">Appointment request</a><a class="button button-outline" href="directory.html">Browse site directory</a></div>`
    },
    "recent-news": {
      title: "Recent News",
      eyebrow: "Articles & updates",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "An open notebook ready for new ideas",
      content: `
        <p class="page-intro">Explore current mental-health information from established organizations. External articles and resources are provided for general education, not as a substitute for professional advice or an endorsement of every item on those sites.</p>
        <div class="page-grid">
          <section class="page-card"><h2>Psych Central</h2><p>Articles and explainers about mental health, relationships, and wellbeing.</p><a href="https://psychcentral.com/" target="_blank" rel="noopener noreferrer">Visit Psych Central</a></section>
          <section class="page-card"><h2>National Institute of Mental Health</h2><p>Research-based information about mental disorders and mental-health research.</p><a href="https://www.nimh.nih.gov/health" target="_blank" rel="noopener noreferrer">Visit NIMH health information</a></section>
          <section class="page-card"><h2>SAMHSA</h2><p>Federal resources for mental health, substance use, and recovery support.</p><a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer">Visit SAMHSA</a></section>
          <section class="page-card"><h2>More resource links</h2><p>Browse additional topic-specific organizations and health information.</p><a href="mental-health-links.html">Mental health links</a> · <a href="physical-health-links.html">Physical health links</a></section>
        </div>`
    },
    "mental-health-links": {
      title: "Mental Health Links",
      eyebrow: "Trusted information",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A peaceful moment of reflection",
      content: `
        <p class="page-intro">These external organizations offer general information and support resources. They are not a comprehensive list, and listing them does not imply endorsement. Information online is not a diagnosis or replacement for care from a qualified professional.</p>
        <h2>Information &amp; education</h2>
        <ul class="resource-list">
          <li><a href="https://www.nimh.nih.gov/health" target="_blank" rel="noopener noreferrer">National Institute of Mental Health</a> — research-based information on mental health.</li>
          <li><a href="https://www.nami.org/" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness</a> — education, support, and advocacy resources.</li>
          <li><a href="https://adaa.org/" target="_blank" rel="noopener noreferrer">Anxiety &amp; Depression Association of America</a> — information about anxiety, depression, and related conditions.</li>
          <li><a href="https://iocdf.org/" target="_blank" rel="noopener noreferrer">International OCD Foundation</a> — resources about obsessive-compulsive disorder.</li>
          <li><a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer">SAMHSA</a> — mental-health and substance-use resources.</li>
          <li><a href="https://www.rainn.org/" target="_blank" rel="noopener noreferrer">RAINN</a> — information and support related to sexual violence.</li>
        </ul>
        <h2>Immediate support</h2>
        <p>If you or someone you know is in emotional distress or suicidal crisis in the U.S., call or text <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer">988</a>. If there is immediate danger, call 911.</p>
        <p class="notice-card">If you are outside the United States, contact your local emergency number or crisis service.</p>`
    },
    "physical-health-links": {
      title: "Physical Health Links",
      eyebrow: "Whole-person wellbeing",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A person practicing a gentle stretch",
      content: `
        <p class="page-intro">General health resources can help you learn about wellbeing and physical health. They complement—but do not replace—individualized advice from a licensed healthcare professional.</p>
        <ul class="resource-list">
          <li><a href="https://medlineplus.gov/" target="_blank" rel="noopener noreferrer">MedlinePlus</a> — consumer health information from the U.S. National Library of Medicine.</li>
          <li><a href="https://www.womenshealth.gov/" target="_blank" rel="noopener noreferrer">Office on Women's Health</a> — information on women's health topics.</li>
          <li><a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention</a> — public-health information and guidance.</li>
          <li><a href="https://health.gov/" target="_blank" rel="noopener noreferrer">Health.gov</a> — national health initiatives and prevention resources.</li>
          <li><a href="https://www.nccih.nih.gov/" target="_blank" rel="noopener noreferrer">National Center for Complementary and Integrative Health</a> — evidence-based information on complementary health approaches.</li>
        </ul>
        <p class="notice-card">For personal medical concerns, diagnosis, medication advice, or urgent symptoms, consult an appropriate healthcare professional.</p>`
    },
    directory: {
      title: "Site Directory",
      eyebrow: "Explore Avadee Counseling",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "Warm sunlight over a peaceful landscape",
      content: `
        <p class="page-intro">Use this directory to find counseling information, getting-started details, and helpful resources.</p>
        <div class="page-grid">
          <section class="page-card"><h2>Counseling</h2><ul><li><a href="about.html">About the therapist</a></li><li><a href="services.html">Therapy services</a></li><li><a href="rates-and-insurance.html">Rates &amp; insurance</a></li></ul></section>
          <section class="page-card"><h2>Getting started</h2><ul><li><a href="appointment-request.html">Appointment request</a></li><li><a href="faq.html">Frequently asked questions</a></li><li><a href="contact.html">Contact information</a></li></ul></section>
          <section class="page-card"><h2>Resources</h2><ul><li><a href="recent-news.html">Recent news and articles</a></li><li><a href="mental-health-links.html">Mental-health links</a></li><li><a href="physical-health-links.html">Physical-health links</a></li></ul></section>
          <section class="page-card"><h2>Practice contact</h2><p>Claremont, California</p><p><a href="tel:+19095365866">(909) 536-5866</a><br><a href="mailto:avadeecounseling@gmail.com">Email Avadee Counseling</a></p></section>
        </div>`
    },
    blog: {
      title: "Blog",
      eyebrow: "News & reflections",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&h=700&q=85",
      imageAlt: "A notebook and pen ready for writing",
      content: `
        <p class="page-intro">There are no blog posts available here yet. In the meantime, explore current articles and practical information from the resources below.</p>
        <div class="page-actions"><a class="button button-primary" href="recent-news.html">Browse recent news</a><a class="button button-outline" href="mental-health-links.html">Mental-health links</a><a class="button button-outline" href="physical-health-links.html">Physical-health links</a></div>`
    }
  };

  const pageKey = document.body.dataset.page;
  const page = pages[pageKey];
  const root = document.getElementById("site");
  const pageMarks = {
    about: "✿",
    services: "♡",
    faq: "?",
    "rates-and-insurance": "$",
    "appointment-request": "01",
    contact: "✉",
    "recent-news": "✧",
    "mental-health-links": "+",
    "physical-health-links": "✳",
    directory: "⌘",
    blog: "✎"
  };

  if (!page || !root) {
    console.error("Unable to load Avadee Counseling page:", pageKey);
    return;
  }

  document.title = `${pageKey === "about" ? "About" : page.title} | Avadee Counseling`;

  root.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="Avadee Counseling home">
          <span class="brand-mark" aria-hidden="true">✿</span>
          <span class="brand-name">Avadee Counseling<small>Instilling hope. Restoring wholeness.</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
          <span class="sr-only">Toggle navigation</span><span></span><span></span><span></span>
        </button>
        <nav class="main-nav" id="main-nav" aria-label="Main navigation">
          <a href="index.html">Home</a>
          <a href="services.html">Your Therapy</a>
          <a href="about.html">About</a>
          <details class="nav-dropdown">
            <summary>Getting Started</summary>
            <div class="nav-menu">
              <a href="faq.html">FAQs</a>
              <a href="rates-and-insurance.html">Rates &amp; Insurance</a>
              <a href="appointment-request.html">Appointment Request</a>
              <a href="contact.html">Contact</a>
            </div>
          </details>
          <details class="nav-dropdown">
            <summary>Resources</summary>
            <div class="nav-menu">
              <a href="recent-news.html">Recent News</a>
              <a href="mental-health-links.html">Mental Health Links</a>
              <a href="physical-health-links.html">Physical Health Links</a>
              <a href="directory.html">Directory</a>
              <a href="blog.html">Blog</a>
            </div>
          </details>
          <a class="nav-cta" href="appointment-request.html">Request Appointment</a>
        </nav>
      </div>
    </header>
    <main>
      <section class="page-banner page-banner--${pageKey}">
        <div class="page-banner-inner section-wrap">
          <div class="page-banner-copy">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="index.html">Home</a><span aria-hidden="true">/</span><span aria-current="page">${page.title}</span>
            </nav>
            <p class="eyebrow">${page.eyebrow}</p>
            <h1>${page.title}</h1>
            <p class="banner-caption">A supportive space to find clarity, care, and a next step that feels right for you.</p>
          </div>
          <div class="page-art" aria-hidden="true">
            <img class="page-art-photo" src="${page.image}" alt="" fetchpriority="high" />
            <span class="page-art-ring"></span>
            <span class="page-art-mark">${pageMarks[pageKey] || "✿"}</span>
            <span class="page-art-caption">Avadee Counseling<br>Claremont, California</span>
          </div>
        </div>
      </section>
      <article class="page-content section-wrap">${page.content}</article>
    </main>
    <footer class="site-footer">
      <div class="footer-main section-wrap">
        <div class="footer-brand">
          <a class="brand brand-light" href="index.html"><span class="brand-mark" aria-hidden="true">✿</span><span class="brand-name">Avadee Counseling<small>Instilling hope. Restoring wholeness.</small></span></a>
          <p>A compassionate space to heal, grow, and move forward.</p>
        </div>
        <div><h3>Explore</h3><a href="services.html">Your Therapy</a><a href="about.html">About</a><a href="rates-and-insurance.html">Fees &amp; Insurance</a><a href="faq.html">FAQs</a><a href="directory.html">Directory</a></div>
        <div><h3>Get in Touch</h3><a href="tel:+19095365866">(909) 536-5866</a><a href="mailto:avadeecounseling@gmail.com">Email the practice</a><a href="appointment-request.html">Request an Appointment</a><a href="contact.html">Contact</a></div>
        <div class="footer-location"><h3>Located in</h3><p>Claremont, California<br>Serving clients with care and compassion.</p></div>
      </div>
      <div class="footer-bottom section-wrap"><span>© 2026 Avadee Counseling</span><a href="https://avadeecounseling.com/wp-content/uploads/2022/02/Privacy-Policy-Solo-US-4.pdf">Privacy Policy</a><span>If you are in immediate danger, call 911 or go to your nearest emergency room.</span></div>
    </footer>`;

  const navigation = root.querySelector(".main-nav");
  const menuToggle = root.querySelector(".menu-toggle");
  const activeLink = navigation.querySelector(`a[href="${pageKey}.html"]`);
  if (activeLink) activeLink.setAttribute("aria-current", "page");

  const animatedItems = root.querySelectorAll(
    ".page-content > *, .page-content .page-card, .page-content details, .page-content .resource-list li"
  );
  animatedItems.forEach((item) => item.classList.add("reveal-item"));

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animatedItems.forEach((item) => revealObserver.observe(item));
    root.classList.add("motion-ready");
  }

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
})();
