import Image from "next/image";

export function Header() {
  // keeping this as an example of the most basic component
  return (
    <header className="flex flex-row items-center text-center text-sm font-bold h-24 mb-8 text-headline">
        <div className="w-0 px-1 text-[32px] text-left">
          <span className="font-medium">zantho</span><span className="font-normal">.tech</span>
        </div>

        <div className="flex grow flex-row items-center justify-center">
          <div className="min-w-20 px-1">Services</div>
          <div className="min-w-20 px-1">About</div>
          <div className="min-w-20 px-1">Contact</div>
        </div>
      </header>
    );
}

// export function Section(props) {
//   let content = props.content;
//   let attribs = props.attribs;

//   return (
//       <div className={`flex flex-row w-full ${ attribs }`}>
//         {content}
//       </div>
//     );
// }

// need to look into this in the future.
interface CardProps {
  header?: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card(props: CardProps) {
  let header = props.header;
  let body = props.body;
  let footer = props.footer;

  return (
    <div className="flex flex-col text-headline flex-1 border-t border-divider">
      {header}
      <div className="text-base text-paragraph text-zantho-charcoal flex-grow">{body}</div>
      {footer}
    </div>
  );
}

// export function Button(props) {
//   let text = props.text 
//   let href = props.href
// }

export default function Home() {
  return (
    <div className="min-h-screen font-sans tracking-tight bg-white dark:bg-white text-zinc-900 dark:text-zinc-900 px-12 mx-auto border-divider">
      
      <Header/>

      <div className="visible md:invisible md:collapse">
        Hello! We're still working on the mobile view of our website. We'll get to it as soon as we can! Thank you for your patience and in the mean time please view our site on desktop!
      </div>

      <main className="container max-w-6xl mx-auto">
        
        <div id="banner" className="flex flex-row w-full min-h-144 items-center py-16">
          <div className="flex flex-col flex-1">
            <div className="text-[32px]/8 tracking-tighter py-4">Turning security and data investments into operational confidence.</div>
            <div className="text-paragraph text-lg py-4">Zantho enables organizations to reduce risk and gain reliable visibility by designing and implementing security and data platforms that operate as cohesive, trusted systems</div>
            <div className="py-4">
              <a
                className="flex h-12 w-53 text-white text-sm font-bold items-center justify-center gap-2 rounded-full bg-zantho-teal-500 px-5 text-background transition-colors hover:bg-black text-white dark:text-white"
                href="mailto:team@zantho.tech"
                target="_blank"
                rel="noopener noreferrer"
                >
                Request a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-2 inline mx-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image
              className="inline mr-0.5"
              src="/Pebble People Ui.png"
              alt="pebble people UI"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>

        <div id="section1" className="flex flex-col justify-center w-full border-t border-divider py-16">
          <div className="flex flex-col justify-center"> 
            <div className="text-headerone py-4">Our Process</div>
            <div className="text-paragraph text-base-text pb-16">Three steps. A clear framework. All the way, or just what you need.</div>
          </div>

          <div className="flex flex-row flex-wrap min-h-156 pb-16 space-x-4">

            <Card 
              header= 
                <div>
                  <div className="text-[80px] text-accent-six py-8">01</div>
                  <div className="py-2 text-lg">
                    <Image
                      className="inline mr-2"
                      src="/Assess.png"
                      alt="assessment.png"
                      width={20}
                      height={20}
                      priority
                    />Assess
                  </div>
                </div>
              body=
                <article className="min-h-88">
                  Understand what needs to exist<br/><br/>
                  We identify your security and data goals, evaluate existing tools and gaps, and define measurable success criteria.<br/><br/>
                  The outcome is a clear understanding of the current state and prioritized areas for improvement.
                </article>

              footer= <div><button className="bg-[#b3ebe5] hover:bg-black hover:text-white text-black text-sm font-bold py-4 px-6 rounded-full">See Assess Services</button></div>
            />

            <Card 
              header= 
                <div>
                  <div className="text-[80px] text-accent-six py-8">02</div>
                  <div className="py-2 text-lg">
                    <Image
                      className="inline mr-2"
                      src="/Design.png"
                      alt="Design.png"
                      width={20}
                      height={20}
                      priority
                    />Design
                  </div>
                </div>
              body=
                <article className="min-h-88">
                  Translate business objectives into practical technical solutions<br/><br/>
                  With the current state understood, we define the architecture required to achieve the desired outcomes.<br/><br/>
                  Our architects work with both business and technical stakeholders to ensure security platforms, data systems, and integrations are designed as a coordinated operational capability rather than disconnected components.
                </article>

              footer= <div><button className="bg-[#b3ebe5] hover:bg-black hover:text-white text-black text-sm font-bold py-4 px-6 rounded-full">See Design Services</button></div>
            />

            <Card 
              header= 
                <div>
                  <div className="text-[80px] text-accent-six py-8">03</div>
                  <div className="py-2 text-lg">
                    <Image
                      className="inline mr-2"
                      src="/Implement.png"
                      alt="Implement.png"
                      width={20}
                      height={20}
                      priority
                    />Implement
                  </div>
                </div>
              body=
                <article className="min-h-88">
                  Turn architecture into operational capability<br/><br/>
                  With a clear design in place, we enable the implementation of solutions that deliver measurable outcomes.<br/><br/>
                  Our focus is not simply on deployment, but on ensuring systems function as a reliable operational environment that supports security operations and data-driven decision making.
                </article>

              footer= <div><button className="bg-[#b3ebe5] hover:bg-black hover:text-white text-black text-sm font-bold py-4 px-6 rounded-full">See Design Services</button></div>
            />

          </div>
        </div>

        <div id="section2" className="flex flex-col justify-center w-full border-t border-divider py-16">
          <div className="flex flex-col justify-center max-w-192 pb-16"> 
            <div className="text-caption text-accent-caption font-mono">Outcomes</div>
            <div className="text-headerone py-8">Delivering Confidence in Security and Data</div>
            <div className="text-paragraph text-base-text">Turning fragmented systems and data into integrated capabilities that deliver reliable visibility, faster detection, and confident decision making.</div>
          </div>

          <div className="flex flex-row min-h-72 mb-8 space-x-4">
            <Card 
              header=<div><div className="pt-12 py-4">
                <Image
                  className="inline mr-2"
                  src="/git-branch.svg"
                  alt="git-branch.svg"
                  width={26}
                  height={26}
                  priority
                />
              </div><div className="py-2 text-lg">Achieve Tool Integration</div></div>
              body=<article>
                Connect your fragmented security and data stack into a unified system where tools share intelligence, automate responses, and amplify each other's value.
              </article>
            />

            <Card 
              header=<div><div className="pt-12 py-4">
                <Image
                  className="inline mr-2"
                  src="/settings.svg"
                  alt="settings.svg"
                  width={26}
                  height={26}
                  priority
                />
              </div><div className="py-2 text-lg">Operationalize Technology</div></div>
              body=<article>
                Embed new capabilities into daily workflows through process design, team training, and documentation that ensures sustainable adoption beyond project completion.
              </article>
            />

            <Card 
              header=<div><div className="pt-12 py-4">
                <Image
                  className="inline mr-2"
                  src="/chart-no-axes-combined.svg"
                  alt="chart-no-axes-combined.svg"
                  width={26}
                  height={26}
                  priority
                />
              </div><div className="py-2 text-lg">Make Data-Driven Decisions</div></div>
              body=<article>
                Transform inaccessible data into visual dashboards and reports that answer your specific business questions—from booking trends to operational efficiency.
              </article>
            />

            <Card 
              header=<div><div className="pt-12 py-4">
                <Image
                  className="inline mr-2"
                  src="/target.svg"
                  alt="target.svg"
                  width={26}
                  height={26}
                  priority
                />
              </div><div className="py-2 text-lg">Detect Threats Faster</div></div>
              body=<article>
                Reduce mean time to detect from days to minutes with custom detection rules, optimized security tool integration, and validated coverage against real attack techniques.
              </article>
            />

          </div>
        </div>

        
        <div id="section3" className="flex flex-col items-center justify-center relative w-full border-t border-divider min-h-128 py-16 bg-linear-to-r/srgb from-zantho-teal-500  via-[#e7e1d6] via-40% to-zantho-coral-500 to-90%">
          <div className="max-w-4xl text-3xl text-center">
          By combining disciplined assessment, thoughtful design, and focused implementation, we help organizations move from fragmented tools and data to operational capabilities that support <span className="font-bold">confident decision making</span> and <span className="font-bold">effective security operations</span>.
          </div>
        </div>

        <div id="section4" className="flex flex-row align-start w-full border-t border-divider py-16">
          <div className="flex flex-col flex-1 justify-center">
            <div>
              <div className="text-caption text-accent-caption font-mono ">How We’re Different</div>
              <div className="text-headerone py-8 max-w-112">Your Partner for Data and Security Operations</div>
            </div>

            <Card
              body=
                  <div className="flex flex-row py-4">
                    <div className="min-w-16 font-bold">01</div>
                    <div>
                      Enterprise Track Record<br/><br/>

                      Our founders delivered end-to-end security and data projects for a leading AI and Data Analytics Platform company, helping major enterprises, including leading financial institutions, maximize their technology investments and achieve measurable operational improvements.
                    </div>
                  </div>
            />

            <Card
              body=
                  <div className="flex flex-row py-4">
                    <div className="min-w-16 font-bold">02</div>
                    <div>
                      Elite Certifications<br/><br/>

                      GCIH (Incident Handling), OSCP (Offensive Security), CKA (Kubernetes Administrator)—our team holds industry-recognized certifications that demonstrate mastery across security operations, detection engineering, and cloud-native infrastructure.
                    </div>
                  </div>
            />
            
            <Card
              body=
                  <div className="flex flex-row py-4">
                    <div className="min-w-16 font-bold">03</div>
                    <div>
                      Complementary Expertise<br/><br/>

                      We combine data analytics and process design expertise with elite security engineering (GCIH, OSCP, CKA)—ensuring solutions work both technically and operationally.
                    </div>
                  </div>
            />
            
            <Card
              body=
                  <div className="flex flex-row py-4">
                    <div className="min-w-16 font-bold">04</div>
                    <div>
                      Operationalization Focus<br/>

                      We've taken complex initiatives from conception through live production at enterprise scale. Our approach prioritizes sustainable capability building, not vendor dependence.
                    </div>
                  </div>
            />
                
          </div>
          <div className="flex-1">
            <Image
              className="inline mr-0.5"
              src="/Pebble People Work From Home.png"
              alt="Pebble People Work From Home.png"
              width={544}
              height={711}
              priority
            />
          </div>
        </div>

        <div id="section5" className="flex flex-row justify-center w-full border-t border-divider">
          <div className="flex-1 justify-center max-w-152 py-24">

            <div className="text-center text-headerone py-4">Let's Talk</div>
            <div className="text-center text-paragraph py-4">
              Schedule a consultation to discuss your security and data challenges. We'll assess your current tools and outline how we can help you achieve measurable results.
            </div>
            <div className="text-center py-4">
              <a
                className="flex h-12 w-full text-white text-sm font-bold items-center justify-center gap-2 rounded-full bg-zantho-teal-500 px-5 text-background transition-colors hover:bg-black text-white dark:text-white"
                href="mailto:team@zantho.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-2 inline mx-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>          
      </main>

      <footer className="flex flex-col min-w-full border-t border-divider py-8">
          <div className="flex flex-row font-bold">
            <div className="grow text-2xl">
              <Image
                className="inline mr-0.5"
                src="/zantho.svg"
                alt="zantho.tech logo"
                width={24}
                height={24}
                priority
              /><span className="font-medium">zantho</span><span className="font-normal">.tech</span>
            </div>
            <div className="size-24 text-[14px] w-20 text-center">Services</div>
            <div className="size-24 text-[14px] w-20 text-center">About</div>
            <div className="size-24 text-[14px] w-20 text-center">Contact</div>
          </div>

          <div className="flex flex-row">
            <div className="text-caption text-xs flex grow text-headline">2026 ZANTHO TECH</div>
            <div className="text-xs">All Rights Reserved</div>
          </div>

        </footer>
    </div>
  );
}
