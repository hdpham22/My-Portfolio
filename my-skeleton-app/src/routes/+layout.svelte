<script>

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	import Navigation from '../lib/components/Navigation.svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen() {
		drawerStore.open()
	}
</script>

<Drawer>
	<Navigation />
</Drawer>

<AppShell 
class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 " 
slotSidebarLeft="w-0 md:w-72 p-10 flex flex-col justify-between"
>
	<!-- <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20"/>
							<rect y="30" width="100" height="20"/>
							<rect y="60" width="100" height="20"/>
						</svg>
					</span>
				</button>
			</svelte:fragment>
			<strong class="md:hidden">Hieu Pham</strong>

			<svelte:fragment slot="trail">

			</svelte:fragment>
			<svelte:fragment slot="headline">
				<strong class="hidden md:block text-2xl">Hieu Pham</strong>
			</svelte:fragment>
		</AppBar>		
	</svelte:fragment> -->
	<svelte:fragment slot="sidebarLeft">
		<strong class="text-4xl">Hieu Pham</strong>
		<p class="text-xl">Computer Science @ UCSD</p>
		<Navigation />
		<ul class="flex">
			<li class="mr-4">(icon)</li>
			<li class="mr-4">(icon)</li>
			<li class="mr-4">(icon)</li>
			<li class="mr-4">(icon)</li>
		</ul>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
</AppShell>
