<script lang="ts">
    import ArrowText from "./ArrowText.svelte";

    export let cl = "flex-col";
    export let clIntro = "";
    export let clIntroWeight = "text-xl md:text-2xl font-medium";
    export let clList = "";
    export let intro = "";
    export let listItems: string[] = [];
    export let darkBg = false;
</script>

<div class="w-full relative flex {cl}">
    <div class="flex flex-col {clIntro}">
        <span class="{clIntroWeight} leading-[1.25]">{intro}</span>
        <slot name="underIntro" />
    </div>
    <div class="flex flex-col content-center {clList}">
        {#each listItems as item}
            <ArrowText item={item} textColor={darkBg ? 'white' : 'black'} textStyle="leading-[1.25] mt-1" arrowStyle="mt-[3px]"/>
        {/each}
        <slot name="underList" />
    </div>
</div>
