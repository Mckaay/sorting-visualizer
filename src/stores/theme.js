import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref (localStorage.getItem('theme') ?? 'light');

    function toogleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme',theme.value);
    }

    const isDark = computed(() => {
        return theme.value === 'Dark';
    })

    return {  theme, toogleTheme, isDark }
})
