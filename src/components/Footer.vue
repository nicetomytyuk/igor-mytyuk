<template>
    <footer class="bg-blue-600">
        <div class="flex items-center justify-between my-2 px-4 max-w-6xl mx-auto">
            <p class="text-base font-semibold text-white">© {{ new Date().getFullYear() }} Ihor Mytyuk</p>
            <div class="flex items-center order-2 space-x-6"><a href="https://twitter.com/nicetomytyuk"
                    class="text-white important"><span class="sr-only">Twitter</span><svg
                        class="w-7 h-7 transform hover:rotate-[-4deg] transition" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg></a><a href="https://www.linkedin.com/in/igor-mytyuk/" class="text-white important"><span
                        class="sr-only">LinkedIn</span><svg class="w-7 h-7 transform hover:rotate-[-4deg] transition"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path
                            d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M10.75 11.75V16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M7.75 11.75V16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        <path d="M7.75 8.75V9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg></a><a href="https://github.com/nicetomytyuk" class="text-white important"><span
                        class="sr-only">GitHub</span><svg class="w-7 h-7 transform hover:rotate-[-4deg] transition"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.75 12C4.75 10.7811 5.05079 9.63249 5.58219 8.62429L4.80156 6.0539C4.53964 5.19151 5.46262 4.44997 6.24833 4.89154L8.06273 5.91125C9.1965 5.17659 10.5484 4.75 12 4.75C13.4526 4.75 14.8054 5.17719 15.9396 5.91278L17.7624 4.8911C18.549 4.45014 19.4715 5.19384 19.2075 6.05617L18.42 8.62837C18.95 9.63558 19.25 10.7828 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg></a><a href="https://instagram.com/nicetomytyuk" class="text-white important"><span
                        class="sr-only">CodePen</span><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 512 512" class="w-5 h-5 transform hover:rotate-[-4deg] transition" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg></a></div>
        </div>
    </footer>
</template>