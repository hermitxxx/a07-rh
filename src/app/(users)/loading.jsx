import React from 'react';
import { DNA } from 'react-loader-spinner';

const loading = () => {
    return (
        <div className='min-h-[calc(100vh-15rem)] flex items-center justify-center'>
            <DNA
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default loading;