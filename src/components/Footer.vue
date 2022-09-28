<script setup lang="ts">
import TwitterIcon from "./icons/TwitterIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";

</script>
<template>
    <footer class="bg-blue-600">
        <div class="flex flex-col sm:flex-row items-center justify-between my-2 px-4 sm:px-6 max-w-6xl mx-auto">
            <p class="text-base font-semibold order-2 sm:order-1 text-white mt-2 sm:mt-0">© {{ new Date().getFullYear()
            }} Ihor Mytyuk</p>
            <div class="flex items-center order-1 sm:order-2 space-x-6">
                <a href="https://github.com/nicetomytyuk" class="text-white important"><span
                        class="sr-only">GitHub</span>
                    <GithubIcon />
                </a>
                <a href="https://twitter.com/nicetomytyuk" class="text-white important"><span
                        class="sr-only">Twitter</span>
                    <TwitterIcon />
                </a>
                <a href="https://instagram.com/nicetomytyuk" class="text-white important"><span
                        class="sr-only">Instagram</span>
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/igor-mytyuk/" class="text-white important"><span
                        class="sr-only">LinkedIn</span>
                    <LinkedinIcon />
                </a>
            </div>
        </div>
    </footer>
</template>