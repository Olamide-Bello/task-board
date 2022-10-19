import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

function Header(){
   return (<div className="header">
        <h1 className="brand">Task Board <FontAwesomeIcon icon={faClipboardCheck}/></h1>
        <p><em>let's help you reach your goal by organizing your tasks</em></p>
    </div>)
}
export default Header