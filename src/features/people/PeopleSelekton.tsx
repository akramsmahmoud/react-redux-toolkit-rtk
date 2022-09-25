import ContentLoader from 'react-content-loader'

const Loader = () => (
    <ContentLoader
        speed={2}
        width={300}
        height={330}
        viewBox="0 0 330 330"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
    >
        <rect x="50" y="11" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="11" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="60" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="60" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="109" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="109" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="158" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="158" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="207" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="207" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="256" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="256" rx="4" ry="4" width="35" height="38" />
    </ContentLoader>
)

export default Loader;