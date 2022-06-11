import React, { useState, useEffect } from 'react';

const RateTable = ({rates}) => {

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr className="text-center">
                        <th></th>
                        <th className="text-md lg:text-lg">Regular</th>
                        <th className="text-md lg:text-lg">Seniors &amp; Juniors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover text-center">
                        <th >9 Holes Walking</th>
                        <th>{rates.nineWalkReg}</th>
                        <th>{rates.nineWalkSenior}</th>
                    </tr>
                    <tr className="hover text-center">
                        <th >9 Holes with Cart</th>
                        <th>{rates.nineCartReg}</th>
                        <th>{rates.nineCartSenior}</th>
                    </tr>
                    <tr className="hover text-center">
                        <th >18 Holes Walking</th>
                        <th>{rates.eighteenWalkReg}</th>
                        <th>{rates.eighteenWalkSenior}</th>
                    </tr>
                    <tr className="hover text-center">
                        <th >18 Holes with Cart</th>
                        <th>{rates.eighteenCartReg}</th>
                        <th>{rates.eighteenCartSenior}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default RateTable
