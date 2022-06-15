import Head from "next/head";
import Faq from "../components/Faq";
import Guestbook from "../components/Guestbook";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caleb Denio</title>
        <meta
          name="description"
          content="A code-writer. Actually three code-writers in a trenchcoat."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Caleb Denio" />
        <meta
          property="og:description"
          content="A code-writer. Actually three code-writers in a trenchcoat."
        />
      </Head>

      <div className="px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center items-center mt-32 mb-20">
            <img
              src="/me.png"
              alt="me"
              className="w-40 rounded-md mr-8 -rotate-3 scale-110 shadow-lg"
            />

            <div className="text-left">
              <h1 className="text-5xl font-bold">Caleb Denio</h1>
              <h2 className="text-2xl">⬅️ that's me</h2>
            </div>
          </div>

          <h2 className="text-3xl">
            I'm a <strong>programmer</strong>.
          </h2>
          <h6 className="text-xs mb-20">(that means i write code)</h6>

          <h1 className="text-md text-zinc-600 font-bold uppercase before:h-px before:flex-1 before:bg-zinc-600 before:block before:mr-5 flex items-center after:h-px after:ml-5 after:flex-1 after:bg-zinc-600 mb-10">
            Projects
          </h1>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <Project
              name="Resolute"
              logo="https://github.com/resoluteapp.png"
              description='A "reply later" button that lives everywhere.'
              github="https://github.com/resoluteapp/resolute"
              site="https://useresolute.com"
              flavor="work in progress"
            />
            <Project
              name="Shorty"
              logo="https://emojicdn.elk.sh/🔗"
              description="A self-hosted, high-performance link shortener."
              github="https://github.com/cjdenio/shorty"
              flavor="i didn't make a logo for this"
            />
            <Project
              name="Underpass"
              description="An open-source HTTP tunneling tool (similar to ngrok)."
              github="https://github.com/cjdenio/underpass"
              flavor="usable but poorly built"
              logo="https://emojicdn.elk.sh/🧑‍💻"
            />
            <Project
              name="Figma Pong"
              description="Play Pong in your Figma documents."
              github="https://github.com/cjdenio/figma-pong"
              site="https://www.figma.com/community/plugin/950871409613899955"
              flavor="trigonometry!"
              logo="https://emojicdn.elk.sh/🏓"
            />
          </div>

          <h1 className="text-md text-zinc-600 font-bold uppercase before:h-px before:flex-1 before:bg-zinc-600 before:block before:mr-5 flex items-center after:h-px after:ml-5 after:flex-1 after:bg-zinc-600 mb-10">
            Frequently Asked Questions
          </h1>

          <Faq question="So you write code, do you?">
            Yep. Mostly TypeScript, Ruby, Go, and Rust.
          </Faq>
          <Faq question="What's your favorite animal?">
            <p className="mb-3">
              Jumping straight to the hard-hitting questions, I see.
            </p>
            <p className="mb-3">
              It'd have to be a toss-up between deer, cats, cows, and sheep.
              Perhaps I should invite one of each to engage in formal debate as
              to which should be my favorite animal.
            </p>
            <p>
              I don't have a pet, but if I did, it'd be a cat. My uncle has a
              cat. I think it's beginning to feel attached to me. Or maybe it
              wants me to feed it. Yeah, that's probably it. Welp.
            </p>
          </Faq>
          <Faq question="Are you Mario?">Yes.</Faq>
          <Faq question="Where you at?">
            A rather ambiguously worded question if you ask me. Physically?
            Emotionally? Professionally? Physically, I'm in the southern New
            Hampshire area. Professionally... well, ask me again in a year.
            Emotionally, somewhere in South Dakota. I definitely feel emotions.
          </Faq>
          <Faq question="Wait a minute... aren't you the guy behind the hit game Among Us?">
            No. I don't know why you would have thought that.
          </Faq>
          <Faq question="I recognize you from somewhere...">
            Perhaps you've heard of my startup,{" "}
            <a href="https://gadzooks.me" target="_blank">
              Gadzooks
            </a>
            .
          </Faq>
          <Faq question="What's your favorite color?">
            Blue. Always has been. Though I also like purple.
          </Faq>
          <Faq question="What is your quest?">
            To write c... wait a minute. Nice try.
          </Faq>
          <Faq question="Are any of these questions asked frequently?">
            Well... not necessarily. But you're asking them right now!
          </Faq>
          <Faq question="So... can you do anything impressive?">
            <p className="mb-3">
              I once tried to break the world record for number of saltines
              eaten in a minute. It didn't work, so... nope.
            </p>
            <p>WAIT! I can play the violin while jumping on one leg!</p>
          </Faq>
          <Faq question="What are you thoughts on the inevitable collapse of modern society?">
            Woah there. I'm just a programmer. Go ask the guy who made Among Us
            or something.
          </Faq>
          <Faq question="Do you have a favorite word?">Yes. It's Gadzooks!</Faq>
          <Faq question="Do you have a favorite person?">
            I have a few. Many of them are{" "}
            <a
              href="https://hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hack Club
            </a>
            bers.
          </Faq>
          <Faq question="Any closing statements?">
            Remember: anything is possible if you eat a plate of homemade
            lasagna first.
          </Faq>

          <h1
            className="text-md text-zinc-600 font-bold uppercase before:h-px before:flex-1 before:bg-zinc-600 before:block before:mr-5 flex items-center after:h-px after:ml-5 after:flex-1 after:bg-zinc-600 mb-5"
            id="guestbook"
          >
            Guestbook
          </h1>
          <Guestbook />

          <div className="mb-8">
            <a
              href="https://github.com/cjdenio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            &middot;{" "}
            <a
              href="https://twitter.com/CalebDenio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <img
              src="https://cloud-nhe3q534r-hack-club-bot.vercel.app/0image.png"
              alt="ohyeahwoofyeah"
              className="w-5 block mx-auto mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
