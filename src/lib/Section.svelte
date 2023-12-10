<script>
    export let name = "";
    export let bg = "";
    export let cl = "";
</script>

<div id={name} class="w-full {bg} flex-col justify-center items-center inline-flex">
    <div class="w-chemin {name == 'footer' ? 'md:w-[750px] lg:w-[1000px] pt-16' : 'md:w-chemin-md lg:w-chemin-lg py-16'} mx-auto flex flex-col gap-16 {cl}">
        <slot />
    </div>
</div>
