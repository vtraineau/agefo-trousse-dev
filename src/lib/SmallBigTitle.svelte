<script>
    export let smallTitle = "";
    export let bigTitle = "";
    export let firstTitle = false;
</script>

<div class="w-full relative flex flex-col gap-2.5">
    <div class="text-black {firstTitle ? "text-2xl font-tiro" : "text-md"} font-normal">
        {smallTitle}
    </div>
    <div
        class="text-black {firstTitle ? 'text-5xl md:text-6xl lg:text-8xl' : 'text-4xl leading-[1.1] lg:text-6xl lg:leading-[1.1]'} font-semibold"
    >
        {bigTitle}
    </div>
</div>
