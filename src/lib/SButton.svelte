<script>
    export let name = "";
    export let darkBg = false;
    export let href = "";
</script>

<div class="sssquircle-btn w-fit">
    <a class="block relative w-fit {darkBg ? 'hover:bg-white' : 'hover:bg-dark-grey hover:text-white'} bg-btn-green py-3 px-5 md:px-7 md:py-4 text-center text-black text-sm md:text-btn font-medium" 
        href={href} target="_blank" rel="noopener noreferrer"
    >
        {name}
</a>
</div>
