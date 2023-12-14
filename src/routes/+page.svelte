<script>
    import { Section, SmallBigTitle } from "$lib";
    import Box from "$lib/Box.svelte";
    import ListWithIntro from "$lib/ListWithIntro.svelte";
    import SButton from "$lib/SButton.svelte";
    import { onMount } from "svelte";
    import "../app.css";
    import NavItems from "$lib/NavItems.svelte";
    export let currentAnchor = "bienvenue";

    // Get the current anchor from the URL
    const updateCurrentAnchor = (
        /** @type {Event|undefined} */ evt,
        initial = false,
    ) => {
        if (!initial) {
            toggleMenu();
        }
        const urlAnchor = decodeURIComponent(window.location.hash.substring(1));
        if (urlAnchor) {
            currentAnchor = urlAnchor;
        }
    };
    const toggleMenu = () => {
        document.getElementById("menu_burger")?.classList.toggle("hidden");
        document.getElementById("menu_cross")?.classList.toggle("hidden");
        document
            .getElementById("navigation-items-menu")
            ?.classList.toggle("hidden");
    };

    // Listen for hashchange event
    onMount(() => {
        const firstWave = document.getElementById("firstWave");
        const collaboration = document.getElementById("collaboration");
        if (firstWave && collaboration) {
            firstWave.style.height = collaboration.offsetHeight + 180 + "px";
        }
        const secondWave = document.getElementById("secondWave");
        const admissibleAuProgramme = document.getElementById(
            "admissibleAuProgramme",
        );
        if (secondWave && admissibleAuProgramme) {
            secondWave.style.height =
                (admissibleAuProgramme.offsetHeight * 2) + 80 + "px";
        }

        const thirdWave = document.getElementById("thirdWave");
        const deuxPrix = document.getElementById("deux_prix");
        if (thirdWave && deuxPrix) {
            thirdWave.style.height = (deuxPrix.offsetHeight * 1.31) + "px";
        }

        window.addEventListener("hashchange", updateCurrentAnchor);
        // Update currentAnchor on component mount
        updateCurrentAnchor(undefined, true);
        // @ts-ignore
        let lastTimeout;
        // Intersection Observer callback function
        // @ts-ignore
        const handleIntersection = (entries) => {
            // @ts-ignore
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.children[1].classList.add(
                        "animate_fadeInUp",
                    );
                    // @ts-ignore
                    if (lastTimeout) {
                        clearTimeout(lastTimeout);
                    }
                    lastTimeout = setTimeout(function () {
                        const id = entry.target.getAttribute("id");
                        if (id) {
                            currentAnchor = id;
                            history.pushState(null, null, `#${id}`);
                        }
                    }, 250);
                }
            });
        };

        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.2, // Adjust this threshold as needed
        });

        // Observe the elements with the specified IDs
        const observeElements = () => {
            const elements = document.querySelectorAll("[id]");
            elements.forEach((element) => {
                if (
                    [
                        "bienvenue",
                        "apprentissage",
                        "mentorat",
                        "colloque",
                        "reconnaissance",
                        "ressources_sup",
                        "mission",
                        "communications",
                    ].includes(element.id)
                ) {
                    element.children[1].classList.add("opacity-0");
                    observer.observe(element);
                }
            });
        };

        // Call observeElements on component mount
        observeElements();
    });
</script>

<div class="flex flex-col items-center w-screen overflow-hidden text-base">
    <div
        id="navigation"
        class="max-lg:hidden fixed z-50 top-6 left-6 bg-white sssquircle p-7 justify-start items-start gap-2.5"
    >
        <NavItems {currentAnchor} />
    </div>
    <div class="max-lg:hidden absolute top-6 right-6 z-50">
        <img
            class="w-48"
            src="https://agefo.ca/wp-content/uploads/2023/12/logo-et-nom.png"
            alt="Logo AGÉFO"
        />
    </div>
    <div
        class="max-md:hidden absolute top-20 -right-[18%] h-[85vh] w-[88vh] z-10"
    >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 745 692"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M229.212 537.659C2.15474 351.989 138.204 171.387 201.725 106.426C186.249 78.0919 177.241 45.8415 177.241 11.2876C177.241 7.60186 177.241 3.68575 177.703 0C-5.46773 129.001 0.999818 316.514 0.999818 316.514C2.61671 639.478 318.372 692 318.372 692V377.099H228.981V537.889L229.212 537.659Z"
                fill="white"
            />
            <path
                d="M572.686 2.99467C572.686 5.75899 572.686 8.5233 572.686 11.2876C572.686 46.763 563.215 80.1651 546.584 109.19C611.26 176.455 740.38 354.523 516.556 537.659V376.868H427.166V691.77C427.166 691.77 742.921 639.248 744.538 316.284C744.538 316.284 751.005 131.766 572.224 2.76431"
                fill="white"
            />
            <path
                d="M344.242 259.615C344.242 296.473 314.214 326.65 277.026 326.65C239.837 326.65 210.041 296.703 210.041 259.615C210.041 222.527 240.068 192.581 277.026 192.581C313.983 192.581 344.242 222.527 344.242 259.615Z"
                fill="white"
            />
            <path
                d="M536.652 259.615C536.652 296.473 506.624 326.65 469.436 326.65C432.247 326.65 402.219 296.703 402.219 259.615C402.219 222.527 432.247 192.581 469.436 192.581C506.624 192.581 536.652 222.527 536.652 259.615Z"
                fill="white"
            />
        </svg>
    </div>
    <div
        id="navigation-mobile"
        class="lg:hidden fixed z-50 top-3 left-3 right-3 bg-white sssquircle p-5 gap-2.5"
    >
        <div class="flex flex-row items-center justify-between">
            <img
                class="w-24"
                src="https://agefo.ca/wp-content/uploads/2023/12/logo-et-nom.png"
                alt="Logo AGÉFO"
            />
            <button
                id="menu_burger"
                on:click={toggleMenu}
                class="w-20 flex flex-col items-center"
            >
                <svg
                    width="53"
                    height="15"
                    viewBox="0 0 53 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line y1="0.5" x2="53" y2="0.5" stroke="black" />
                    <line y1="14.5" x2="53" y2="14.5" stroke="black" />
                </svg>
            </button>
            <button
                id="menu_cross"
                on:click={toggleMenu}
                class="w-20 flex flex-col items-center hidden"
            >
                <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1.40817"
                        y1="38.3848"
                        x2="38.8848"
                        y2="0.908115"
                        stroke="black"
                    />
                    <line
                        x1="0.353553"
                        y1="0.646447"
                        x2="37.8302"
                        y2="38.1231"
                        stroke="black"
                    />
                </svg>
            </button>
        </div>
        <div id="navigation-items-menu" class="hidden mt-5">
            <NavItems currentAnchor={undefined} />
        </div>
    </div>
    <Section
        name="bienvenue"
        bg="bg-purple"
        cl="h-[85vh] max-h-[95vh-100px] max-md:mt-[5vh] md:h-screen place-content-end gap-[15vh] lg:gap-[25vh]"
    >
        <SmallBigTitle
            firstTitle={true}
            smallTitle="Bienvenue à l'AGÉFO!"
            bigTitle="Guide d'accueil des nouveaux membres"
        />
        <div class="flex flex-row gap-9 items-center">
            <a href="#apprentissage">
                <div class="bounce p-4">
                    <svg
                        width="23"
                        height="41"
                        viewBox="0 0 23 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Arrow 1 (Stroke)"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22.1525 31.0147L12.6065 40.5607C12.0207 41.1464 11.071 41.1464 10.4852 40.5607L0.939253 31.0147C0.353466 30.4289 0.353466 29.4792 0.939253 28.8934C1.52504 28.3076 2.47479 28.3076 3.06057 28.8934L10.0459 35.8787L10.0459 0.5L13.0459 0.5L13.0459 35.8787L20.0311 28.8934C20.6169 28.3076 21.5667 28.3076 22.1525 28.8934C22.7382 29.4792 22.7382 30.4289 22.1525 31.0147Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </a>
            <p class="text-black text-lg md:w-1/2 leading-[1.25]">
                Vous êtes au carrefour de vos solutions en développement
                professionnel.
            </p>
        </div>
    </Section>
    <Section name="apprentissage" bg="bg-purple">
        <SmallBigTitle
            smallTitle="Apprentissage professionnel"
            bigTitle="Des webinaires et des formations accessibles gratuitement"
        />
        <ListWithIntro
            cl="flex-col gap-10"
            clIntro=""
            intro="Développez vos compétences en leadership grâce à&nbsp;:"
            listItems={[
                "Une offre de formations mise à jour chaque année",
                "Des thématiques inspirées des enjeux actuels",
                "Une combinaison de deux modes d’apprentissage, soit le webinaire et la formation",
            ]}
        />
        <div class="-mt-5">
            <SButton
                name="Découvrez la programmation"
                href="https://agefo.ca/apprentissage-professionnel/"
            />
        </div>
    </Section>
    <Section name="collaboration" bg="bg-purple">
        <Box bg="bg-white">
            <div class="flex flex-col md:flex-row gap-5">
                <div class="flex flex-col md:w-1/4 justify-items-center">
                    <span class="text-xl font-medium text-center"
                        >Collaboration</span
                    >
                    <img
                        src="https://agefo.ca/wp-content/uploads/2023/12/Logo-ED-HEC_3x.png"
                        alt="Logo ED-HEC"
                    />
                </div>
                <div class="flex flex-col gap-5 md:w-2/3 place-content-center">
                    <span>
                        Ces apprentissages sont mis sur pied en collaboration
                        avec plusieurs partenaires dont HEC Montréal, l'une des
                        <span class="font-medium">
                            50 meilleures écoles de gestion au monde pour la
                            formation offerte aux cadres.
                        </span>
                    </span>
                </div>
            </div>
        </Box>
        <div slot="absoluteItem" class="absolute bottom-0">
            <svg
                id="firstWave"
                class="w-screen lg:h-[300px] h-[30vh]"
                viewBox="0 0 1030 875"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <g clip-path="url(#clip0_508_69)">
                    <path
                        d="M-853 12.3994V1853.28C-452.988 1773.13 -191.875 1918.16 149.085 2106.45C562.192 2370.75 1018.18 2515.78 1482.63 2532C1569.93 2531.36 1657.22 2525.96 1744 2514.83V667.267C1352.97 766.498 1103.67 629.737 752.955 435.407C352.943 213.726 -145.404 -62.0246 -853 12.3994Z"
                        fill="#FDF8F4"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_508_69">
                        <rect width="1030" height="875" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    </Section>
    <Section name="mentorat" bg="bg-beigeish">
        <SmallBigTitle
            smallTitle="Mentorat"
            bigTitle="Un programme d’accompagnement professionnel"
        />
        <ListWithIntro
            cl="flex-col md:flex-row gap-24"
            clIntro="self-start md:w-1/2"
            intro="Déployez votre potentiel grâce à une relation de mentorat qui offre plusieurs avantages&nbsp;:"
            clList="md:w-1/2"
            listItems={[
                "Renforcer vos pratiques en leadership",
                "Créer de nouveaux liens",
                "Obtenir de la rétroaction",
                "Améliorer votre confiance en tant que gestionnaire",
                "Répondre à des besoins d’apprentissage qui correspondent à votre réalité",
            ]}
        />
        <div class="flex flex-col gap-20 md:mt-10">
            <div class="flex flex-col gap-4">
                <div class="text-xl md:text-2xl font-medium">
                    Qui sont les mentores et les mentors?
                </div>
                <span style="text-xl">
                    Notre
                    <a
                        class="underline underline-offset-4 font-medium"
                        href="https://sites.google.com/agefo.ca/mentorat/les-mentors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        brigade distinguée
                    </a>
                    est composée de gestionnaires possédant une grande expérience
                    dans le système d’éducation de langue française en Ontario en
                    plus d’être des chefs de file dans plusieurs domaines en appui
                    au secteur éducatif.
                </span>
            </div>
            <div
                class="mt-10 items-start gap-5 flex flex-col md:flex-row justify-between"
            >
                <div class="hidden md:block -mt-10 ml-6 rotate-6">
                    <svg
                        id="arrow_down_right"
                        width="200"
                        height="83"
                        viewBox="0 0 200 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.08339 1.2134C1.84636 0.714564 1.24983 0.50233 0.750995 0.739359C0.252161 0.976389 0.0399273 1.57292 0.276957 2.07176L2.08339 1.2134ZM198.803 75.741C199.179 75.3364 199.156 74.7037 198.751 74.3277L192.159 68.2C191.755 67.8239 191.122 67.847 190.746 68.2515C190.37 68.656 190.393 69.2888 190.798 69.6648L196.657 75.1116L191.21 80.971C190.834 81.3755 190.857 82.0082 191.262 82.3842C191.666 82.7603 192.299 82.7372 192.675 82.3327L198.803 75.741ZM0.276957 2.07176C10.355 23.2812 33.7005 42.7242 67.5032 56.3822C101.33 70.0498 145.731 77.9701 198.107 76.0594L198.034 74.0608C145.89 75.963 101.776 68.0731 68.2525 54.5279C34.7054 40.9732 11.8659 21.8009 2.08339 1.2134L0.276957 2.07176Z"
                            fill="#404141"
                        />
                    </svg>
                </div>
                <div class="md:hidden mx-auto -mt-16 mb-5">
                    <svg
                        id="arrow_straight_down_1"
                        class=""
                        width="16"
                        height="104"
                        viewBox="0 0 16 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.76315 1.56338C6.76267 1.01109 7.20999 0.562984 7.76228 0.5625C8.31456 0.562017 8.76267 1.00934 8.76315 1.56162L6.76315 1.56338ZM8.55912 103.207C8.16894 103.598 7.53577 103.598 7.14491 103.208L0.775379 96.8498C0.384513 96.4596 0.383959 95.8264 0.774141 95.4356C1.16432 95.0447 1.79749 95.0442 2.18835 95.4343L7.85016 101.086L13.5021 95.4244C13.8922 95.0336 14.5254 95.033 14.9163 95.4232C15.3071 95.8134 15.3077 96.4466 14.9175 96.8374L8.55912 103.207ZM8.76315 1.56162C8.77514 15.2635 8.78625 28.0524 8.85139 102.5L6.85139 102.501C6.78626 28.054 6.77514 15.2653 6.76315 1.56338L8.76315 1.56162Z"
                            fill="#404141"
                        />
                    </svg>
                </div>
                <div
                    id="admissibleAuProgramme"
                    class="flex flex-col justify-start items-start gap-9 md:w-1/2"
                >
                    <div class="flex-col justify-start items-start gap-4 flex">
                        <ListWithIntro
                            cl="flex-col gap-5"
                            clIntro="font-normal text-normal"
                            intro="Êtes-vous admissible au programme?"
                            listItems={[
                                "Cadre supérieur",
                                "Cadre intermédiaire",
                                "Gestionnaire",
                            ]}
                        >
                            <span slot="underIntro" class="mt-5">
                                Le programme s’adresse à toute personne
                                nouvellement nommée (deux ans ou moins) dans un
                                poste de gestion* :
                            </span>
                        </ListWithIntro>
                    </div>
                    <SButton name="Participez au programme" href="https://agefo.ca/mentorat2/" />
                    <div>
                        <span class="text-sm">
                            *Vous aimeriez intégrer le programme, mais ne
                            répondez pas à ces critères?
                            <a
                                class="font-medium underline underline-offset-4 bounce_underline"
                                href="mailto:info@agefo.ca">Écrivez-nous</a
                            >
                            pour en discuter!</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <div slot="absoluteItem" class="absolute bottom-0">
            <svg
                id="secondWave"
                class="w-screen lg:h-[90vh] h-[200vh]"
                viewBox="0 0 1700 1427"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <g clip-path="url(#clip0_508_70)">
                    <path
                        d="M-813.985 1916.92L-69.3743 516.374C324.374 658.737 661.222 601.521 1100.64 527.643C1647.66 410.612 2192.12 393.045 2693.5 475.201C2786.25 493.445 2877.06 515.319 2965.02 541.444L2217.7 1947.07C1841.25 1792.02 1520.33 1845.35 1068.08 1921.84C552.241 2009.11 -90.2267 2117.51 -813.985 1916.92Z"
                        fill="#E9EEFD"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_508_70">
                        <rect width="1700" height="1427" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    </Section>
    <Section name="colloque" bg="bg-beigeish">
        <SmallBigTitle
            smallTitle="Colloque annuel"
            bigTitle="Le plus grand rassemblement des gestionnaires en éducation de langue française en Ontario"
        />
        <div class="flex flex-col gap-10">
            <ListWithIntro
                cl="flex-col gap-10"
                clIntro=""
                intro="Faites le plein d’apprentissages professionnels et d’occasions de réseautage lors de ce rendez-vous annuel&nbsp;:"
                listItems={[
                    "Des conférences et des ateliers",
                    "Un cocktail retrouvailles",
                    "Un gala de reconnaissance",
                ]}
            />
            <SButton
                name="Participez à l'événement"
                href="https://agefo.ca/colloque"
            />
        </div>
        <Box bg="bg-purple mt-10">
            <div class="flex flex-col">
                <span class="text-2xl font-tiro mb-5">
                    Un autre événement signé AGÉFO!
                </span>
                <span class="">
                    L’AGÉFO organise également un Institut pancanadien de
                    leadership qui s’adresse aux hautes gestionnaires et aux
                    hauts gestionnaires en éducation de langue française.
                </span>
                <span class="">
                    Visitez
                    <a
                        href="https://agefo.ca/institut/"
                        target="_blank"
                        class=" font-medium underline underline-offset-4"
                        >le site Web de l’événement</a
                    >
                    pour connaître les dates du prochain Institut.
                </span>
            </div>
        </Box>
    </Section>
    <Section name="reconnaissance" bg="bg-purple">
        <SmallBigTitle
            smallTitle="Reconnaissance des membres"
            bigTitle="Un prix pour récompenser le leadership d'exception"
        />
        <ListWithIntro
            cl="flex-col gap-5"
            clIntro=""
            intro="Soulignez le leadership d’une ou d’un collègue en déposant sa candidature au prix annuel de Mérite de l’AGÉFO et faites briller&nbsp;:"
            listItems={[
                "Sa contribution active à la mission de l’AGÉFO",
                "Son implication au sein de comités faisant avancer l’éducation en langue française",
                "Ses efforts continus au service de son domaine d’expertise",
            ]}
        />
    </Section>
    <Section name="deux_prix" bg="bg-purple">
        <div slot="absoluteItem" class="absolute bottom-0 md:bottom-0">
            <svg
                id="thirdWave"
                class="w-screen lg:h-screen h-[200vh]"
                viewBox="0 0 2461 1427"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <g clip-path="url(#clip0_510_38)">
                    <path
                        d="M-2285.25 2448.89L-1134.11 461.673C-600.992 650.418 -129.588 560.587 485.286 444.467C1252.89 264.729 2008.42 224.698 2695.76 325.882C2822.64 348.877 2946.54 377.022 3066.11 411.216L1910.79 2405.64C1402.71 2198.59 953.699 2282.51 320.82 2402.66C-401.037 2539.74 -1300.08 2710.05 -2285.25 2448.89Z"
                        fill="#FDF9F9"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_510_38">
                        <rect width="2461" height="1427" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="flex flex-col md:flex-row gap-10">
            <span class="text-2xl font-tiro leading-[1.25]"
                >Deux prix Mérite plutôt qu'un!</span
            >
            <svg
                class="hidden md:block rotate-90 px-6 md:px-0 md:rotate-0 self-center"
                id="arrow_right"
                width="126"
                height="30"
                viewBox="0 0 126 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2.08947 15.8548C1.64334 15.5293 1.01776 15.627 0.692209 16.0731C0.366654 16.5193 0.4644 17.1448 0.910531 17.4704L2.08947 15.8548ZM125.964 4.42836C126.111 3.89594 125.798 3.34534 125.266 3.19856L116.589 0.806703C116.057 0.659927 115.506 0.972555 115.36 1.50498C115.213 2.0374 115.525 2.588 116.058 2.73478L123.77 4.86087L121.644 12.5732C121.497 13.1056 121.81 13.6562 122.342 13.803C122.875 13.9498 123.425 13.6371 123.572 13.1047L125.964 4.42836ZM0.910531 17.4704C19.8314 31.2775 66.2791 38.6541 125.494 5.0322L124.506 3.293C65.7209 36.6711 20.1686 29.0477 2.08947 15.8548L0.910531 17.4704Z"
                    fill="#404141"
                />
            </svg>
            <svg
                id="arrow_straight_down_2"
                class="md:hidden self-center"
                width="16"
                height="104"
                viewBox="0 0 16 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.76315 1.56338C6.76267 1.01109 7.20999 0.562984 7.76228 0.5625C8.31456 0.562017 8.76267 1.00934 8.76315 1.56162L6.76315 1.56338ZM8.55912 103.207C8.16894 103.598 7.53577 103.598 7.14491 103.208L0.775379 96.8498C0.384513 96.4596 0.383959 95.8264 0.774141 95.4356C1.16432 95.0447 1.79749 95.0442 2.18835 95.4343L7.85016 101.086L13.5021 95.4244C13.8922 95.0336 14.5254 95.033 14.9163 95.4232C15.3071 95.8134 15.3077 96.4466 14.9175 96.8374L8.55912 103.207ZM8.76315 1.56162C8.77514 15.2635 8.78625 28.0524 8.85139 102.5L6.85139 102.501C6.78626 28.054 6.77514 15.2653 6.76315 1.56338L8.76315 1.56162Z"
                    fill="#404141"
                />
            </svg>
            <span>
                L’AGÉFO décerne annuellement deux prix&nbsp;: un pour le volet
                administratif et un pour le volet pédagogique
            </span>
        </div>
        <Box bg="bg-purple mt-10">
            <div class="flex flex-col">
                <div class="flex flex-col gap-5">
                    <div class="flex flex-col md:flex-row gap-24">
                        <div class="flex flex-col gap-5 md:w-1/2">
                            <div class="h-12 flex flex-col justify-center">
                                <svg
                                    id="enveloppe"
                                    width="37"
                                    height="33"
                                    viewBox="0 0 37 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.2001 32.1001L17.5001 25.4001L18.5001 24.4001L24.2001 30.1001L35.6001 18.7001L36.6001 19.7001L24.2001 32.1001ZM17.5001 12.0001L32.7001 2.0001H2.3001L17.5001 12.0001ZM17.5001 13.7001L1.5001 3.1001V24.4001C1.5001 24.8668 1.6501 25.2501 1.9501 25.5501C2.2501 25.8501 2.63343 26.0001 3.1001 26.0001H12.4501L13.8501 27.4001H3.1001C2.23343 27.4001 1.51676 27.1168 0.950098 26.5501C0.383431 25.9834 0.100098 25.2668 0.100098 24.4001V3.6001C0.100098 2.73343 0.383431 2.01676 0.950098 1.4501C1.51676 0.883431 2.23343 0.600098 3.1001 0.600098H31.9001C32.7668 0.600098 33.4834 0.883431 34.0501 1.4501C34.6168 2.01676 34.9001 2.73343 34.9001 3.6001V13.8001L33.5001 15.2001V3.1001L17.5001 13.7001Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <span class="text-black text-2xl leading-[1.25] font-medium"
                                >Quand déposer une candidature?</span
                            >
                            <span class="text-black font-normal"
                                >La période de mise en candidature commence au
                                début de l’année scolaire et s’échelonne
                                jusqu’au mois de février.</span
                            >
                        </div>
                        <div class="flex flex-col gap-5 md:w-1/2">
                            <div class="h-12 flex align-content-center">
                                <svg
                                    id="reward"
                                    width="35"
                                    height="43"
                                    viewBox="0 0 35 43"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.37468 42.7292V27.6615L-0.588867 14.7708L8.17676 0.5625H25.8226L34.5882 14.7708L26.6247 27.6615V42.7292L16.9997 39.349L7.37468 42.7292ZM8.97884 40.2656L16.9997 37.5729L25.0205 40.2656V28.9792H8.97884V40.2656ZM9.03613 2.16667L1.24447 14.7708L9.03613 27.375H24.9632L32.7549 14.7708L24.9632 2.16667H9.03613ZM14.5934 21.9896L8.5778 16.0312L9.72363 14.8854L14.5934 19.7552L24.2757 10.0156L25.4216 11.1042L14.5934 21.9896Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <span class="text-black text-2xl leading-[1.25] font-medium"
                                >Quand se déroule la remise du prix?</span
                            >
                            <span class="text-black font-normal"
                                >L’AGÉFO décore les lauréates et lauréats lors
                                du gala de reconnaissance durant le colloque
                                annuel.</span
                            >
                        </div>
                    </div>
                    <div class="flex flex-col mt-5">
                        <SButton
                            name="Soumettez une candidature"
                            href="https://agefo.ca/merite-de-lagefo/"
                        />
                    </div>
                </div>
            </div>
        </Box>
    </Section>
    <Section name="ressources_sup" bg="bg-beigeish">
        <SmallBigTitle
            smallTitle="Autres ressources"
            bigTitle="Des occasions pour&nbsp;aller plus loin"
        />
        <ListWithIntro
            cl="flex-col md:flex-row gap-5 md:gap-24"
            clIntro=""
            intro="Découvrez plus de ressources&nbsp;:"
            listItems={[
                "Liste des membres de l’AGÉFO",
                "Offres d’emploi en cours dans le réseau",
                "Guide sur l'approche service",
                "Continuum du profil du leadership culturel partagé",
            ]}
        >
            <div class="mt-10" slot="underList">
                <SButton
                    name="Parcourez les ressources"
                    href="https://agefo.ca/autres-ressources/"
                />
            </div>
        </ListWithIntro>
        <Box bg="bg-dark-grey text-on-dark-grey mt-10">
            <div class="w-full flex flex-col gap-5">
                <span class="text-4xl font-normal font-tiro">S'impliquer </span>
                <ListWithIntro
                    cl="flex-col gap-5"
                    clIntro=""
                    clIntroWeight="text-xl md:text-2xl font-normal"
                    intro="Vous désirez vous engager davantage avec l’AGÉFO?"
                    listItems={[
                        "Exercer votre droit de vote lors de l’Assemblée générale annuelle",
                        "Agir à titre d’agente ou d’agent de liaison de l’AGÉFO pour votre conseil scolaire",
                        "Représenter l’AGÉFO à divers comités ad hoc, provinciaux ou consultatifs",
                    ]}
                    darkBg={true}
                >
                <div slot="underList" class="mt-10">
                    <SButton
                        name="Écrivez-nous"
                        darkBg={true}
                        href="mailto:info@agefo.ca"
                    />
                </div>
                </ListWithIntro>
                <!-- pour nous mentionner votre intérêt-->
            </div>
        </Box>
    </Section>
    <Section name="mission" bg="bg-purple">
        <SmallBigTitle
            smallTitle="Mission"
            bigTitle="Appuyer les leaders au service de l'éducation"
        />
        <div class="flex flex-col gap-10">
            <span class="text-xl md:text-2xl font-medium leading-[1.25]">
                Votre Association existe pour vous et articule ses initiatives
                autour de quatre fins&nbsp;:
            </span>
            <div class="flex flex-col gap-5">
                <div class="flex flex-row gap-5 leading-[1.25]">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">
                        1
                    </div>
                    <span
                        >Mettre sur pied des programmes et des ressources vous
                        permettant d’améliorer vos compétences professionnelles
                        et personnelles.</span
                    >
                </div>
                <div class="flex flex-row gap-5 leading-[1.25]">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">
                        2
                    </div>
                    <span
                        >Créer des occasions de collaboration entre vous, les
                        membres.</span
                    >
                </div>
                <div class="flex flex-row gap-5 leading-[1.25]">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">
                        3
                    </div>
                    <span
                        >Faire reconnaître vos besoins et vos intérêts et
                        veiller à ce que vos avantages soient comparables à ceux
                        des membres d’autres associations.</span
                    >
                </div>
                <div class="flex flex-row gap-5 leading-[1.25]">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">
                        4
                    </div>
                    <span
                        >Reconnaître et défendre les besoins et les intérêts de
                        l’éducation en langue française.</span
                    >
                </div>
            </div>
            
            <SButton
                name="Apprenez-en plus"
                href="https://agefo.ca/documents-corporatifs/"
            />
        </div>
        <Box bg="bg-beigeish mt-10">
            <div class="flex flex-col md:flex-row gap-20">
                <div class="flex flex-col gap-5 justify-around">
                    <div class="flex flex-col gap-5">
                        <div class="flex text-2xl font-tiro">
                            Sur la table à dessin de la direction
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="flex">
                            Découvrez les billets publiés sur notre site Web qui
                            retracent l'avancement des projets institutionnels
                            de l'AGÉFO. C'est une belle façon d'être au fait de
                            ce qui se passe en arrière-scène!
                        </div>
                    </div>
                </div>
                <div class="flex flex-col self-start md:self-center items-end">
                    <SButton
                        name="Consultez&nbsp;les&nbsp;billets"
                        href="https://agefo.ca/category/sur-la-table-a-dessins-de-la-dg/"
                    />
                </div>
            </div>
        </Box>
    </Section>
    <Section name="communications" bg="bg-beigeish">
        <SmallBigTitle
            smallTitle="Contact"
            bigTitle="S’assurer de ne rien manquer"
        />
        <div class="flex flex-col gap-10">
            <span class="text-xl md:text-2xl font-medium">
                Comment rester à l'affût des nouvelles de l'AGÉFO?
            </span>
            <ListWithIntro
                cl="flex-col gap-5"
                clIntro=""
                clIntroWeight="text-md md:text-lg text-normal"
                intro="Le courriel est notre courroie de transmission par excellence&nbsp;:"
                listItems={[
                    "Infolettre trimestrielle",
                    "Courriel d’invitation de la direction générale",
                    "Nouvelle importante",
                ]}
            >
                <span slot="underList" class="italic mt-10">
                    Vous n’avez pas eu de nouvelles de l’AGÉFO depuis longtemps?
                    Pensez à visiter votre boîte de courrier indésirable!
                </span>
            </ListWithIntro>
            <div class="flex flex-col md:flex-row gap-10 mt-10">
                <span class="text-xl font-medium leading-[1.25]"
                    >Vous avez des questions concernant l'AGÉFO, ses programmes
                    ou votre adhésion?</span
                >
                <div class="md:w-1/2 md:self-end items-end">
                    <SButton name="Écrivez-nous" href="mailto:info@agefo.ca" />
                </div>
            </div>
        </div>
    </Section>
    <Section name="footer" bg="bg-beigeish">
        <Box bg="bg-blueish">
            <div class="relative w-full flex flex-col gap-20 p-5">
                <div
                    class="max-sm:hidden absolute -top-4 -left-[20%] h-[120%] z-10"
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 745 692"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M229.212 537.659C2.15474 351.989 138.204 171.387 201.725 106.426C186.249 78.0919 177.241 45.8415 177.241 11.2876C177.241 7.60186 177.241 3.68575 177.703 0C-5.46773 129.001 0.999818 316.514 0.999818 316.514C2.61671 639.478 318.372 692 318.372 692V377.099H228.981V537.889L229.212 537.659Z"
                            fill="#FDF8F4"
                        />
                        <path
                            d="M572.686 2.99467C572.686 5.75899 572.686 8.5233 572.686 11.2876C572.686 46.763 563.215 80.1651 546.584 109.19C611.26 176.455 740.38 354.523 516.556 537.659V376.868H427.166V691.77C427.166 691.77 742.921 639.248 744.538 316.284C744.538 316.284 751.005 131.766 572.224 2.76431"
                            fill="#FDF8F4"
                        />
                        <path
                            d="M344.242 259.615C344.242 296.473 314.214 326.65 277.026 326.65C239.837 326.65 210.041 296.703 210.041 259.615C210.041 222.527 240.068 192.581 277.026 192.581C313.983 192.581 344.242 222.527 344.242 259.615Z"
                            fill="#FDF8F4"
                        />
                        <path
                            d="M536.652 259.615C536.652 296.473 506.624 326.65 469.436 326.65C432.247 326.65 402.219 296.703 402.219 259.615C402.219 222.527 432.247 192.581 469.436 192.581C506.624 192.581 536.652 222.527 536.652 259.615Z"
                            fill="#FDF8F4"
                        />
                    </svg>
                </div>
                <img
                    class="self-center z-30 md:w-1/3"
                    src="https://agefo.ca/wp-content/uploads/2023/12/logo-agefo_3x.png"
                    alt="Logo AGÉFO"
                />
                <div
                    class="flex flex-col md:flex-row gap-5 md:justify-between z-20"
                >
                    <span class="text-xl md:text-2xl font-medium leading-[1.25]"
                        >L’AGÉFO, de meilleurs leaders<br /> pour un meilleur système</span
                    >
                    <div class="flex flex-col gap-1">
                        <a
                            href="https://agefo.ca"
                            target="_blank"
                            class="text-xl underline underline_bigger font-normal underline-offset-4"
                            >agefo.ca</a
                        >
                        <a
                            href="mailto:info@agefo.ca"
                            class="text-xl underline font-normal underline-offset-4 hover:underline-offset-8"
                            >info@agefo.ca</a
                        >
                    </div>
                </div>
            </div>
        </Box>
    </Section>
</div>
