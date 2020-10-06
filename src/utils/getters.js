import projects from "@/models/projects.js"
import strings from "@/utils/strings";
import marshaller from "@/utils/marshaller";

export default {
  projects: {
    all () {
      return projects.map(el => strings.translateBulk(
        el,
        [
          "title",
          "subtitle"
        ]
      ))
        .map(el => {
          el.attachments = el.attachments.map(attachment => strings.translateBulk(attachment, ["title"]))

          el.tags = marshaller.project.tags(el.tags)
          return el
        })
    },
    bySlug (slug) {
      return this.all()
        .filter(el => el.slug === slug)
    }
  }
}