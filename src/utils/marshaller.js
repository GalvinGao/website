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
    }
  }
}