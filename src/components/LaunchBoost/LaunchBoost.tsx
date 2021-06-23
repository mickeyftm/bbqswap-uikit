import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Timer from "../../components/Timer/Timer"
import { LaunchBoostDate } from './types';

const SettingsEntry = styled.div`
        display: flex;
        height:48px;
        align-items: center;
        justify-content: space-between;
        padding: 0 8px;
        `;

const LaunchBoost  :  React.FC<LaunchBoostDate> =({launchBoostDate})=> {



    const Rocket = (props: any) => {
        return (
            <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M8.4 14.809a.905.905 0 01-.129-.309h1.3a.905.905 0 01-.13.309c-.082.12-.226.256-.52.34-.294-.084-.438-.22-.52-.34zm1.298-.309s0 0 0 0h0zm-1.554 0h0s0 0 0 0z"
                    stroke="#930012"
                    strokeWidth={1.333}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.588 5.277c.5-1.5 2.124-3.187 2.905-3.937a.614.614 0 01.856 0c.781.75 2.405 2.437 2.905 3.937.255.765.23 1.869.083 3.002a2 2 0 011.917 1.998v2.754c0 .533-.593.85-1.036.555l-1.947-1.298c-.357.41-.889.655-1.464.655H8.03a1.935 1.935 0 01-1.461-.653l-1.944 1.296a.667.667 0 01-1.036-.555v-2.754a2 2 0 011.91-1.998c-.145-1.128-.168-2.23.09-3.002zM8.92 7.61a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z"
                    fill="#930012"
                />
            </svg>
        )
    }






    return <>
        <SettingsEntry>

            <div style={{
                background: "#FFE1E1",
                fontSize: 15,
                fontWeight: 800,
                marginLeft: 4,
                color: "#930012",


                padding: 8,
                borderRadius: 3
            }}>

                <Rocket style={{ verticalAlign: "middle" }} />


                    Launch Boost: {<Timer time={launchBoostDate}/>}




        </div>



        </SettingsEntry>



    </>
}


export default LaunchBoost;
