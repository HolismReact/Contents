import { List, Text } from '@List'
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
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const Sections = () => {
    return <List
        title='Sections'
        entityType='Section'
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        edit={UpdateSection}
    />
}

export default Sections