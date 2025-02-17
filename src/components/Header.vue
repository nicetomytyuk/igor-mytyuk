<script setup lang="ts">
import { CodeBracketIcon } from '@heroicons/vue/20/solid';
import SocialLinks from './SocialLinks.vue';
</script>
<template>
    <header class="relative z-50 text-gray-900">
        <div class="flex items-center px-4 py-6 mx-auto sm:px-6 space-x-4">
            <div class="flex items-center justify-start flex-1">
                <CodeBracketIcon class="mr-2 h-4 w-4" />
                <h2 class="transform-gpu text-sm font-bold">Igor Mytyuk</h2>
            </div>
            <SocialLinks />
        </div>
    </header>
</template>