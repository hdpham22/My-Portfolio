<script>
    import Fa from 'svelte-fa';
	import { faExclamationTriangle, faXmark } from '@fortawesome/free-solid-svg-icons';
	import { bind } from 'svelte/internal';

    let alert;
    let dismissed = false;

    function closeAlert() {
        dismissed = true;
    }
</script>

{#if !dismissed}
    <aside class="alert variant-filled-warning my-5" bind:this={alert}>
        <!-- Icon -->
        <Fa icon={faExclamationTriangle} size="4x"/>
        <!-- Message -->
        <div class="alert-message">
            <h3 class="h3">Attention!</h3>
            <p>My Portfolio is still under construction. Check back later for improvements and a prettier website!</p>
        </div>
        <div class="alert-actions">
            <button class="btn" on:click={closeAlert}><Fa icon={faXmark} /></button>
        </div>
    </aside>
{/if}