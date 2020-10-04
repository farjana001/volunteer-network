import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const HomeCard = (props) => {
    const { title, img } = props.data;
    // console.log(props);
    const history = useHistory();
    const handleCardItem = () => {
        history.push('/login')
    }

    return (
        <div className="col-md-3">
            <div className=" pb-3">
                <Card onClick={handleCardItem} className='bg-primary text-white single-card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomeCard;