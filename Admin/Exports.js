import Sections from './Section/List'
import Images from './Image/List'
import Texts from './Text/List'

const ContentRoutes = [
    {
        "path": "/sections",
        "component": Sections
    },
    {
        "path": "/images",
        "component": Images
    },
    {
        "path": "/texts",
        "component": Texts
    }
]

export { ContentRoutes };