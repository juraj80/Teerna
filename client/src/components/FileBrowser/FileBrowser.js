import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'

import Moment from 'moment'

import FileBrowser from 'react-keyed-file-browser'



const FileBrowserComponent = () => {
    return ( 
        <Fragment>
            <div className="col-12 div-scale section-border">
                <div className="row justify-content-center" >  
                    <h4>File Browser</h4>                    
                </div>

                <FileBrowser files={[
                    {
                        key: 'cat.png',
                        modified: +Moment().subtract(1, 'hours'),
                        size: 1.5 * 1024 * 1024,
                    },
                    {
                        key: 'kitten.png',
                        modified: +Moment().subtract(3, 'days'),
                        size: 545 * 1024,
                    },
                    {
                        key: 'elephant.png',
                        modified: +Moment().subtract(3, 'days'),
                        size: 52 * 1024,
                    },
                ]}
                />    
            </div>
        </Fragment>
     );
}
 
export default FileBrowserComponent;
