import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCertificate } from "@fortawesome/free-solid-svg-icons"
function Footer() {


    return (
        <footer className="bg-PhthaloGreen h-16 flex flex-row">
            <FontAwesomeIcon icon={faCertificate} />
        </footer>
    )
}

export default Footer