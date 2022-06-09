import Link from "next/link"

const Ecosystem = () => {
  return (
    <div>
      <h3>Skopeo</h3>
      <ul>
        <li>
        <Link passHref href="https://github.com/containers/skopeo">
            <a  target="_blank" rel="noopener noreferrer">skopeo</a>
            </Link> is a tool to work with remote image repositories
        </li>
      </ul>
      <h3>cri-o</h3>
      <ul>
        <li>
        <Link passHref href="https://github.com/cri-o/cri-o">
            <a  target="_blank" rel="noopener noreferrer">cri-o</a>
            </Link> is a OCI-based Kubernetes container runtime interface.
        </li>
        <li>Works with &quot;docker://&quot; transport which is the default.</li>
      </ul>
    </div>
  )
}


export default Ecosystem