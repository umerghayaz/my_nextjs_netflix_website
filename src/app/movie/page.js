// import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css"

const page =async () => {
    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e6b9b85019mshc262744aa5a41eap1ae22ajsn49ab2e81105d',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data)
    return (
        <>
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series & Movie</h1>
                <div className={styles.card_section}>
                    {
                        main_data.map((curElem) => {
                            return <MovieCard key={curElem.id} {...curElem} />
                        })
                    }
                </div>
            </div>
        </section>
    </>
    );
};

export default page;