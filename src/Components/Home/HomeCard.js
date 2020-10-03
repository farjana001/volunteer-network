import React from 'react';
import { Card } from 'react-bootstrap';

const HomeCard = (props) => {
    const { title, img } = props.data;
    // console.log(props);
    return (
        <div className="col-md-3">
            <div className=" pb-3">
                <Card className='bg-primary text-white single-card'>
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