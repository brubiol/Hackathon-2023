import Nav from "./Nav";

import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { account } from "../appwrite/appwriteConfig";

let userRank = [{ rank: 5, name: "Marie", likes: 45, calories: 35}, { rank: 2, name: "john", likes: 21, calories: 15 }, {rank: 3, name: "pearl", likes: 61, calories:10}];


const Board = () => {

    const avatar = (seedValue) => {
        return createAvatar(lorelei, {
           // size: 128,
            seed: seedValue
        }).toDataUriSync();
    }

    /*const sortAsc = () => {
        return 
    }*/

    
    const navigate = useNavigate();
    const [UserDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const getData = account.get();
        getData.then (
            function (response) {
                setUserDetails(response)
            },
            function (error) {
                navigate("/login")
            }
        )
    }, [])
    

  

    return (
        <div>
            <Nav></Nav>
            <div className="bg-accent text-center p-2.5">
                <h1 className="normal-case text-xl font-bold">Leaderboard</h1>
            </div>
            {userRank.map((user, index) => (
                <div className="flex justify-center">

                    <div className="stats shadow m-5">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-value text-primary" >{user.rank}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">

                                    <div className="w-16 rounded-full">

                                        <img src={avatar(user.name)} />

                                    </div>

                            </div>

                            <div className="stat-title">{user.name}</div>

                        </div>

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">{user.likes}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Calories Burned</div>
                            <div className="stat-value text-secondary">{user.calories}</div>
                        </div>


                    </div>

                </div>
            
            ))}
        </div>
    );
}

export default Board;