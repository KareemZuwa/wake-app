import OffBtn from "./OffBtn"
import SnoozeBtn from "./SnoozeBtn"
import Nav from "./Nav"

const AlarmPage = () => {
    return ( 
        <section className="alarm-section">
            <article className="alarm-img"></article>
            <OffBtn />
            <SnoozeBtn />
        </section>
     );
}
 
export default AlarmPage;