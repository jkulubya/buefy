<script>
import { defineComponent, h } from 'vue'
export default defineComponent({
    name: 'BMenuList',
    functional: true,
    props: {
        label: String,
        icon: String,
        iconPack: String,
        ariaRole: {
            type: String,
            default: ''
        }
    },
    render(context) {
        let vlabel = null
        const slots = context.slots()
        if (context.props.label || slots.label) {
            vlabel = h('p', { attrs: { 'class': 'menu-label' } },
                context.props.label
                    ? context.props.icon
                        ? [
                            h('b-icon', {
                                props: {
                                    'icon': context.props.icon,
                                    'pack': context.props.iconPack,
                                    'size': 'is-small'
                                }
                            }),
                            h('span', {}, context.props.label)
                        ] : context.props.label
                    : slots.label)
        }
        const vnode = h('ul', { attrs: { 'class': 'menu-list', 'role': context.props.ariaRole === 'menu' ? context.props.ariaRole : null } }, slots.default)
        return vlabel ? [ vlabel, vnode ] : vnode
    }
})
</script>
