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
                    {/* eslint-disable-next-line */}
                    <a href="#" className="subheader">By Launch Date</a>
                    <ul>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('lastweek')) }}>Last Week</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('lastmonth')) }}>Last Month</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('lastyear')) }}>Last Year</a></li>
                    </ul>
                </li>
                <li>
                    <div className="divider" />
                </li>
                <li>
                    {/* eslint-disable-next-line */}
                    <a className="subheader">By Launch Status</a>
                    <ul>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('failure')) }}>Failure</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('success')) }}>Success</a></li>
                    </ul>
                </li>
                <li>
                    <div className="divider" />
                </li>
                <li>
                    {/* eslint-disable-next-line */}
                    <a className="subheader">Is It Upcoming?</a>
                    <ul>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('yes')) }}>Yes</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('no')) }}>No</a></li>
                    </ul>
                </li>
                <li>
                    <div className="divider" />
                </li>
                <li>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="waves-effect" onClick={(event) => { event.preventDefault(); dispatch(setFilterBy('')) }}>Clear Filter</a>
                </li>
            </ul>

        </div>
    );
}

export default SideNav;