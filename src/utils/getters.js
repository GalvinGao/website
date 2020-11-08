import projects from "@/models/projects"
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
          return {
            ...el,

            tags: marshaller.project.tags(el.tags),
            languages: marshaller.project.languages(el.languages),
            attachments: el.attachments.map(attachment => {
              return strings.translateBulk(attachment, ["title"])
            })
          }
        })
    },
    bySlug (slug) {
      return this.all()
        .filter(el => el.slug === slug)
    }
  }
}