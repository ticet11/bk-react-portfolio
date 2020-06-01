import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faYinYang,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faSignOutAlt, faTrash, faEdit, faYinYang);
};

export default Icons;
