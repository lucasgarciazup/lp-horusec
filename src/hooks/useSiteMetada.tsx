import { useStaticQuery, graphql } from "gatsby"
import { SiteMetadataInterface } from "../interfaces/sitemetada.interface"

export const useSiteMetadata = () => {
  const { site }: { site: SiteMetadataInterface } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
              github
              youtube
              instagram
              linkedin
              blog
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
