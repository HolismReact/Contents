import { List } from '@List'

const headers = <>
    <th>Title</th>
</>

const row = (item) => {
    return <>
        <td>{item.title}</td>
    </>
}

const Images = () => {
    return <List
        title='Images'
        entityType='StaticImage'
        headers={headers}
        row={row}
    />
}

export default Images