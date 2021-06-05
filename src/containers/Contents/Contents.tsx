import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { RootState } from '../../store/store';

const Contents = () => {

    const spaceXData = useSelector((state: RootState) => state.spaceX.data);
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
    const [dataToShow, setDataToShow] = useState<any[]>([]);

    useEffect(() => {
        setDataToShow(spaceXData.slice().sort((a, b) => b.launch_year - a.launch_year));
    }, [spaceXData]);

    useEffect(() => {
        let sortedSapcexData = [...spaceXData];
        setDataToShow(sortedSapcexData.filter((data) => data.mission_name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0).slice().sort((a, b) => b.launch_year - a.launch_year));
    }, [searchTerm, spaceXData]);


    return (
        <div className="row">
            {dataToShow.map((data) => <Card data={data} key={data.mission_name} />)}
        </div>
    );
}

export default Contents;