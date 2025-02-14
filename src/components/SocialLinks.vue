<script setup lang="ts">
import TwitterIcon from "./icons/TwitterIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
</script>
<template>
    <div class="flex items-center order-1 sm:order-2 space-x-6">
        <a href="https://github.com/nicetomytyuk">
            <span class="sr-only">GitHub</span>
            <GithubIcon />
        </a>
        <a href="https://twitter.com/nicetomytyuk">
            <span class="sr-only">Twitter</span>
            <TwitterIcon />
        </a>
        <a href="https://instagram.com/nicetomytyuk">
            <span class="sr-only">Instagram</span>
            <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/igor-mytyuk/">
            <span class="sr-only">LinkedIn</span>
            <LinkedinIcon />
        </a>
    </div>
</template>