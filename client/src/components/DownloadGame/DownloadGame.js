import React, { Fragment } from 'react';

const DownloadGame = () => {
    return ( 
        <Fragment>
            <div className="col-12">
                <form method="GET" action="http://localhost:5000/download">
                    <input
                        type='submit'
                        value='Download Game'
                        className='btn btn-success btn-block mt-4'
                    />
                </form>
            </div>
        </Fragment>
     );
}
 
export default DownloadGame;