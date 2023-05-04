import { FacebookProvider, EmbeddedPost } from "react-facebook";


const Socials = (props) => {
  return (
    <>
      <FacebookProvider appId="791619622137531">
        <EmbeddedPost href={`${props.link}`} />
      </FacebookProvider>
    </>
  );
};

export default Socials;
