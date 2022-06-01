import Avatar from "./avatar";


export default function Bio({ author }) {
    return (
      <>
        <div>
            <Avatar name={author.name} picture={author.picture} />
        </div>
      </>
    )
  }
  