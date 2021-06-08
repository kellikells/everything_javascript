export default function Layout(props) {
    return (
        <div className='page-layout'>
            {props.children}
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                }
            `}</style>
        </div>
    );
}


const FullHeightPage = () => (
    <div>
        Hello World!
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
    </div>
)