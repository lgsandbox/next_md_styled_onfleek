import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
