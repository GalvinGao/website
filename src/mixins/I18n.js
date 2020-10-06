import {mapGetters} from "vuex";
import Console from "@/utils/Console";
import dayjs from "dayjs";

export default {
  methods: {
    changeLocale(localeId, save) {
      Console.info("i18n", "locale:", localeId, "| saving to vuex:", save);
      dayjs.locale(localeId);
      if (save) this.$store.commit("settings/changeLocale", localeId);
      this.$i18n.locale = localeId;
      this.$vuetify.lang.current = localeId;
      document.title = `${this.$t(this.$route.meta.i18n) + ' | ' || ''}${this.$t('app.name')}`;
      document.documentElement.lang = localeId;
    }
  },
  computed: {
    ...mapGetters('settings', ['language'])
  },
}