<script type="ts">
	import Button from './button.svelte';
	export let imageURL: string =
		'https://images.unsplash.com/photo-1524562865630-b991c6c2f261?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500';
	export let title: string = '';
	export let text: string = '';
	export let targetURL: string;
	export let buttonText: string;
</script>

<div class="flex justify-center">
	<div class="rounded-sm shadow-lg bg-white">
		<a href={targetURL} class="hover:opacity-90 transition-opacity">
			<img class="rounded-t-sm" src={imageURL} alt="Preview Image for {title}" />
		</a>
		<div class="p-6">
			<h5 class="text-xl font-medium mb-2">
				{#if targetURL}
					<a href="/"> {title} </a>
				{:else}
					{title}
				{/if}
			</h5>
			<p class="text-base mb-4">{text}</p>
			{#if buttonText}
				<Button>{buttonText}</Button>
			{/if}
		</div>
	</div>
</div>
