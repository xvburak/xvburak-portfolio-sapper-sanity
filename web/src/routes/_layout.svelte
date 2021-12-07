<script>
	import Head from '../components/Head.svelte';
	import Foot from '../components/Foot.svelte';

	export let segment;
</script>

<div>
	<Head {segment}/>
	
	<main>
		<slot></slot>
	</main>
</div>

<Foot {segment}/>