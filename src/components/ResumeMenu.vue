<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="py-3 px-6 md:px-12 inline-flex w-full justify-center rounded-md bg-black font-medium text-white shadow-sm">
                Resume
                <ChevronDownIcon class="-mr-1 ml-2 h-6 w-6" aria-hidden="true" />
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <MenuItem v-slot="{ active }">
                    <a href="./static/Igor_Mytyuk_-_Full-Stack_Software_Developer_EN.pdf" target="_blank" class="flex items-center"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                        <img class="mr-2 h-5" height="24px" src="data:image/png;base64,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" />
                        English</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="./static/Igor_Mytyuk_-_Full-Stack_Software_Developer.pdf" target="_blank" class="flex items-center"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                        <img class="mr-2 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAZ0lEQVRoge3PMRGAMBBFQYIBCsyggkEGQvCBDmqEQcFgICk+zOxW11xyr+sA4MfKO6z7dNU8sC1H0wHjPFTtlfO5vW/6/QMEpAlIE5AmIE1AmoA0AWkC0gSkCUgTkCYgTUCaAACgwQ0gCQU8ebVRwQAAAABJRU5ErkJggg==" />
                        Italian</a>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>