<template>
    <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': isOpened }"
        aria-label="menu"
        :aria-expanded="isOpened"
        v-on="$listeners"
    >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
    </a>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'NavbarBurger',
    props: {
        isOpened: {
            type: Boolean,
            default: false
        }
    }
})
</script>
