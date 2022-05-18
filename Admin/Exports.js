import AbcIcon from '@mui/icons-material/Abc';

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

const ContentMenu = [
    {
        "title": "Contents",
        "icon": AbcIcon,
        "children": [
            {
                "title": "Pages",
                "url": "/pages"
            },
            {
                "title": "Sections",
                "url": "/sections"
            },
            {
                "title": "Texts",
                "url": "/texts"
            },
            {
                "title": "Images",
                "url": "/images"
            }
        ]
    }
]

export { ContentRoutes };
export { ContentMenu }