import { List, Text } from '@List'
import UpsertSection from './Upsert'

const filters = <>
    <Text
        column=''
    />
</>

const sorts = [
    {
        "caption": "A-Z"
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
        create={UpsertSection}
    />
}

export default Sections