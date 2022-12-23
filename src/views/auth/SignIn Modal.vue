<template>
  <section class="bg_modal"></section>
  <section class="log_modal">
    <div class="log">
        <slot name="title">
            Title
        </slot>

        <main>
            <slot name="body">
                Body
            </slot>
        </main>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>