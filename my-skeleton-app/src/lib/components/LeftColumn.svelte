<script>
    import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import about_me from "../../routes/+page.svelte"

</script>

<div>
    <h1 class="h2">Hieu Pham</h1>
    <h3 class="h4">Computer Science @ UCSD</h3> 

    <nav class="list-nav mb-15 pt-20">
        <ul>
            <li><a href="/">- About Me</a></li>
            <li><a href="/">- Experience</a></li>
            <li><a href="/">- Projects</a></li>
        </ul>
    </nav>
</div>



<ul class="[&>*]:mr-3 flex">
    <a href="https://github.com/hdpham22" target="_blank" rel="noopener noreferrer"><Fa icon={faGithub} size="2x"/></a>
    <a href="https://www.linkedin.com/in/hieuducpham/" target="_blank" rel="noopener noreferrer"><Fa icon={faLinkedin} size="2x"/></a>
</ul>