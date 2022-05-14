<script>
	import me from '../assets/me.png';
	import Faq from '../components/faq.svelte';
</script>

<svelte:head>
	<title>Caleb Denio</title>
</svelte:head>

<div class="flex justify-center items-center mt-32 mb-20">
	<img src={me} alt="me" class="w-40 rounded-md mr-8 -rotate-3 scale-110 shadow-lg" />

	<div class="text-left">
		<h1 class="text-5xl font-bold">Caleb Denio</h1>
		<h2 class="text-2xl">⬅️ that's me</h2>
	</div>
</div>

<h2 class="text-3xl">I'm a <strong>programmer</strong>.</h2>
<h6 class="text-xs mb-20">(that means i write code)</h6>

<h1
	class="text-md text-zinc-600 font-bold uppercase before:h-px before:flex-1 before:bg-zinc-600 before:block before:mr-5 flex items-center after:h-px after:ml-5 after:flex-1 after:bg-zinc-600 mb-10"
>
	Frequently Asked Questions
</h1>

<Faq question="So you write code, do you?">Yep. Mostly TypeScript, Ruby, Go, and Rust.</Faq>
<Faq question="What's your favorite animal?">
	<p class="mb-3">Jumping straight to the hard-hitting questions, I see.</p>
	<p class="mb-3">
		It'd have to be a toss-up between deer, cats, cows, and sheep. Perhaps I should invite one of
		each to engage in formal debate as to which should be my favorite animal.
	</p>
	<p>
		I don't have a pet, but if I did, it'd be a cat. My uncle has a cat. I think it's beginning to
		feel attached to me. Or maybe it wants me to feed it. Yeah, that's probably it. Welp.
	</p>
</Faq>
<Faq question="Are you Mario?">Yes.</Faq>
<Faq question="Where you at?">
	A rather ambiguously worded question if you ask me. Physically? Emotionally? Professionally?
	Physically, I'm in the southern New Hampshire area. Professionally... well, ask me again in a
	year. Emotionally, I definitely feel emotions.
</Faq>
<Faq question="Wait a minute... aren't you the guy behind the hit game Among Us?">
	No. I don't know why you would have thought that.
</Faq>
<Faq question="I recognize you from somewhere...">
	Perhaps you've heard of my startup, <a href="https://gadzooks.me" target="_blank">Gadzooks</a>.
</Faq>
<Faq question="What's your favorite color?">Blue. Always has been. Though I also like purple.</Faq>
<Faq question="What is your quest?">To write c... wait a minute. Nice try.</Faq>
<Faq question="Are any of these questions asked frequently?">
	Well... not necessarily. But you're asking them right now!
</Faq>
<Faq question="So... can you do anything impressive?">
	<p class="mb-3">
		I once tried to break the world record for number of saltines eaten in a minute. It didn't work,
		so... nope.
	</p>
	<p>WAIT! I can play the violin while jumping on one leg!</p>
</Faq>
<Faq question="What are you thoughts on the inevitable collapse of modern society?">
	Woah there. I'm just a programmer. Go ask the guy who made Among Us or something.
</Faq>
<Faq question="Do you have a favorite word?">Yes. It's Gadzooks!</Faq>
<Faq question="Do you have a favorite person?">
	I have a few. Many of them are <a
		href="https://hackclub.com"
		target="_blank"
		rel="noopener noreferrer">Hack Club</a
	>bers.</Faq
>
<Faq question="Any closing statements?">
	Remember: anything is possible if you eat a plate of homemade lasagna first.
</Faq>

<div class="mb-8">
	<a href="https://github.com/cjdenio" target="_blank" rel="noopener noreferrer">GitHub</a> &middot;
	<a href="https://twitter.com/CalebDenio" target="_blank" rel="noopener noreferrer">Twitter</a>

	<img
		src="https://cloud-nhe3q534r-hack-club-bot.vercel.app/0image.png"
		alt="ohyeahwoofyeah"
		class="w-5 block mx-auto mt-5"
	/>
</div>
