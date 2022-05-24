<script type="ts">
	export let testimonial: string;
	export let author: string;
</script>

<div class="flex justify-center">
	<div class="rounded-sm shadow-lg bg-white relative">
		<div
			class="text-gray-500 float-left opacity-10 absolute"
			style="font-size: 200px; top:-80px; left:-10px;"
		>
			&#8220;
		</div>
		<div class="p-6 text-lg ml-11">
			<a sveltekit:prefetch href="/testimonials/">
				<p>{testimonial}</p>
				<p class="text-right">&#8212; {author}</p>
			</a>
		</div>
	</div>
</div>
