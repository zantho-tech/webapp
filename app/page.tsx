import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-zantho-teal-500 dark:bg-zantho-teal-500">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="my-4">
          <span>
          <Image
            className="inline"
            src="/zantho.svg"
            alt="zantho.tech logo"
            width={35}
            height={35}
            priority
          />
          <span className="p-1 text-3xl align-middle text-zinc-800 dark:text-zinc-800"><span className="font-semibold">zantho.</span>tech</span>
          </span>
        </div>
          
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-4">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            We're cooking something up.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-800">
          {/*<p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">*/}
            We're currently working on a lot of exciting things behind the scenes! Curious about the goings-on? Drop us a line at team@zantho.tech.{/*{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.*/}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row my-4">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] text-white dark:text-white"
            href="mailto:team@zantho.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

{/*            <Image
              className="stroke-current fill-none"
              src="/mail.svg"
              alt="Email"
              width={16}
              height={16}
            />*/}
            Say hello!
          </a>
{/*          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>*/}
        </div>
      </main>
    </div>
  );
}
