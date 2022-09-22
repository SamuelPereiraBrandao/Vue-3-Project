<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot>


                </slot>
              
            </div>
            
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>
<script>
export default {
    name: 'ModalVue',
 }
</script>
<style scoped>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

</style>