<script>
    import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div>
    <h1 class="h1">
        <span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Hieu Pham</span>
    </h1>
    <h3 class="h4">Computer Science @ UCSD</h3> 

    <h3 class="h2">Skills</h3>

</div>

<ul class="[&>*]:mr-3 flex sticky top-[100vh]">
    <a href="https://github.com/hdpham22" target="_blank" rel="noopener noreferrer"><Fa icon={faGithub} size="2x"/></a>
    <a href="https://www.linkedin.com/in/hieuducpham/" target="_blank" rel="noopener noreferrer"><Fa icon={faLinkedin} size="2x"/></a>
</ul>
