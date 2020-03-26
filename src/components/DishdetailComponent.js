import React from 'react';
import {Card, CardImg, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';


    function RenderDish({dish}) {
            if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} />
                            <CardTitle>{dish.name}</CardTitle>
                            <p>{dish.description}</p>
                        </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
      }

    function RenderComments({comments}){
        if(comments!=null){
            return comments.map((com) => (
                <div>
                <p>{com.comment}</p> 
                <p>-- {com.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric',month: 'short',day: '2-digit' }).format(new Date(Date.parse(com.date))) }</p>
                </div>
                
            )
        );
        }
        else{
            return(<div></div>)
        }
    }

    const DishDetail = (props) => {
        // const dish=props.dish;
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu' >Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <div className="col-12 col-md-5">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }




export default DishDetail;