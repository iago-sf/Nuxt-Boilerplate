<script setup lang="ts">
definePageMeta({
  title: "Home",
  auth: false,
  layout: "default",
})
</script>

<template>
  <div class="px-[12.5%]">
    <h1 class="text-green-600 font-bold text-4xl text-center block mt-5 py-10">
      Welcome to Nuxt Boilerplate
    </h1>

    <div class="mt-5">
      <h2 class="text-green-600 font-bold text-2xl underline block"># What is this?</h2>
      <p class="text-gray-600 text-lg mt-2">
        This Nuxt template aims to streamline the entire development of web applications, allowing
        you to focus on building without worrying about the underlying structure. To achieve this,
        various methods have been created for both the frontend, addressing/facilitating form
        functionality or routing, and the backend, providing complete table management and basic
        data filtering. All of this takes advantage of Nuxt's underlying functionality to leverage
        SSR and the ease of the folder structure logic it brings. Additionally, it makes use of
        different tools for database management, such as Prisma, and addresses CSS aspects with
        either defined class tools like Tailwind or components like Vuetify.
      </p>

      <h2 class="text-green-600 font-bold text-2xl underline block mt-5"># How to use it?</h2>
      <p class="text-gray-600 text-lg mt-2">
        You can find a quick guide on how to use it on
        <a href="https://github.com/iago-sf/Nuxt-Boilerplate" class="font-bold underline">Github</a>
      </p>

      <h2 class="text-green-600 font-bold text-2xl underline block mt-5"># Licenses</h2>
      <p class="text-gray-600 text-lg mt-2">
        This project is licensed under the MIT license. You can find more information about it on
        <a href="https://github.com/iago-sf/Nuxt-Boilerplate" class="font-bold underline"
          >repository license</a
        >.
      </p>
      <p class="text-gray-600 text-lg mt-2">
        This type of license was selected because all the tools used in this project are open source
        and free to use, and we want to keep it that way since we trust in the open source community
        and want to contribute to it.
      </p>

      <div class="mt-5 py-10">
        <v-row class="align-center justify-around">
          <v-col cols="12" md="2" class="none:mt-0">
            <a href="https://nuxt.com/" class="block m-auto w-fit"
              ><svg
                class="text-black dark:text-white block h-6"
                viewBox="0 0 800 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M377 200C379.16 200 381 198.209 381 196V103C381 103 386 112 395 127L434 194C435.785 197.74 439.744 200 443 200H470V50H443C441.202 50 439 51.4941 439 54V148L421 116L385 55C383.248 51.8912 379.479 50 376 50H350V200H377Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M726 92H739C742.314 92 745 89.3137 745 86V60H773V92H800V116H773V159C773 169.5 778.057 174 787 174H800V200H783C759.948 200 745 185.071 745 160V116H726V92Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M591 92V154C591 168.004 585.742 179.809 578 188C570.258 196.191 559.566 200 545 200C530.434 200 518.742 196.191 511 188C503.389 179.809 498 168.004 498 154V92H514C517.412 92 520.769 92.622 523 95C525.231 97.2459 526 98.5652 526 102V154C526 162.059 526.457 167.037 530 171C533.543 174.831 537.914 176 545 176C552.217 176 555.457 174.831 559 171C562.543 167.037 563 162.059 563 154V102C563 98.5652 563.769 96.378 566 94C567.96 91.9107 570.028 91.9599 573 92C573.411 92.0055 574.586 92 575 92H591Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M676 144L710 92H684C680.723 92 677.812 93.1758 676 96L660 120L645 97C643.188 94.1758 639.277 92 636 92H611L645 143L608 200H634C637.25 200 640.182 196.787 642 194L660 167L679 195C680.818 197.787 683.75 200 687 200H713L676 144Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z"
                  fill="#00DC82"
                ></path></svg
            ></a>
          </v-col>
          <v-col cols="12" md="2" class="none:mt-5 md:mt-0">
            <a href="https://prisma.io" class="block m-auto w-fit">
              <img
                src="https://prismalens.vercel.app/header/logo-dark.svg"
                alt="Prisma.io logo"
                class="w-full m-auto"
              />
            </a>
          </v-col>
          <v-col cols="12" md="2" class="none:mt-5 md:mt-0">
            <a href="https://sidebase.io" class="block m-auto w-fit">
              <svg
                class="block h-9"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                zoomAndPan="magnify"
                viewBox="74.65 82.5 226.02 209.72"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                <defs>
                  <clipPath id="id1">
                    <path
                      d="M 123 82.507812 L 301 82.507812 L 301 235.597656 L 123 235.597656 Z M 123 82.507812 "
                      clip-rule="nonzero"
                    ></path>
                  </clipPath>
                  <clipPath id="id2">
                    <path
                      d="M 74.261719 110.808594 L 252.546875 110.808594 L 252.546875 263.898438 L 74.261719 263.898438 Z M 74.261719 110.808594 "
                      clip-rule="nonzero"
                    ></path>
                  </clipPath>
                  <clipPath id="id3">
                    <path
                      d="M 123 139.109375 L 301 139.109375 L 301 292.199219 L 123 292.199219 Z M 123 139.109375 "
                      clip-rule="nonzero"
                    ></path>
                  </clipPath>
                </defs>
                <g clip-path="url(#id1)">
                  <path
                    fill="#111f25"
                    d="M 293.339844 235.597656 L 130.460938 235.597656 C 127.835938 235.597656 125.457031 234.253906 124.144531 231.957031 C 122.832031 229.691406 122.832031 226.972656 124.144531 224.707031 L 203.917969 87.101562 C 205.585938 84.238281 208.566406 82.507812 211.902344 82.507812 C 215.238281 82.507812 218.21875 84.203125 219.886719 87.101562 L 299.65625 224.742188 C 300.96875 227.007812 300.96875 229.726562 299.65625 231.992188 C 298.308594 234.253906 295.96875 235.597656 293.339844 235.597656 Z M 128.511719 227.21875 C 127.90625 228.242188 128.296875 229.128906 128.511719 229.480469 C 128.722656 229.835938 129.289062 230.613281 130.460938 230.613281 L 293.304688 230.613281 C 294.476562 230.613281 295.078125 229.835938 295.257812 229.480469 C 295.46875 229.128906 295.859375 228.242188 295.257812 227.21875 L 215.519531 89.578125 C 214.777344 88.269531 213.425781 87.492188 211.902344 87.492188 C 210.375 87.492188 209.027344 88.269531 208.28125 89.578125 Z M 128.511719 227.21875 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  ></path>
                </g>
                <g clip-path="url(#id2)">
                  <path
                    fill="#585e63"
                    d="M 244.84375 263.898438 L 81.964844 263.898438 C 79.339844 263.898438 76.960938 262.554688 75.648438 260.257812 C 74.335938 257.996094 74.335938 255.273438 75.648438 253.007812 L 155.417969 115.402344 C 157.085938 112.539062 160.070312 110.808594 163.402344 110.808594 C 166.738281 110.808594 169.71875 112.503906 171.386719 115.402344 L 251.160156 253.042969 C 252.472656 255.308594 252.472656 258.03125 251.160156 260.292969 C 249.8125 262.554688 247.46875 263.898438 244.84375 263.898438 Z M 80.011719 255.519531 C 79.410156 256.546875 79.800781 257.429688 80.011719 257.78125 C 80.226562 258.136719 80.792969 258.914062 81.964844 258.914062 L 244.808594 258.914062 C 245.980469 258.914062 246.582031 258.136719 246.761719 257.78125 C 246.972656 257.429688 247.363281 256.546875 246.761719 255.519531 L 167.023438 117.878906 C 166.277344 116.570312 164.929688 115.792969 163.402344 115.792969 C 161.878906 115.792969 160.53125 116.570312 159.785156 117.878906 Z M 80.011719 255.519531 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  ></path>
                </g>
                <g clip-path="url(#id3)">
                  <path
                    fill="#5bf3c7"
                    d="M 293.339844 292.199219 L 130.460938 292.199219 C 127.835938 292.199219 125.457031 290.855469 124.144531 288.558594 C 122.832031 286.296875 122.832031 283.574219 124.144531 281.3125 L 203.917969 143.707031 C 205.585938 140.839844 208.566406 139.109375 211.902344 139.109375 C 215.238281 139.109375 218.21875 140.804688 219.886719 143.707031 L 299.65625 281.347656 C 300.96875 283.609375 300.96875 286.332031 299.65625 288.59375 C 298.308594 290.855469 295.96875 292.199219 293.339844 292.199219 Z M 128.511719 283.820312 C 127.90625 284.847656 128.296875 285.730469 128.511719 286.085938 C 128.722656 286.4375 129.289062 287.214844 130.460938 287.214844 L 293.304688 287.214844 C 294.476562 287.214844 295.078125 286.4375 295.257812 286.085938 C 295.46875 285.730469 295.859375 284.847656 295.257812 283.820312 L 215.519531 146.179688 C 214.777344 144.871094 213.425781 144.09375 211.902344 144.09375 C 210.375 144.09375 209.027344 144.871094 208.28125 146.179688 Z M 128.511719 283.820312 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </a>
          </v-col>
          <v-col cols="12" md="2" class="none:mt-5 md:mt-0">
            <a href="https://vuetifyjs.com/" class="block m-auto w-fit"
              ><img
                class="h-9 m-auto"
                src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-light.svg"
                alt="Vuetify logo"
            /></a>
          </v-col>
          <v-col cols="12" md="2" class="none:mt-5 md:mt-0">
            <a href="https://tailwindcss.com/" class="block m-auto w-fit">
              <svg class="text-slate-900 dark:text-white block h-6" viewBox="0 0 248 31">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                  fill="#38bdf8"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
