import i18n from "@/i18n";

const constants = {
  project: {
    tag: {
      frontend: {
        icon: "mdi-web"
      },
      backend: {
        icon: "mdi-code-tags"
      },
      infrastructure: {
        icon: "mdi-server"
      },
      ios: {
        icon: "mdi-apple-ios"
      },
      android: {
        icon: "mdi-android"
      },
      initiative: {
        icon: "mdi-account-tie"
      },
      "team-management": {
        icon: "mdi-account-multiple"
      },
      "premiere-pro": {
        icon: "mdi-movie"
      },
      "after-effects": {
        icon: "mdi-movie"
      }
    },
    // language is the name of such language represented using such language
    language: {
      "zh-hans": "简体中文",
      "en-US": "English",
      "ko-KR": "한국어",
      "ja-JP": "日本語"
    }
  }
}

export default {
  project: {
    tags (tags) {
      return tags.map(el => {
        return {
          ...el,
          ...constants.project.tag[el.tag]
        }
      })
    },
    languages (languages) {
      return languages.map(el => {
        return {
          id: el,
          name: {
            translated: i18n.t(`projects.languages.${el}`),
            original: constants.project.language[el]
          },
        }
      })
    },
  }
}