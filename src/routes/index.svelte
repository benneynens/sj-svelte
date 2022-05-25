<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Button from '../lib/utils/button.svelte';
	import Card from '../lib/utils/card.svelte';
	import TestimonialPreview from '../lib/utils/testimonial-preview.svelte';

	let backgroundImageURL =
		'https://images.unsplash.com/photo-1509259305526-037fbbf698fa?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965';
</script>

<svelte:head>
	<title>Superb Journeys</title>
	<meta name="description" content="Amazing Experiences Abroad" />
</svelte:head>

<picture>
	<div
		class="bg-cover bg-center hero h-96 sm:h-[32rem]"
		style="background-image: url({backgroundImageURL});"
	>
		<div class="hero-overlay bg-opacity-0 bg-black flex flex-col justify-end">
			<div class="container max-w-7xl mx-auto text-white">
				<div class="mb-10 text-6xl sm:text-8xl font-serif text-white text-opacity-50 leading-none">
					Superb Journeys
				</div>
				<!-- <div class="text-[150px] font-serif text-white text-opacity-60">Superb<br>Journeys</div> -->
				<!-- <div class="text-9xl font-serif">Journeys</div> -->
			</div>
		</div>
	</div>
</picture>

<div class="max-w-7xl mx-auto mt-5">
	<header>
		<h1>Private Luxury Tailor Made Travel</h1>
		<h3>Superb Journeys for Discerning Guests</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi dolorum at sit in
			vitae accusamus fugiat libero nostrum delectus deserunt voluptatem dolores repellat numquam
			reiciendis perferendis, hic aspernatur magnam?
		</p>
	</header>

	<hr class="my-5" />

	<h2 class="text-2xl">What We Provide</h2>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, adipisci quia
		provident nulla laudantium commodi blanditiis sint eligendi vitae nam illo minima voluptate
		numquam aperiam possimus maxime perspiciatis alias.
	</p>

	<div class="grid md:grid-cols-3 gap-4 mt-5">
		<Card
			title="Active Small Groups"
			targetURL="/active-groups/"
			text="lorem about 3 lines text about hiking tours about 3 lines text about hiking tours about 3 lines text about hiking tours "
			imageURL={backgroundImageURL}
		/>
		<Card title="School Trips" targetURL="/education/" text="lorem about 3 lines text about school groups about 3 lines text about school groups about 3 lines text about school groups about 3 lines text about school groups" />
		<Card
			title="Private Tours"
			targetURL="/private/"
			text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque odit alias nostrum veritatis fuga voluptate dicta, rerum laboriosam sequi itaque omnis vitae porro aut molestiae dolorem! Eligendi asperiores corporis quis."
		/>
	</div>

	

	<hr class="my-5" />

	<hr class="my-5" />

	<h2>Sample Tours</h2>

	<hr class="my-5" />
</div>

<div class="bg-slate-100">
	<div class="max-w-7xl mx-auto py-10">
		<h2>Testimonials</h2>

		<div class=" grid md:grid-cols-3 gap-4 my-5">
			<TestimonialPreview
				testimonial="Wonderful tour and a good time, great service & support."
				author="Joe Bloggs"
			/>
			<TestimonialPreview testimonial="Wonderful tour and a good time, great service & support." author="Joe Bloggs" />
			<TestimonialPreview testimonial="Wonderful tour and a good time, great service & support." author="Joe Bloggs" />
		</div>
		<div class="flex justify-end">
			<Button link="/testimonials/">Read More...</Button>
			<!-- <a class="italic font-bold" href="/testimonials/">Read More Testimonials...</a> -->
		</div>
	</div>
</div>

<h2>Footer</h2>
