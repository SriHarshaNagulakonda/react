import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';



class DishDetail extends Component{

    constructor(props){
        super(props);
        
    }

    renderComments(comments){
        //return(
        //<h1>{comments[0].comment}</h1>
        //);
        if(comments!=null){
            return comments.map((com) => (
                <div>
                <p>{com.comment}</p> 
                <p>-- {com.author}, {com.date}</p>
                </div>
                
            )
        );
        }
        else{
            return(<div></div>)
        }
    }

    render(){
        const dish=this.props.dishes;
        return(
            <div className="row">
                <div className="col-12 col-md-5">
                    <Card>
                        <CardImg width="100%" src={dish.image} />
                        <CardTitle>{dish.name}</CardTitle>
                        <p>{dish.description}</p>
                    </Card>
                </div>
                <div className="col-12 col-md-5">
                    <h4>Comments</h4>
                    {this.renderComments(dish.comments)}
                </div>
            </div>

        );
    }

}


export default DishDetail;