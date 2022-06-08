import Link from "next/link"

const WhyZot = () => {
  return (
    <div>
      <h3>Features</h3>
      <ul>
        <li>
          Conforms to <Link  passHref href="https://github.com/opencontainers/distribution-spec"><a target="_blank" rel="noopener noreferrer">OCI distribution spec</a></Link>
        </li>
        <li>
          Clear separation between core dist-spec and zot-specific extensions
        </li>
        <li>
          Uses <Link passHref href="https://github.com/opencontainers/image-spec/blob/main/image-layout.md">
            <a  target="_blank" rel="noopener noreferrer">OCI image layout</a>
            </Link> for image storage
        </li>
        <li>
          Supports container image signatures - &nbsp;
          <Link passHref href="https://github.com/sigstore/cosign">
            <a  target="_blank" rel="noopener noreferrer">cosign</a>
            </Link> and &nbsp;
            <Link passHref href="https://github.com/notaryproject/notation">
              <a target="_blank" rel="noopener noreferrer">notation</a>
            </Link>
        </li>
        <li>
          And more, read the <Link href="/">Documentation</Link> for a full list of features.
        </li>
      </ul>
    </div>
  )
}


export default WhyZot