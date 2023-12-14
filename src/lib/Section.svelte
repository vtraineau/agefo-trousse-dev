<script>
    export let name = "";
    export let bg = "";
    export let cl = "";
</script>

<div id={name} class="w-full relative {bg} flex flex-col md:flex-row {name == 'footer' ? '-mb-3' : 'py-10'}">
    <div class="{name == 'footer' ? 'hidden' : 'max-lg:hidden'} w-[275px]"></div>
    <div class="w-chemin {name == 'footer' ? 'md:w-[850px] md:max-w-[90vw] lg:w-[1200px] lg:max-w-[90vw] pt-16' : 'md:w-chemin-md lg:w-chemin-lg md:max-w-[calc(100vw-325px)] lg:md:max-w-[calc(100vw-325px)] py-16'} mx-auto px-4 flex flex-col gap-16 {cl} z-10 self-center">
        <slot />
    </div>
    <slot name="absoluteItem"/>
</div>
