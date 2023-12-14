<script>
    import { ArrowText } from "$lib";

    export let currentAnchor = "";
</script>

<div class="flex-col justify-start items-start gap-3 inline-flex">
    {#each [
        {key: 'bienvenue', text: 'Accueil'},
        {key: 'apprentissage', text: 'Formations'},
        {key: 'mentorat', text: 'Mentorat'},
        {key: 'colloque', text: 'Événements'},
        {key: 'reconnaissance', text: 'Prix Mérite'},
        {key: 'ressources_sup', text: 'Autres ressources'},
        {key: 'mission', text: 'Mission'},
        {key: 'communications', text: 'Contact'},
        ] as navItem}
        <div class="justify-center items-center inline-flex">
            <a
                class="text-neutral-700 text-md md:text-lg font-normal"
                href="#{navItem.key}"
            >
                {#if currentAnchor == navItem.key}
                    <ArrowText item={navItem.text} textStyle="text-md md:text-lg font-medium" />
                {:else}
                    {navItem.text}
                {/if}
            </a>
        </div>
    {/each}
</div>
