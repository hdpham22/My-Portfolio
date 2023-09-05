<script src="https://kit.fontawesome.com/780a2e9c40.js" crossorigin="anonymous">

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import LeftColumn from '$lib/components/LeftColumn.svelte';
	import Warning from '$lib/components/Warning.svelte';


</script>

<AppShell 
class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 " 
slotSidebarLeft="w-0 md:w-72 p-10 flex flex-col justify-between"
>
	<svelte:fragment slot="header">
		<Warning />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<LeftColumn />
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
</AppShell>
