import { List } from '@List'
import UpdateText from './Update'

const headers = <>
    <th>Title</th>
    <th>Value</th>
</>

const row = (item) => {
    return <>
        <td>{item.title}</td>
        <td>{item.value}</td>
    </>
}

const Texts = () => {
    return <List
        title='Texts'
        entityType='StaticText'
        headers={headers}
        row={row}
        edit={UpdateText}
    />
}

export default Texts