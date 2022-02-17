import Sections from './Section/List'
import SectionItems from './Section/Items'
import SectionActions from './Section/Actions'
import Images from './Image/List'
import Texts from './Text/List'

const ContentRoutes = [
    {
        "path": "/sections",
        "component": Sections
    },
    {
        "path": "/section/items",
        "component": SectionItems
    },
    {
        "path": "/section/actions",
        "component": SectionActions
    },
    {
        "path": "/staticImages",
        "component": Images
    },
    {
        "path": "/staticTexts",
        "component": Texts
    }
]

export { ContentRoutes };