import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { RootState } from '../../store/store';
import "materialize-css/dist/css/materialize.min.css";

const Contents = () => {

    const spaceXData = useSelector((state: RootState) => state.spaceX.data);
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
    const [dataToShow, setDataToShow] = useState<any[]>([]);
    const filterBy = useSelector((state: RootState) => state.search.filterBy);

    const sortData = (a: any, b: any) => b.launch_year - a.launch_year;

    useEffect(() => {
        setDataToShow(spaceXData.slice().sort((a, b) => b.launch_year - a.launch_year));
    }, [spaceXData]);

    useEffect(() => {
        let sortedSapcexData = [...spaceXData];
        setDataToShow(sortedSapcexData.filter((data) => data.rocket.rocket_name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0).slice().sort(sortData));
    }, [searchTerm, spaceXData]);

    useEffect(() => {
        let sortedSapcexData = [...spaceXData];
        if (!filterBy) {
            setDataToShow(sortedSapcexData.filter((data) => data.rocket.rocket_name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0).slice().sort(sortData));
        }
        if (filterBy === 'failure') {
            setDataToShow(sortedSapcexData.filter((data) => !data.launch_success).slice().sort(sortData));
        }
        if (filterBy === 'success') {
            setDataToShow(sortedSapcexData.filter((data) => data.launch_success).slice().sort(sortData));
        }
        if (filterBy === 'no') {
            setDataToShow(sortedSapcexData.filter((data) => !data.upcoming).slice().sort(sortData));
        }
        if (filterBy === 'yes') {
            setDataToShow(sortedSapcexData.filter((data) => data.upcoming).slice().sort(sortData));
        }
        if (filterBy === 'lastweek') {
            let startDate = new Date();
            let endDate = new Date();
            startDate.setDate(startDate.getDate() - 7);
            setDataToShow(sortedSapcexData.filter((data) => {
                let launchDate = new Date(data.launch_date_local);
                return (launchDate.getTime() <= endDate.getTime() && launchDate.getTime() >= startDate.getTime())
            }).slice().sort((a, b) => b.launch_year - a.launch_year));
        }
        if (filterBy === 'lastmonth') {
            let startDate = new Date();
            let endDate = new Date();
            startDate.setDate(startDate.getDate() - 30);
            setDataToShow(sortedSapcexData.filter((data) => {
                let launchDate = new Date(data.launch_date_local);
                return (launchDate.getTime() <= endDate.getTime() && launchDate.getTime() >= startDate.getTime())
            }).slice().sort((a, b) => b.launch_year - a.launch_year));
        }
        if (filterBy === 'lastyear') {
            let startDate = new Date();
            let endDate = new Date();
            startDate.setDate(startDate.getDate() - 365);
            setDataToShow(sortedSapcexData.filter((data) => {
                let launchDate = new Date(data.launch_date_local);
                return (launchDate.getTime() <= endDate.getTime() && launchDate.getTime() >= startDate.getTime())
            }).slice().sort((a, b) => b.launch_year - a.launch_year));
        }
    }, [filterBy, spaceXData]);

    return (
        <div className="row">
            {dataToShow.map((data) => <Card data={data} key={data.mission_name} />)}
        </div>
    );
}

export default Contents;