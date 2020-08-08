export default {
  methods: {
    changeLocale(localeId) {
      this.$i18n.locale = localeId;
      this.$vuetify.lang.current = localeId;
      // document.title = `${this.$t('app.title') + ' | ' || ''}${this.$t('app.name')}`;
      document.documentElement.lang = localeId;
    }
  }
}