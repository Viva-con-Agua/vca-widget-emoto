<template>
    <a href="/emoto/" alt="path.to.i18n.emoto.hover">
        <img src="../assets/logo.png" />
        <span>path.to.i18n.emoto.label</span>
    </a>
</template>

<script>
export default {
  name: 'EmotoButton',
  created () {
    // Todo: Check visibility of button using emoto backend; also check if there is a better lifecycle hook before "created"!
  },
}
</script>

<style scoped lang="less">
 /* TODO */
</style>
