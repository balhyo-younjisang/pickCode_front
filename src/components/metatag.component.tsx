import { Helmet } from "react-helmet-async"

type MetaTagProps = {
    title?: string
    description?: string
    keywords?: string
}

const MetaTag = (props: MetaTagProps) => {
    return <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} data-react-helmet="true" />
        <meta name="keywords" content={props.keywords} data-react-helmet="true" />
    </Helmet>
}

export default MetaTag;