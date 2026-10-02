// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import { ArrowUpRight, Menu, X, Check, ChevronDown, Search, BarChart3, Code2, PenTool, ShoppingBag, MessageCircle, Mail, MapPin, Phone, Quote } from 'lucide-react';
// import './styles.css';

// const services = [
//     { icon: Search, title: 'Search Engine Optimization', text: 'Build sustainable visibility with technical, on-page and content-led SEO strategies.' },
//     { icon: BarChart3, title: 'Paid Advertising', text: 'Reach the right audience with focused campaigns across Google, Meta and other platforms.' },
//     { icon: MessageCircle, title: 'Social Media Marketing', text: 'Turn attention into community with content, creative direction and performance insights.' },
//     { icon: ShoppingBag, title: 'E-Commerce Marketing', text: 'Improve product discovery, acquisition and conversion across your online store.' },
//     { icon: PenTool, title: 'Content Marketing', text: 'Create useful, credible content that strengthens your brand and supports organic growth.' },
//     { icon: Code2, title: 'Website Development', text: 'Fast, responsive and conversion-focused websites built around your business goals.' }
// ];
// const steps = [['01', 'Discover', 'We understand your business, audience, goals and current digital presence.'], ['02', 'Plan', 'We turn insights into a focused roadmap with clear priorities and measurable outcomes.'], ['03', 'Create', 'Our team designs, builds and launches experiences made for real users.'], ['04', 'Improve', 'We measure performance, learn from the data and keep improving.']];
// const work = [['01', 'Brand visibility', 'SEO + Content', 'A focused organic growth system built around search intent and useful content.'], ['02', 'Lead generation', 'Paid + Landing Page', 'A conversion journey designed to reduce friction from ad click to enquiry.'], ['03', 'Digital presence', 'Web Development', 'A modern website experience designed to communicate value quickly and clearly.']];
// const faqs = [['How long does digital marketing take to show results?', 'It depends on the channel and goal. Paid campaigns can produce feedback quickly, while SEO normally needs consistent work over time.'], ['How do you build a strategy?', 'We start with the business goal, audience and current digital presence, then define priorities, channels and measurable outcomes.'], ['Will I receive campaign updates?', 'Yes. Performance should be visible through clear reporting, meaningful metrics and regular communication.'], ['Which service is right for my business?', 'That depends on your objective. A discovery conversation helps identify the right mix rather than forcing a one-size-fits-all package.']];

// function App() {
//     const [open, setOpen] = useState(null), [menu, setMenu] = useState(false), [sent, setSent] = useState(false);
//     const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) };
//     const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset(); setTimeout(() => setSent(false), 5000) };
//     return <div className="app">
//         <div className="topbar">Digital growth, without the unnecessary noise. <span>Free discovery call available →</span></div>
//         <header className="nav"><div className="nav-inner"><a className="logo" href="#home" onClick={() => scrollTo('home')}>xntrova<span>.</span></a>
//             <nav className={menu ? 'nav-links open' : 'nav-links'}>{[['Services', 'services'], ['About', 'about'], ['Process', 'process'], ['Work', 'work'], ['Contact', 'contact']].map(([x, id]) => <a key={id} href={'#' + id} onClick={() => scrollTo(id)}>{x}</a>)}<button className="nav-cta" onClick={() => scrollTo('contact')}>Let's talk <ArrowUpRight size={16} /></button></nav>
//             <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
//         </div></header>

//         <main>
//             <section id="home" className="hero section"><div className="hero-copy"><div className="eyebrow"><span className="dot"></span> Digital marketing + technology</div><h1>Make your digital presence <em>work harder.</em></h1><p>We help ambitious businesses become easier to find, easier to trust and easier to choose — through strategy, creative and technology.</p><div className="hero-actions"><button className="btn primary" onClick={() => scrollTo('contact')}>Start a conversation <ArrowUpRight size={18} /></button><button className="text-btn" onClick={() => scrollTo('work')}>See our work <span>↗</span></button></div><div className="proof"><div className="avatars"><i>A</i><i>N</i><i>R</i><i>+</i></div><div><strong>Built for measurable growth</strong><small>Strategy • Creative • Performance</small></div></div></div>
//                 <div className="hero-art"><div className="orb orb-a"></div><div className="orb orb-b"></div><div className="dashboard"><div className="dash-top"><span>Performance overview</span><b>Last 30 days ↗</b></div><div className="chart"><div className="line"></div><div className="bar b1"></div><div className="bar b2"></div><div className="bar b3"></div><div className="bar b4"></div><div className="bar b5"></div></div><div className="metrics"><div><small>Organic traffic</small><strong>+250%</strong></div><div><small>Projects delivered</small><strong>120+</strong></div></div></div><div className="float-card"><span>Growth signal</span><strong>↑ 38.6%</strong><small>qualified enquiries</small></div></div>
//             </section>

//             <section className="ticker"><div>SEO</div><div>Paid Media</div><div>Social</div><div>Content</div><div>E-commerce</div><div>Web Development</div></section>

//             <section id="services" className="section"><div className="section-head"><div><div className="eyebrow">What we do</div><h2>One team for the <em>whole journey.</em></h2></div><p>From the first search to the final click, we connect marketing and technology so every part of the experience makes sense.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service" key={title}><div className="icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" onClick={() => scrollTo('contact')}>Explore service <ArrowUpRight size={15} /></a></article>)}</div></section>

//             <section id="about" className="about section"><div className="about-visual"><div className="about-card"><span>THE XNTROVA APPROACH</span><strong>Ideas need<br /><em>evidence.</em></strong><p>Creative thinking backed by data, clear planning and continuous learning.</p><div className="mini-stat"><b>01</b><span>Think like a customer</span></div><div className="mini-stat"><b>02</b><span>Build with purpose</span></div><div className="mini-stat"><b>03</b><span>Measure what matters</span></div></div></div><div className="about-copy"><div className="eyebrow">About Xntrova</div><h2>Good marketing feels <em>human.</em></h2><p>We believe great digital work starts by understanding people. Our approach combines fresh ideas, robust planning and data-driven decisions to create experiences that connect and move people to action.</p><p>Whether the goal is visibility, qualified leads or a stronger digital presence, we focus on work that has a clear job to do — and a way to measure whether it is doing it.</p><div className="about-points"><span><Check /> Clear strategy</span><span><Check /> Practical execution</span><span><Check /> Transparent reporting</span><span><Check /> Continuous improvement</span></div></div></section>

//             <section className="numbers"><div><strong>250%</strong><span>organic traffic growth*</span></div><div><strong>120+</strong><span>projects delivered*</span></div><div><strong>500+</strong><span>happy clients*</span></div><div><strong>4.9</strong><span>average client sentiment*</span></div></section>

//             <section id="process" className="section process"><div className="section-head"><div><div className="eyebrow">How we work</div><h2>Simple process. <em>Serious detail.</em></h2></div><p>No mystery steps or unnecessary layers. Just a clear route from business problem to useful outcome.</p></div><div className="steps">{steps.map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

//             <section id="work" className="section work"><div className="section-head"><div><div className="eyebrow">Selected work</div><h2>Work with a <em>purpose.</em></h2></div><p>A few examples of how strategy, content and technology can come together around a clear business objective.</p></div><div className="work-grid">{work.map(([n, title, tag, text], i) => <article className={'case c' + i} key={n}><div className="case-visual"><span>{tag}</span><div className="case-lines"></div><b>{n}</b></div><div className="case-body"><small>{tag}</small><h3>{title}</h3><p>{text}</p><a href="#contact" onClick={() => scrollTo('contact')}>Discuss a similar project <ArrowUpRight size={15} /></a></div></article>)}</div></section>

//             <section className="testimonial section"><div className="quote-icon"><Quote /></div><blockquote>“What impressed us most about Xntrova was their strategic mindset. They didn't give us a one-size-fits-all solution; they created a customised strategy for our business.”</blockquote><div className="person"><b>Amit Verma</b><span>Founder</span></div></section>

//             <section className="cta"><div><div className="eyebrow">Ready when you are</div><h2>Let's make your next<br /><em>move count.</em></h2></div><button className="btn light" onClick={() => scrollTo('contact')}>Start a conversation <ArrowUpRight size={18} /></button></section>

//             <section id="contact" className="contact section"><div className="contact-copy"><div className="eyebrow">Get in touch</div><h2>Have a project in <em>mind?</em></h2><p>Tell us a little about what you're trying to achieve. We'll get back to you with the next step.</p><div className="contact-details"><span><Mail /> info@xntrova.com</span><span><Phone /> +91 868-382-8646</span><span><MapPin /> Sector 8, Dwarka, New Delhi</span></div></div><form className="lead-form" onSubmit={submit}><label>Your name<input required name="name" placeholder="John Doe" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Company<input name="company" placeholder="Company name" /></label><label>What can we help with?<textarea required name="message" rows="4" placeholder="Tell us briefly about your goal..."></textarea></label><button className="btn primary" type="submit">Send enquiry <ArrowUpRight size={18} /></button>{sent && <div className="success">Thanks — your enquiry has been captured for this demo.</div>}</form></section>

//             <section className="faq section"><div className="eyebrow">Questions, answered</div><h2>Before we <em>start.</em></h2><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setOpen(open === i ? null : i)}><span>{q}</span><ChevronDown className={open === i ? 'rotate' : ''} /></button>{open === i && <p>{a}</p>}</div>)}</div></section>
//         </main>
//         <footer><div className="footer-main"><div><a className="logo footer-logo" href="#home">xntrova<span>.</span></a><p>Growth-focused digital marketing and technology for ambitious businesses.</p></div><div className="footer-links"><div><b>Explore</b><a href="#services">Services</a><a href="#about">About</a><a href="#work">Work</a></div><div><b>Contact</b><a href="#contact">Start a project</a><a href="mailto:info@xntrova.com">Email us</a><a href="https://wa.me/918683828646">WhatsApp</a></div></div></div><div className="footer-bottom"><span>© 2026 Xntrova. All rights reserved.</span><span>Built with purpose.</span></div></footer>
//     </div>
// }
// createRoot(document.getElementById('root')).render(<App />);

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
    ArrowUpRight,
    Menu,
    X,
    Check,
    ChevronDown,
    Search,
    BarChart3,
    Code2,
    PenTool,
    ShoppingBag,
    MessageCircle,
    Mail,
    MapPin,
    Phone,
    Quote
} from 'lucide-react';

import './styles.css';


/* =========================
   SERVICES
========================= */

const services = [
    {
        icon: Search,
        title: 'Search Engine Optimization',
        text: 'Build sustainable visibility with technical, on-page and content-led SEO strategies.'
    },
    {
        icon: BarChart3,
        title: 'Paid Advertising',
        text: 'Reach the right audience with focused campaigns across Google, Meta and other platforms.'
    },
    {
        icon: MessageCircle,
        title: 'Social Media Marketing',
        text: 'Turn attention into community with content, creative direction and performance insights.'
    },
    {
        icon: ShoppingBag,
        title: 'E-Commerce Marketing',
        text: 'Improve product discovery, acquisition and conversion across your online store.'
    },
    {
        icon: PenTool,
        title: 'Content Marketing',
        text: 'Create useful, credible content that strengthens your brand and supports organic growth.'
    },
    {
        icon: Code2,
        title: 'Website Development',
        text: 'Fast, responsive and conversion-focused websites built around your business goals.'
    }
];


/* =========================
   PROCESS
========================= */

const steps = [
    [
        '01',
        'Discover',
        'We understand your business, audience, goals and current digital presence.'
    ],
    [
        '02',
        'Plan',
        'We turn insights into a focused roadmap with clear priorities and measurable outcomes.'
    ],
    [
        '03',
        'Create',
        'Our team designs, builds and launches experiences made for real users.'
    ],
    [
        '04',
        'Improve',
        'We measure performance, learn from the data and keep improving.'
    ]
];


/* =========================
   SELECTED WORK
========================= */

const work = [
    [
        '01',
        'Brand visibility',
        'SEO + Content',
        'A focused organic growth system built around search intent and useful content.'
    ],
    [
        '02',
        'Lead generation',
        'Paid + Landing Page',
        'A conversion journey designed to reduce friction from ad click to enquiry.'
    ],
    [
        '03',
        'Digital presence',
        'Web Development',
        'A modern website experience designed to communicate value quickly and clearly.'
    ]
];


/* =========================
   FAQ
========================= */

const faqs = [
    [
        'How long does digital marketing take to show results?',
        'It depends on the channel and goal. Paid campaigns can produce feedback quickly, while SEO normally needs consistent work over time.'
    ],
    [
        'How do you build a strategy?',
        'We start with the business goal, audience and current digital presence, then define priorities, channels and measurable outcomes.'
    ],
    [
        'Will I receive campaign updates?',
        'Yes. Performance should be visible through clear reporting, meaningful metrics and regular communication.'
    ],
    [
        'Which service is right for my business?',
        'That depends on your objective. A discovery conversation helps identify the right mix rather than forcing a one-size-fits-all package.'
    ]
];


function App() {

    const [open, setOpen] = useState(null);
    const [menu, setMenu] = useState(false);
    const [sent, setSent] = useState(false);


    /* =========================
       SMOOTH SCROLL
    ========================= */

    const scrollTo = (id) => {
        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: 'smooth'
            });

        setMenu(false);
    };


    /* =========================
       CONTACT FORM
    ========================= */

    const submit = (e) => {
        e.preventDefault();

        setSent(true);

        e.currentTarget.reset();

        setTimeout(() => {
            setSent(false);
        }, 5000);
    };


    return (
        <div className="app">

            {/* =========================
                TOP BAR
            ========================= */}

            <div className="topbar">
                Digital growth, without the unnecessary noise.
                <span>Free discovery call available →</span>
            </div>


            {/* =========================
                NAVBAR
            ========================= */}

            <header className="nav">

                <div className="nav-inner">

                    <a
                        className="logo"
                        href="#home"
                        onClick={() => scrollTo('home')}
                    >
                        xntrova<span>.</span>
                    </a>


                    <nav
                        className={
                            menu
                                ? 'nav-links open'
                                : 'nav-links'
                        }
                    >

                        {[
                            ['Services', 'services'],
                            ['About', 'about'],
                            ['Process', 'process'],
                            ['Work', 'work'],
                            ['Contact', 'contact']
                        ].map(([x, id]) => (

                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => scrollTo(id)}
                            >
                                {x}
                            </a>

                        ))}


                        <button
                            className="nav-cta"
                            onClick={() => scrollTo('contact')}
                        >
                            Let's talk
                            <ArrowUpRight size={16} />
                        </button>

                    </nav>


                    <button
                        className="menu-btn"
                        aria-label="Toggle menu"
                        onClick={() => setMenu(!menu)}
                    >
                        {menu
                            ? <X />
                            : <Menu />
                        }
                    </button>

                </div>

            </header>


            <main>

                {/* =========================
                    HERO
                ========================= */}

                <section
                    id="home"
                    className="hero section"
                >

                    <div className="hero-copy">

                        <div className="eyebrow">
                            <span className="dot"></span>
                            Digital marketing + technology
                        </div>


                        <h1>
                            Make your digital presence
                            <em> work harder.</em>
                        </h1>


                        <p>
                            We help ambitious businesses become easier
                            to find, easier to trust and easier to choose —
                            through strategy, creative and technology.
                        </p>


                        <div className="hero-actions">

                            <button
                                className="btn primary"
                                onClick={() => scrollTo('contact')}
                            >
                                Start a conversation
                                <ArrowUpRight size={18} />
                            </button>


                            <button
                                className="text-btn"
                                onClick={() => scrollTo('work')}
                            >
                                See our work
                                <span>↗</span>
                            </button>

                        </div>


                        <div className="proof">

                            <div className="avatars">
                                <i>A</i>
                                <i>N</i>
                                <i>R</i>
                                <i>+</i>
                            </div>


                            <div>
                                <strong>
                                    Built for measurable growth
                                </strong>

                                <small>
                                    Strategy • Creative • Performance
                                </small>
                            </div>

                        </div>

                    </div>


                    <div className="hero-art">

                        <div className="orb orb-a"></div>

                        <div className="orb orb-b"></div>


                        <div className="dashboard">

                            <div className="dash-top">

                                <span>
                                    Performance overview
                                </span>

                                <b>
                                    Last 30 days ↗
                                </b>

                            </div>


                            <div className="chart">

                                <div className="line"></div>

                                <div className="bar b1"></div>
                                <div className="bar b2"></div>
                                <div className="bar b3"></div>
                                <div className="bar b4"></div>
                                <div className="bar b5"></div>

                            </div>


                            <div className="metrics">

                                <div>
                                    <small>
                                        Organic traffic
                                    </small>

                                    <strong>
                                        +250%
                                    </strong>
                                </div>


                                <div>
                                    <small>
                                        Projects delivered
                                    </small>

                                    <strong>
                                        120+
                                    </strong>
                                </div>

                            </div>

                        </div>


                        <div className="float-card">

                            <span>
                                Growth signal
                            </span>

                            <strong>
                                ↑ 38.6%
                            </strong>

                            <small>
                                qualified enquiries
                            </small>

                        </div>

                    </div>

                </section>


                {/* =========================
                    TICKER
                ========================= */}

                <section className="ticker">

                    <div>SEO</div>
                    <div>Paid Media</div>
                    <div>Social</div>
                    <div>Content</div>
                    <div>E-commerce</div>
                    <div>Web Development</div>

                </section>


                {/* =========================
                    SERVICES
                ========================= */}

                <section
                    id="services"
                    className="section"
                >

                    <div className="section-head">

                        <div>

                            <div className="eyebrow">
                                What we do
                            </div>

                            <h2>
                                One team for the
                                <em> whole journey.</em>
                            </h2>

                        </div>


                        <p>
                            From the first search to the final click,
                            we connect marketing and technology so every
                            part of the experience makes sense.
                        </p>

                    </div>


                    <div className="service-grid">

                        {services.map(
                            ({
                                icon: Icon,
                                title,
                                text
                            }) => (

                                <article
                                    className="service"
                                    key={title}
                                >

                                    <div className="icon">
                                        <Icon size={21} />
                                    </div>


                                    <h3>
                                        {title}
                                    </h3>


                                    <p>
                                        {text}
                                    </p>


                                    <a
                                        href="#contact"
                                        onClick={() =>
                                            scrollTo('contact')
                                        }
                                    >
                                        Explore service
                                        <ArrowUpRight size={15} />
                                    </a>

                                </article>

                            )
                        )}

                    </div>

                </section>


                {/* =========================
                    ABOUT
                ========================= */}

                <section
                    id="about"
                    className="about section"
                >

                    <div className="about-visual">

                        <div className="about-card">

                            <span>
                                THE XNTROVA APPROACH
                            </span>


                            <strong>
                                Ideas need
                                <br />
                                <em>evidence.</em>
                            </strong>


                            <p>
                                Creative thinking backed by data,
                                clear planning and continuous learning.
                            </p>


                            <div className="mini-stat">
                                <b>01</b>
                                <span>
                                    Think like a customer
                                </span>
                            </div>


                            <div className="mini-stat">
                                <b>02</b>
                                <span>
                                    Build with purpose
                                </span>
                            </div>


                            <div className="mini-stat">
                                <b>03</b>
                                <span>
                                    Measure what matters
                                </span>
                            </div>

                        </div>

                    </div>


                    <div className="about-copy">

                        <div className="eyebrow">
                            About Xntrova
                        </div>


                        <h2>
                            Good marketing feels
                            <em> human.</em>
                        </h2>


                        <p>
                            We believe great digital work starts
                            by understanding people. Our approach
                            combines fresh ideas, robust planning
                            and data-driven decisions to create
                            experiences that connect and move
                            people to action.
                        </p>


                        <p>
                            Whether the goal is visibility,
                            qualified leads or a stronger digital
                            presence, we focus on work that has
                            a clear job to do — and a way to
                            measure whether it is doing it.
                        </p>


                        <div className="about-points">

                            <span>
                                <Check />
                                Clear strategy
                            </span>

                            <span>
                                <Check />
                                Practical execution
                            </span>

                            <span>
                                <Check />
                                Transparent reporting
                            </span>

                            <span>
                                <Check />
                                Continuous improvement
                            </span>

                        </div>

                    </div>

                </section>


                {/* =========================
                    NUMBERS
                ========================= */}

                <section className="numbers">

                    <div>
                        <strong>250%</strong>
                        <span>organic traffic growth*</span>
                    </div>

                    <div>
                        <strong>120+</strong>
                        <span>projects delivered*</span>
                    </div>

                    <div>
                        <strong>500+</strong>
                        <span>happy clients*</span>
                    </div>

                    <div>
                        <strong>4.9</strong>
                        <span>average client sentiment*</span>
                    </div>

                </section>


                {/* =========================
                    PROCESS
                ========================= */}

                <section
                    id="process"
                    className="section process"
                >

                    <div className="section-head">

                        <div>

                            <div className="eyebrow">
                                How we work
                            </div>

                            <h2>
                                Simple process.
                                <em> Serious detail.</em>
                            </h2>

                        </div>


                        <p>
                            No mystery steps or unnecessary layers.
                            Just a clear route from business problem
                            to useful outcome.
                        </p>

                    </div>


                    <div className="steps">

                        {steps.map(
                            ([n, t, d]) => (

                                <article key={n}>

                                    <span>
                                        {n}
                                    </span>

                                    <h3>
                                        {t}
                                    </h3>

                                    <p>
                                        {d}
                                    </p>

                                </article>

                            )
                        )}

                    </div>

                </section>


                {/* =====================================================
                    WORK WITH A PURPOSE
                ===================================================== */}

                <section
                    id="work"
                    className="section work"
                >

                    <div className="section-head">

                        <div>

                            <div className="eyebrow">
                                Selected work
                            </div>

                            <h2>
                                Work with a
                                <em> purpose.</em>
                            </h2>

                        </div>


                        <p>
                            A few examples of how strategy,
                            content and technology can come
                            together around a clear business
                            objective.
                        </p>

                    </div>


                    <div className="work-grid">

                        {work.map(
                            ([n, title, tag, text], i) => (

                                <article
                                    className={`case c${i}`}
                                    key={n}
                                >

                                    {/* VISUAL AREA */}

                                    <div className="case-visual">


                                        {/* BACKGROUND GRID */}

                                        <div className="case-lines"></div>


                                        {/* CARD NUMBER */}

                                        <b className="case-number">
                                            {n}
                                        </b>


                                        {/* SERVICE TAG */}

                                        <span className="case-tag">
                                            {tag}
                                        </span>


                                        {/* CENTER CONTENT */}

                                        <div className="case-center">


                                            {/* SEO + CONTENT */}

                                            {i === 0 && (

                                                <>
                                                    <div className="work-main-icon">
                                                        <Search size={36} />
                                                    </div>

                                                    <strong>
                                                        SEO + Content
                                                    </strong>

                                                    {/* <div className="work-mini-items">
                                                        <span>
                                                            Keywords
                                                        </span>

                                                        <span>
                                                            Content
                                                        </span>

                                                        <span>
                                                            Organic Growth
                                                        </span>
                                                    </div> */}

                                                    <div className="seo-growth">
                                                        <span>↑</span>
                                                        <small>
                                                            Organic reach
                                                        </small>
                                                    </div>
                                                </>

                                            )}


                                            {/* PAID + LANDING PAGE */}

                                            {i === 1 && (

                                                <>
                                                    <div className="work-main-icon">
                                                        <BarChart3 size={36} />
                                                    </div>

                                                    <strong>
                                                        Paid + Landing Page
                                                    </strong>

                                                    {/* <div className="work-mini-items">
                                                        <span>
                                                            Ads
                                                        </span>

                                                        <span>
                                                            Click
                                                        </span>

                                                        <span>
                                                            Convert
                                                        </span>
                                                    </div> */}

                                                    <div className="conversion-box">
                                                        <span>
                                                            Campaign
                                                        </span>

                                                        <span>
                                                            →
                                                        </span>

                                                        <span>
                                                            Lead
                                                        </span>
                                                    </div>
                                                </>

                                            )}


                                            {/* WEB DEVELOPMENT */}

                                            {i === 2 && (

                                                <>
                                                    <div className="work-main-icon">
                                                        <Code2 size={36} />
                                                    </div>

                                                    <strong>
                                                        Web Development
                                                    </strong>

                                                    {/* <div className="work-mini-items">
                                                        <span>
                                                            React
                                                        </span>

                                                        <span>
                                                            UI
                                                        </span>

                                                        <span>
                                                            Website
                                                        </span>
                                                    </div> */}

                                                    <div className="browser-window">

                                                        <div className="browser-top">
                                                            <i></i>
                                                            <i></i>
                                                            <i></i>
                                                        </div>

                                                        <div className="browser-code">
                                                            <span>
                                                                &lt;Website /&gt;
                                                            </span>
                                                        </div>

                                                    </div>
                                                </>

                                            )}

                                        </div>

                                    </div>


                                    {/* CARD CONTENT */}

                                    <div className="case-body">

                                        <small>
                                            {tag}
                                        </small>


                                        <h3>
                                            {title}
                                        </h3>


                                        <p>
                                            {text}
                                        </p>


                                        <a
                                            href="#contact"
                                            onClick={() =>
                                                scrollTo('contact')
                                            }
                                        >
                                            Discuss a similar project
                                            <ArrowUpRight size={15} />
                                        </a>

                                    </div>

                                </article>

                            )
                        )}

                    </div>

                </section>


                {/* =========================
                    TESTIMONIAL
                ========================= */}

                <section className="testimonial section">

                    <div className="quote-icon">
                        <Quote />
                    </div>


                    <blockquote>
                        “What impressed us most about Xntrova was
                        their strategic mindset. They didn't give us
                        a one-size-fits-all solution; they created a
                        customised strategy for our business.”
                    </blockquote>


                    <div className="person">

                        <b>
                            Amit Verma
                        </b>

                        <span>
                            Founder
                        </span>

                    </div>

                </section>


                {/* =========================
                    CTA
                ========================= */}

                <section className="cta">

                    <div>

                        <div className="eyebrow">
                            Ready when you are
                        </div>

                        <h2>
                            Let's make your next
                            <br />
                            <em>move count.</em>
                        </h2>

                    </div>


                    <button
                        className="btn light"
                        onClick={() => scrollTo('contact')}
                    >
                        Start a conversation
                        <ArrowUpRight size={18} />
                    </button>

                </section>


                {/* =========================
                    CONTACT
                ========================= */}

                <section
                    id="contact"
                    className="contact section"
                >

                    <div className="contact-copy">

                        <div className="eyebrow">
                            Get in touch
                        </div>


                        <h2>
                            Have a project in
                            <em> mind?</em>
                        </h2>


                        <p>
                            Tell us a little about what you're
                            trying to achieve. We'll get back
                            to you with the next step.
                        </p>


                        <div className="contact-details">

                            <span>
                                <Mail />
                                info@xntrova.com
                            </span>

                            <span>
                                <Phone />
                                +91 868-382-8646
                            </span>

                            <span>
                                <MapPin />
                                Sector 8, Dwarka, New Delhi
                            </span>

                        </div>

                    </div>


                    <form
                        className="lead-form"
                        onSubmit={submit}
                    >

                        <label>
                            Your name

                            <input
                                required
                                name="name"
                                placeholder="John Doe"
                            />
                        </label>


                        <label>
                            Work email

                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="you@company.com"
                            />
                        </label>


                        <label>
                            Company

                            <input
                                name="company"
                                placeholder="Company name"
                            />
                        </label>


                        <label>
                            What can we help with?

                            <textarea
                                required
                                name="message"
                                rows="4"
                                placeholder="Tell us briefly about your goal..."
                            ></textarea>

                        </label>


                        <button
                            className="btn primary"
                            type="submit"
                        >
                            Send enquiry
                            <ArrowUpRight size={18} />
                        </button>


                        {sent && (

                            <div className="success">
                                Thanks — your enquiry has been captured for this demo.
                            </div>

                        )}

                    </form>

                </section>


                {/* =========================
                    FAQ
                ========================= */}

                <section className="faq section">

                    <div className="eyebrow">
                        Questions, answered
                    </div>


                    <h2>
                        Before we
                        <em> start.</em>
                    </h2>


                    <div className="faq-list">

                        {faqs.map(
                            ([q, a], i) => (

                                <div
                                    className="faq-item"
                                    key={q}
                                >

                                    <button
                                        onClick={() =>
                                            setOpen(
                                                open === i
                                                    ? null
                                                    : i
                                            )
                                        }
                                    >

                                        <span>
                                            {q}
                                        </span>

                                        <ChevronDown
                                            className={
                                                open === i
                                                    ? 'rotate'
                                                    : ''
                                            }
                                        />

                                    </button>


                                    {open === i && (

                                        <p>
                                            {a}
                                        </p>

                                    )}

                                </div>

                            )
                        )}

                    </div>

                </section>

            </main>


            {/* =========================
                FOOTER
            ========================= */}

            <footer>

                <div className="footer-main">

                    <div>

                        <a
                            className="logo footer-logo"
                            href="#home"
                        >
                            xntrova<span>.</span>
                        </a>


                        <p>
                            Growth-focused digital marketing
                            and technology for ambitious businesses.
                        </p>

                    </div>


                    <div className="footer-links">

                        <div>

                            <b>
                                Explore
                            </b>

                            <a href="#services">
                                Services
                            </a>

                            <a href="#about">
                                About
                            </a>

                            <a href="#work">
                                Work
                            </a>

                        </div>


                        <div>

                            <b>
                                Contact
                            </b>

                            <a href="#contact">
                                Start a project
                            </a>

                            <a href="mailto:info@xntrova.com">
                                Email us
                            </a>

                            <a href="https://wa.me/918683828646">
                                WhatsApp
                            </a>

                        </div>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 Xntrova. All rights reserved.
                    </span>

                    <span>
                        Built with purpose.
                    </span>

                </div>

            </footer>

        </div>
    );
}


createRoot(
    document.getElementById('root')
).render(
    <App />
);