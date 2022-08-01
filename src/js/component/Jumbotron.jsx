import React from "react";
import './../../styles/jumbotron.css'

const Jumbotron  = () => {

    return (
        <div>
            <div className="container">
                <div className="jumbotron bg-light m-2 p-4">
                    <h1 className="display-4">A Warm Welcome!</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil, illum illo voluptate laborum explicabo consequatur. Illum, molestias voluptatum quia fuga sequi dignissimos? Sequi possimus consectetur perferendis cupiditate quam natus?</p>
                    <p className="lead mx-2">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;