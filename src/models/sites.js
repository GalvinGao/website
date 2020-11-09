export default [
  {
    id: "penguin-statistics",
    matcher: function (url) {
      return new URL(url).hostname.match(/penguin-stats\.(io|cn|com)/)
    },
    icon: require("@/assets/siteIcons/penguin.png")
  },
  {
    id: "bilibili",
    matcher: function (url) {
      return new URL(url).hostname.match(/(bilibili\.(com|co))|(b23\.tv)/)
    },
    icon: require("@/assets/siteIcons/bilibili.svg")
  },
  {
    id: "memories-album",
    matcher: function (url) {
      return new URL(url).hostname.match(/memories\.galvincdn\.com/)
    },
    icon: require("@/assets/siteIcons/memories-album.png")
  },
  {
    id: "github",
    matcher: function (url) {
      return new URL(url).hostname.match(/github\.com/)
    },
    icon: require("@/assets/siteIcons/github.svg")
  },
  {
    id: "wuhan-support",
    matcher: function (url) {
      return new URL(url).hostname.match(/(covid-19\.red)|(wuhan\.support)/)
    },
    icon: require("@/assets/siteIcons/covid-19-red.svg")
  },
  {
    id: "kinglee",
    matcher: function (url) {
      return new URL(url).hostname.match(/(graduation-2020\.galvincdn\.com)/)
    },
    icon: require("@/assets/siteIcons/kinglee.png")
  }
]