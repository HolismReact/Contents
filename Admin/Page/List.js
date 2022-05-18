import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { List, Text, Enum, ItemAction, Image, BooleanProperty, ValueWithTitle, TitleSubtitle, app } from '@List'
import UpsertPage from './Upsert'

const filters = <>
    <Text
        column='Title'
        placehodler='Title'
    />
    <Enum
        column='StateId'
        placeholder='State'
        entityType='BlogState'
    />
</>

const headers = <>
    <th></th>
    <th>Title</th>
    <th>Comments enabled?</th>
</>

 const row = (item) => <>
        <td>
            <Image
                url={item.relatedItems.imageUrl}
                uploadUrl={`/blogPost/setImage?postId=${item.id}`}
            />
        </td>
        <td>
            <a target='_blank' href={`${app.env('BLOG_URL')}/${item.slug}`}>
                <TitleSubtitle
                    title={<ValueWithTitle
                        value={item.title}
                        title={item.summary}
                    />}
                    subtitle={item.slug}
                />
            </a>
        </td>
        <td>
            <BooleanProperty
                column='acceptsComment'
                value={item.acceptsComment}
                actionUrl={`/blogPost/toggleCommentAcceptance/${item.id}`}
            />
        </td>
 </>

const itemActions = (item) => <>
    <ItemAction
        title='Manage SEO'
        icon={FindInPageIcon}
        goTo={`/entityParameter?entityType=blogPost&entityGuid=${item.guid}`}
    />
    <ItemAction
        title='Edit content'
        icon={TextSnippetIcon}
        goTo={`/post/editContent?id=${item.id}`}
    />
</>
 const Pages = () => {
     return <List
        title="Pages"
        entityType="Page"
        filters={filters}
        headers={headers}
        row={row}
        create={UpsertPage}
        hasEdit={true}
        hasDelete={true}
        itemActions={itemActions}
     />
 }

 export default Pages