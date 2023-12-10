<script lang="ts">
    export let cl = "flex-col";
    export let clIntro = "";
    export let clList = "";
    export let intro = "";
    export let listItems: string[] = [];
</script>

<div class="w-full relative flex {cl}">
    <div class="flex flex-col {clIntro}">
        <span class="text-xl md:text-2xl font-medium">{intro}</span>
    </div>
    <div
        class="flex flex-col content-center {clList}"
    >
        {#each listItems as item}
            <span class="text-md md:text-xl font-normal">➔ {item}</span>
        {/each}
        <div class="mt-10">
            <slot name="underList"/>
        </div>
    </div>
</div>
