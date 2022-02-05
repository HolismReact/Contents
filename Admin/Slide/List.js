import { List, Text } from '@List'

const filters = <>
    <Text
        column=''
    />
</>

const Slides = () => {
    return <List
        title='Slides'
        entityType='Slide'
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        create={CreateSlide}
        hasDelete={true}
    />
}

export default Slides