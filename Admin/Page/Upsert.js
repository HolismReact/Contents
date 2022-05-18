import { Form, Text, LongText, Slug } from '@Form'

const inputs = <>
    <Text
        column="Title"
        placehodler="Title"
        required="Title is not written"
    />
    <Slug />
    <LongText
        column="Summary"
        placehodler="Summary"
    />
</>

const UpsertPage = () => {
    return <Form
        entityType='BlogPost'
        inputs={inputs}
    />
}

export default UpsertPage