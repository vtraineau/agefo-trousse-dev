<script lang="ts">
    export let item = "";
    export let textStyle = "text-md md:text-lg";
    export let arrowStyle = "mt-[7px]";
    export let textColor = 'black';
</script>

<span class="flex flex-row items-start gap-2 {textStyle}">
    <div>
        <svg
            class={arrowStyle}
            height="16px"
            width="17.2969px"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80.000000 74.000000"
        >
            <g
                transform="translate(0.000000,74.000000) scale(0.100000,-0.100000)"
                fill="{textColor}"
                stroke="none"
            >
                <path
                    d="M340 723 c0 -4 69 -76 152 -160 l153 -153 -323 0 -323 0 3 -37 3 -38
320 -3 319 -2 -154 -155 -155 -155 55 0 55 0 175 175 175 175 -180 180 -180
180 -47 0 c-27 0 -48 -3 -48 -7z"
                />
            </g>
        </svg>
    </div>
    {item}
</span>
