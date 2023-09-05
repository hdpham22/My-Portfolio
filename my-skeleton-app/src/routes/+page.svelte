<script>
	export let about_me;
</script>

<div>
	<div id="about_me" bind:this={about_me}>
		<strong>Who am I?:</strong> Right now I'm a student at UCSD studying for my B.S in Computer Science.
		My career is driven by a genuine curiosity in everything Programming and Software Engineering. My
		experiece consists of multiple team and personal projects as well as a Software Engineering internship
		where I worked with Full-Stack technologies.
	</div>
	<div class="my-3">
		<strong>What's the goal?:</strong> I'm currently looking for 2024/2025 Software Engineering internships
		over the academic year or Summer. After I graduate, I want to expand my knowledge and experience
		by becoming a full time Software Engineer.
	</div>

	<div>
		<strong>Outside of my career:</strong> I love being involved in the student orgs I'm a part of. Currently
		I serve as the Corresponding Secretary for Theta Tau of UCSD and Membership Outreach for Chinese
		American Student Association. My hobbies include, Snowboarding, Weight Lifting, and playing video
		games.
	</div>
</div>

<div class="container h-full mx-auto flex flex-col">
	<p class="my-3" id="experience"><strong>Experience:</strong></p>

	<a
		href="https://www.plexium.com/"
		target="_blank"
		rel="noopener noreferrer"
		class="card card-hover my-3 variant-soft-secondary flex flex-row"
	>
		<div>
		</div>
		<div>
			<header class="p-4">
				<strong>Software Engineering Intern</strong>
				<p>Summer 2023</p>
				<p>Developed and maintained key features on Plexium's technology pipeline.
					Aggregated
				</p>
			</header>
			<footer class="card-footer">
				<span class="badge variant-filled-secondary">Svelte</span>
				<span class="badge variant-filled-secondary">Django</span>
				<span class="badge variant-filled-secondary">PostgreSQL</span>
				<span class="badge variant-filled-secondary">JavaScript</span>
				<span class="badge variant-filled-secondary">Python</span>
			</footer>
		</div>
	</a>

	<p class="my-3"><strong>Projects:</strong></p>

	<a href="/" class="card card-hover variant-soft-secondary my-3">
		<header class="card-header">
			<strong>This Portfolio!</strong> 
		</header>
		<section class="p-4">(content)</section>
		<footer class="card-footer">
			<span class="badge variant-filled-secondary">Svelte</span>
			<span class="badge variant-filled-secondary">Skeleton UI</span>
			<span class="badge variant-filled-secondary">Tailwind CSS</span>
			<span class="badge variant-filled-secondary">JavaScript</span>
		</footer>
	</a>

	<a href="/" class="card card-hover variant-soft-secondary my-3">
		<header class="card-header">(header)</header>
		<section class="p-4">(content)</section>
		<footer class="card-footer">(footer)</footer>
	</a>
</div>
