import CMS from "netlify-cms"

import PostTemplate from "./components/postTemplate"

CMS.registerPreviewTemplate("blog", PostTemplate)
