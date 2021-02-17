import React, { Fragment } from 'react';

const DeleteGame = () => {
    return ( 
        <Fragment>
            <div className="col-12">
                <form method="POST" action="http://localhost:5000/delete">
                    <input
                        type='submit'
                        value='Delete Game'
                        className='btn btn-danger btn-block mt-4'
                    />
                </form>
            </div>
        </Fragment>
     );
}
 
export default DeleteGame;