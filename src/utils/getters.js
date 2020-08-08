import projects from "@/models/projects.json"
import strings from "@/utils/strings";

export default {
  projects: {
    all () {
      return projects.map(el => {
        return strings.translateBulk(
          el,
          [
            "title",
            "subtitle"
          ]
        )
      })
    },
    bySlug (slug) {
      return this.all()
        .filter(el => el.slug === slug)
    }
  }
}