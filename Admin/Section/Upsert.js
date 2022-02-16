import { Form, Text } from '@Form'

const inputs = <>
    <Text
        column="Title"
        placeholder="Title"
    />
</>

const UpsrtSection = () => {
    return <Form
        entityType='Section'
        inputs={inputs}
    />
}

export default UpsrtSection