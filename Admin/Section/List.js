import ListAltIcon from '@mui/icons-material/ListAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import { List, Text, Image, TitleSubtitle, ValueWithTitle, ItemAction } from '@List'
import UpdateSection from './Update'

const filters = <>
    <Text
        column=''
    />
</>

const sorts = [
    {
        "caption": "A-Z",
        "column": "Title",
        "direction": "asc"
    }
]

const headers = <>
    <th></th>
    <th>Content</th>
    <th>Name</th>
</>

const row = (item) => <>
    <td>
        <Image
            url={item.relatedItems.imageUrl}
            uploadUrl={`/section/setImage?sectionId=${item.id}`}
        />
    </td>
    <td>
        <TitleSubtitle
            title={<ValueWithTitle
                value={item.title}
                title={item.summary}
            />}
            subtitle={item.subtitle}
        />
    </td>
    <td>{item.name}</td>
</>

const itemActions = (item) => <>
    <ItemAction
        title='Manage actions'
        icon={BoltIcon}
        goTo={`/section/actions?sectionId=${item.id}`}
    />
    <ItemAction
        title='Manage items'
        icon={ListAltIcon}
        goTo={`/section/items?sectionId=${item.id}`}
    />
</>

const Sections = () => {
    return <List
        title='Sections'
        entityType='Section'
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        itemActions={itemActions}
        edit={UpdateSection}
    />
}

export default Sections