import { useDispatch } from "react-redux";
import { setFilterBy } from '../../store/slices/searchSlice';

const SideNav = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <ul id="slide-out" className="sidenav">
                <li />
                <li>
                    <blockquote className="purple lighten-5">
                        <i className="material-icons">find_in_page</i>
                        Let's filter the data
                    </blockquote>
                </li>
                <li>
                    <div className="divider" />
                </li>
                <li>
                    <a className="subheader">By Launch Date</a>
                    <ul>
                        <li><a href="" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('lastweek')) }}>Last Week</a></li>
                        <li><a href="" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('lastmonth')) }}>Last Month</a></li>
                        <li><a href="" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('lastyear')) }}>Last Year</a></li>
                    </ul>
                </li>
                <li>
                    <div className="divider" />
                </li>
                <li>
                    <a className="subheader">By Launch Status</a>
                    <ul>
                        <li><a href="" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('failure')) }}>Failure</a></li>
                        <li><a href="" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('success')) }}>Success</a></li>
                    </ul>
                </li>
                <li>
                    <div className="divider" />
                </li>
                <li>
                    <a className="subheader">Is It Upcoming?</a>
                    <ul>
                        <li><a href="" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('yes')) }}>Yes</a></li>
                        <li><a href="" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('no')) }}>No</a></li>
                    </ul>
                </li>
                <li>
                    <div className="divider" />
                </li>
                <li>
                    <a className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('')) }}>Clear Filter</a>
                </li>
            </ul>

        </div>
    );
}

export default SideNav;