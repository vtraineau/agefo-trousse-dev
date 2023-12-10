<script>
    import { Section, SmallBigTitle } from "$lib";
    import Box from "$lib/Box.svelte";
    import ListWithIntro from "$lib/ListWithIntro.svelte";
    import SButton from "$lib/SButton.svelte";
    import "../app.css";
</script>

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Tiro+Bangla"
/>
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Instrument+Sans"
/>
<div class="flex flex-col items-center w-screen overflow-hidden">
    <Section name="bienvenue" bg="bg-purple" cl="h-screen place-content-around">
        <SmallBigTitle
            firstTitle={true}
            smallTitle="Bienvenue à l'AGÉFO!"
            bigTitle="Guide d'accueil des nouveaux membres"
        />
        <div class="flex flex-row gap-9 items-center">
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
            <p class="text-black text-lg font-medium font-['Instrument Sans']">
                Vous êtes au carrefour de vos solutions
                <br />
                en développement professionnel.
            </p>
        </div>
    </Section>
    <Section name="apprentissage" bg="bg-purple">
        <SmallBigTitle
            smallTitle="Apprentissage professionnel"
            bigTitle="Des webinaires et des formations accessibles gratuitement"
        />
        <ListWithIntro
            cl="flex-col gap-5"
            clIntro=""
            intro="Développez vos compétences en leadership grâce à&nbsp;:"
            listItems={[
                "Une offre de formations mises à jour chaque année",
                "Des thématiques inspirées des enjeux actuels",
                "Une combinaison de deux modes d’apprentissage, soit le webinaire et la formation",
            ]}
        />
    </Section>
    <Section name="collaboration" bg="bg-purple">
        <Box bg="bg-white">
            <div class="flex flex-col md:flex-row gap-5">
                <div class="flex flex-col gap-5 md:w-1/3 justify-items-center">
                    <span class="text-xl font-medium text-center"
                        >Collaboration</span
                    >
                    <img
                        src="https://agefo.ca/wp-content/uploads/2023/12/Logo-ED-HEC-1.png"
                        alt="Logo ED-HEC"
                    />
                </div>
                <div class="flex flex-col gap-5 md:w-2/3">
                    <div>
                        Ces apprentissages sont mis sur pied en collaboration
                        avec plusieurs partenaires dont le HEC Montréal, l'une
                        des
                        <span class="font-medium">
                            50 meilleures écoles de gestion au monde pour la
                            formation de cadres.
                        </span>
                    </div>
                    <div>
                        <SButton name="Découvrez la programmation en cours" />
                    </div>
                </div>
            </div>
        </Box>
    </Section>
    <Section name="mentorat" bg="bg-purple">
        <SmallBigTitle
            smallTitle="Mentorat"
            bigTitle="Un programme d’accompagnement professionnel"
        />
        <ListWithIntro
            cl="flex-col md:flex-row gap-5"
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
    </Section>
    <Section name="colloque" bg="bg-beigeish">
        <SmallBigTitle
            smallTitle="Colloque annuel"
            bigTitle="Le plus grand rassemblement des gestionnaires en éducation de langue française en Ontario"
        />
        <ListWithIntro
            cl="flex-col gap-5"
            clIntro=""
            intro="Faites le plein d’apprentissages professionnels et d’occasions de réseautage lors de ce rendez-vous annuel de deux journées&nbsp;:"
            listItems={[
                "Des conférences et des ateliers",
                "Un cocktail retrouvailles",
                "Un gala de reconnaissance",
            ]}
        />
        <SButton name="Découvrez les dates du prochain colloque" />
        <Box bg="bg-purple">
            <div class="flex flex-col">
                <span class="text-2xl font-tiro mb-5">
                    Un autre événement signé AGÉFO!
                </span>
                <span class="">
                    L’AGÉFO organise également un institut pancanadien de
                    leadership qui s’adresse aux hautes gestionnaires et aux
                    hauts gestionnaires en éducation de langue française.
                </span>
                <span class="">
                    Visitez
                    <a
                        href="https://agefo.ca/institut/"
                        target="_blank"
                        class="font-medium underline underline-offset-4"
                        >le site Web de l’événement</a
                    >
                    pour connaître les dates du prochain institut.
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
            intro="Soulignez le leadership d’une ou d’un collègue en déposant sa candidature au prix Mérite annuel de l’AGÉFO et faites briller&nbsp;:"
            listItems={[
                "Sa contribution active à la mission de l’AGÉFO",
                "Son implication au sein de comités faisant avancer l’éducation en langue française",
                "Son travail acharné au service de son domaine d’expertise",
            ]}
        />
        <Box bg="bg-white">
            <div class="flex flex-col">
                <div class="flex flex-col gap-5">
                    <div class="flex flex-col md:flex-row gap-16">
                        <div class="flex flex-col gap-5">
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
                            <span class="text-black text-2xl font-medium"
                                >Quand déposer une candidature?</span
                            >
                            <span class="text-black font-normal"
                                >La période de mise en candidature commence au
                                début de l’année scolaire et s’échelonne
                                jusqu’au mois de février.</span
                            >
                        </div>
                        <div class="flex flex-col gap-5">
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
                            <span class="text-black text-2xl font-medium"
                                >Quand se déroule la remise du prix?</span
                            >
                            <span class="text-black font-normal"
                                >L’AGÉFO décore les lauréates et lauréats lors
                                du gala de reconnaissance durant le colloque
                                annuel.</span
                            >
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <SButton name="Soumettez une candidature" />
                    </div>
                </div>
            </div>
        </Box>
    </Section>
    <Section name="deux_prix" bg="bg-purple">
        <div class="flex flex-col md:flex-row gap-10">
            <span class="text-2xl font-tiro">Deux prix Mérite plutôt qu'un!</span>
            <svg class="rotate-90 px-6 md:px-0 md:rotate-0 self-center" id="arrow_right" width="126" height="30" viewBox="0 0 126 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.08947 15.8548C1.64334 15.5293 1.01776 15.627 0.692209 16.0731C0.366654 16.5193 0.4644 17.1448 0.910531 17.4704L2.08947 15.8548ZM125.964 4.42836C126.111 3.89594 125.798 3.34534 125.266 3.19856L116.589 0.806703C116.057 0.659927 115.506 0.972555 115.36 1.50498C115.213 2.0374 115.525 2.588 116.058 2.73478L123.77 4.86087L121.644 12.5732C121.497 13.1056 121.81 13.6562 122.342 13.803C122.875 13.9498 123.425 13.6371 123.572 13.1047L125.964 4.42836ZM0.910531 17.4704C19.8314 31.2775 66.2791 38.6541 125.494 5.0322L124.506 3.293C65.7209 36.6711 20.1686 29.0477 2.08947 15.8548L0.910531 17.4704Z" fill="#404141"/>
                </svg>
            <span>
                L’AGÉFO décerne annuellement deux prix, soit un pour le volet administratif et un pour le volet pédagogique.
            </span>
        </div>
    </Section>
    <Section name="ressources_sup" bg="bg-beigeish">
        <SmallBigTitle
            smallTitle="Ressources supplémentaires"
            bigTitle="Des occasions pour aller plus loin"
        />
        <ListWithIntro
            cl="flex-col md:flex-row gap-5 md:gap-16"
            clIntro=""
            intro="Découvrez plus de ressources&nbsp;:"
            listItems={[
                "La liste des membres de l’AGÉFO",
                "Offres d’emploi en cours dans le réseau",
                "Guide sur l'approche service",
                "Continuum du profil du leadership partagé",
            ]}
        >
            <SButton slot="underList" name="Parcourez les ressources" />
        </ListWithIntro>
        <Box bg="bg-dark-grey text-on-dark-grey">
            <div class="flex flex-col gap-5">
                <span class="text-2xl font-medium">S'impliquer </span>
                <ListWithIntro
                    cl="flex-col gap-5"
                    clIntro=""
                    intro="Vous désirez vous engager davantage avec l’AGÉFO?"
                    listItems={[
                        "Exercer votre droit de vote lors de l’Assemblée générale annuelle",
                        "Agir à titre d’agente ou d’agent de liaison de l’AGÉFO pour votre conseil scolaire",
                        "Représenter l’AGÉFO à divers comités ad hoc, provinciaux ou consultatifs"
                    ]}
                />
                <SButton name="Écrivez-nous"/> <!-- pour nous mentionner votre intérêt-->
            </div>
        </Box>
    </Section>
    <Section name="mission" bg="bg-purple">
        <SmallBigTitle
            smallTitle="Mission"
            bigTitle="Appuyer les leaders au service de l'éducation"
        />
        <div class="flex flex-col gap-5">
            <span class="text-xl md:text-2xl font-medium">
                Votre Association existe pour vous et articule ses initiatives autour de quatre fins&nbsp;:
            </span>
            <div class="flex flex-col gap-5">
                <div class="flex flex-row gap-5">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">1</div>
                    <span>Mettre sur pied des programmes et des ressources vous permettant d’améliorer vos compétences professionnelles et personnelles.</span>
                </div>
                <div class="flex flex-row gap-5">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">2</div>
                    <span>Créer des occasions de collaboration entre vous, les membres.</span>
                </div>
                <div class="flex flex-row gap-5">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">3</div>
                    <span>Faire reconnaître vos besoins et vos intérêts et veiller à ce que vos avantages soient comparables à ceux des membres d’autres associations.</span>
                </div>
                <div class="flex flex-row gap-5">
                    <div class="bg-btn-green sssquircle-btn px-2 self-start">4</div>
                    <span>Reconnaître et défendre les besoins et les intérêts de l’éducation en langue française.</span>
                </div>
            </div>
        </div>
        <SButton name="Apprenez-en plus sur notre gouvernance" />
        <Box bg="bg-beigeish">
            <div class="flex flex-col gap-5 justify-around">
                <div class="flex flex-col gap-5">
                    <div class="flex text-2xl font-tiro">
                        Sur la table à dessin de la direction
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="flex md:w-1/2">
                        Découvrez les billets publiés sur notre site Web et qui
                        retracent l'avancement des projets institutionnels de
                        l'AGÉFO. C'est une belle façon d'être au fait de ce qui
                        se passe en arrière-scène!
                    </div>
                    <div class="flex flex-col md:w-1/2 self-start md:self-center items-center">
                        <SButton name="Consultez les billets" />
                    </div>
                </div>
            </div>
        </Box>
    </Section>
    <Section name="communication" bg="bg-beigeish">
        <SmallBigTitle
            smallTitle="Communications"
            bigTitle="S’assurer de ne rien manquer"
        />
        <div class="flex flex-col gap-10">
            <span class="text-xl md:text-2xl font-medium">
                Comment rester à l'affût des nouvelles de l'AGÉFO?
            </span>
            <ListWithIntro
                    cl="flex-col gap-5"
                    clIntro=""
                    intro="Le courriel est notre courroie de transmission par excellence pour vous informer&nbsp;:"
                    listItems={[
                        "Infolettre trimestrielle",
                        "Courriel d’invitation de la direction générale",
                        "Nouvelle importante"
                    ]}
                />
                <span class="italic">
                    Vous n’avez pas eu de nouvelles de l’AGÉFO depuis longtemps? Pensez à visiter votre boîte de courrier indésirable!
                </span>
                <div class="flex flex-col md:flex-row gap-10">
                    <span class="text-xl font-medium">Vous avez des questions concernant l'AGÉFO, ses programmes ou votre adhésion?</span>
                    <div class="md:w-1/2 md:self-center items-center"><SButton name="Écrivez-nous" /></div>
                </div>
        </div>
    </Section>
    <Section name="footer" bg="bg-beigeish">
        <Box bg="bg-blueish">
            <div class="w-full flex flex-col gap-5">
                <img class="max-w- self-center" src="https://agefo.ca/wp-content/uploads/2023/12/logo-agefo.png" alt="Logo AGÉFO" />
                <div class="flex flex-col md:flex-row gap-5 md:justify-between">
                    <span class="text-xl font-medium">L’AGÉFO, de meilleurs leaders pour un meilleur système</span>
                    <div class="flex flex-col">
                        <a href="https://agefo.ca" target="_blank" class="underline">agefo.ca</a>
                        <a href="mailto:info@agefo.ca" class="underline">info@agefo.ca</a>
                    </div>
                </div>
            </div>
        </Box>
    </Section>
</div>
