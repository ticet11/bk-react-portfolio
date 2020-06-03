import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faYinYang,
    faPaperPlane,
    faMobileAlt,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faSignOutAlt,
        faTrash,
        faEdit,
        faYinYang,
        faPaperPlane,
        faMobileAlt,
        faMapMarkedAlt,
        fab
    );
};

export default Icons;
