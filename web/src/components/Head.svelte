<script>
	export let segment;
</script>

<nav class="flex flex-wrap border-b border-gray-300 py-2 mb-8">

	<div class="w-1/5">
		<a class="" href='.'>Vasil Burak</a>
	</div>
	<ul class="flex w-2/5">
		<!-- <li class="mr-4"><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li> -->
		<li class="mr-4"><a class='{segment === "about" ? "selected" : ""}' href='about'>Information</a></li>
		<!-- <li class="mr-4"><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li> -->
	</ul>
</nav>
