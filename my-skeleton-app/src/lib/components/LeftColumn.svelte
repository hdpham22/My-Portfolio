<script>
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import Fa from 'svelte-fa';
	import { faGithub, faLinkedin, faJs, faPython, faHtml5, faCss3,  } from '@fortawesome/free-brands-svg-icons';
</script>

<div>
    <h1 class="h1 px-4">
        <span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">Hieu Pham</span>
    </h1>
    <h3 class="h3 px-4">Computer Science @ UCSD</h3> 

    <!-- <h3 class="h2">Skills</h3> -->
    <Accordion>
        <AccordionItem>
            <svelte:fragment slot="summary">Languages</svelte:fragment>
            <svelte:fragment slot="content">
                <div class="[&>*]:h-12 [&>*]:m-1 flex flex-wrap max-w-xs">
                    <img src="src/images/js.png" alt="">
                    <img src="src/images/css.png" alt="">
                    <img src="src/images/html.png" alt="">
                    <img src="src/images/python.png" alt="">
                    <img src="src/images/C.png" alt="">
                    <img src="src/images/cpp.png" alt="">
                    <img src="src/images/java.png" alt="">
                </div>
            </svelte:fragment>
        </AccordionItem>
        <AccordionItem>
            <svelte:fragment slot="summary">Frameworks/Tools</svelte:fragment>
            <svelte:fragment slot="content">
                <div class="[&>*]:h-12 [&>*]:m-1 flex flex-wrap max-w-xs">
                <img src="src/images/svelte.png" alt="">
                <img src="src/images/react.png" alt="">
                <img src="src/images/dj.png" alt="">
                <img src="src/images/tw.png" alt="">
                </div>
            </svelte:fragment>
        </AccordionItem>
        <!-- ... -->
    </Accordion>

</div>

<ul class="[&>*]:mr-3 flex sticky top-[100vh]">
    <a href="https://github.com/hdpham22" target="_blank" rel="noopener noreferrer"><Fa icon={faGithub} size="2x"/></a>
    <a href="https://www.linkedin.com/in/hieuducpham/" target="_blank" rel="noopener noreferrer"><Fa icon={faLinkedin} size="2x"/></a>
</ul>
