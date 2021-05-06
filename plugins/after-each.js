export default ({ app }) => {
  app.router.afterEach(() => {
    const appLoading = document.getElementById('loading-bg')
    document.body.classList.remove('no_scroll')
    if (appLoading) {
      appLoading.style.display = 'none'
    }
  })
}
