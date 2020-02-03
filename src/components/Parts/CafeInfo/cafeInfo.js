/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './cafeInfo.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import CafeInfoCard from '../../SmallParts/CafeInfoCard/cafeInfoCard';

/**
* Images
*/

/**
* Utility
*/

import {
    H2,
    H3,
    H4,
    H5,
    EH1,
    EH2,
    EH4,
    EW1,
    Line1
} from '../../UtilityComponents';

/**
* Images
*/

import Image1 from '../../../images/grande-sanduiche-hamburguer-com-hamburguer-com-carne-picles-tomate-e-molho-tartaro-em-fundo-de-madeira_2829-599.jpg';
import Image2 from '../../../images/yellow-squash-pasta-caramelized-lemon-1706p105.jpg';
import Image3 from '../../../images/a019-jakubk-0516-coffee-espresso-wooden-desk2.jpg';

/**
* CafeInfo component definition and export
*/

export const CafeInfo = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="cafe-info">
           <div className="cafe-info-image">
                <img src={Image1}/>
            </div>
            <CafeInfoCard
                className="cafe-info-card-dark"
                header="EAT DIFFERENTLY"
                description="AVADA FOOD AT UNBEATABLE PRICES."
                paragraphs={[
                                'Aged single origin dark coffee ristretto qui caffeine, body half and half kopi-luwak affogato cultivar. Wings ut single origin, medium decaffeinated, skinny arabica carajillo macchiato con panna caffeine arabica. Cinnamon, irish mazagran espresso beans caramelization americano. Foam sugar, cream cappuccino id macchiato whipped con panna. Id irish dark, sweet single shot, sweet, strong breve lungo half and half body.',
                                'Body ut white, breve organic to go a arabica. Plunger pot single shot caramelization pumpkin spice aftertaste cultivar redeye foam frappuccino white. Barista, mug doppio single shot black shop white. Roast, mocha sweet breve cream single origin aromatic espresso. Crema, milk whipped, caramelization galão brewed shop est cinnamon cup cortado plunger pot.'
                            ]}
            />
            <CafeInfoCard
                className="cafe-info-card-light"
                header="FINEST INGREDIENTS"
                description="TENDEREST MEAT AND FRESHEST VEGETABLES."
                paragraphs={[
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum elementum consectetur. Nulla pharetra tristique urna ut suscipit. Curabitur sit amet dolor quis arcu scelerisque viverra eu ut lorem. Sed luctus, tellus volutpat tempor elementum, nisl elit sodales mi, et hendrerit dui diam eu est. Vestibulum ut efficitur nibh. Integer rhoncus nunc eu massa dignissim molestie.'
                            ]}
                options={[
                    'Pellentesque blandit eros vel dolor finibus mattis.',
                    'Nulla rhoncus hendrerit justo, a aliquam ex blandit quis.',
                    'Nam odio nisl, scelerisque sed lobortis id, lobortis at ante.',
                    'Aliquam varius et lacus vel varius.'
                ]}
            />
            <div className="cafe-info-image">
                <img src={Image2}/>
            </div>
            <div className="cafe-info-image">
                <img src={Image3}/>
            </div>
            <CafeInfoCard
                className="cafe-info-card-dark"
                header="DRINK WITH FRIENDS"
                description="COOL COCKTAILS AND EXOTIC BEERS."
                paragraphs={[
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum elementum consectetur. Nulla pharetra tristique urna ut suscipit. Curabitur sit amet dolor quis arcu scelerisque viverra eu ut lorem. Sed luctus, tellus volutpat tempor elementum, nisl elit sodales mi, et hendrerit dui diam eu est. Vestibulum ut efficitur nibh. Integer rhoncus nunc eu massa dignissim molestie.',
                                'Pellentesque blandit eros vel dolor finibus mattis. Nulla rhoncus hendrerit justo, a aliquam ex blandit quis. Nam odio nisl, scelerisque sed lobortis id, lobortis at ante. Aliquam varius et lacus vel varius. Vivamus efficitur nec massa a faucibus. Nam ut velit tortor. Suspendisse lacinia vehicula nisi, at gravida purus porta et. Cras tristique massa libero, nec mattis lacus. Cras tristique massa libero.'
                            ]}
            />
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(CafeInfo);
 