import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublished';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="card-columns">
            {
                heroes.map( hero => 
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                )
            }
        </div>
    )
}


